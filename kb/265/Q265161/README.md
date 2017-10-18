---
layout: page
title: "Q265161: FP: Errors Appear When You Attempt to Connect to Results Page"
permalink: kb/265/Q265161/
---

## Q265161: FP: Errors Appear When You Attempt to Connect to Results Page

	Article: Q265161
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse to an Active Server Page (ASP) database results page
	created in Microsoft FrontPage, you may receive an error message similar to one
	of the following:
	
	Error #1:
	
	  Microsoft VBScript runtime error '800a01ad'
	  ActiveX component can't create object
	  /_fpclass/fpdbrgn1.inc, line 99
	
	NOTE: This error message may be followed by a description of why the resource was
	inaccessible.
	
	Error #2:
	
	  Execute Access Denied
	  This Virtual Directory does not allow objects to be executed.
	
	Error #3:
	
	  Database Results Error
	  The database connection named 'Sample' is undefined.
	
	  This problem can occur if:
	
	  * the connection has been removed from the web.
	  * the file 'global.asa' is missing or contains errors.
	  * the root folder does not have Scripting permissions enabled.
	  * the web is not marked as an Application Root.
	
	
	CAUSE
	=====
	
	This behavior can occur if the following respective conditions are true:
	
	Error #1:
	
	The NTFS permissions are defined incorrectly for the "%ProgramFiles%\Common
	Files\System" folder.
	
	Error #2:
	
	The virtual directory that you are connecting to is not marked as an ASP
	application.
	
	Error #3:
	
	The virtual directory that you are connecting to does not have at least Script
	permissions defined in the Microsoft Internet Information Service (IIS)
	settings.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the method appropriate to the error message you are
	receiving:
	
	Error #1:
	
	Reset the NTFS permisions on the "%ProgramFiles%\Common Files\System" folder. To
	do this, follow these steps:
	
	1. Right-click the Start button, and then click Open to start Windows Explorer.
	
	2. Expand the "%ProgramFiles%\Common Files\System" folder in Folders view.
	
	3. Right-click the folder and then click Properties on the shortcut menu.
	
	4. Click the Security tab.
	
	5. Add Everyone to the exisiting permissions with at least Read permissions and
	  apply these new settings to all files and subfolders.
	
	6. Click OK.
	
	Error #2:
	
	Mark the folder as an Application Root. To do this, follow these steps:
	
	1. Start Internet Services Manager. To do this, follow the steps for your
	  version of IIS:
	
	   - For IIS 5.1:
	
	     a. Open Control Panel.
	
	     b. Double-click Administrative Tools.
	
	     c. Double-click Internet Information Services.
	
	   - For IIS 5.0:
	
	     a. On the Windows Start menu, point to Programs, and then click
	        Administrative Tools.
	
	     b. Click Internet Services Manager.
	
	   - For IIS 4.0:
	
	     a. On the Windows Start menu, point to Programs, and then click "Windows
	        NT 4.0 Option Pack".
	
	     b. Click "Microsoft Internet Information Server".
	
	     c. Click Internet Service Manager.
	
	2. Expand the path to the folder in Tree view.
	
	3. Right-click the folder and then click Properties on the shortcut menu.
	
	4. Click the Directory or Home Directory tab.
	
	5. Click Create.
	
	6. Click OK.
	
	Error #3:
	
	Configure the folder to have at least Script permissions. To do this, follow
	these steps:
	
	1. Start Internet Services Manager. To do this, follow the steps for your
	  version of IIS:
	
	   - For IIS 5.1:
	
	     a. Open Control Panel.
	
	     b. Double-click Administrative Tools.
	
	     c. Double-click Internet Information Services.
	
	   - For IIS 5.0:
	
	     a. On the Windows Start menu, point to Programs, and then click
	        Administrative Tools.
	
	     b. Click Internet Services Manager.
	
	   - For IIS 4.0:
	
	     a. On the Windows Start menu, point to Programs, and then click "Windows
	        NT 4.0 Option Pack".
	
	     b. Click "Microsoft Internet Information Server".
	
	     c. Click Internet Service Manager.
	
	2. Expand the path to the folder in the Tree view.
	
	3. Right-click the folder and then click Properties on the shortcut menu.
	
	4. Click the Directory or Home Directory tab.
	
	5. Choose Scripts only for the execute permissions.
	
	6. Click OK.
	
	MORE INFORMATION
	================
	
	If you are trying to gain access to a Microsoft Access database, make sure that
	you have established the appropriate permissions. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	When a user attempts to perform an Internet Database Connector (IDC) or ActiveX
	Data Objects (ADO) query, the query is run in context of the authenticated Web
	user. Typically, you (the FrontPage Web developer) might grant the directory
	permissions listed later in this article to an anonymous user or to the
	authenticated Microsoft Windows NT user account. (By default, the anonymous user
	is IUSR_<machine-name>.)
	
	When you apply these permissions, apply them to all existing files unless
	otherwise noted.
	
	When you set permissions for the IUSR account, you need to add all user accounts
	that need to be authenticated on the Microsoft Internet Information Server (IIS)
	computer.
	
	The directories identified in the sixth and seventh bullets that follow are
	located by default in the Program Files/Common Files/System directory and are
	needed only for ASP and ADO queries.
	
	Typical permissions for IUSR are as follows:
	
	- Read permission to the root directory of the drive on which ASP is installed.
	- Write permission to the Windows NT directory in Windows NT, or to the WinNT
	  directory in Windows 2000.
	- Read permission to the System32 directory.
	- Read permission to the Inetsrv directory.
	- Read permission to the InetPub (or content directory).
	- Read permission to the OLE DB directory.
	- Read permission to the ADO directory.
	- Change permissions to the database file and directories.
	
	NOTE: The Microsoft Jet database engine uses the System Temp and Tmp environment
	variables to specify the location of temporary files that are created during Jet
	operations. By default, these environment variables are defined for users and
	are not system-wide settings. For additional information, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q315456 FP: Error: Unable to Open Jet Temporary Key When You Attempt to
	  Connect to Database
	
	REFERENCES
	==========
	
	For additional information about troubleshooting ASP/IIS errors when working
	with FrontPage database connectivity features, click the article numbers below
	to view the articles in the Microsoft Knowledge Base:
	
	  Q201740 Cannot Create Object Error when Browsing ASP Pages
	
	  Q219170 FP2000: Error Browsing Database Results Pages After Publishing from
	  Disk-Based Web
	
	  Q315453 FP: ASP Error 0177: 800401f3 When You Attempt to Connect to Database
	  Results Page
	
	  Q315454 FP: ASP Error 0178: 80070005 When You Attempt to Connect to Database
	  Results Page
	
	  Q315456 FP: Error: Unable to Open Jet Temporary Key When You Attempt to
	  Connect to Database
	
	For additional information about troubleshooting IIS permissions, click the
	article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q185874 How to Troubleshoot Permissions in Internet Information Server 4.0
	
	  Q309051 HOW TO: Troubleshoot ASP in IIS 5.0
	
	For additional information about virtual directories and application objects, see
	the Internet Information Services Documentation on your Web server. To view this
	documentation, follow these steps:
	
	1. On the Start menu, click Run. In the Open box, type
	  "http://localhost/iishelp" (without the quotation marks), and then click OK.
	
	2. On the IIS Documentation page, click the Index tab, type "virtual directory"
	  (without the quotation marks), select the subtopic that you want, and then
	  click Display.
	
	Additional query words: ocsso front page 800a01ad run time
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
