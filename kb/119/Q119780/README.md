---
layout: page
title: "Q119780: Using ForceMapper with Windows for Workgroups 3.11"
permalink: /kb/119/Q119780/
---

## Q119780: Using ForceMapper with Windows for Workgroups 3.11

{% raw %}

	Article: Q119780
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It may be necessary to force the mounting of VFAT on hard disk drives that are
	not detected as 32-bit disk access volumes and volumes that are compressed.
	Under normal circumstances, the only type of drive volumes that are not detected
	as 32-bit disk access volumes are SCSI and ESDI drives. In the case of
	compression (DoubleSpace version 6.2, DriveSpace, or Stacker version 3.1), extra
	processing of the INT 21h calls is required before the INT 13h call can occur.
	(DoubleSpace version 6.0 does not allow the mounting of VFAT.)
	
	RMM.D32 is the real-mode-mapper component that allows VFAT to mount on non-
	32-bit disk access volumes and compressed volumes. If 32-bit file access is
	enabled on one of these volumes, the following changes are made to the
	SYSTEM.INI file by Windows for Workgroups 3.11:
	
	     [386Enh]
	     device=ios.386
	     device=vxdldr.386
	
	IOS.386 replaces the *BLOCKDEV component of a 32-bit disk access volume, and
	VXDLDR.386 loads the RMM.D32 real-mode mapper. RMM.D32 does not appear in the
	SYSTEM.INI file because it is a component of another Windows for Workgroups file
	and is loaded during Windows startup by VXDLDR.386.
	
	MORE INFORMATION
	================
	
	When a compressed drive or a non-32-bit disk access volume exists but is not
	properly detected, you may need to force the loading of the real-mode mapper,
	RMM.D32. To do this, add the following line to the [386Enh] section of the
	SYSTEM.INI file:
	
	  ForceMapper=C
	
	  -or-
	
	  ForceMapper=CD
	
	Use the second example to force multiple drives to use the RMM.D32 mapper. Put
	drive letters that represent each drive on your system, and do not separate the
	letters with commas.
	
	Additional query words: 3.11 vfat fastdisk
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
