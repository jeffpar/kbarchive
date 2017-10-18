---
layout: page
title: "Q233352: Mac Encarta 98: AppleScript Is Not Loaded on Mac OS 8.5 or Later"
permalink: kb/233/Q233352/
---

## Q233352: Mac Encarta 98: AppleScript Is Not Loaded on Mac OS 8.5 or Later

	Article: Q233352
	Product(s): Microsoft Home Multimedia Titles
	Version(s): MACINTOSH:
	Operating System(s): 
	Keyword(s): kbenv kbtool kbimu
	Last Modified: 03-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Macintosh 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Encarta 98 on a Macintosh computer running Mac OS
	System 8.5 or later, a duplicate AppleScript extension appears when you restart
	the computer. This extension is superimposed by a red "X" and is not loaded.
	
	CAUSE
	=====
	
	This behavior occurs because both Encarta 98 and the Macintosh operating system
	install an extension named AppleScript.
	
	Although the extension installed by Encarta is trademarked, the Macintosh
	operating system does not recognize that the two extensions are identical. As a
	result, the computer attempts to load both AppleScript extensions at startup,
	causing the conflict described in the "Symptoms" section of this article.
	
	RESOLUTION
	==========
	
	To resolve this issue, disable the trademarked AppleScript extension that is
	installed by Encarta. To do this:
	
	1. Click the Apple menu, point to Control Panels, and then click Extensions
	  Manager.
	
	2. Under Extensions, click to clear the check box next to the trademarked
	  AppleScript extension.
	
	  NOTE: The version of the trademarked AppleScript extension that is installed
	  by Encarta is 1.1.
	
	3. Click Restart.
	
	Additional query words: multi multi-media media mm ee98 macos
	
	======================================================================
	Keywords          : kbenv kbtool kbimu 
	Technology        : kbHWMAC kbOSMAC kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998Mac
	Version           : MACINTOSH:
	Issue type        : kbprb
	
	=============================================================================
	
