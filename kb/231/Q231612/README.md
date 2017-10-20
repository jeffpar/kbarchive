---
layout: page
title: "Q231612: HOWTO: Use a SourceSafe Database with Multiple Web Servers"
permalink: /kb/231/Q231612/
---

## Q231612: HOWTO: Use a SourceSafe Database with Multiple Web Servers

{% raw %}

	Article: Q231612
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:1.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbSSafe500 kbSSafe600 kbVisID kbVisID100 kbVisID600 _IK
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual InterDev, versions 1.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Developers often want to have their own individual Web servers to develop a Web
	application against while keeping project files in a single Visual SourceSafe
	project. Although Visual InterDev/Visual SourceSafe integration was designed
	with one Web Server and one SourceSafe Database in mind, there are two ways to
	do this. This article describes both methods.
	
	MORE INFORMATION
	================
	
	Visual InterDev uses the FrontPage Server Extensions to do all Visual SourceSafe
	integration. The files that handle the Visual SourceSafe functionality from
	within the Visual InterDev integrated development environment (IDE) are located
	on the Web server. If each developer has his or her own Web server and any of
	the developers adds or removes files, those changes will not be propagated to
	the other developers' Web servers.
	
	The following two methods allow Visual SourceSafe to work with multiple Web
	servers:
	
	Method 1 - Local Mode
	---------------------
	
	1. In Visual InterDev, create a centralized Web server that has the project
	  added to Visual SourceSafe.
	
	  a. Open Visual InterDev.
	
	  b. Click New Project on the File menu.
	
	  c. Enter the name of the Web server.
	
	2. Each user opens the centralized Web project in Visual InterDev and specifies
	  the \Wwwroot\<Web name> directory on his or her Web server as the
	  working folder for the project.
	
	3. On the Start Menu, point to Programs, and then point to Windows NT 4.0 Option
	  Pack, and then point to Internet Information Server. Click Internet Service
	  Manager.
	
	4. Make this new project an application: Right-click the project and select
	  Properties, and then click Create.
	
	5. Open the Web in "local mode" so that all saves only occur on the local Web
	  server. (See the "References" section of this article for more information on
	  working in local mode.)
	
	6. Check the file out by right-clicking on it in the Project Explorer and
	  clicking Check Out.
	
	7. Do all testing locally.
	
	8. When finished testing, check the file back in by right-clicking on it in the
	  Project Explorer and clicking Check In, updating the master Web.
	
	Method 2 - Localhost
	--------------------
	
	1. Make the Web project connect to "localhost" as the Web server.
	
	  a. Open Visual InterDev.
	
	  b. Click New Project on the File menu.
	
	  c. Enter "localhost" (without the quotation marks) for the Web server.
	
	  d. Choose to work in Local Mode.
	
	
	2. Add to Visual SourceSafe:
	
	  a. In Visual InterDev, select the Solution file in the Project Explorer.
	
	  b. On the Project menu, point to Source Control, and then click Add to Source
	     Control.
	
	3. New users connect to the Web by opening the File menu and clicking on Open
	  Project, and then clicking on Source Control and pointing to the SourceSafe
	  database.
	
	
	4. In Visual InterDev, select the Project menu, point to Web Project, and click
	  Recalculate Links.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q194006 INFO: The Difference Between a .sln and a .vip File
	
	  Q171116 HOWTO: Enable VSS Integration with FrontPage and Visual InterDev
	
	For additional information, search for the following in the Visual InterDev
	product documentation:
	
	- Working locally
	
	- Using Visual InterDev 6.0 local mode
	
	- Local mode, specifying
	
	- Updating master Web application
	
	- Synchronizing master and local files
	
	- Show differences (File) command (Tools menu)
	
	- Show differences (Project) command (Tools menu)
	
	- Show differences command (Development Environment)
	
	- Debugging mixed client and server script
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe500 kbSSafe600 kbVisID kbVisID100 kbVisID600 _IK 
	Technology        : kbVisIDsearch kbSSafeSearch kbAudDeveloper kbVisID100 kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:1.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
