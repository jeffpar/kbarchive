---
layout: page
title: "Q101764: Scenes: Communication Programs May Fail"
permalink: /kb/101/Q101764/
---

## Q101764: Scenes: Communication Programs May Fail

{% raw %}

	Article: Q101764
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:1.0,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Scenes (all collections), versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using a third-party communications program to download files from
	CompuServe or any bulletin board service (BBS), the connection may fail when
	Microsoft Scenes starts up. The same problem may occur if you are uploading
	files to CompuServe or any BBS when Microsoft Scenes starts up.
	
	CAUSE
	=====
	
	Microsoft Scenes for Windows requires most of the CPU time when the screen saver
	is starting up. Because most third-party communications programs also require
	the same amount of CPU time, the connection may be lost.
	
	WORKAROUND
	==========
	
	To correct this problem, do the following:
	
	1. In Control Panel, choose the 386 Enhanced icon.
	
	2. Under Device Contention, change the Idle setting from 1 to 999.
	
	3. Change the Minimum Time Slice setting to 1.
	
	4. Modify the [386Enh] section of the System.ini file to match the following
	  text
	
	        [386Enh]
	        COM<x>BUFFER=256
	        COM<x>FIFO=ON
	        COM<x>PROTOCOL=XOFF
	        PAGEBUFFER=32
	
	  where <x> is the number of the communication serial port.
	
	For more information about how to perform this task in Windows, see your Windows
	printed documentation or online Help.
	
	Additional query words: aol comm modem msn msscenes procomm screen saver screensaver
	
	======================================================================
	Keywords          :  
	Technology        : kbScenesSearch kbScenes100 kbScenes200
	Version           : WINDOWS:1.0,2.0
	
	=============================================================================
	

{% endraw %}
