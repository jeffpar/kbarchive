---
layout: page
title: "Q89233: Novell Login Script, Mapping Drives, and Pathing with Windows"
permalink: kb/089/Q89233/
---

## Q89233: Novell Login Script, Mapping Drives, and Pathing with Windows

	Article: Q89233
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:1.x,2.03,2.1,2.11,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 18-DEC-2000
	
	1.x 2.03 2.10 2.11 3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbnetwork kbdisplay kb3rdparty kbusage kbprb
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 1.1, 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Novell recommends mapping drives and setting a path on a Novell Network by:
	
	1. Using the Map Root command to map each drive.
	
	2. Using the MS-DOS SET PATH command to set a MS-DOS path variable to avoid
	  having the path overwritten by the login script.
	
	  You can also avoid this problem as follows:
	
	   - Configure your AUTOEXEC.BAT file to log you onto the network and then
	     execute the MS-DOS PATH statement.
	
	     -or-
	
	   - Log on manually after the AUTOEXEC.BAT file and then run a batch (.BAT)
	     file after logging on to restore the path.
	
	Using this method resolves pathing problems with a search drive.
	
	
	MORE INFORMATION
	================
	
	Map Root
	--------
	
	The Map Root command is an addition to the Map command in version 3.01 of the
	Novell NetWare shell. It allows directories to be mapped as the root of a
	logical drive, making it impossible to change the directory to a parent
	directory. The Map Root command is used with the same syntax as the Map command
	(see below).
	
	MS-DOS SET PATH
	---------------
	
	The MS-DOS SET PATH command is used in Novell to define an MS-DOS variable in
	memory. By using the MS-DOS SET PATH command, an MS-DOS-type path variable is
	created that will be easier to use than a Novell search drive. Novell requires
	that the path variable be placed in quotation marks and that a backslash (\) be
	preceded by a backslash (that is, \\) to be properly recognized (see below).
	
	This variable has the same limitations as a variable set from MS-DOS. A shell
	command may be required in the CONFIG.SYS file to provide enough environment
	space, and the variable may not exceed 128 characters.
	
	A Sample Login Script
	---------------------
	
	In the following sample, COUNT is the name of the server and the paths being
	mapped are:
	
	- F:\PUBLIC A public directory
	
	- F:\USER\JOHN\WIN31 The Windows user's directory
	
	- F:\USER\JOHN The user's directory
	
	- F:\WIN31 The shared Windows directory
	
	     MAP ROOT F: = COUNT\SYS:\PUBLIC
	     MAP ROOT S: = COUNT\SYS:\USER\JOHN\WIN31
	     MAP ROOT U: = COUNT\SYS:\USER\JOHN
	     MAP ROOT W: = COUNT\SYS:\WIN31
	     COMSPEC = C:\COMMAND.COM
	     DRIVE S:
	     DOS SET PATH = "C:\\;C:\\DOS;F:\\;S:\\;U:\\;W:\\;"
	
	Using this Login script returns a path variable similar to the one below when the
	Set command is issued:
	
	    path C:\;C:\DOS;F:\;S:\;U:\;W:\;
	
	The Novell product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding the product's
	performance or reliability.
	
	REFERENCES
	==========
	
	Novell DOS/Windows Workstation Update
	
	Additional query words: 3.11 3.00 3.00a 3.10 3rdparty
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin110 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:1.x,2.03,2.1,2.11,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
