---
layout: page
title: "Q142028: RUN.EXE: A Logon Script Exit Utility"
permalink: kb/142/Q142028/
---

## Q142028: RUN.EXE: A Logon Script Exit Utility

	Article: Q142028
	Product(s): Microsoft Windows NT
	Version(s): 2.2,2.2a,2.2b,2.2c,3.0,3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft LAN Manager, versions 2.2, 2.2a, 2.2b, 2.2c 
	- Microsoft Network Client for MS-DOS version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Local area network administrators often want users running MS-DOS clients (Lan
	Manager 2.2c, Network Client 3.0) to go directly into Microsoft Windows or to
	run some application immediately upon logging on. This is often attempted by
	executing the application at the end of a logon script. Unfortunately, memory
	problems are often experienced because logon scripts are spawned on a second
	copy of COMMAND.COM, and NET.EXE still resides in memory from the unfinished
	execution of NET LOGON.
	
	RUN.EXE is a utility in the Lan Manager Resource Kit (version 2.1) that allows
	you to specify a command to execute upon the completion of your logon script. It
	provides support similar to Novell NetWare's login script option:
	
	  EXIT "cmdline"
	
	
	RUN.EXE avoids the memory problems mentioned above by executing your command at
	the original MS-DOS prompt. It works with logon scripts in both the Lan Manager
	server and Windows NT server environments.
	
	MORE INFORMATION
	================
	
	HOW RUN.EXE IS USED
	-------------------
	
	The following files are included with RUN.EXE
	
	   Filename        Description
	   --------        -----------
	   RUN.EXE         Executable
	   README.TXT      This file
	
	Place RUN.EXE in your current working directory or somewhere in your path. At the
	end of your logon script add:
	
	  RUN <cmdline>
	
	where <cmdline> specifies the command line for the application that you
	want to start after you have logged in. <cmdline> is limited to 14
	characters (see "Important Notes" below).
	
	Example:
	
	Suppose you would like to have Windows start up after your logon script executes.
	Place RUN.EXE somewhere in your path, and add the following line to the end of
	your logon script:
	
	  RUN WIN
	
	Windows will immediately start after your NET LOGON command finishes, without the
	memory loss caused by NET.EXE and a second copy of COMMAND.COM running.
	
	HOW DOES RUN.EXE WORK?
	----------------------
	
	RUN.EXE simply takes the command line you specify and dumps it into the keyboard
	buffer. The keyboard buffer will be emptied at the first available opportunity.
	If you use RUN.EXE at the end of your logon script, the first opportunity will
	be after NET LOGON has finished executing. Therefore, your original MS-DOS
	prompt will receive the input.
	
	IMPORTANT NOTES
	---------------
	
	The keyboard buffer is limited to 16 characters. Therefore, because one character
	is taken for the line feed and another for the tail pointer, <cmdline> is
	limited to 14 characters. If more than 14 characters are specified, RUN.EXE will
	ignore them.
	
	RUN.EXE was designed to be run exclusively on MS-DOS. It is a real mode
	application that will not execute from OS/2. The whole reason for running
	RUN.EXE is lost in OS/2 since the memory problem is not an issue. Similarly you
	should be careful when logging in from Windows. Again the functionality of this
	utility in such an environment would be questionable. Limited tests have shown
	that RUN.EXE has no effect when logging on from Windows.
	
	If you need more than 14 characters to specify the command(s) that you need to
	execute, create a batch file and have RUN.EXE call your batch file. This would
	be useful if you wanted to do something like set a variety of environment
	variables.
	
	RUN.EXE writes directly to the keyboard buffer. Computers that are not fully
	IBM-compatible could have some problems with RUN.EXE. It has been successfully
	tested on a variety of AT-compatible computers as well as some PS/2's.
	
	Persistent Connections are restored after the logon script executes. If a
	Persistent Connection requires a password, the command line specified with
	RUN.EXE will be inserted at the password prompt and thus will not run at the
	MS-DOS command line. If you are using RUN.EXE, be careful that this does not
	happen. If you need to connect to a share that requires a password different
	from the one you logged on with, you should add the NET USE for this share to
	the batch file that RUN.EXE executes.
	
	Additional query words: winnt run.exe lmreskit
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbZNotKeyword kbLanManSearch kbNetworkClientSearch kbLanMan220 kbLanMan220a kbLanMan220b kbLanMan220c kbNetworkClient300DOS
	Version           : :2.2,2.2a,2.2b,2.2c,3.0,3.5,3.51
	
	=============================================================================
	
