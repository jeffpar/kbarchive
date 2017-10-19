---
layout: page
title: "Q135603: Customizing Microsoft Office Toolbar for Separate Memory Space"
permalink: /kb/135/Q135603/
---

## Q135603: Customizing Microsoft Office Toolbar for Separate Memory Space

	Article: Q135603
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.5,3.51,3.51,4.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5,3.51 
	- Microsoft Windows NT Workstation version 3.5,3.51 
	- Microsoft Windows NT Advanced Server, versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can run 16-bit Windows-based applications in their own memory space under
	Windows NT 3.5 and 3.51. This is most easily accomplished by selecting the
	program icon in Program Manager, choosing Properties from the File menu, and
	selecting "Run in Separate Memory Space."
	
	Because the Microsoft Office Toolbar does not use Program Manager you need to
	create a custom Application Button to run a 16-bit application in its own memory
	space.
	
	MORE INFORMATION
	================
	
	The following procedure explains how to run a 16-bit Windows-based application
	in its own address space. It uses Microsoft Excel as an example.
	
	1. Create a batch file containing the following commands:
	
	  start /separate /b d:\msoffice\excel\excel.exe
	  exit
	
	  This example refers to the batch file as C:\BAT\SAMPLE.BAT
	
	2. Start the toolbar by running Microsoft Office from the Microsoft Office
	  Program Group.
	
	3. Click the application button, on the far right hand side of the toolbar, for
	  creating customized buttons. Choose Customize.
	
	4. In the Customize dialog box, choose Toolbar and then choose Add. Fill in the
	  fields as follows:
	
	  Description: Custom Excel
	  Command Line: c:\bat\sample.bat
	  Working Directory: <As desired>
	  Button Image: <As desired>
	
	Additional query words: prodnt 3.50 3.51 word ppt powerpoint power point access
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTAdvSerSearch kbWinNTAdvServ351 kbWinNTAdvServ350
	Version           : :3.5,3.5,3.51,3.51,4.2
	
	=============================================================================
	
