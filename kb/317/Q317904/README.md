---
layout: page
title: "Q317904: Money/ Street/ Works 2002: Err Msg: EULA Error"
permalink: /kb/317/Q317904/
---

## Q317904: Money/ Street/ Works 2002: Err Msg: EULA Error

	Article: Q317904
	Product(s): Microsoft Home Miscellaneous Products
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): kberrmsg kbimu
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft Money Suite 2002 
	- Microsoft Money Deluxe & Business 2002 
	- Microsoft Money Deluxe 2002 
	- Microsoft Money 2002 
	- Microsoft Streets & Trips 2002, version 1.0 
	- Microsoft Works Suite 2002 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to start Money 2002, Works Suite 2002, Streets & Trips
	2002, or MapPoint 2002 for the first time, you may receive an error message
	similar to the following:
	
	  EULA Error
	
	  This application cannot display the End User License Agreement. This agreement
	  must be displayed and accepted prior to running this application for the
	  first time. Please reinstall the application you are trying to run.
	
	  -or-
	
	  Cannot display the End User License Agreement which must be displayed and
	  accepted before you can use this application. To display the agreement,
	  reinstall the application.
	
	CAUSE
	=====
	
	This issue can occur when there are files from a previous installation of Money,
	Works Suite, Streets & Trips, or MapPoint on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, try the steps listed in the following Knowledge Base
	article:
	
	  Q255875 Works Err Msg: ...Cannot Display End User License Agreement
	
	If these steps do not resolve then issue, uninstall Money, Works, Works Suite,
	Streets & Trips, or MapPoint, delete all of the associated files, and then
	reinstall the program in another location. To do this, follow these steps:
	
	NOTE: Because there are several versions of Microsoft Windows, the following
	steps may be different on your computer. If they are, see your product
	documentation to complete these steps.
	
	Uninstall Money, Works, Works Suite, Streets & Trips, or 
	MapPoint
	------------------------------------------------------------------
	
	1. Click Start, and then click Control Panel.
	
	2. Double-click "Add or Remove Programs".
	
	3. In the list of installed programs, click Money, and then click Remove.
	
	  Follow the onscreen instructions to complete the removal process.
	
	4. Repeat steps 1 through 3 to uninstall Money, Works, Works Suite, Streets
	  & Trips, or MapPoint.
	
	Remove All Associated Registry Keys
	-----------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Click Start, and then click Run.
	
	2. In the Open box, type "regedit" (without the quotation marks), and then click
	  OK.
	
	3. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft
	
	4. Right-click Works, and then click Delete. When you receive the confirmation
	  message, click Yes.
	
	5. Repeat step 4 to delete the following folders:
	
	   - Works Suite
	
	   - Money
	
	   - MapPoint
	
	   - Automap
	
	6. Locate the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft
	
	7. Right-click Works, and then click Delete. When you receive the confirmation
	  message, click Yes.
	
	8. Repeat step 7 to delete the following folders:
	
	   - Works Suite
	
	   - Money
	
	   - Mappoint
	
	   - Automap
	
	9. Quit Registry Editor, and then start Windows Explorer.
	
	10. Locate the C:\Program Files\Common Files\Microsoft Shared folder.
	
	11. Right-click Works Shared, and then click Delete. When you receive the
	  confirmation message, click Yes.
	
	Download Microsoft Installer Cleanup Utility
	--------------------------------------------
	
	1. Start Microsoft Internet Explorer, and then see the following Microsoft Web
	  site:
	
	Windows 98 and Windows Me
	
	  Msicu.exe
	  (http://download.microsoft.com/download/office2000pro/util22/1/W9X/EN-US/msicu.exe)
	
	Windows 2000 and Windows XP
	
	  Msicuu.exe
	  (http://download.microsoft.com/download/office2000pro/util20/1/NT4/EN-US/msicuu.exe)
	
	2. When prompted, click Open. Follow the onscreen instructions to complete the
	  installation process.
	
	3. Start Windows Installer Cleanup Utility.
	
	4. Click to highlight any entries for Money, Works, Works Suite, Streets &
	  Trips, or MapPoint, and then click Remove.
	
	5. Quit Windows Installer Cleanup Utility.
	
	Reinstall Money, Works, Works Suite, Streets & Trips, or MapPoint
	-----------------------------------------------------------------
	
	1. Insert your Money CD-ROM.
	
	2. Click Start, and then click Control Panel.
	
	3. Double-click "Add and Remove Programs".
	
	4. In the left pane, click Add New Programs.
	
	5. In the right pane, click "CD or Floppy".
	
	6. When prompted, click Custom Installation. When prompted for an installation
	  directory, type an installation directory that is different from the original
	  (for example, C:\program name), and then click Next.
	
	7. Repeat this procedure to reinstall Works, Works Suite, Streets & Trips,
	  or MapPoint.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbimu 
	Technology        : kbHomeProdSearch kbWorksSearch _IKkbbogus kbExpediaSearch kbMoneySearch kbMapptSearch kbExpediaStreets2002 kbMoney2002 kbMapPoint2002 kbWorks2002
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
