---
layout: page
title: "Q150629: Configuring and Testing a PERL Script with IIS"
permalink: /kb/150/Q150629/
---

## Q150629: Configuring and Testing a PERL Script with IIS

	Article: Q150629
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The following PERL script can be used to test for the proper installation and
	execution of CGI scripts with Internet Information server.
	
	MORE INFORMATION
	================
	
	Create a file with Notepad, and type the following lines of code. Save the file
	in the scripts directory as Helloworld.pl.
	
	  print "HTTP/1.0 200 OK\n";
	  print "Content-Type: text/html\n\n";
	
	  print "<HTML>\n";
	  print "<HEAD>\n";
	  print "<TITLE>Hello World</TITLE>\n";
	  print "</HEAD>\n";
	  print "<BODY>\n";
	  print "<H4>Hello World</H4>\n";
	  print "<P>\n";
	  print "Your IP Address is $ENV{REMOTE_ADDR}.\n";
	  print "<P>";
	  print "<H5>Have a nice day</H5>\n";
	  print "</BODY>\n";
	  print "</HTML>\n";
	
	Once you have created the file, you need to configure PERL to run securely with
	Internet Information. Perl.exe should not be located in any of the directories
	accessible by a user with a browser.
	
	With a script mapping in the registry, you can place the Perl.exe outside of the
	normal directory structure a user has access to.
	
	To configure PERL script mapping
	--------------------------------
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Start Regedt32.exe and open the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC
	  \Parameters\ScriptMap
	
	2. Click Add Value from the Edit menu.
	
	3. The Value Name is .pl
	
	4. The Data type is REG_SZ.
	
	5. The String value is <the full path to perl.exe>\perl.exe %s %s
	
	  NOTE: The "%s %s" is case sensitive. (e.g. "%S %S" will not work).
	
	6. Restart the WWW service.
	
	Now that the registry has been configured, you can test the PERL script with your
	browser. Using the defaults directory structure with IIS, the URL would be the
	following:
	
	  http://<Server Name>/scripts/helloworld.pl?
	
	Additional query words: CGI PERL
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis300 kbiis200 kbiis100
	Version           : :1.0,2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
