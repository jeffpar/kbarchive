---
layout: page
title: "Q246814: INFO: New Features of Visual SourceSafe 6.0"
permalink: /kb/246/Q246814/
---

## Q246814: INFO: New Features of Visual SourceSafe 6.0

{% raw %}

	Article: Q246814
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbAutomation _IK kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes some of the new and enhanced features of Visual
	SourceSafe 6.0, and provides links to additional relevant articles in the
	Microsoft Knowledge Base.
	
	MORE INFORMATION
	================
	
	Installation Procedures
	-----------------------
	
	For additional information regarding installation procedures for Visual
	SourceSafe 6.0, click the article numbers below to view the articles in the
	Microsoft Knowledge Base:
	
	  Q246872 INFO: Installation Information for Visual SourceSafe 6.0
	
	  Q238255 HOWTO: Install VSS to a Novell NetWare Server
	
	Fast Get
	--------
	
	For information regarding the Fast Get feature, see the following article:
	
	  Q221576 INFO: How The Fast Get Operation Works in SourceSafe 6.0
	
	Label Promotions
	----------------
	
	For information regarding label promotions, see the following article:
	
	  Q246910 INFO: How Do Label Promotions Work in SourceSafe 6.0
	
	OLE Automation
	--------------
	
	Numerous enhancements are made to OLE Automation in Visual SourceSafe 6.0.
	Problems in Visual SourceSafe 5.0 are corrected, and additional functionality is
	added by exposing the SourceSafe Administrative tools to the object model. OLE
	Automation code that is written for SourceSafe 5.0 should work without problem
	in SourceSafe 6.0. If any adjustments are needed, they should be minor.
	
	For additional information regarding OLE Automation in SourceSafe 6.0, see the
	MSDN article "Visual SourceSafe 6.0 Automation" at the following Web site:
	
	  http://msdn.microsoft.com/library/default.asp?URL=/library/techart/vssauto.htm
	  (http://msdn.microsoft.com/library/default.asp?URL=/library/techart/vssauto.htm)
	
	Archive and Restore
	-------------------
	
	In Visual SourceSafe 6.0, you can access the Archive and Restore functions from
	within the SourceSafe Administrative menus. These commands were previously
	accessible only from the command prompt.
	
	For information regarding the Ssarc.exe and Ssrestor.exe utilities, see the
	following article:
	
	  Q176875 INFO: The Primary Functions of Ssarc.exe and Ssrestor.exe
	
	Project Level Differences
	-------------------------
	
	In Visual SourceSafe 5.0, the Project Difference option compares your current
	project against the version of the project that is stored in the user working
	directory. In Visual SourceSafe 6.0, the Project Difference option also allows
	you to compare the contents of projects with other Windows folders or other
	projects in your database. Specifically, it allows you to compare:
	
	- VSS project to VSS project
	- VSS project to local folder
	- Local folder to local folder
	
	The addition of Browse buttons lets you specify how to perform the Project
	Difference operation. To change the default behavior of this command, just
	choose between Browse buttons.
	
	Deploy Files from the Graphical User Interface (GUI)
	----------------------------------------------------
	
	Once a project has been designated as a Web project in the Visual SourceSafe
	administrator, the Deploy option becomes available within the SourceSafe
	explorer. Visual SourceSafe 5.0 allows you to deploy only entire projects from
	the GUI. Visual SourceSafe 6.0 lets you deploy individual files as well as
	entire projects.
	
	Move Command Moves Files and Projects
	-------------------------------------
	
	In Visual SourceSafe 5.0, the Move Project command, located on the File menu,
	lets you move projects. In Visual SourceSafe 6.0, this command has been improved
	and renamed the Move command. If you select a project and click Move from the
	File menu, the command works exactly as the Move Project command does in Visual
	SourceSafe 5.0.
	
	Visual SourceSafe 6.0 gives you the added ability to move individual files
	between projects. To move a file from one project to another, select the file
	you want to move. From the File menu, click Move, and then choose the
	destination project from the Move command window.
	
	When you move a file in SourceSafe 6.0, the file is copied to the destination
	project and is given the shared file glyph. The original is deleted but is not
	purged from its starting location. In other words, the Move operation shares the
	file to the new project, and then deletes (but does not purge) the file from its
	original project.
	
	Create Database
	---------------
	
	In Visual SourceSafe 6.0, the administrator of a database can create a new
	database from within the Administrative utility (Ssadmin.exe). To do this, from
	the Tools menu, click Create Database.
	
	For more information regarding the Create Database command, see the following
	articles:
	
	  Q216115 HOWTO: Set Up Multiple Databases in Visual SourceSafe 6.0
	
	  Q238155 HOWTO: Create a New Database in Visual SourceSafe
	
	Clean Up Temp Directory
	-----------------------
	
	Visual SourceSafe creates temporary files that are usually destroyed during a
	normal session. Sometimes, due to unusual circumstances, these temporary files
	remain in the Temp folder and take up disk space.
	
	In Visual SourceSafe 5.0 and earlier, the administrator must explicitly open the
	Temp folder and delete the files. In Visual SourceSafe 6.0, the administrator
	can automatically delete temporary files by using the Clean up Temp Directory
	command. To do so, perform the following steps:
	
	1. Open the SourceSafe Admin program.
	
	2. Open the SourceSafe database containing the Temp folder that you wish to
	  clean up.
	
	3. From the Tools menu, click Clean up Temp Directory.
	
	It is strongly recommended that all users log out of Visual SourceSafe before
	using the Clean up Temp Directory command; otherwise, data may be lost. However,
	if Visual SourceSafe finds a file in the Temp folder that is in use (that is, a
	user is viewing the file), it does not delete the file.
	
	Create Shortcut
	---------------
	
	The Create Shortcut feature provides an easy way to access a SourceSafe project.
	Once a shortcut has been created, you can double-click the shortcut icon to open
	the SourceSafe explorer to the designated project.
	
	To create a shortcut, perform the following steps:
	
	1. Open the SourceSafe explorer.
	
	2. Select the project.
	
	3. From the File menu, click Create Shortcut.
	
	Note that the shortcut for the project should be placed on your desktop.
	
	For more information about using this feature, see the following articles:
	
	  Q167134 HOWTO: Open Visual SourceSafe to a Specific Project
	
	  Q176350 HOWTO: Open Visual SourceSafe to a Specific Database
	
	REFERENCES
	==========
	
	http://msdn.microsoft.com/library/default.asp?URL=/library/devprods/vs6/ssafe/ssusexp/vssstartpage.htm
	(http://msdn.microsoft.com/library/default.asp?URL=/library/devprods/vs6/ssafe/ssusexp/vssstartpage.htm)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbAutomation _IK kbSSafe600 kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
