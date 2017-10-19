---
layout: page
title: "Q127960: PC WRmt: Err Msg: Mail Driver Could Not Be Activated..."
permalink: /kb/127/Q127960/
---

## Q127960: PC WRmt: Err Msg: Mail Driver Could Not Be Activated...

	Article: Q127960
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Mail System Selector, included with version 3.2 of
	Microsoft Mail Remote for Windows, you may receive the following error:
	
	  Mail driver could not be activated because <path>\<file> could
	  not be found
	
	where <path> is the location of your Windows directory and <file>
	could be one of the following files:
	
	  MSRMTUI.DLL
	  MSSFS.DLL
	
	MSRMTUI.DLL is usually the file displayed in the error message when you change
	from the Microsoft Mail for PC Networks driver to the Windows Remote driver.
	
	MSSFS.DLL is usually the file displayed when you change from the Mail Remote
	driver to the PC Networks driver.
	
	CAUSE
	=====
	
	This problem is caused when you start Windows from either a batch file, NetWare
	login script, or the command prompt with the command line such as,
	
	  C:\WINDOWS\WIN
	
	where C:\WINDOWS is the path to your Windows directory.
	
	RESOLUTION
	==========
	
	NOTE: If you exit and restart Windows, the System Selector may function
	properly.
	
	Start Windows with one of the following methods:
	
	1. Verify the Windows directory is on the PATH= statement in the AUTOEXEC.BAT
	  file, and start Windows from the root directory.
	
	2. Change to the Windows directory before you launch Windows.
	
	For example,
	
	If Windows (WIN.COM) is started from a NetWare login script or batch file such
	as,
	
	  f:login
	  c:\windows\win
	
	then change the entries similar to the following:
	
	  f:login
	  c:
	  win
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	Remote for Windows. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The file in the error message is usually the first file listed on the Files=
	line of the [Transport] section of the FILES.INI file.
	
	If you are using the System Selector to change from the PC Networks driver to
	Remote driver, the specific FILES.INI used is the \<Windows Path>
	\MSMAIL\MSRMT directory. If you copy the file from the error message to your
	Windows directory without re-starting Windows, you will receive a similar error
	message when you use the System Selector again. However, the specific file
	listed will be the next file on the Files= line.
	
	When you change from the Remote driver to the PC Networks driver, the specific
	FILEL.INI used is from the \<Windows Path>\MSMAIL\MSMAIL subdirectory.
	
	Additional query words: 3.20 novell
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
