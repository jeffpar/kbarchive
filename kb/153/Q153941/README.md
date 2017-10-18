---
layout: page
title: "Q153941: Install May Stop Responding on SCSI Drives Greater Than 8.4 GB"
permalink: kb/153/Q153941/
---

## Q153941: Install May Stop Responding on SCSI Drives Greater Than 8.4 GB

	Article: Q153941
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Windows NT on a very large capacity SCSI drive (such as a
	Seagate ST410-800N 10 GB SCSI drive), the system may stop responding during the
	three-boot-floppy disk phase of the installation process, when Windows NT
	attempts to load the SCSI device driver.
	
	CAUSE
	=====
	
	The Translation For Drives Greater Than 2GB option may be enabled on a SCSI
	controller with the large capacity SCSI drive attached.
	
	The maximum drive size that can be translated by a SCSI controller BIOS is
	computed as follows:
	
	  255 heads x 63 sectors/track x 1024 cylinders x 512 bytes/sector =
	  8,422,686,720 bytes or 8.4 GB
	
	RESOLUTION
	==========
	
	Disable Translation For Drives Greater Than 2GB in the SCSI adapter BIOS before
	you install Windows NT.
	
	For additional information on drive translation and disk partitioning, please see
	the following articles in the Microsoft Knowledge Base:
	
	Q114841Windows NT Boot Process and Hard Disk Constraints
	
	Q138364Windows NT Partitioning Rules During Setup
	
	Additional query words: Adaptec 2940 Seagate ST410-800N
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51
	
	=============================================================================
	
