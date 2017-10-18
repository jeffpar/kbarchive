---
layout: page
title: "Q110384: Direct Control of AVI Files from Viewer"
permalink: kb/110/Q110384/
---

## Q110384: Direct Control of AVI Files from Viewer

	Article: Q110384
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0,2.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, versions 2.0, 2.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes two methods to play an Audio-Video Interleaved (.AVI)
	file without a controller, and then have the .AVI window close when the .AVI
	file is done playing. You can then execute commands when the AVI window closes.
	
	Method 1 describes using the mciSendString() command from the MMSYSTEM.DLL that
	comes with the Windows 3.1 SDK (Software Development Kit). Method 2 describes
	how to use the standard Viewer ewX statement to play your .AVI file, and how to
	use hooks to be notified when the video finishes.
	
	METHOD 1
	--------
	
	The simplest way to play an .AVI file without a controller and have the AVI
	window close when the .AVI is done is to use the mciSendString() function from
	MMSYSTEM.DLL that comes with the Windows 3.1 SDK.
	
	NOTE: Using mciSendString() causes the .AVI file to be played in a window created
	by MMSYSTEM.DLL; the .AVI file will *not* be displayed in a regular pane.
	
	You could write a DLL function that calls mciSendString(), and call that DLL
	function from Viewer. To do this you would need to register your DLL function in
	the [CONFIG] section of your .MVP file. Or you could call mciSendString()
	directly from your Viewer title. In that case, you would need to register
	mciSendString() in the [CONFIG] section.
	
	To register the mciSendString() function in your [CONFIG] section, add the
	following line to the [CONFIG] section of your .MVP file:
	
	     RegisterRoutine("mmsystem","mciSendString","SUuu")
	
	See pages 5-10 and 5-74 of the Viewer "Technical Reference" for more information
	on using RegisterRoutine().
	
	You can start the .AVI file in many ways, including using topic entry commands,
	hot spot commands, buttons, and menu items. To create a button to play the
	COYOTE.AVI file (for example), add the following line to the [CONFIG] section of
	your .MVP file after the RegisterRoutine() function:
	
	     CreateButton(`btn_avi', `Play AVI', `mciSendString("open
	     coyote.avi",0,0,0):mciSendString("play coyote.avi
	     wait",0,0,0):mciSendString("close coyote.avi",0,0,0)')
	
	To start an .AVI file on topic entry, have the .AVI window close when the .AVI
	file finishes, and then jump to another topic, add the following topic entry
	commands:
	
	     !mciSendString("open coyote.avi",0,0,0); mciSendString("play
	     coyote.avi   wait",0,0,0); mciSendString("close coyote.avi",0,0,0);
	     JumpID("myfile.mvb<main","context_string")
	
	NOTE: Because the CreateButton() function is in the .MVP file, the multiple
	commands are separated by a colon (:). If you specify multiple commands in your
	.RTF file, they should be separated by a semicolon (;) instead. In .MVP files,
	the semicolon (;) character means the rest of the line is commented out.
	
	METHOD 2
	--------
	
	Method 2 uses a message hook to determine when the .AVI file is finished playing.
	If you play the .AVI file using an {ewX mvmci2, ViewerMCI...} statement, then
	Viewer's MVMCI2.DLL will ask the system to send an MM_MCINOTIFY message when the
	.AVI file is finished playing. You can put a message hook function in a DLL, and
	when the MM_MCINOTIFY message comes through, you could send the ClosePane()
	command to Viewer via the VwrCommand() Viewer API (Application Programming
	Interface) function.
	
	There is a sample in the Microsoft Software Library called VWRHOOK that uses a
	DLL to implement a message hook to trap MM_MCINOTIFY. If you call SetGMHook() in
	your [CONFIG] section, the hook function will receive a notification message
	whenever any MCI element is finished playing. The Windows SDK documentation for
	SetWindowHook() and SetWindowsHookEx() has more information on setting hooks.
	
	For additional information on the VWRHOOK sample, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q114557 SAMPLE: Executing Viewer Commands When MCI Finishes Playing
	
	Additional query words: 2.00 2.00a hotspot
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200 kbMMViewer200a
	Version           : :2.0,2.0a
	
	=============================================================================
	
