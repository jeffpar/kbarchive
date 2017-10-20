---
layout: page
title: "Q137148: STOP 0x0000001E or System Hangs When Mirroring Seagate ST32550"
permalink: /kb/137/Q137148/
---

## Q137148: STOP 0x0000001E or System Hangs When Mirroring Seagate ST32550

{% raw %}

	Article: Q137148
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform mirroring on a FAT or NTFS system partition on a Seagate
	ST32550N (Firmware Revision 14) hard disk connected to a DPT 2022 or 2122 SCSI
	controller (Firmware Revision 06B0 BIOS 2.D7), the following STOP error message
	appears in Windows NT 3.5:
	
	  STOP: 0x0000001E
	  KMODE_EXCEPTION_NOT_HANDLED
	
	When you perform the same procedure above in Windows NT 3.51, the Windows NT
	stops responding (hangs).
	
	CAUSE
	=====
	
	This problem occurs when Revision 14 of the Seagate hard-disk firmware is used.
	
	RESOLUTION
	==========
	
	Upgrade the firmware of the Seagate 32550N hard disk to Revision ASA2 16.
	
	Additional query words: prodnt drive hdd adapter trap 0x1e 0x01e
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
