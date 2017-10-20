---
layout: page
title: "Q85307: Outdated or Incorrect Sound Driver May Cause System to Hang"
permalink: /kb/085/Q85307/
---

## Q85307: Outdated or Incorrect Sound Driver May Cause System to Hang

{% raw %}

	Article: Q85307
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a sound card installed on your system, and Microsoft Windows stops
	responding (hangs) when starting or exiting.
	
	CAUSE
	=====
	
	An outdated or inappropriate sound driver may be causing the problem.
	
	WORKAROUND
	==========
	
	Disable the system exit sound. To disable the sound, follow these steps:
	
	1. Choose the Sound icon in Control Panel. In the Events box, select Windows
	  Start or Windows Exit (depending on when the problem occurs).
	
	2. In the Files box, select <none>.
	
	3. Choose the OK button.
	
	You can accomplish the same thing by editing the WIN.INI file as follows.
	
	1. Open the WIN.INI file in a text editor (Windows Notepad, for example).
	
	2. Comment out the following line in the [sounds] section
	
	       SystemExit=chimes.wav,Windows Exit
	
	  by placing a semicolon in front of the line, as follows:
	
	        ;SystemExit=chimes.wav,Windows Exit
	
	MORE INFORMATION
	================
	
	Updated drivers are often available from the original equipment manufacturer
	(OEM).
	
	Windows may also hang on exit if there is a hardware conflict with some other
	device. Contact the sound card manufacturer to verify your sound card is
	correctly installed.
	
	Additional query words: 3.10 3.1 3.11 multimedia sounds card crashes crash hung stops stop
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
