---
layout: page
title: "Q158732: Perl Script is Downloaded When Using Netscape 3.0"
permalink: /kb/158/Q158732/
---

## Q158732: Perl Script is Downloaded When Using Netscape 3.0

	Article: Q158732
	Product(s): Internet Information Server
	Version(s): 1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use browsers that have a mime mapping for .pl or .cgi file the browser
	may try to download the script rather than executing it.
	
	CAUSE
	=====
	
	When the following header information is not present as the first line of a CGI
	script, a browser with a mime mapping for the file type may try to download the
	script rather than execute it:
	
	     print "HTTP/1.0 200 OK\n";
	
	
	RESOLUTION
	==========
	
	Make sure your CGI scripts return the following as the first line of the CGI
	header response:
	
	  print "HTTP/1.0 200 OK\n";
	
	Additional query words: iis cgi script download
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis200 kbiis100
	Version           : :1.0,2.0
	Hardware          : ALPHA x86
	
	=============================================================================
	
