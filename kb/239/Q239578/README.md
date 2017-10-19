---
layout: page
title: "Q239578: S&amp;T 2000 Err Msg: Setup Could Not Write to Line in the INI File"
permalink: /kb/239/Q239578/
---

## Q239578: S&amp;T 2000 Err Msg: Setup Could Not Write to Line in the INI File

	Article: Q239578
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Expedia Streets and Trips 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install Microsoft Expedia Streets and Trips 2000, you may
	receive the following error message:
	
	  Setup could not write to line in the INI File
	  File: 'C:\Windows\Wininit.ini'
	  Section: 'Rename'
	  Key: 'C:\Windows\System\Msvcrt.dll'
	
	CAUSE
	=====
	
	This behavior can occur if the Wininit.ini file is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the Wininit.ini file, and then reinstall Expedia
	Streets and Trips 2000:
	
	1. Click Start, point to Find, and then click "Files or Folders."
	
	2. In the Named box, type "wininit.ini" (without the quotation marks).
	
	3. In the "Look in" box, click My Computer.
	
	4. Click to select the Include Subfolders check box.
	
	5. Click Find Now.
	
	6. In the list of found files, right-click the Wininit.ini file, and then click
	  Rename.
	
	7. Type "wininit.old" (without the quotation marks), and then press ENTER.
	
	  NOTE: If you find more than one copy of the Wininit.ini file in the list of
	  found files, repeat steps 6-7 for each copy.
	
	8. Close the Find: Files Named Wininit.ini window.
	
	9. Reinstall Expedia Streets and Trips 2000.
	
	
	Additional query words: est2000 auto-map amap installs setup
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbExpediaSearch kbExpediaStreets2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
