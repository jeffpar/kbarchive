---
layout: page
title: "Q269383: PRB: System Registry ErrMsg When Displaying VB/VBA References"
permalink: kb/269/Q269383/
---

## Q269383: PRB: System Registry ErrMsg When Displaying VB/VBA References

	Article: Q269383
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2000,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbOSWinNT kbOSWin2000 kbRegistry kbVBp kbVBp500 kbVBp600 kbGrpDSVB
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows 2000 Server 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0, on platform(s):
	   - Microsoft Windows NT Server version 4.0 
	   - Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you access the References dialog box in the Visual Basic integrated
	development environment (IDE) or any Visual Basic for Applications (VBA) enabled
	application, you receive the following error:
	
	  Error Accessing the System Registry
	
	Also, when you access from REGEDT32.exe, some registry keys are dimmed and
	inaccessible. For example:
	
	HKEY_CLASS_ROOT\TypeLib\{...}
	
	Other problems you may encounter with these Registry keys include:
	
	- You cannot delete these keys, not even from the local Administrator account.
	- You cannot Assign or View Permissions.
	- You cannot Take Ownership of the keys.
	
	CAUSE
	=====
	
	The cause of this problem is a full/Clean Installation of Crystal Decisions
	(formerly Seagate) Reports 8.0.0.371.
	
	Crystal Decisions Software has documented this issue with Crystal Reports version
	8.0.0.371 in their own Knowledge Base article:
	
	  'Error Accessing the System Registry' message after installing Crystal
	  Reports 8
	
	According to Crystal Decisions Software, this problem no longer occurs with
	Crystal Reports version 8.0.0.441 or higher.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	HKEY_CLASSES_ROOT is dynamic and is built on startup. The
	HKEY_LOCAL_MACHINE\Software\Classes key is read into memory and is accessible as
	HKEY_CLASSES_ROOT. If you add a key to HKLM\Software\Classes, it is immediately
	replicated to HKCR.
	
	Steps to Correct this Problem
	-----------------------------
	
	First you need to figure out which registry key or keys are affected. This can be
	done in two ways:
	
	1. Use REGEDT32.exe to scan for keys that are dimmed in
	  HKEY_CLASSES_ROOT\TypeLib and HKEY_CLASSES_ROOT\CLSID.
	
	2. Use the RegMon utility from www.sysinternals.com. Run the filtering processes
	  for Visual Basic, and then try accessing the References dialog box in Visual
	  Basic. When the error occurs, switch to RegMon and make note of the last keys
	  which were successfully read or written. (These should be from
	  HKEY_CLASSES_ROOT\TypeLib or HKEY_CLASSES_ROOT\CLSID.)
	
	You can then fix the permission problem in the following ways:
	
	1. Load REGEDT32 and locate the keys that are dimmed from the preceding step 1,
	  or the keys that you noted from step 2. (Note: If you used step 2, once you
	  locate the key, look at the key or sub-key that immediately follows it in the
	  Registry. If you did not have the appropriate permissions to access the key,
	  it would not have even been logged through the RegMon utility and, as such,
	  the entry you noted in step 2 will be the last successful read/write.
	  Therefore, the one that followed it caused the error to occur.
	
	2. On the Security menu, give the appropriate permissions to the key so that
	  you, and Visual Basic, can access it:
	
	   - Administrators - Full Control
	   - Everyone - Read
	   - System - Full
	   - Users - Read
	   - Modify the user list to suite your needs.
	
	3. Sometimes REGEDT32 is not able to access the key, and it gives you an error
	  stating that the security account information cannot be retrieved or found.
	  You can fix this in the following ways:
	
	  a. On the Control Panel, double-click the Services icon.
	
	  b. Verify that the Task Scheduler is running and start it if it is not.
	
	  c. Open a command prompt. (DOS Prompt) (Note: The window caption says Command
	     Prompt.)
	
	  d. Type the following command to schedule a new command prompt:
	
	"AT 13:10 /Interactive cmd.exe" (without the quotation marks)
	
	  e. Change 13:10 to whatever time you want the cmd.exe (command prompt) to
	     run: for example, one or two minutes from your current time.
	
	  f. Wait until this new command prompt starts. (Note: The window caption is
	     similar to C:\Winnt\System32\MSTask.exe.) If the command prompt fails to
	     start, please see Knowledge Base article Q193852 "Task Scheduler May Fail
	     to Run Job When Scheduled"
	
	     Because the Task Scheduler is running under the SYSTEM account, the new
	     command prompt is created running under the SYSTEM security context.
	
	  g. From the new command prompt, type the following, and then press enter:
	     "REGEDT32.EXE" (without the quotation marks) Because you start this
	     process from the SYSTEM command prompt, REGEDT32 is also running under the
	     SYSTEM security context.
	
	  h. Repeat the preceding step 2, and then reset the permissions.
	
	REFERENCES
	==========
	
	For additional information on Registry problems caused by the Crystal Reports
	8.0.0.371 installation, click the article numbers below to view the articles in
	the Microsoft Knowledge Base:
	
	  Q268553 PRB: Visual Studio Installation Problems if Crystal Reports 8 Is
	  Installed
	
	  Q259569 PRB: Installing Third-Party Product Breaks Win2000 MDAC Registry
	  Settings
	
	For additional information on a possible problem with Task Scheduler, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q193852 Task Scheduler May Fail to Run Job When Scheduled
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbOSWinNT kbOSWin2000 kbRegistry kbVBp kbVBp500 kbVBp600 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :2000,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
