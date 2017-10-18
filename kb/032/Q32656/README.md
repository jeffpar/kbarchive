---
layout: page
title: "Q32656: ANSI Escape Sequence ESC[nD Not Moving Cursor to the Left"
permalink: kb/032/Q32656/
---

## Q32656: ANSI Escape Sequence ESC[nD Not Moving Cursor to the Left

	Article: Q32656
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ANSI escape sequence for Cursor Left doesn't function correctly. When you
	type "PROMPT $e[2D ]" (without the quotation marks), the cursor moves all the
	way to the left-most column rather than moving back just two columns.
	
	CAUSE
	=====
	
	This behavior is by design. Each time you issue a PROMPT command, a carriage
	return/linefeed sequence is sent. So each time a PROMPT command is issued, the
	cursor is moved to column 1. If you then try to move two columns to the left,
	you are unable to do so because you are already at the farthest left column; the
	"ESC[nD" escape sequence has no effect if the cursor is in the farthest left
	column.
	
	WORKAROUND
	==========
	
	To avoid this situation, move the cursor in a batch file. For example, to move
	the cursor two columns to the left you would use the following escape sequence:
	
	  echo ESC[2D
	
	Additional query words: 6.22 3.30 4.00 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:3.x,4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
