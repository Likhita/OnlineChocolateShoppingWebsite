#!/usr/bin/perl 
#	Sample perl cgi script.  This script inserts new data
#       into the jadrn000 database on opatija.
#	CS645 Spring 2012
#	Code by Alan Riggins
#
   
use DBI;
use CGI;
use DateTime;

my $q = new CGI;

my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn052";
my $username = "jadrn052";
my $password = "stopper";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

print <<EOC;
Content-type:  text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Bertha's Deluxe Chocolates</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />

	<script type="text/javascript" src="/jquery/jquery.js"></script>
        
    <script type="text/javascript" src="ajax_get_lib.js"></script>    
    <script type="text/javascript" src="m_dialog.js"></script>
	<script type="text/javascript" src="order_form.js"></script>
	<script type="text/javascript" src="/~jadrn052/proj4/jquery-ui-1.9.2.custom/js/jquery-1.8.3.js"></script>  
    <script type="text/javascript" src="/~jadrn052/proj4/jquery-ui-1.9.2.custom/js/jquery-ui-1.9.2.custom.min.js"></script>  
											
    <link rel="stylesheet" type="text/css" href="/~jadrn052/proj4/jquery-ui-1.9.2.custom/css/custom-theme/jquery-ui-1.9.2.custom.min.css" />    
    <link rel="stylesheet" type="text/css" href="/~jadrn052/proj4/m_dialog.css" />  	
	<link rel="stylesheet" type="text/css" href="/~jadrn052/proj4/proj4.css" />
	<link href='http://fonts.googleapis.com/css?family=Headland+One|Oxygen+Mono|Griffy|Jacques+Francois+Shadow' rel='stylesheet' type='text/css'/>

</head>

<body class="ui-widget-content">
	<div class="ui-widget-header">
		<h1>Bertha's Deluxe Chocolates</h1><br /><br /><br />
		
	</div> 
	
<div>
	<div id="menus">
			<ul>
				<li><a href="proj4.html">Home</a></li>
				<li><a href="products.html">Products</a></li>
				<li><a href="order.html">Order Online</a></li>
				<li><a href="about.html">About us</a></li>
				<li><a href="contact.html">Contact us</a></li>
			</ul>
	</div> 
	<div id="order">
	<p> Thank you for ordering!</p>
	</div>
<body>
EOC
#### Parameters
my $dt = DateTime->now;
my $date="\'".$dt->date."\'";
my @names = $q->param;
my $countitem=1;
my $statement;
foreach $name ( @names ) {
    if (  $countitem >25) { 
        print "<p> ".$name."\t=\t".$q->param($name) . "</p>\n";
		my $sku="\'".$name."\'";
		my $quantity="\'".$q->param($name)."\'";
		$statement = "INSERT INTO orders VALUES($date,$sku,$quantity);";
		print "The SQL statement is:\n";
		print "$statement\n";
		my $count = $dbh->do($statement);
		print "<h1>Result of Insertion</h1>\n";
		if($count == 1) {
			print "SUCCESS, the number of rows affected is $count\n";
			}
		else {
			print "ERROR: ".$dbh->errstr()."<br />\n";
			print "ERROR: ".$dbh->state()."\n";    
			}
    }
	$countitem++;
}
print "</body></html>";

$dbh->disconnect();

    	



