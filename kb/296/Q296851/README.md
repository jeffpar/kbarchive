---
layout: page
title: "Q296851: PRB: Error &quot;User Password/Validation Failed&quot;"
permalink: /kb/296/Q296851/
---

## Q296851: PRB: Error &quot;User Password/Validation Failed&quot;

{% raw %}

	Article: Q296851
	Product(s): Internet Information Server
	Version(s): 1.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbCOMPlus kbConfig kbVisID600 kbWebServer kbGrpDSASP kbDSupport kberror kbiis5
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM+, version 1.0 
	- Microsoft Internet Information Server 5.0 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you configure a Web application to run in High (Isolated) protection mode
	(out-of-process from Internet Information Server) in the Internet Services
	Manager (ISM) console, the application is disabled, and you receive the
	following error message:
	
	  User Password/Validation failed
	
	This means that the application does not serve Active Server Pages (ASP) pages,
	it appears as a yellow folder in the ISM console, and the Create button in the
	application properties is enabled.
	
	In a related but slightly different scenario, you may already have an application
	set to High (Isolated) protection, and then someone changes the password for the
	IWAM_<ServerName> account without following the synchronization steps in
	this article. When this occurs, your application is disabled, but you do not
	receive an error message. HTML pages in your application continue to work as
	expected; however, when you try to browse to ASP pages in the application, you
	receive the following error message in the browser:
	
	  Server Application Error. The server has encountered an error while loading
	  an application during the processing of your request. Please refer to the
	  event log for more detail information. Please contact the server
	  administrator for assistance.
	
	CAUSE
	=====
	
	This behavior is by design. When you run an Internet Information Server (IIS)
	5.0 application in High (Isolated) mode, a COM+ application package is
	automatically created for the application in the Component Services Manager
	(CSM) console. By default, this package runs your application's process under
	the IWAM_<ServerName> user account. The error occurs because the IWAM
	account is not synchronized. The password that is specified for the IWAM account
	(or whatever account the user specifies) in the metabase (the IIS 5.0 registry)
	is different from the Windows password that is set for the same account in the
	Local Users and Groups Manager (UGM) console.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Use a GET command to determine what account is used for the Web Application
	  Manager (WAM) in the metabase. If your Windows computer name is WebServer1,
	  at a command prompt, browse to the Adminscripts folder, and type the
	  following command:
	
	  "inetpub\adminscripts>adsutil GET w3svc/WAMUserName" (without the
	  quotation marks)
	
	  This returns the WAM user account name in the following format:
	
	  
	
	  WAMUserName                    : (String) "IWAM_WebServer1"
	
	2. Reset the password for this account in the UGM console as follows:
	
	  a. On the Start menu, click Run, and type "lusrmgr.msc" (without the
	     quotation marks) to open the UGM console.
	
	  b. Click the Users folder, right-click the account from step 1 (usually
	     IWAM_<ServerName>), and then click Set Password.
	
	  c. In the Password and Confirm Password boxes, type a new password. This
	     example uses the password "Password".
	
	3. At a command prompt, type the following command to set the new password in
	  the metabase:
	
	  "Inetpub\adminscripts> adsutil SET w3svc/WAMUserPass [Password]" (without
	  the quotation marks)
	
	  This returns the following output:
	
	  
	
	  WAMUserPass                       : (String) "**********"
	
	4. On the Start menu, click Run, and then type "iisreset" (without the quotation
	  marks) to restart the World Wide Web Publishing Service. This command stops
	  and restarts all Web services.
	
	5. Make sure that you re-enable your virtual directory as an application. To do
	  this, follow these steps:
	
	  a. On the Start menu, point to Programs, point to Administrative Tools, and
	     then click Internet Services Manager to open the ISM console.
	
	  b. Right-click the virtual directory, and then click Properties.
	
	  c. On the Directory tab (or Home Directory if you are working with a site),
	     click Create if it is enabled.
	
	  d. In the Application Protection drop-down list box, make sure that High
	     (Isolated) is selected.
	
	6. Update the password in the COM+ package that was automatically created for
	  your out-of-process Web application as follows:
	
	For IIS 4.0
	
	  a. On the Start menu, point to Programs, point to Windows NT 4.0 Option Pack,
	     point to Microsoft Internet Information Server, click on Internet Service
	     Manager.
	
	  b. Double-click Microsoft Transaction Server, double-click Computers,
	     double-click My Computer, and then double-click Packages Installed.
	
	  c. Right-click on the objects associated with your IIS Websites (identifed as
	     IIS-{websitename}).
	
	  d. On the Identiy tab, make sure that "This user" is selected, and verify
	     that the account from Step 1 appears in the User Box.
	
	  e. In the Password and Confirm Password boxes, type the updated password.
	
	For IIS 5.0
	
	  a. On the Start menu, point to Programs, point to Administrative Tools, and
	     then click Component Services to open the CSM console.
	
	  b. Click to expand the Component Services, Computers, My Computer, and COM+
	     Applications nodes.
	
	  c. Under COM+ Applications, right-click the package for your Web application,
	     and then click Properties.
	
	  d. On the Identity tab, make sure that This user is selected, and verify that
	     the account from step 1 appears in the User box.
	
	  e. In the Password and Confirm Password boxes, type the updated password.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the UGM console, and reset the password for IWAM_<ServerName>.
	
	2. Open the ISM console. On the Internet Information Server menu, click My
	  Computer (name), and then click Default Web Site.
	
	3. From the list, select an application that is not yet configured to run
	  out-of-process. Right-click your selection, and then click Properties.
	
	4. On the Virtual Directory (or Directory) tab, in the Application Protection
	  drop-down list box, click High (Isolated), and then click OK.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q195956 Cannot Set AppRoot OutProc, MTS Package Identity Set to "Y"
	
	  Q255770 PRB: Logon Failure: Unknown User Name or Bad Password When You Run
	  Out-of-Process Webs
	
	Additional query words: disable disabled create remove High(Isolated) high isolated out of process identity synchronize
	
	======================================================================
	Keywords          : kberrmsg kbCOMPlus kbConfig kbVisID600 kbWebServer kbGrpDSASP kbDSupport kberror kbiis500 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis500 kbCOMPlusSearch kbZNotKeyword3 kbCOMPlus100
	Version           : :1.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
