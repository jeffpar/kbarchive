---
layout: page
title: "Q150815: Windows NT May Fail to Boot on Toshiba Portable Computers"
permalink: /kb/150/Q150815/
---

## Q150815: Windows NT May Fail to Boot on Toshiba Portable Computers

	Article: Q150815
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT may fail to boot on certain portable computers, in particular Toshiba
	portable computers, when the system partition is located on an NTFS partition
	other than the boot partition. The following error message is displayed:
	
	  STOP 0x0000007B
	  Inaccessible Boot Device
	
	CAUSE
	=====
	
	The problem occurs during shutdown when the system corrupts the last sectors
	being written to disk. This appears to be a hardware problem relating to the
	drive head and power shutdown, which results in an Error Correction Code (ECC)
	error when reading the sector on restart.
	
	
	RESOLUTION
	==========
	
	Obtain the following update or wait for the next Service Pack.
	
	A modified Ntfs.sys driver for Windows NT and instructions for installing them
	are available from Microsoft support channels or directly from the following
	Internet locations:
	
	For Windows NT 3.51:
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351
	/hotfixes-postSP5/toshiba-fix
	
	For Windows NT 4.0:
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40
	/hotfixes-postSP1/toshiba-fix
	
	The fix detects the bad sector in the restart area and uses the alternate restart
	area during boot.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	
