---
layout: page
title: "Q75127: How to Modify the Command Prompt within MS-DOS Shell"
permalink: kb/075/Q75127/
---

## Q75127: How to Modify the Command Prompt within MS-DOS Shell

	Article: Q75127
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To modify the prompt when using the Command Prompt program item in MS-DOS
	version 5.0 or later Shell, do the following:
	
	1. Highlight the Command Prompt program item and choose Properties from the File
	  menu. Modify the Commands option to the following
	
	  <name>.BAT
	
	  where <name> is any filename you want to specify. The default is
	  COMMAND. <name>.BAT should replace COMMAND.
	
	2. Create the batch file <name>.BAT. It should include the following:
	
	     echo off
	     set pr=%prompt%           ; Saves the current prompt
	     prompt <message>%prompt%  ; Makes a new prompt
	     command                   ; Spawns a new COMMAND.COM file
	     prompt %pr%               ; Resets the prompt
	
	  <message> can be any characters or escape sequences you want to include
	  in the prompt. The prompt cannot be more than 127 characters in length.
	
	3. Type "EXIT" (without the quotation marks) to reset the prompt and return to
	  Shell.
	
	The above procedure will not modify the prompt when you use the SHIFT+F9=Command
	Prompt option. This method will return you to the current COMMAND.COM, leaving
	Shell resident.
	
	
	Additional query words: 5.00 5.00a 6.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
