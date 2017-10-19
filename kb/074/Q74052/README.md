---
layout: page
title: "Q74052: Setup Hangs on a Sharp PC6200 Series Notebook Computer"
permalink: /kb/074/Q74052/
---

## Q74052: Setup Hangs on a Sharp PC6200 Series Notebook Computer

	Article: Q74052
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Sharp PC6200 series of notebook computers has a hardware setup program whose
	options must be changed if Windows Setup stops responding (hangs) when you
	insert Disk 2.
	
	For example, if VGA was chosen during the hardware selection portion of the
	Windows Setup program, and the Sharp's LCD monitor is incorrectly set to emulate
	MDA rather than VGA, Setup may hang when you insert Disk 2. Changing the Sharp's
	LCD monitor emulation to VGA should permit the Windows Setup program to run
	without incident.
	
	MORE INFORMATION
	================
	
	To change the hardware options, press CTRL+ALT+SETUP twice at the MS-DOS prompt.
	Note: SETUP is a key on the upper right-hand side of the keyboard on a PC6220
	notebook computer.
	
	The first time you press CTRL+ALT+SETUP, a menu will appear that allows you to
	change the date, time, and so on. The second time you press CTRL+ALT+SETUP, you
	will activate a menu that allows for other changes, such as LCD monitor
	emulation and memory (expanded/extended) configuration.
	
	For further information regarding Sharp's line of notebook computers, please
	contact Sharp Electronics.
	
	Additional query words: 3.0 3.00 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
