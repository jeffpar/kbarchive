---
layout: page
title: "Q186803: Browsing Folders with Script-Mapped Extensions Returns Errors"
permalink: /kb/186/Q186803/
---

## Q186803: Browsing Folders with Script-Mapped Extensions Returns Errors

{% raw %}

	Article: Q186803
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to browse folders with extensions that are script-mapped, one of the
	following errors occurs:
	
	- HTTP 404
	
	- HTTP 403
	
	- Source code is returned to the browser.
	
	- Other script/server errors are returned to the browser.
	
	CAUSE
	=====
	
	In general, it is bad practice to name a folder using an extension that is
	MIME-mapped, but this holds especially true for scripted extensions. This is
	because it is common to pass information to a Web script that will be included
	as part of the PATH_INFO environment variable.
	
	For example, a CGI program at the URL http://localhost/foo.cgi/default.htm
	receives "/foo.cgi/default.htm" in PATH_INFO.
	
	WORKAROUND
	==========
	
	To work around this problem, name Web folders without extensions, or use
	extensions that are not script-mapped.
	
	MORE INFORMATION
	================
	
	On a system with a CGI-based Practical Extraction and Report Language (Perl)
	interpreter, save the following Perl script as "env.cgi" in your default
	"/scripts" folder.
	
	     print "Content-type: text/plain\n\n";
	     print "<html>\n";
	     print "<body>\n";
	     print "<pre>\n";
	     print "CONTENT_LENGTH:  ",$ENV{'CONTENT_LENGTH'},"\n";
	     print "PATH_INFO:       ",$ENV{'PATH_INFO'},"\n";
	     print "PATH_TRANSLATED: ",$ENV{'PATH_TRANSLATED'},"\n";
	     print "QUERY_STRING:    ",$ENV{'QUERY_STRING'},"\n";
	     print "REMOTE_ADDR:     ",$ENV{'REMOTE_ADDR'},"\n";
	     print "REMOTE_HOST:     ",$ENV{'REMOTE_HOST'},"\n";
	     print "REMOTE_USER:     ",$ENV{'REMOTE_USER'},"\n";
	     print "REQUEST_METHOD:  ",$ENV{'REQUEST_METHOD'},"\n";
	     print "SCRIPT_NAME:     ",$ENV{'SCRIPT_NAME'},"\n";
	     print "SERVER_NAME:     ",$ENV{'SERVER_NAME'},"\n";
	     print "SERVER_PORT:     ",$ENV{'SERVER_PORT'},"\n";
	     print "SERVER_PROTOCOL: ",$ENV{'SERVER_PROTOCOL'},"\n";
	     print "SERVER_SOFTWARE: ",$ENV{'SERVER_SOFTWARE'},"\n";
	     print "</pre>\n";
	     print "</body>\n";
	     print "</html>\n";
	
	When you browse to http://localhost/scripts/env.cgi/test.htm, you see the
	PATH_INFO environment variable reflect the information passed to the script as
	"/env.cgi/test.htm".
	
	Additional query words: mapp kbDotCom
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
