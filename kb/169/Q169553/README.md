---
layout: page
title: "Q169553: Allowed Network Protocols Section Missing in Dial-Up Networking"
permalink: /kb/169/Q169553/
---

## Q169553: Allowed Network Protocols Section Missing in Dial-Up Networking

	Article: Q169553
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool kbui dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Server Types tab in a Dial-Up Networking connectoid's
	properties, the Allowed Network Protocols section may be missing.
	
	Also, you may receive the following error message when you try to connect with
	Dial-Up Networking:
	
	  There was no answer at the number you are dialing.
	
	CAUSE
	=====
	
	This behavior can occur when you install Dial-Up Networking 1.2 Beta for Windows
	95, reinstall Windows 95, and then click Yes when you are prompted to keep newer
	files. Dial-Up Networking 1.2 Beta replaces the Windows 95 Rasapi32.dll file.
	
	RESOLUTION
	==========
	
	Replace the Rasapi32.dll file. To do this, perform the following steps:
	
	1. Click the Start button, point to Programs, and then click Windows Explorer.
	
	2. In the Windows\System folder, use the right mouse button to click the
	  Rasapi32.dll file, and then click Rename.
	
	3. Rename the file to Rasapi32.xxx.
	
	4. Extract a new copy of the Rasapi32.dll file from the Win95_10.cab cabinet
	  file on your Windows 95 CD-ROM or the original Windows 95 DMF disks, or from
	  the Win95_16.cab cabinet file on the original Windows 95 non-DMF disks to the
	  Windows\System folder.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	5. Restart your computer.
	
	Additional query words: pptp
	
	======================================================================
	Keywords          : kbtool kbui dun win95 kbDialUp 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
