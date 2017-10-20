---
layout: page
title: "Q169171: Long PATH Environment Variable Causes 16-bit Apps to Hang"
permalink: /kb/169/Q169171/
---

## Q169171: Long PATH Environment Variable Causes 16-bit Apps to Hang

{% raw %}

	Article: Q169171
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain 16-bit programs may stop responding (hang) or not run. When you look at
	Processes in Task Manager, it shows NTVDM at or around 100 percent CPU time.
	
	CAUSE
	=====
	
	This problem occurs when the PATH statement is approximately 200 characters or
	more in length.
	
	This problem has also been seen when security on the files in the
	%SystemRoot%\System32 folder has been made too restrictive. Specifically, the
	users running 16-bit programs must have at least Read (RX) access to all files
	in the folder and all subfolders. This is the configuration by default.
	
	RESOLUTION
	==========
	
	Use one of the following methods to resolve this problem:
	
	Method 1
	--------
	
	The PATH statement can be found in two locations. Shortening one or both
	statements should fix the problem.
	
	PATH in System Properties:
	
	1. In Control Panel, double-click the System icon. Click the Environment tab.
	
	2. Under System Variables, select PATH and shorten the value.
	
	3. Click Set, and then click OK.
	
	PATH in Autoexec.nt:
	
	1. Use Notepad to open Autoexec.nt, which is located in the
	  %SystemRoot%\System32\Autoexec.nt directory.
	
	2. Shorten any PATH= statement.
	
	3. Save Autoexec.nt.
	
	The NTVDM must be terminated before the new PATH will be used. To terminate the
	NTVDM process, go to task manager and select NTVDM. Click End Process.
	
	Method 2
	--------
	
	Increase the environment size in Config.nt:
	
	1. Use Notepad to open Config.nt, which is located in the %SystemRoot%\System32
	  directory.
	
	2. Add the following statement:
	
	     SHELL=%systemroot%\system32\command.com /e:2048
	
	This will increase the environment size to allow the path statement to remain at
	the current length. If problems persist, increase the e: parameter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	
	Additional query words: slow DOS hang VDM
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
