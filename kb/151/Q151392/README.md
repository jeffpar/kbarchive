---
layout: page
title: "Q151392: Cannot Connect to MSN After Installing Pipeline"
permalink: /kb/151/Q151392/
---

## Q151392: Cannot Connect to MSN After Installing Pipeline

	Article: Q151392
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): appscomp kbmsn kbAppCompatibility
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Pipeline version 3.5, you may not be able to connect to MSN,
	The Microsoft Network. When you click Connect, all the boxes on the Sign-In
	screen, except Cancel, may be unavailable and the telephone number may not be
	dialed.
	
	CAUSE
	=====
	
	Pipeline version 3.5 installs its own version of the Wsock32.dll file in the
	Windows\System folder. This file is 57K in size. The original Wsock32.dll file
	(which is 65K in size) installed by MSN is renamed to Wsock32.ms.
	
	RESOLUTION
	==========
	
	The Pipeline Switcher program lets you switch between the two Wsock32.dll files.
	To use this program, follow these steps:
	
	1. Close the Sign-In screen and all Winsock programs.
	
	2. Run the Pipeline TCP/IP Switcher program.
	
	3. Click "Switch to using the original 32-bit Winsock."
	
	If the switch is successful, you see the message "The original Winsock has now
	been installed." If you receive an error message, Wsock32.dll is still in
	memory. Check the task list to make sure no Winsock programs are listed. If
	Rnaapp is listed, click Rnaapp and then click End Task. Then, try the Switcher
	program again.
	
	If the Pipeline TCP/IP Switcher program is not functioning properly, you can
	manually switch the Wsock32.dll files by following these steps:
	
	1. Rename the Wsock32.dll file in the Windows\System folder to Wsock32.old.
	
	2. Rename the Wsock32.ms file in the Windows\System folder to Wsock32.dll.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: msn
	
	======================================================================
	Keywords          : appscomp kbmsn kbAppCompatibility 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	
