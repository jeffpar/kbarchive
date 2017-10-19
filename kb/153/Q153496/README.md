---
layout: page
title: "Q153496: Error Loading Windows NT Service Packs on RISC Platforms"
permalink: /kb/153/Q153496/
---

## Q153496: Error Loading Windows NT Service Packs on RISC Platforms

	Article: Q153496
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	While trying to load any Windows NT Service Pack on a PowerPC platform you may
	encounter the following error:
	
	  A non-critical error has occurred, external library Getdest.dll could not
	  process os loader boot variable.
	
	MORE INFORMATION
	================
	
	The routine that is called from Getdest.dll is GetOsLoaderDest, and this error
	message means that one of the following nonvolatile random access memory (NVRAM)
	variables is not set correctly:
	
	  SYSTEMPARTITION
	  OSLOADER
	  OSLOADPARTITION
	  OSLOADFILENAME
	
	Sample entries:
	
	SYSTEMPARTITION multi(0)scsi(0)disk(0)rdisk(0)partition(2)
	OSLOADER multi0)scsi0)disk(0)rdisk(0)partition(2)\OS\winnt\osloader.exe
	OSLOADPARTITION multi(0)scsi(0)disk(0)rdisk(0)partition(3)
	OSLOADFILENAME \winnt
	
	Additionally a drive letter must be assigned to the file allocation table (FAT)
	partition containing the Osloader.exe file in order for the Service Pack to
	install properly.
	
	RESOLUTION
	==========
	
	Follow your PowerPC manufacturer's hardware guide to enter the computer's NVRAM
	and verify the above NVRAM variables contain valid information.
	
	STATUS
	======
	
	The PowerPC is manufactured by International Business Machines Corporation, a
	vendor independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this product's performance or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
