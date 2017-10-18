---
layout: page
title: "Q140393: STOP 0x0000007F Running SMS Network Monitor"
permalink: kb/140/Q140393/
---

## Q140393: STOP 0x0000007F Running SMS Network Monitor

	Article: Q140393
	Product(s): Microsoft Windows NT
	Version(s): 1.10 3.51
	Operating System(s): 
	Keyword(s): smsnetmon kbNetworkMon
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Systems Management Server version 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Network Monitor included with Systems Management Server 1.1, the
	following STOP error message appears:
	
	  STOP 0x0000007F (0x00000000, 0x00000000, 0x00000000, 0x00000000)
	  Unexpected_Kernel_Mode_Trap
	
	
	CAUSE
	=====
	
	This problem occurs if you install Systems Management Server 1.1 from Microsoft
	BackOffice 1.5 on a Windows NT Server 3.51 Service Pack 2 computer.
	
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- If Network Monitor is not configured to start automatically, re- install
	  Windows NT 3.51 Service Pack 2.
	
	  -or-
	
	- If Windows NT 3.51 is installed on a FAT partition, boot to MS-DOS. Rename
	  BHNT.SYS to another file name such as BHNT.BAD. Restart Windows NT 3.51 and
	  rename BHNT.BAD to BHNT.SYS. Re-install Windows NT 3.51 Service Pack 2.
	
	  -or-
	
	- If Windows NT 3.51 is installed on an NTFS partition, install another version
	  of Windows NT 3.51 and rename the file to another name such as BHNT.BAD.
	  Reboot the computer and start the original version of Windows NT 3.51. Rename
	  BHNT.BAD to BHNT.SYS and re-install Windows NT 3.51 Service Pack 2.
	
	MORE INFORMATION
	================
	
	
	Additional query words: netmon 3.50 prodnt prodsms
	
	======================================================================
	Keywords          : smsnetmon kbNetworkMon 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbSMSSearch kbSMS110
	Version           : 1.10 3.51
	
	=============================================================================
	
