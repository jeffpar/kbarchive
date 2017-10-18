---
layout: page
title: "Q84972: Windows Sound Events Not Occurring at Standard Points"
permalink: kb/084/Q84972/
---

## Q84972: Windows Sound Events Not Occurring at Standard Points

	Article: Q84972
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows version 3.1 allows you to assign waveform audio sounds to certain events
	through the Control Panel. These events are:
	
	  Default Beep
	  Exclamation
	  Windows Start
	  Windows Exit
	  Critical Stop
	  Question
	  Asterisk
	
	However, it is not possible to reliably assign these sounds to always occur at
	given points in a program. For example, it is not possible to always have the
	Exclamation sound occur when an error occurs.
	
	MORE INFORMATION
	================
	
	System sounds are dependent upon the application in which they are occurring. To
	produce a sound, an application needs to notify Windows that a sound is to
	occur, and then tell Windows which system sound to play. The application will
	specify one of the seven default system sounds, or any sound event that it has
	added to this list.
	
	This means that you cannot add sound events to the default list and have an
	application play that sound, unless the application has been specifically
	written to call that sound event.
	
	Additionally, applications have not standardized on when these sound events
	should occur. Therefore, one application may play the Default Beep sound when an
	error occurs while another application might play the Critical Stop sound.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
