---
layout: page
title: "Q123880: Stop 7B with NCR53c710 SCSI Adapter and DEC 3107 or DEC 3210"
permalink: /kb/123/Q123880/
---

## Q123880: Stop 7B with NCR53c710 SCSI Adapter and DEC 3107 or DEC 3210

{% raw %}

	Article: Q123880
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a computer using an NCR 53c710 SCSI adapter and
	either a DEC 3107 or a DEC 3210 hard disk drive, you may see the following
	symptoms:
	
	- The following error message appears:
	
	  STOP 0x0000007B
	  Inaccessible Boot Device
	
	- Applications load corrupted data.
	
	- Corrupted applications load into memory.
	
	NOTE: This problem does not occur under Windows NT version 3.1.
	
	CAUSE
	=====
	
	This problem occurs during the data transfer operation between the NCR53c710
	SCSI adapter and either the DEC 3107 (1 gigabyte) or the DEC 3210 (2 gigabyte)
	hard disk drive, when Windows NT switches between synchronous and asynchronous
	disk I/O operation.
	
	RESOLUTION
	==========
	
	A fix is available as NCRDEC.EXE on the AT&T (NCR) bulletin board system
	(BBS) at (803) 939-7504. For additional information, contact AT&T (NCR)
	Technical Support at (800) 469-4668.
	
	The NCR and DEC products discussed here are manufactured by AT&T and Digital
	Equipment Corporation, vendors independent of Microsoft; we make no warranty,
	implied or otherwise, regarding these products' performance or reliability.
	
	Additional query words: prodnt trap 0x7b
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
