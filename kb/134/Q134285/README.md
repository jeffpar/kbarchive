---
layout: page
title: "Q134285: STOP Msg: 0x0000007B or &quot;0x4,0,0,0 Error&quot; during NT Setup"
permalink: kb/134/Q134285/
---

## Q134285: STOP Msg: 0x0000007B or &quot;0x4,0,0,0 Error&quot; during NT Setup

	Article: Q134285
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Windows NT on an Enhanced IDE (EIDE) hard disk, you may receive
	one of the following error messages:
	
	- 
	
	  STOP: 0x0000007B Inaccessible Boot Device
	
	- 
	
	  Setup has encountered a fatal error that prevents it from continuing.
	  Contact your software representative for help.
	  The following status codes will assist them "0x4, 0, 0, 0"
	
	CAUSE
	=====
	
	This behavior can occur if any of the following conditions exist:
	
	- Your computer is infected with a virus.
	
	- There is a problem in the Atapi.sys driver.
	
	
	
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Run anti-virus software to check for and to remove any virus.
	
	2. If your computer is not infected with a virus, obtain and install the latest
	  Windows NT 3.51 Service Pack.
	
	To successfully install Windows NT 3.51, you must replace the Atapi.sys file on
	the Windows NT CD-ROM with the expanded version of Atapi.sy_ (still compressed)
	available with the latest Windows NT 3.51 Service Pack:
	
	1. Insert the Windows NT 3.51 CD-ROM in your CD-ROM drive.
	
	2. Copy the Windows NT 3.51 source files from the Windows NT CD-ROM to a
	  temporary directory on your hard disk. For example, create a directory named
	  NTFLAT, and then copy the source files to the NTFLAT directory.
	
	3. Insert the Service Pack CD-ROM in your CD-ROM drive.
	
	  -or-
	
	  PKUNZIP the Windows NT v3.51 service pack in a temporary directory. To do so,
	  type the following command at a command prompt:
	
	  Pkunzip -d NT_SERVICE_PACK_NAME.ZIP c:\sptemp
	
	4. Copy the ATAPI.SYS from the expanded service pack directory to the C:\NTFLAT
	  installation directory or type the following command to expand the compressed
	  Atapi.sys file on the service pack CD-ROM to the C:\NTFLAT directory:
	
	  expand <compact_disc_drive>:\i386\atapi.sy_ c:\ntflat\atapi.sys
	
	5. Install Windows NT 3.51 from the temporary directory by typing the following
	  command at a command prompt:
	
	  winnt /b
	
	6. After you finish installing Windows NT V3.51, install the complete Service
	  Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	
	  S E R V P A C K
	
	Additional query words: 3.51 0x04
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
