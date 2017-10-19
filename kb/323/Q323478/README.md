---
layout: page
title: "Q323478: PRB: You Cannot Debug Through a Terminal Server Session"
permalink: /kb/323/Q323478/
---

## Q323478: PRB: You Cannot Debug Through a Terminal Server Session

	Article: Q323478
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to attach a native debugger over Terminal Services to a process
	that runs in another WinStation (including system processes), you receive the
	following error message:
	
	  Win32 error 5
	  "Access is denied."
	
	Also, if you run AutoDump+ (which scripts the cdb.exe debugger) in -crash mode,
	you receive an error message similar to the following:
	
	  Autodump+ has detected that you are attempting to run in "Crash" mode, but
	  this account is currently logged into terminal server session ID:RDP-TCP#8.
	  "Crash" mode (invoked via the -crash switch) does not work inside a terminal
	  server session. To run Autodump+ in "Crash" mode, please log in locally at
	  the console.
	
	CAUSE
	=====
	
	The debugger cannot attach to a process that runs in another WinStation.
	
	RESOLUTION
	==========
	
	To work around this problem, you can attach noninvasively by using the -pv
	switch. Alternatively, you can schedule a task remotely by using the Task
	Manager or the AT.exe utility. You can either schedule the debugger to run, or
	you can schedule a remoted Cmd window.
	
	To Use the Task Manager:
	------------------------
	
	1. Start Windows Explorer, and then locate \\remotemachinename.
	
	2. Double-click the Scheduled Tasks icon.
	
	3. On the File menu, click New, and then click Scheduled Task.
	
	4. Give the new task a name, and then double-click the task to set the
	  properties.
	
	5. In the Run box, type one of the taskcommands described below.
	
	6. On the Schedule tab, set the time for the task to start.
	
	  NOTE: Make sure you give a username and a password when you are prompted.
	
	To Use the AT.exe Utility:
	--------------------------
	
	1. From the command prompt, type:
	
	  "at.exe \\remotemachinename 12:00 taskcommand" (without the quotation marks)
	
	2. Replace 12:00 with the time to start the task.
	
	3. Replace taskcommand with one of the taskcommands below:
	
	- To start your debugger directly (for example, adplus in -crash mode):
	
	c:\winnt\system32\cscript.exe "c:\program files\debugging tools for
	windows\adplus.vbs" -crash -iis -quiet
	
	NOTE: When you start adplus.vbs remotely, remember to use the -quiet switch and
	to check the .log file for status.
	
	- To start a remoted Cmd window:
	
	   - "c:\program files\debugging tools for windows\remote.exe" /s cmd
	     myremotedcmd
	   - To connect from the client, you can run remote /c remotemachinename
	     "myremotedcmd".
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: kbWinNT
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbOSWin2000 kbOSWinSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
