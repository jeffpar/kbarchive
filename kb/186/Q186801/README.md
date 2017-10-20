---
layout: page
title: "Q186801: PERL Scripts Do Not Run"
permalink: /kb/186/Q186801/
---

## Q186801: PERL Scripts Do Not Run

{% raw %}

	Article: Q186801
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PERL scripts do not run.
	
	In addition, the following are additional error messages and symptoms that have
	been related to PERL not being installed or set up properly:
	
	  The server failed to load application:
	
	  PERL scripts in SSL cause Inetinfo.exe to fail, causing an access violation.
	
	  During installation of PERL: "Could not find path"
	
	
	WORKAROUND
	==========
	
	Use Up-To-Date Version of PERL That Automatically Configures IIS
	----------------------------------------------------------------
	
	NOTE: A version of PERL that some Internet Information Server (IIS) users use is
	provided by ActiveState. For more information, visit
	http://www.activestate.com/. As of May 1998, the most recent build of
	ActiveState's PERL version 5.0 was 316 (5.003_16), which is self- configuring.
	
	
	Install the latest version and build of PERL for Win32 (core of PERL) and the
	matching version and build of PERL for ISAPI (IIS extension). Note that if these
	version and build numbers do not match, PERL will not run.
	
	These downloaded files should be self-extracting executable (.exe) files for the
	Intel platform. When you run these .exe files, accept most or all of the default
	settings.
	
	If IIS 4.0 is already installed, and its default settings have not been changed,
	PERL should run properly. If the defaults have been changed, see below for more
	information.
	
	If IIS 4.0 Default Settings Have Been Changed
	---------------------------------------------
	
	If some of the IIS 4.0 default settings have been changed, first install PERL (as
	described in the previous section of this article), and then perform the
	following steps:
	
	1. Make sure that the Web site containing the PERL scripts has an application
	  set up. To do this, perform the following steps:
	
	  a. In the Internet Service Manager (ISM), right-click the directory that is
	     the application starting point, and then click Properties.
	
	  b. Click the Home Directory, Virtual Directory, or Directory tab.
	
	  c. Under Application Settings, verify that the Name text box is not dimmed,
	     and that it contains a name.
	
	  d. If the dialog box is dimmed, click Create to create an application, and
	     then give the application a name (the default name is "Default
	     Application").
	
	  e. Under Permissions, verify that "Execute (including script)" is selected.
	
	  For more information about setting up applications, open the following in the
	  online Product Documentation's table of contents:
	
	   - Microsoft Internet Information Server
	
	   - Server Administration
	
	   - Configuring Applications
	
	2. Verify that application mapping for .pl files is set up. To do this, perform
	  the following steps:
	
	  a. In the ISM, under Internet Information Server, right-click the computer
	     name, and then click Properties.
	
	  b. In the Master Properties drop-down list box, select WWW Service and then
	     click Edit.
	
	  c. Select the Home Directory tab, and then click Configuration.
	
	  d. On the App Mappings tab, an entry similar to the following should be
	     listed (this entry varies depending on the actual location of PerlIS.dll
	     on the computer):
	
	           .pl   C:\Perl\bin\PerlIS.dll
	     
	
	  e. If the application mapping has not been set up (as described in the
	     preceding step), click Add, and then create a new mapping, using the
	     following information (substituting the correct path on your computer for
	     "<path>"):
	
	        Executable: <path>\perlis.dll
	        Extension: .pl
	        Script Engine: Checked
	        Click OK.
	    
	
	3. Verify that the file and directory permissions are set correctly in the
	  computer's Access Control List (ACL). For anonymous access, the
	  IUSR_<computername> and IWAM_<computername> user accounts must
	  have at least Read permission (RX). When using other types of password
	  authentication, the permissions needed may vary.
	
	MORE INFORMATION
	================
	
	To test if PERL is installed properly, perform the following steps:
	
	1. Type the following lines of code in a text editor such as Notepad:
	
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
	
	2. Save the file to the Web site, using the file name Helloworld.pl.
	
	3. Browse Helloworld.pl on the Web site:
	
	  http://<computer_name>/<path>/Helloworld.pl
	
	
	STATUS
	======
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
