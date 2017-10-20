---
layout: page
title: "Q117442: System Sounds Unavailable in Control Panel"
permalink: /kb/117/Q117442/
---

## Q117442: System Sounds Unavailable in Control Panel

{% raw %}

	Article: Q117442
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- When you choose the Sound icon in Control Panel, the Events and Files lists
	  and the Test button are unavailable even though the proper Windows sound card
	  driver is loaded and set up correctly.
	
	  -or-
	
	- The following error message appears when you try to run Sound Recorder:
	
	  Sound Recorder cannot record or play back because a sound driver is not
	  installed.
	
	CAUSE
	=====
	
	These situations can occur if the following line is missing from the [boot]
	section of the SYSTEM.INI file or is incorrect:
	
	       drivers=mmsystem.dll
	
	NOTES
	-----
	
	- Additional *.dll files may be present on the drivers= line.
	
	- Windows does not generate an error message at startup when the drivers= line
	  is missing.
	
	RESOLUTION
	==========
	
	To correct these problems, use a text editor, such as Microsoft Windows Notepad,
	to add or change the drivers= line to match the following:
	
	  drivers=mmsystem.dll
	
	Additional query words: 3.10 3.1 3.11 grey greyed gray grayed out dimmed corrupted drivers=mmsystem.dll.exe pc speaker pcspeaker
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
