---
layout: page
title: "Q133441: Cannot Copy File to Plus Hard Card Drive"
permalink: /kb/133/Q133441/
---

## Q133441: Cannot Copy File to Plus Hard Card Drive

	Article: Q133441
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to copy a file in Windows Explorer to a Plus Hard Card XL II drive,
	you may receive a blue error screen with the following error message:
	
	  Disk Write Error, unable to write to drive <X>:, press any key to
	  continue
	
	This error occurs despite the fact that the Plus Hard Card XL II drive is visible
	in Windows Explorer.
	
	CAUSE
	=====
	
	The real-mode driver for the Plus Hard Card XL II is not being loaded in the
	Config.sys file.
	
	RESOLUTION
	==========
	
	Use any text editor (such as Notepad) to edit the Config.sys file. Add the
	following line to the file
	
	  device=<path>:\atdosxl.sys
	
	where <path> is the path to the Atdosxl.sys file. After you save and close
	the Config.sys file, restart your computer.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
