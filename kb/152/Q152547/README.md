---
layout: page
title: "Q152547: GP Fault in Windows NT VDM When Using SCROLL_LOCK/UNLOCK"
permalink: /kb/152/Q152547/
---

## Q152547: GP Fault in Windows NT VDM When Using SCROLL_LOCK/UNLOCK

	Article: Q152547
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following sequence of operations generates a general protection fault (GPF)
	in the target Windows NT Virtual MS-DOS Machine (VDM) :
	
	1. In ControlPanel, double-click the International icon and change the Keyboard
	  Layout to something other than US (French, German, Spanish, UK, and so
	  forth).
	
	2. Open a Windows NT VDM window.
	
	3. Start a 16-bit application, such as edit file.txt.
	
	4. Press the SCROLL_LOCK/UNLOCK key once or twice.
	
	This generates a GPF in the VDM.
	
	NOTE : the problem does not happen with Keyboard Layout set to US.
	
	
	RESOLUTION
	==========
	
	Upgrade to Windows NT 4.0, or obtain the fix referenced below.
	
	In the absence of side-effects, a solution will be included in Windows NT 3.51
	Service Pack 5. The problem is also fixed in Windows NT version 4.0. The file
	concerned is Ntvdm.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Packs 1 through 4.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
