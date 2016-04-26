#!/usr/bin/perl 
#	Sample perl cgi script.  This script prints a list of the 
#	orders in the opatija jadrn052.orders table.
#
#	CS545 Fall 2012
#	Code by Likhita gonchikara
#


use DBI;   
use CGI;
 
my $q = new CGI; 
my $user=$q->param('username');   
my $password=$q->param('password'); 
if (($user eq 'cs545') && ($password eq 'fall2012')) {
print <<END_HTML;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Report page</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/~jadrn052/proj4/login.css" />
	
</head>
<body><div>
<h1>Bertha's Deluxe Candies</h1>

<fieldset>
<table>
END_HTML


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn052";
my $username = "jadrn052";
my $password = "stopper";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my $sth = $dbh->prepare("SELECT today,sku,quantity FROM orders");
$sth->execute();
print "<tr><th>Date</th><th>SKU</th><th>Quantity</th></tr>";
while(my @row=$sth->fetchrow_array()) {
    print "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td></tr>\n";
    }
	
$sth->finish();
$dbh->disconnect();

print "</table>\n";
print "</fieldset>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
	
}

else{
print <<END_HTML;
Content-type: text/html

<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Report page</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="/~jadrn052/proj4/login.css" />
	
</head>
<body><div>
<h1>Bertha's Deluxe Candies</h1>

END_HTML
print "<p>You are not authorized to view this report page</p>\n";
print "<a href=http://jadran.sdsu.edu/~jadrn052/proj4/report.html>Login Here</a>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";

}
