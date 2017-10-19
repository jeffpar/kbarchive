---
layout: page
title: "Q128818: Windows NT 3.5 Fails to Upgrade AST Manhatten with MYLEX DAC"
permalink: /kb/128/Q128818/
---

## Q128818: Windows NT 3.5 Fails to Upgrade AST Manhatten with MYLEX DAC

	Article: Q128818
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to upgrade a Windows NT 3.1 installation on an AST Manhatten
	SMP machine with a Mylex DAC960 SCSI controller, Windows NT 3.5 Setup fails to
	recognize the Windows NT 3.1 installation. As a result, setup performs a new
	installation rather than upgrading you Windows NT 3.1 installation.
	
	CAUSE
	=====
	
	This problem occurs because Windows NT 3.5 Setup does not recognize the Mylex
	driver for Windows NT 3.1 as a driver that it can upgrade correctly.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	NOTE: These instructions require that you have the Windows NT 3.1 drivers for the
	Mylex controller on a floppy disk. These instructions will work correctly if you
	installing from a CD-ROM drive, a floppy drive, or running a normal
	WINNT/WINNT32 installation. The will not work if you have done a WINNT /B or
	WINNT32 /B installation.
	
	1. At the second setup screen, select Custom Setup.
	
	2. During the SCSI detection portion of Setup, do not allow setup to auto-
	  detect your SCSI controllers. Instead, skip the auto detection and choose to
	  manually add SCSI drivers (Press S).
	
	3. From the SCSI driver list, select "Other - requires disk provided by
	  manufacturer) and insert the floppy disk with the Mylex drivers.
	
	4. After the Mylex drivers have loaded, manually select drivers for any other
	  controllers in the system.
	
	5. Let Setup continue normally.
	
	When you have finished upgrading to Windows NT 3.5, you can remove the old driver
	and add in the 3.5 Mylex drivers using the Windows NT Setup Add/Remove SCSI
	option.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt dac960nt.sys
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
