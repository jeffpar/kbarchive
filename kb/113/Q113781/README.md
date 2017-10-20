---
layout: page
title: "Q113781: Sound: GP Faults or System Hangs with Third-Party Shells"
permalink: /kb/113/Q113781/
---

## Q113781: Sound: GP Faults or System Hangs with Third-Party Shells

{% raw %}

	Article: Q113781
	Product(s): Miscellaneous Windows Products
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using third-party shells (instead of using Program Manager), you may
	receive general protection (GP) faults or system hangs when you install or use
	the Windows Sound System applications.
	
	MORE INFORMATION
	================
	
	To change the shell, you must edit the SYSTEM.INI file.
	
	1. From the accessories group start the Notepad application.
	
	2. From the File menu, choose Open.
	
	3. In the File Name box, type the following and press ENTER:
	
	  system.ini
	
	4. Change the SHELL= line to read:
	
	  SHELL=PROGMAN.EXE
	
	If the SHELL= line does not say PROGMAN.EXE, Windows Sound System may not
	function properly.
	
	
	Additional query words: 2.00 TSR gpf hang frozen froze err msg error gp
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys200
	Version           : 2.00
	
	=============================================================================
	

{% endraw %}
