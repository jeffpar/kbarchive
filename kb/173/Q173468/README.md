---
layout: page
title: "Q173468: Err Msg: Cmmgr32.exe Caused a Stack Fault in Module Kernel32.dll"
permalink: /kb/173/Q173468/
---

## Q173468: Err Msg: Cmmgr32.exe Caused a Stack Fault in Module Kernel32.dll

	Article: Q173468
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbmsn
	Last Modified: 21-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to connect to MSN, The Microsoft Network, you may receive one
	of the following error messages:
	
	  
	
	- Cmmgr32.exe caused a stack fault in module Kernel32.dll.
	
	- Cmmgr32.exe caused an invalid page fault in module Kernel32.dll.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- Your password list file may be damaged.
	
	- Connection Manager may be damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, use one of the following methods:
	
	Recreate password list file
	---------------------------
	
	1. Click Start, point to Find, and then click "Files or Folders".
	
	2. In the Named box, type *.pwl, and then click Find Now.
	
	3. In the list of found files, right-click each file, and then click Delete.
	  Continue until the list of found files is empty.
	
	4. Close the Find: Files Named *.pwl window.
	
	5. Restart the computer. The password list files are re-created automatically
	  when you log on to Windows 95.
	
	  NOTE: If you have installed Microsoft Windows 95 Service Pack 1, password
	  list files may be damaged even after you delete them and they are re-created
	  automatically. To resolve this issue, obtain the Mspwlupd.exe update file and
	  run it. You can obtain this update file from the following page on the
	  Microsoft site on the World Wide Web:
	
	  http://www.microsoft.com/windows95
	
	Remove and reinstall Connection Manager and Microsoft Internet Explorer
	-----------------------------------------------------------------------
	
	1. Click Start, point to Settings, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. On the Install/Uninstall tab, click Connection Manager, click Add/Remove, and
	  then click OK.
	
	4. Click Internet Explorer 3.02 or Internet Explorer 4.0, click Add/Remove, and
	  then click OK.
	
	5. Close Control Panel, and then restart the computer.
	
	6. Insert the MSN 2.5 CD-ROM into the CD-ROM drive. When the Welcome To MSN
	  screen appears, click Setup MSN.
	
	7. Follow the instructions on the screen to reinstall MSN.
	
	If the Welcome To MSN screen does not appear, use the following steps:
	
	1. Double-click My Computer.
	
	2. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	3. Double-click the file Setup.exe to run the MSN setup.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbmsn 
	Technology        : kbMSNSearch kbMSN252 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	
