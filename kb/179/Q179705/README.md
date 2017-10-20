---
layout: page
title: "Q179705: Unable to Install Microsoft TCP/IP"
permalink: /kb/179/Q179705/
---

## Q179705: Unable to Install Microsoft TCP/IP

{% raw %}

	Article: Q179705
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1,2,2.1
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1, 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Network tool in Control Panel to install Microsoft Transmission
	Control Protocol/Internet Protocol (TCP/IP), you may be able to select Microsoft
	TCP/IP from the list of available protocols, but it may not appear in the list
	of installed components.
	
	CAUSE
	=====
	
	This behavior can occur if the Mstcp.dll file located in the Windows\System
	folder is missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Rename the Mstcp.dll file (if it exists). To do so, follow these steps:
	
	  a. Click Start, point to Find, and then click Files Or Folders.
	
	  b. In the Named box, type "mstcp.dll" (without the quotation marks), and then
	     click Find Now.
	
	  c. If the Mstcp.dll file is found, right-click it, and then click Rename. If
	     the Mstcp.dll file is not found, skip to step E.
	
	  d. Type a new name for the Mstcp.dll file (such as Mstcp.xxx), and then press
	     ENTER.
	
	  e. Close the Find window.
	
	2. Extract a new copy of the Mstcp.dll file from your original Windows 95 disks
	  or CD-ROM to the Windows\System folder. The Mstcp.dll file is located in the
	  following locations:
	
	   - The Precopy1.cab cabinet file on the Windows 95 and Windows 95 OEM Service
	     Release 2 (OSR2) CD-ROM.
	
	   - The Precopy1.cab cabinet file on disk 1 of the original Windows 95 DMF
	     floppy disks.
	
	   - The Precopy2.cab cabinet file on disk 2 of the original Windows 95 non-DMF
	     floppy disks.
	
	  For information about using the Extract tool, please see the following article
	  in the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	3. Restart your computer.
	
	Additional query words: corrupt
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR2 kbWin95OPKOSR1 kbWin95OPKOSR210
	Version           : :1,2,2.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
