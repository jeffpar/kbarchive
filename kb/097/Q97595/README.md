---
layout: page
title: "Q97595: MS-DOS 6.0 and 6.2: PATH Not Limited to 128 Characters"
permalink: /kb/097/Q97595/
---

## Q97595: MS-DOS 6.0 and 6.2: PATH Not Limited to 128 Characters

	Article: Q97595
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): kbdisplay kbenv msdos
	Last Modified: 10-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In MS-DOS 6.0, 6.2, and 7.0 (included in Windows 95) the 128-character
	limitation of the MS-DOS PATH environment variable does not exist. To create a
	path with more than 128 characters, use the PATH command in the CONFIG.SYS file
	instead of in the AUTOEXEC.BAT file.
	
	NOTE: When setting the path in the CONFIG.SYS file, you must use a SET command.
	For example:
	
	  set path=c:\dos;c:\windows;
	
	MORE INFORMATION
	================
	
	There are some restrictions on this method of using PATH. Once you set the path
	in the CONFIG.SYS file, you cannot change it later. You cannot use the %PATH%
	variable to append the path onto itself or run another batch file to modify the
	path. If you do either of these, the path is truncated to the first 128
	characters.
	
	Also, some applications do not have the ability to use a long path. For example,
	the MS-DOS command SET does not display more than the first 128 characters of
	the path. To see the complete path, use the OS option of Microsoft Diagnostics
	(MSD.EXE). If you have problems using a third-party application and a long path,
	contact the manufacturer of the application for possible solutions.
	
	
	Paths Longer Than 256 Characters
	--------------------------------
	
	There is one problem with paths longer than 256 characters. If you clear the PATH
	variable with the SET command as follows
	
	  set path=
	
	any characters beyond the 256-limit appear in your environment space,
	unassociated with any environment variables. For example, if you have a path of
	260 characters, such as
	
	  path=c:\dos;c:\...work
	
	and you clear it with the SET command, your environment space still contains the
	last four characters. If you type the SET command alone to view your
	environment, you see something similar to the following:
	
	  work
	  PROMPT=$P$G
	  COMSPEC=C:\DOS\COMMAND.COM
	  TEMP=C:\TEMP
	
	Microsoft has confirmed this to be a problem in MS-DOS versions 6.0, 6.2, and
	6.21. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	If the Path Is in the CONFIG.SYS File
	-------------------------------------
	
	If you place the path statement in the CONFIG.SYS file, you may need to manually
	update the path whenever you install a new program. Many software packages use a
	setup utility to install the program to the hard disk drive. Generally, these
	setup utilities modify the AUTOEXEC.BAT file by adding a directory name to the
	path statement. If the path statement is located in the CONFIG.SYS file, the
	setup utility cannot find it and creates a new path statement in the
	AUTOEXEC.BAT file. When the system is started, the path in the AUTOEXEC.BAT file
	replaces the path loading from the CONFIG.SYS file, leaving you with a path
	pointing to only one directory.
	
	To work around this problem, each time you install a program, you must add the
	program's directory name to the path in the CONFIG.SYS file and erase the path
	line in the AUTOEXEC.BAT file.
	
	Additional query words: maximum length w_bob win9x win95 win98
	
	======================================================================
	Keywords          : kbdisplay kbenv msdos 
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
