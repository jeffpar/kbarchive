---
layout: page
title: "Q104059: PC WSPlus: Local .CAL Misplaced Moving to Empty Floppy Drive"
permalink: /kb/104/Q104059/
---

## Q104059: PC WSPlus: Local .CAL Misplaced Moving to Empty Floppy Drive

	Article: Q104059
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, when you move your
	local schedule file (.CAL) to a floppy disk drive that does not contain a floppy
	disk and you subsequently insert a floppy disk to complete the move procedure,
	your local file is moved to an unspecified, seemingly random location (including
	one of the servers to which you are connected) instead of to the floppy disk.
	
	RESOLUTION
	==========
	
	To prevent this problem, be sure to insert a floppy disk into the drive before
	you choose the Move Local File command from the File menu in Schedule+ to move
	your local file to a floppy disk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows versions 3.0
	and 3.1. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you choose drive A as the destination drive for the move and no floppy disk
	is currently in that drive, you will receive the following message:
	
	  <filename> This file name is invalid.
	
	When you insert a floppy disk and proceed with the move procedure, everything
	seems to work, until you try to find your local file. It may not be on the
	floppy disk after all; it may be on one of the servers you are currently
	connected to.
	
	This behavior is not specific to Microsoft Schedule+. You will experience similar
	results with Windows Notepad. For example, if you are working with Notepad and
	attempt to save a Notepad file to a floppy disk drive using the Save As command
	from the File menu, the file may be saved in a random location if there is no
	floppy disk in the drive.
	
	Additional query words: schedule plus 1.00 1.00a misplaced missing
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
