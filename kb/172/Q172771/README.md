---
layout: page
title: "Q172771: Error Message: Moscudll.dll Is Missing"
permalink: /kb/172/Q172771/
---

## Q172771: Error Message: Moscudll.dll Is Missing

	Article: Q172771
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to download MSN, The Microsoft Network, version 1.3, you may
	receive the following error message:
	
	  Moscudll.dll is missing.
	
	CAUSE
	=====
	
	The Moscudll.dll file may be damaged or missing.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Moscudll.dll file to the
	Windows\System folder. The Moscudll.dll file can be found in the following
	locations:
	
	- The Win95_07.cab cabinet file on the Windows 95 CD-ROM or the original
	  Windows 95 DMF disks.
	
	- The Win95_10.cab cabinet file on the Windows 95 OEM Service Release 2 (OSR2)
	  CD-ROM.
	
	- The Win95_11.cab cabinet file on the original Windows 95 non-DMF disks.
	
	NOTE: If you are prompted to overwrite an existing file, press Y, and then press
	ENTER.
	
	For information about using the Extract tool, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	Additional query words: classicsweep
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	
