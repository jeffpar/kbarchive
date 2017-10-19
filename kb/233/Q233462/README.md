---
layout: page
title: "Q233462: Business Planner: Error Message Opening Wizard Interview Page"
permalink: /kb/233/Q233462/
---

## Q233462: Business Planner: Error Message Opening Wizard Interview Page

	Article: Q233462
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbimu
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Business Planner 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you open a wizard interview page in Microsoft Business Planner, you may
	receive the following error message:
	
	  Some components of the Wizard Engine are missing. Please reinstall Microsoft
	  Business Planner by running Setup from Microsoft Office Disc 2.
	
	CAUSE
	=====
	
	This behavior can occur if the Msbp2000 folder is missing.
	
	NOTE: The Personal Interviewer database and other files created by Business
	Planner wizard interviews are stored in the Msbp2000 folder, which is
	automatically created when you install Business Planner.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods.
	
	Remove and Reinstall Business Planner
	-------------------------------------
	
	To do this:
	
	1. Insert the Microsoft Office 2000 Disc 2 CD-ROM into your CD-ROM drive.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Add/Remove Programs.
	
	4. Click Microsoft Office 2000 Disc 2, and then click Add/Remove.
	
	5. Click Add or Remove Features.
	
	  NOTE: If you click Repair Errors in My Office 2000 Disc 2 installation or
	  Reinstall Office 2000 Disc 2, you cannot reinstall Business Planner properly.
	
	6. Click the PLUS SIGN (+) next to Microsoft Small Business Tools to expand the
	  branch.
	
	7. Click the icon next to Microsoft Business Planner.
	
	8. Click "Run from My Computer."
	
	9. Click Update Now.
	
	10. Click OK, and then click OK again.
	
	Delete the CurrentProfileDir Value in the Windows Registry
	----------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To do this:
	
	1. Start Registry Editor.
	
	2. Open the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Microsoft Reference\SBB\9.0\OPTIONS
	
	3. Right-click the CurrentProfileDir value, and then click Delete.
	
	4. Click Yes.
	
	5. Quit Registry Editor.
	
	6. Restart the computer.
	
	Additional query words: msbp uninstall enter data unable
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbimu 
	Technology        : kbHomeMMsearch kbBusPlanner
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
