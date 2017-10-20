---
layout: page
title: "Q119674: Windows Err Msg: WDCTRL Validation Failed at Phase &lt;x, x&gt;"
permalink: /kb/119/Q119674/
---

## Q119674: Windows Err Msg: WDCTRL Validation Failed at Phase &lt;x, x&gt;

{% raw %}

	Article: Q119674
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the meaning of the various phases that are displayed in the
	following error message at Windows startup if 32-bit disk access is enabled
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) validation failed at phase
	  <x, x>.
	
	where <x> is a specific phase.
	
	MORE INFORMATION
	================
	
	Below are the various phases that can appear in the above error message and a
	brief description of each:
	
	Phase 0: Int 13h, AH=8, GetDriveParms results failed; compare with FDPT (Fixed
	Disk Parameter Table, pointer got through int 41h/46h-xxxx)
	
	Phase 1: Number of heads differ
	
	Phase 2: Number of sectors differ
	
	Phase 3: Number of cylinders differ
	
	The next phases are read:
	
	  Phases 4 - A -> HCS:0/0/1 (Head/Cylinder/Sector notation)
	  Phases B - 11 -> Sector #503 (to control sector mapping)
	  Phases 12 - 18 -> HCS:last-1/last-1/last-1
	
	Phase 4/B/12: Read Sector 1/503/"last-but one" through int 13 failed
	
	Phase 5/C/13: Status reg of Controller says failure
	
	Phase 6/D/14: Wrong sector count
	
	Phase 7/E/15: Wrong sector number
	
	Phase 8/F/16: Wrong cylinder number
	
	Phase 9/10/17: Wrong sector size (not equal to 512 bytes) or drive
	
	Phase A/11/18: Wrong status from controller or difference in direct read data
	from int 13 read data.
	
	KBCategory: kbother kberrmsg
	KBSubcategory: win31 wfw wfwg winboot
	
	Additional query words: 3.10 3.11 err msg wdctrl fastdisk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
