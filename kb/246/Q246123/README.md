---
layout: page
title: "Q246123: HOWTO: Add Web Projects to Multiple SourceSafe Databases"
permalink: /kb/246/Q246123/
---

## Q246123: HOWTO: Add Web Projects to Multiple SourceSafe Databases

	Article: Q246123
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0; winnt:
	Operating System(s): 
	Keyword(s): kbFrontPage kbSSafe500 kbSSafe600 kbVisID kbDSupport kbGrpDSSSafe
	Last Modified: 16-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- FrontPage 2000 Server Extensions from Microsoft 
	- Microsoft Visual InterDev, version 6.0 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With FrontPage 2000 Server Extensions (as with earlier versions), a Web server
	can integrate with a single Visual SourceSafe database at a time. This article
	describes a workaround that allows you to add projects to multiple databases.
	
	MORE INFORMATION
	================
	
	When adding a project to Visual SourceSafe, the FrontPage 2000 Server Extensions
	first determine where the Ssapi.dll file is registered on the computer. They
	then use this path to search for the Srcsafe.ini file to connect to a Visual
	SourceSafe database.
	
	NOTE: After a project has been added, the project finds the correct database by
	using the Server Extensions configuration files, regardless of which Visual
	SourceSafe database is currently set up to receive new projects.
	
	For each database, there must be a separate installation of Visual SourceSafe on
	the Web server, with separate copies of the Ssapi.dll file to register. To add a
	Web project to two Visual SourceSafe databases, perform the following steps:
	
	1. Place two copies of the Ssapi.dll file on the Web server. There are several
	  ways to do this:
	
	   - Have both databases on the Web server, with a separate Win32 folder for
	     each.
	
	   - Have the databases on remote computers, and run Netsetup from each Visual
	     SourceSafe database to install to separate folders.
	
	   - Have one database on the Web server, and run Netsetup from a remote Visual
	     SourceSafe database to install this copy to a separate folder.
	
	Note: Netsetup is only available if you install the Visual SourceSafe Server
	setup. For information on this type of installation, see "Server Installation"
	in the Visual SourceSafe documentation, or click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q187948 INFO: Server Installation With Visual Studio 6.0
	
	2. Register the Ssapi.dll file for the first database with the following command
	  line:
	
	  "regsvr32 <path to win32 folder>\ssapi.dll " (without the quotation
	  marks)
	
	  NOTE: You only need to do this if you are not using the common database.
	
	   - The Win32 folder is a subfolder of the folder in which Visual SourceSafe
	     was installed. For a typical installation, it resembles the following:
	     "C:\Program Files\Microsoft Visual Studio\VSS\Win32".
	
	   - Registering this file only changes the registry so that it points to this
	     file (instead of to another location). For the above path, the registry
	     contains "C:\Program Files\Microsoft Visual Studio\VSS\Win32\Ssapi.dll"
	     for this file.
	
	3. Add the project to Visual SourceSafe.
	
	   - From Visual InterDev:
	
	     1. Open the Web project and on the Project menu, point to Source Control,
	        and then click Add to Source Control.
	
	     2. Click the Selection button to add only the selected project.
	
	     3. In the edit box, enter the project name in Visual SourceSafe. This
	        defaults to <Project Name>_Web.
	
	     4. Click OK.
	
	   - From FrontPage:
	
	     1. On the Start menu, point to Programs, point to Windows NT 4.0 Option
	        Pack, point to Internet Information Server, and then click Internet
	        Service Manager.
	
	     2. Right-click the project and click Properties. Click the Server
	        Extensions tab and change the version control option to Use External.
	
	     3. In the edit box, enter the project name in Visual SourceSafe.
	
	     4. Click OK.
	
	4. Repeat steps 2 and 3 for the next Visual SourceSafe database and Web project.
	
	REFERENCES
	==========
	
	For information about Netsetup, see "Client installation from network" in the
	Visual SourceSafe documentation.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFrontPage kbSSafe500 kbSSafe600 kbVisID kbDSupport kbGrpDSSSafe 
	Technology        : kbVisIDsearch kbSSafeSearch kbFrontPageSearch kbAudDeveloper kbFrontPageServXSearch kbFrontPage2000Search kbFrontPage2000ServX kbZNotKeyword5 kbVisID600 kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0; winnt:
	Issue type        : kbhowto
	
	=============================================================================
	
