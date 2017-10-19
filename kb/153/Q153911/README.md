---
layout: page
title: "Q153911: MSN Icon Does Not Function After MSN 1.2 Upgrade"
permalink: /kb/153/Q153911/
---

## Q153911: MSN Icon Does Not Function After MSN 1.2 Upgrade

	Article: Q153911
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 1.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade to version 1.2 of MSN, The Microsoft Network, the MSN icon on
	the desktop may not function.
	
	CAUSE
	=====
	
	This behavior can occur if the Wsock32.dll file is damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, rename the Wsock32.dll file (if it exists) in the
	Windows\System folder, and then extract a new copy of the Wsock32.dll file from
	your original Windows 95 disks or CD-ROM to the Windows\System folder. The
	Wsock32.dll file is located in the Win95_11.cab cabinet file.
	
	NOTE: If you are using a NEC or Compaq computer with a preinstalled version of
	Windows 95, the Wsock32.dll file is located in the Win95_19.cab cabinet file.
	
	For information about using the Extract tool, type "extract" (without the
	quotation marks) at a command prompt, or see the following article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN120
	Version           : WINDOWS:1.2
	
	=============================================================================
	
