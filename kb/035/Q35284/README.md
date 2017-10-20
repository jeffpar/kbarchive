---
layout: page
title: "Q35284: Order of Precedence in Locating Executable Files"
permalink: /kb/035/Q35284/
---

## Q35284: Order of Precedence in Locating Executable Files

{% raw %}

	Article: Q35284
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the following:
	
	- How COMMAND.COM finds executable files
	
	- The order of precedence involved in this search
	
	- How the order can be overridden in MS-DOS versions 4.x and later
	
	- The difference in filename recognition between COMMAND.COM and the MS-DOS
	  EXEC system call
	
	MORE INFORMATION
	================
	
	COMMAND.COM
	-----------
	
	COMMAND.COM can execute a file typed on the command line or as a line in a batch
	file.
	
	MS-DOS Versions Earlier Than Version 4.0
	----------------------------------------
	
	When a filename is given, whether or not an extension is supplied, COMMAND.COM
	keeps the base name only. (COMMAND.COM removes the filename extension if one
	exists [for example, "FILE" remains if the filename is "FILE.EXE"]). After it
	has the base name, COMMAND.COM looks in the following order for an executable
	file that has this name:
	
	  .COM  .EXE  .BAT
	
	If COMMAND.COM cannot find this file in the current directory of the current
	drive, it begins searching the directories specified in the PATH environment
	variable in the AUTOEXEC.BAT file. If such a file is not found, the following
	error message is displayed:
	
	  Bad command or file name
	
	For example, if there are three files in the current directory: FILE.COM,
	FILE.EXE, and FILE.BAT, and you try to execute any one of them by typing
	"FILE.COM" (without the quotation marks), "FILE.EXE" (without the quotation
	marks), "FILE.BAT" (without the quotation marks), or "FILE" (without the
	quotation marks), COMMAND.COM executes only FILE.COM, because this is the first
	file it finds.
	
	MS-DOS Versions 4.0 and Later
	-----------------------------
	
	In MS-DOS versions 4.0 and later, you can override the COM-EXE-BAT precedence by
	typing the command with the extension.
	
	For example, if there are three files in the current directory: FILE.COM,
	FILE.EXE, and FILE.BAT, and you try to execute any one of them by typing
	"FILE.COM" (without the quotation marks), "FILE.EXE" (without the quotation
	marks), or "FILE.BAT" (without the quotation marks), COMMAND.COM executes the
	one you specify. However, if no filename extension is given, the usual order of
	precedence is used (.COM, .EXE, and .BAT).
	
	One side effect of this behavior is that some incorrect or expedient ways of
	executing files no longer work. For example, in versions of MS-DOS earlier than
	4.0, you can execute FILE.BAT by typing the filename with a period following it
	"FILE." (without the quotation marks). However, in MS-DOS 4.0 and later, if you
	type "FILE." (without the quotation marks), MS-DOS searches for a file by this
	name, cannot find one, and returns a "bad command or file name" error message.
	
	MS-DOS Versions 5.0 and Later
	-----------------------------
	
	MS-DOS versions 5.0 and later search for files in the following order:
	
	  DOSKEY Macro  .COM  .EXE  .BAT
	
	For example, if there are three files in the current directory: FILE.COM,
	FILE.EXE, and FILE.BAT, and there is also a DOSKEY macro named FILE, the macro
	is given precedence and executed when FILE is run from the command line of the
	current directory. This is not true in earlier versions of MS-DOS, as there was
	no DOSKEY macro feature.
	
	Also, in MS-DOS versions 5.0 and later, DOSKEY macros have precedence over
	internal commands. To override a DOSKEY macro, type one or more spaces before
	the command.
	
	EXEC Function
	-------------
	
	The MS-DOS EXEC function (interrupt 21h service 4Bh) does not understand filename
	extensions; therefore, it simply takes the name of the file specified when
	invoked and tries to execute it.
	
	This lack of filename information is an advantage to programs that have files
	that are executable. Such files are device drivers (which normally have the
	extension .SYS) or overlay files (which normally have the extension .OVL).
	COMMAND.COM cannot execute these files; only programs that explicitly call the
	EXEC function can run such programs.
	
	The EXEC function understands only the files that in most cases have .COM and
	.EXE extensions. It is not able to execute .BAT files; these files are
	specifically "executed", one line at a time, by COMMAND.COM.
	
	Additional query words: 6.22 4.00 4.00a 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
