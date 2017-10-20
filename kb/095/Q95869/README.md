---
layout: page
title: "Q95869: Test Button Unavailable for PC Speaker in Control Panel"
permalink: /kb/095/Q95869/
---

## Q95869: Test Button Unavailable for PC Speaker in Control Panel

{% raw %}

	Article: Q95869
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Test button may be unavailable (dimmed) if you choose the Drivers icon from
	the Control Panel window, select Wave Driver For PC Speaker, and choose the
	Setup button.
	
	CAUSE
	=====
	
	This problem may occur when the [Sounds] section in the WIN.INI file does not
	contain any information.
	
	Below is the default sample [Sounds] section from the Windows for Workgroups
	WIN.INI file. Windows 3.1 will not have "RingIn" or "RingOut" sounds.
	
	     [Sounds]
	     SystemDefault=ding.wav, Default Beep
	     SystemExclamation=ding.wav, Exclamation
	     SystemStart=chimes.wav, Windows Start
	     SystemExit=chimes.wav, Windows Exit
	     SystemHand=ding.wav, Critical Stop
	     SystemQuestion=ding.wav, Question
	     SystemAsterisk=ding.wav, Asterisk
	     RingIn=ringin.wav, Incoming Call
	     RingOut=ringout.wav, Outgoing Call
	
	To enable the Test button, add the [Sounds] section to the WIN.INI file, along
	with the desired system events. An original copy of this section can be pasted
	from the WIN.SR_ file that is on Disk 1 of the Windows 3.1 disks and Disk 3 of
	the Windows for Workgroups disks.
	
	To correct the WIN.INI file:
	
	Before beginning the following steps, make a backup copy of your current WIN.INI
	file. For instructions on how to do this, consult your MS-DOS manual.
	
	1. Expand WIN.SR_ into the Windows directory and rename it to WIN.SRC. For
	  information about expanding files, see your MS-DOS manual.
	
	2. Run Notepad and open WIN.SRC by choosing Open from the File menu and
	  selecting WIN.SRC. Choose the OK button.
	
	3. Select the entire [Sounds] section.
	
	4. From the Edit menu, choose Copy.
	
	5. From the File menu, choose Open and select WIN.INI. Choose the OK Button.
	
	6. Paste the [Sounds] section to the end of the WIN.INI file by choosing Paste
	  from the Edit menu.
	
	7. Save the WIN.INI file and restart Windows.
	
	  NOTE: You can delete WIN.SRC from the WINDOWS directory after you have
	  completed the above steps.
	
	Additional query words: 3.10 3.11 Multimedia dimmed available unavailable gray grayed grey greyed blank empty inaccessible .wav
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
