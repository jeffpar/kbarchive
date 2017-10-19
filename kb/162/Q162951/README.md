---
layout: page
title: "Q162951: SMS: How to Recover Remote Control Agent from Broken Mirror"
permalink: /kb/162/Q162951/
---

## Q162951: SMS: How to Recover Remote Control Agent from Broken Mirror

	Article: Q162951
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.2
	Operating System(s): 
	Keyword(s): kbnetwork kbtshoot smsremtshoot kbRemoteProg
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a computer running Windows NT Server has a mirrored boot partition, there may
	be problems with remote controlling that computer after the mirror is broken. If
	the client computer running Windows NT Server is started from the previously
	mirrored drive, the Systems Management Server Remote Control Agent (Wuser32.exe)
	does not start, because the registry is still pointing Wuser32.exe to the
	original drive letter.
	
	MORE INFORMATION
	================
	
	After the computer is started by using the fault tolerant startup floppy disk to
	recover the fault tolerant partition, it is necessary to change the drive letter
	designation for Wuser32.exe before the second restart.
	
	To correct this problem, perform the following steps:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	1. Run Registry Editor (Regedt32.exe).
	
	2. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	     SYSTEM\CurrentControlSet\Services\wuser32
	
	3. Change the string to the drive that Windows NT Server is now starting from:
	
	  Value Name: ImagePath
	  Data Type: REG_EXPAND_SZ
	  Data: <The new boot drive letter>:\WINNT\WUSER32.EXE
	
	4. Click OK and quit Registry Editor.
	
	At that point, it will be possible to start the Remote Control Service on the
	computer running Windows NT Server. Wuser32.exe will start, and it will be
	possible to remote control the computer. Once the mirrored partition is
	completely restored, and the Boot.ini file is changed back to the original
	configuration, it is necessary to repeat the above process to change the drive
	letter back.
	
	Additional query words: agent service helpdesk Manager
	
	======================================================================
	Keywords          : kbnetwork kbtshoot smsremtshoot kbRemoteProg 
	Technology        : kbSMSSearch kbSMS120
	Version           : winnt:1.2
	Issue type        : kbhowto
	
	=============================================================================
	
