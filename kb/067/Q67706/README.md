---
layout: page
title: "Q67706: Using MS-DOS Edlin Utility to Edit Text Files"
permalink: kb/067/Q67706/
---

## Q67706: Using MS-DOS Edlin Utility to Edit Text Files

	Article: Q67706
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article outlines how to start and use Edlin, the MS-DOS file editing
	utility.
	
	MORE INFORMATION
	================
	
	1. At the MS-DOS prompt, type "EDLIN <filename>" (without the quotation
	  marks). If EDLIN.COM and the file you want to edit are not in the root
	  directory or in the MS-DOS path, enter the full path to each.
	
	  For example:
	
	  C:\DOS\EDLIN D:\MYFILE
	
	  EDLIN.COM uses the asterisk as a prompt. To view the first 23 lines of your
	  file, type L at the prompt. Each line of the file will be listed with a
	  number next to it.
	
	2. To edit a line, type the number of the line at the prompt and press ENTER. A
	  copy of the line will be displayed and a blank line with the line number will
	  displayed underneath it. If you press ENTER now, no changes will be made to
	  the line. To begin editing, start typing and press ENTER to keep changes and
	  return to the prompt.
	
	3. To remark a line out, do the following:
	
	  a. Type the number of the line at the prompt and press ENTER.
	
	  b. Press INS.
	
	  c. Type "rem" (without the quotation marks).
	
	  d. Press F3 (this will insert the original text).
	
	  e. Press ENTER.
	
	4. To save your changes to the file, type "e" (without the quotation marks) at
	  the prompt. Edlin will save the file and end the session, returning you to
	  MS-DOS.
	
	  NOTE: To exit Edlin without saving the changes to your file, type q at the
	  prompt and press ENTER. When prompted, type y to abort the editing session.
	
	EDLIN Commands
	--------------
	
	The following information is a list of EDLIN commands and their functionality.
	
	MS-DOS Command: EDLIN <Filename>
	
	Display Commands    Definition
	----------------    ----------
	
	L  LIST:            Displays listing of [RANGE] of lines. If [RANGE] is
	  [RANGE] L        not specified, L displays entire file or first 23
	                   lines.
	
	P  PAGE:            Displays listing of [RANGE] of lines. If [RANGE] is
	  [RANGE] p        not specified, p displays entire file. This differs
	                   from LIST in that PAGE changes the current line to
	                   be the last line.
	
	S  SEARCH:            Searches [RANGE] of lines for [STRING].
	  [RANGE] s [STRING]
	
	Editing Commands              Definition
	----------------              ----------
	
	C  copy:                      Copies [RANGE] of lines to [LINE].
	  [RANGE],[LINE],[NUMBER] c  [NUMBER] specifies how many copies
	                             to do.
	
	D  DELETE:                    Deletes [RANGE] of lines.
	  [RANGE] d
	
	I  INSERT:                    Inserts new lines beginning at [LINE].
	  [LINE] i                   Use CTRL+C to exit insert mode.
	
	M  MOVE:                      Moves [RANGE] of lines to position [LINE].
	  [RANGE],[LINE] m
	
	15 LINE EDIT:                 Allows editing of line.
	  [LINE]
	
	R  REPLACE:                     Searches [RANGE] for [STRING1] and
	  [RANGE] r [STRING1][STRING2] replaces it with [STRING2].
	
	Disk Commands                   Definition
	-------------                   ----------
	
	A  APPEND:
	  [NUMBER] a                   Reads [NUMBER] of lines from disk
	                               into memory.
	
	T  TRANSFER:                       Merges [FILE] into current document
	  [LINE] t [DRIVE:][\PATH][FILE]  at [LINE].
	
	W  WRITE:                       Writes [NUMBER] of lines onto disk.
	  [NUMBER] w
	
	Quit Options    Definition
	------------    ----------
	
	Q  QUIT:        Quits Edlin without saving changes.
	E  END:         Quits Edlin after saving changes.
	
	Additional query words: 3.0 3.00 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
