---
layout: page
title: "Q169493: Host Drive Shares Still Available After Host Drive Is Hidden"
permalink: kb/169/Q169493/
---

## Q169493: Host Drive Shares Still Available After Host Drive Is Hidden

	Article: Q169493
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you share the host drive, or folders on the host drive, for a drive
	compressed with DriveSpace and then hide the host drive, the shares on the host
	drive are still viewable on the network.
	
	CAUSE
	=====
	
	The host drive is only hidden locally.
	
	RESOLUTION
	==========
	
	Disable sharing on the hidden host drive by following these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	2. Click the letter of the hidden drive, and then click Properties on the Drive
	  menu.
	
	3. Click the Hide This Host Drive check box to clear it.
	
	4. Click OK.
	
	5. Close DriveSpace.
	
	6. In My Computer or Windows Explorer, double-click the host drive to open it.
	
	7. Locate the shares for host drive.
	
	8. Use the right mouse button to click the shared drive or folder, and then
	  click Sharing on the menu that appears.
	
	9. Click Not Shared, and then click OK.
	
	Or, you can hide the share(s) on the network. To do this, follow these steps:
	
	1. Follow steps 1-8 above.
	
	2. Add a dollar sign character ($) to the end of the share name, and then click
	  OK.
	
	If you want to rehide the host drive, follow these steps:
	
	1. Click the Start button, point to Programs, point to Accessories, point to
	  System Tools, and then click DriveSpace.
	
	2. Click the letter of the host drive, and then click Properties on the Drive
	  menu.
	
	3. Click the Hide This Host Drive check box to select it.
	
	4. Click OK.
	
	5. Close DriveSpace.
	
	======================================================================
	Keywords          : kbenv kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
