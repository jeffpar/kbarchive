---
layout: page
title: "Q195364: Err Msg: Mcdetect Caused an Invalid Page Fault in Msvcrt40.dll"
permalink: kb/195/Q195364/
---

## Q195364: Err Msg: Mcdetect Caused an Invalid Page Fault in Msvcrt40.dll

	Article: Q195364
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.51
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you connect to MSN, The Microsoft Network, you may receive the following
	error message:
	
	  Mcdetect caused an Invalid Page Fault in module Msvcrt40.dll.
	
	CAUSE
	=====
	
	This behavior can occur if any of the following files are missing or damaged:
	
	- Mfc40.dll
	
	- Msvcrt40.dll
	
	- Olepro32.dll
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Click Start, point to Programs, and then click Control Panel.
	
	2. Double-click Add/Remove Programs.
	
	3. Double-click Microsoft Internet Explorer 4.0, click "Uninstall Internet
	  Explorer 4.0 and all its components," and then click OK.
	
	4. Follow the instructions on the screen to remove Internet Explorer. If you are
	  prompted to restart the computer, do so.
	
	5. Click Start, point to Find, and then click Files Or Folders.
	
	6. In the Named box, type "mfc40.dll msvcrt40.dll olepro32.dll" (without
	  quotation marks), and then click Find Now.
	
	7. In the list of found files, right-click the Mfc40.dll file, and then click
	  Rename.
	
	8. Type "mfc40.old" (without quotation marks), and then press ENTER.
	
	9. In the list of found files, right-click the Msvcrt40.dll file, and then click
	  Rename.
	
	10. Type "msvcrt40.old" (without quotation marks), and then press ENTER.
	
	11. In the list of found files, right-click the Olepro32.dll file, and then
	  click Rename.
	
	12. Type "olepro32.old" (without quotation marks), and then press ENTER.
	
	13. Close the Find: Files Named Mfc40.dll Msvcrt40.dll Olepro32.dll window.
	
	14. Insert the MSN CD-ROM into your CD-ROM drive. Press and hold down the SHIFT
	  key as you insert the CD-ROM to prevent the MSN Setup program from starting
	  automatically.
	
	15. Double-click the My Computer icon on the desktop.
	
	16. Right-click the MSN (CD-ROM drive) icon, and then click Explore.
	
	17. Double-click the Ie401 folder.
	
	18. Double-click the Ie4setup.exe file, and then follow the instructions on the
	  screen to reinstall Internet Explorer 4.0. if you are prompted to restart
	  the computer, do so.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n. msiew95
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbmsn 
	Technology        : kbMSNSearch kbMSN251
	Version           : WINDOWS:2.51
	Issue type        : kbprb
	
	=============================================================================
	
