---
layout: page
title: "Q235590: Err Msg: &quot;STOP 0x0000000A&quot; When You Install SP4 on Alpha Server"
permalink: /kb/235/Q235590/
---

## Q235590: Err Msg: &quot;STOP 0x0000000A&quot; When You Install SP4 on Alpha Server

{% raw %}

	Article: Q235590
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT Server 4.0 Service Pack 4 (SP4) on an Alpha computer
	with a Symbios SCSI adapter, the computer may crash and you may receive the
	following error message on a blue screen:
	
	  STOP 0000000a : 00000024 00000004 00000000 80668c70
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The parameters in the error message may vary, depending on your system
	configuration.
	
	CAUSE
	=====
	
	This behavior occurs because the Symc810.sys driver for Alpha computers included
	in SP4 is an outdated Original Equipment Manufacturer (OEM) provided driver.
	
	RESOLUTION
	==========
	
	To resolve this issue, download the updated driver from the following Symbios
	FTP site:
	
	  ftp://ftp.symbios.com/pub/symchips/scsi/drivers/Windows_Drivers/WindowsNT/ALPHA/Driver/SYM8XX
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The installation instructions are in a 8xxnt.txt file included in the new driver
	(Ntalpha.zip or Ntalpha.exe format).
	
	MORE INFORMATION
	================
	
	The driver included in SP4 has the following date and version:
	
	  Symc810.sys Thu Aug 06 16:01:24 1998 version FLINT-4.04.01a
	
	The updated driver available on the Symbios FTP site has the following date and
	version:
	
	  Symc8xx.sys Mon Mar 29 13:48:37 1999 version FLINT-4.12.00 (NT 4.0)
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Hardware          : ALPHA
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
