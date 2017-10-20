---
layout: page
title: "Q87276: Windows Err Msg: Micro Channel Bus Time-out Error"
permalink: /kb/087/Q87276/
---

## Q87276: Windows Err Msg: Micro Channel Bus Time-out Error

{% raw %}

	Article: Q87276
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Micro Channel (MC) version of the Creative Labs Sound
	Blaster with Windows 3.1, you receive the following error message:
	
	  System error: Micro Channel bus time-out error detected.
	  System halted.
	
	CAUSE
	=====
	
	This message is caused by an MC device and the MC bus not synching properly
	during the bus arbitration process. This error may be caused by the Sound
	Blaster MCA or a third-party floppy disk drive for PS/2s.
	
	WORKAROUND
	==========
	
	Run Windows in standard mode instead of 386 enhanced mode. This error can also
	occur in standard mode, but it is less likely.
	
	NOTE: You should not use the MCADMA= switch (in the SYSTEM.INI file [386Enh]
	section) on any PS/2 other than the model 55sx. This switch should not be used
	for this problem.
	
	
	STATUS
	======
	
	Creative Labs is researching this problem and we will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 3.10 3.11 pro sound blaster ps2 ps/2 micro channel soundblaster MicroChannel timeout err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
