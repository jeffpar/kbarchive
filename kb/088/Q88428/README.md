---
layout: page
title: "Q88428: Issues with Windows 3.0 and 8.0 Mouse Driver"
permalink: /kb/088/Q88428/
---

## Q88428: Issues with Windows 3.0 and 8.0 Mouse Driver

{% raw %}

	Article: Q88428
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When installing the version 8.0 Microsoft Mouse driver in a computer running
	Microsoft operating system version 3.0, two problems may occur:
	
	- The version 8.0 mouse driver (MOUSE.COM) will not load in an MS-DOS session.
	
	- If Microsoft Mouse software is installed in the root directory, incorrect
	  information is written to the SYSTEM.INI file.
	
	If you are using Windows 3.1, you should be using the updated drivers that came
	with Windows, and not the 8.0 drivers.
	
	MORE INFORMATION
	================
	
	8.0 Mouse Driver Will Not Load in an MS-DOS Session
	---------------------------------------------------
	
	The Microsoft Mouse driver (MOUSE.COM) version 8.0 cannot be started from inside
	a Windows 3.0 MS-DOS session.
	
	MOUSE.COM version 7.04, which is shipped with Windows 3.0, can be started this
	way.
	
	Workaround
	----------
	
	1. Load MOUSE.COM or MOUSE.SYS in the AUTOEXEC.BAT or CONFIG.SYS file,
	  respectively, at boot time.
	
	  -or-
	
	2. Run MOUSE.COM before starting Windows.
	
	  -or-
	
	3. Switch to the Mouse driver version 7.04 (this option is not available to
	  Microsoft BallPoint mouse users).
	
	If Mouse Software Is Installed in the Root Directory,
	Incorrect Information Is Written to the SYSTEM.INI File
	-------------------------------------------------------------------------------------------------------------
	
	If you install the Microsoft Mouse driver 8.0 files to your root directory
	without specifying a directory name, then Windows may return you to an MS-DOS
	prompt after you type WIN to start Windows.
	
	When installing the mouse driver software, make sure you put the files in a
	directory other than your root directory. For example:
	
	  C:\MOUSE
	
	If you install the files in your root directory, for example
	
	  C:\
	
	it will add the following line(s) to the [boot] section of your SYSTEM.INI file:
	
	  MOUSE.DRV=C:\\MOUSE.DRV or MOUSE.DRV=C:\\.DRV
	
	Workaround
	----------
	
	Edit the [boot] section of your SYSTEM.INI file and remove one of the backslashes
	(\).
	
	REFERENCES
	==========
	
	README.TXT. Microsoft Mouse drivers, version 8.0, Disk 1.
	
	Additional query words: 3.00 3.00a vm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
