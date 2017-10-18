---
layout: page
title: "Q86264: Cannot Destroy Default Windows Help Menus and Buttons"
permalink: kb/086/Q86264/
---

## Q86264: Cannot Destroy Default Windows Help Menus and Buttons

	Article: Q86264
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A help file built for version 3.1 of the Microsoft Windows Help application can
	extend the Windows Help application via a number of built-in macro commands.
	These macros allow the help file author to create a new menu item or button and
	to delete an added item once it is no longer needed.
	
	However, one cannot use the DeleteItem and DestroyButton macros to remove a
	standard menu item from the Windows Help application's menus or to remove a
	button from the standard button bar.
	
	The standard menu items are fixed by the Windows Help application; however, one
	can modify the behavior of the standard buttons via the ChangeButtonBinding
	macro.
	
	For more information on Windows Help macros, see Section 15.4 (starting on page
	302) of the "Microsoft Windows Software Development Kit: Programmer's Reference,
	Volume 4: Resources" manual or the MACROHLP application provided with the
	Microsoft Windows Software Development Kit (SDK) in the advanced samples
	directory (by default, C:\WINDEV\SAMPLES).
	
	Additional query words: 3.10 WinHelp Compiler HC31 HC31.EXE HCP HCP.EXE
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
