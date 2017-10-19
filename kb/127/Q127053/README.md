---
layout: page
title: "Q127053: Two Keyboard Components Appear in Control Panel"
permalink: /kb/127/Q127053/
---

## Q127053: Two Keyboard Components Appear in Control Panel

	Article: Q127053
	Product(s): Microsoft Windows NT
	Version(s): 1.0,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install the Natural Keyboard with IntelliType software version 1.0
	under Windows NT version 3.5, two keyboard components appear in Control Panel;
	Keyboard and Keyboards.
	
	CAUSE
	=====
	
	The Natural Keyboard Setup adds the Keyboards (KBD32.CPL) component, but does
	not remove the Keyboard component.
	
	The Natural Keyboard Setup attempts to disable the existing Control Panel
	Keyboard component by modifying the Registry. However, a cache mechanism
	implemented to speed up the loading of Control Panel components in Windows NT
	version 3.5 does not allow the Control Panel Keyboard component to be disabled.
	
	WORKAROUND
	==========
	
	To work around this problem, add the /CACHE switch to the Control Panel Command
	Line in the Program Manager Program Item Properties dialog box. For example:
	
	  CONTROL.EXE /cache
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10 main cpl nkbd
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :1.0,3.5
	
	=============================================================================
	
