---
layout: page
title: "Q171029: Error Message: Invalid Page Fault in Module Mcm.dll"
permalink: /kb/171/Q171029/
---

## Q171029: Error Message: Invalid Page Fault in Module Mcm.dll

{% raw %}

	Article: Q171029
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsetup
	Last Modified: 12-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are installing MSN, The Microsoft Network, you may receive the
	following error message when you attempt to select access numbers:
	
	  This program has performed an illegal operation and will be shut down.
	  If the problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  Iexplore caused an invalid page fault in module Mcm.dll.
	
	CAUSE
	=====
	
	This behavior can occur if the Mcm.dll file in the Windows\System folder is
	missing or damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, extract a new copy of the Mcm.dll file to the
	Windows\System folder.
	
	The Mcm.dll file is located in the Win95_07.cab cabinet file on the Windows 95
	CD-ROM, in the Win95_10.cab cabinet file on the Windows 95 OEM Service Release 2
	CD-ROM, in the Win95_07.cab cabinet file on disk 7 of the Windows 95 DMF format
	disks, and in the Win95_11.cab cabinet file on disk 11 of the Windows 95 non-DMF
	format disks.
	
	NOTE: If you are prompted to overwrite an existing file, press Y, and then press
	ENTER.
	
	For information about using the Extract tool, type "extract" (without the
	quotation marks) at a command prompt, or see the following article in the
	Microsoft Knowledge Base:
	
	  Q129605 How to Extract Original Compressed Windows Files
	
	After you extract this file, reinstall the MSN software.
	
	Additional query words: msnet msnetwork microsoft-net m.s.n.
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsetup 
	Technology        : kbMSNSearch kbMSN200
	Version           : WINDOWS:2.0
	
	=============================================================================
	

{% endraw %}
