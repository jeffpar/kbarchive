---
layout: page
title: "Q165181: EISA Configuration Boot Code Is Replaced on Mirror Drives"
permalink: /kb/165/Q165181/
---

## Q165181: EISA Configuration Boot Code Is Replaced on Mirror Drives

	Article: Q165181
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup kbWinNT400sp4fix
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Disk Administrator overwrites the EISA partition boot information in the master
	boot record (MBR) of a secondary mirror when the mirror is established. As a
	result, the normal EISA prompt does not appear when you boot to the secondary
	mirror.
	
	CAUSE
	=====
	
	Windows NT rewrites the MBR with an industry standard universal boot record
	whenever establishing or breaking fault tolerance members, such as mirrors, when
	it updated the partition table.
	
	Most manufacturers use the system BIOS to prompt the user to enter EISA
	configuration utility. Manufacturers that modify the universal master boot
	record with their own boot code to prompt the user to enter EISA configuration
	utilities will exhibit this problem.
	
	MORE INFORMATION
	================
	
	HP NetServer Navigator and some other manufacturers' EISA utilities create a
	small EISA partition on the hard drive so that it can prompt you with a choice
	to run the EISA configuration at startup.
	
	To have this on both primary and secondary mirror drives, you must first
	establish the EISA partition separately before installing Windows NT.
	
	If you view this partition in a sector editor like Norton Diskedit or Microsoft
	Disk Probe (Dskprobe.exe), you will find the partition type to be type 12. To
	Disk Administrator, this partition is properly recognized as and EISA partition.
	After installing Windows NT, when you view the master boot record on the
	secondary drive, but before establishing the mirror, you will see the data in
	the master boot record that is used to prompt the user for EISA configuration on
	both drives.
	
	After establishing and generating the mirror, the MBR on the secondary drive is
	replaced with a universal master boot record, which deletes the EISA prompt
	information. None of the partition table entries are damaged. The drive is still
	type 12, although none of the EISA boot information remains.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: modified changed altered admin lost
	
	======================================================================
	Keywords          : kb3rdparty kbsetup kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
