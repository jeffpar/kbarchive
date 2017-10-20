---
layout: page
title: "Q149826: Cannot Add The Microsoft Network Online Service to Profile"
permalink: /kb/149/Q149826/
---

## Q149826: Cannot Add The Microsoft Network Online Service to Profile

{% raw %}

	Article: Q149826
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0,2.5,95
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a new Microsoft Exchange profile, the The Microsoft Network
	Online Service information service may not be an option. Or, the Remote Mail
	command on the Tools menu may be unavailable in Microsoft Exchange.
	
	CAUSE
	=====
	
	This behavior can occur for any of the following reasons:
	
	- These symptoms can occur if the Moscfg32.dll, Mosabp32.dll, or Mosrxp32.dll
	  file is missing or damaged.
	
	
	- MSN, The Microsoft Network is not installed on your computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the appropriate method:
	
	Method 1
	--------
	
	
	NOTE: If the MSN 2.0 CD-ROM is available, run the Msn13.exe file from the CD-ROM
	to install the Moscfg32.dll, Mosabp32.dll, and Mosrxp32.dll files to their
	correct locations. Extraction of the files is not necessary.
	
	If the MSN 2.0 CD-ROM is unavailable, extract a new copy of the Moscfg32.dll,
	Mosabp32.dll, and Mosrxp32.dll files from your original Windows 95 CD-ROM or
	disks. to do so, follow these steps:
	
	1. If the Moscfg32.dll, Mosabp32.dll, or Mosrxp32.dll files exist in the
	  Windows\System folder, rename them so they have an .xxx extension.
	
	2. Extract a new copy of the Moscfg32.dll, Mosabp32.dll, and Mosrxp32.dll files
	  from your original Windows 95 CD-ROM or disks to the Windows\ System folder.
	  These files are located in the Win95_07.cab cabinet file on the Windows 95
	  CD-ROM or disk 7 of the floppy disk set.
	
	  For information about using the Extract tool, type "extract" (without
	  quotation marks) at a command prompt, or see the following article in the
	  Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Method 2
	--------
	
	Install The Microsoft Network on your computer. To do so, follow these steps:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. On the Windows Setup tab, click The Microsoft Network check box to select it,
	  and then click OK.
	
	3. When you are prompted to restart your computer, click Yes.
	
	MORE INFORMATION
	================
	
	The Remote Mail command may also be unavailable if the remote mail headers file
	is damaged. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q135368 Cannot Retrieve Mail on The Microsoft Network
	
	For additional information about reinstalling Microsoft Exchange information
	services, please see the following article in the Microsoft Knowledge Base:
	
	  Q142947 Problems Reinstalling Microsoft Exchange Information Service
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN130 kbMSN250 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0,2.5,95
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
