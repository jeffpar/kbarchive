---
layout: page
title: "Q74038: DOSKEY Macro to Search for File Text"
permalink: kb/074/Q74038/
---

## Q74038: DOSKEY Macro to Search for File Text

	Article: Q74038
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following DOSKEY macro searches all files in the current directory for the
	message text specified and displays the output a screen at a time. Any type of
	file will be searched, regardless of the file's extension. When the macro is
	executed, the name of each file being searched will be displayed along with the
	macro command. The macro output will be displayed one screen at a time, which
	you can examine to locate the message text you are searching for. Finally, the
	file "output" is deleted so that when using the macro again, the file output
	only represents one message search.
	
	To create this macro, enter the following at the command prompt:
	
	  " doskey search=for %a in (*.*) do c:\dos\FIND /i "$*" %a
	  $g$g output $t type output $b c:\dos\MORE $t del output " (without the
	  quotation marks)
	
	(Do not press ENTER until you have entered the whole macro.)
	
	To run this macro, type:
	
	  " SEARCH message " (without the quotation marks)
	
	The message does not require quotation marks and is not case sensitive. The
	output of the search is displayed one screen at a time. If the text is found, a
	line with the text will appear below the file. Make sure the FIND and MORE
	commands in the above search macro are referencing the MS-DOS 5.0 directory.
	Also, by using the FIND /i switch, the message search will not be case
	sensitive.
	
	MORE INFORMATION
	================
	
	For example, the following macro searches for the text "No available extended
	memory" in the current directory and displays the partial result of the
	command.
	
	First, change to the DOS directory that includes HIMEM.SYS, then enter the
	following command:
	
	  " SEARCH no available extended memory " (without the quotation marks)
	
	The following output appears:
	
	  ---------- HIMEM.SYS
	  ERROR: No available extended memory was found.
	
	The file the text was found in was HIMEM.SYS. The line that includes the message
	starts with "ERROR:..."
	
	A search with the abbreviated "message" field, such as "extended memory," will
	result in the same output as above. To make the message search case sensitive,
	remove the FIND /i switch.
	
	To use this macro every time you start your system, include the following command
	in your AUTOEXEC.BAT file:
	
	     doskey search=for %%a in (*.*) do c:\dos\FIND /i "$*" %%a
	     $g$g output $t type output $b c:\dos\MORE $t del output
	
	Notice that this batch file command is different from the previous command that
	is inserted at the command prompt. The difference is that an additional %
	(percent sign) is included before each "%a" so that the "%a" will be
	recognized.
	
	Reference(s):
	
	"Microsoft MS-DOS User's Guide and Reference," version 5.0, pages 175-181,
	448-453
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
