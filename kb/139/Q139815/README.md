---
layout: page
title: "Q139815: Windows NT Service Packs and OEM drivers"
permalink: kb/139/Q139815/
---

## Q139815: Windows NT Service Packs and OEM drivers

	Article: Q139815
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5,3.51,4.0; :
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you install Windows NT Service Packs (SPs), you may need to reinstall
	customized Windows NT components or drivers provided by original equipment
	manufacturers (OEMs). The following message may be displayed during Service Pack
	Setup:
	
	  Windows NT Service Pack Setup
	
	  <Path>\<Filename>
	
	  Your computer vendor installed this file on your computer. Do you want Service
	  Pack Setup to replace this file?
	
	Some OEM-provided drivers and components can be required to ensure proper
	operation of some Windows NT installations. An example of OEM software is the
	Compaq Support Software Diskette (SSD). Installed Compaq SSD components can
	require reinstallation or updates after installing a Windows NT Service Pack.
	While Service Packs can update some OEM related components, Microsoft recommends
	to reinstall the OEM provided software after installing a Microsoft Windows NT
	Service Pack.
	
	For best results, contact the supplier of the OEM drivers to obtain current
	drivers, or to inquire about compatibility with Microsoft Windows NT Service
	Packs. The manufacturer usually has special instructions for updating operating
	system components.
	
	MORE INFORMATION
	================
	
	Compaq SSD's (Software Support Diskettes, also called SoftPaq's) create the
	Compaq Support Software for Microsoft Windows NT 3.51 and 4.0 diskette plus four
	other diskettes that support the subsystems and features for Compaq Servers and
	Professional Workstations. These device drivers / files are written by Compaq to
	maximize hardware capabilities. Updates and/or additions to their driver files
	are periodically rolled together into a single deliverable or "version".
	SoftPaq's can copy files directly to harddisk or make installation diskettes.
	
	Each version can be recognized by the date/time stamp on the files themselves.
	Files issued together in a single version have a common timestamp (ie, Version
	1.22, Revision A files show a timestamp of 1.22am.)
	
	Current (7/7/97) is Version 1.22 Revision A (Release date 13 May 1997). It
	includes:
	
	* NetFlex/NetFlex-2/NetFlex-3 network adapter family * NetFlex-3 network adapter
	monitoring, configuration and duplex utility * Compaq 10T PCI UTP and 10/100 TX
	PCI UTP * IDA/IDA-2 disk controller * SMART/SMART-2 array controller * 32-Bit
	SCSI-2 Family of controllers * ProLiant Storage System * System
	Management/Health driver * UPS support * Compaq HAL Support (ISA, Uniprocessor,
	and Multiprocessor) * Compaq Recovery Server, Standby Agent with SMART-2 support
	* Compaq Recovery Server, Online Agent with SMART-2 support * Compaq Remote
	Insight Board driver * Compaq Support Software diskette Installation utility *
	Matrox Millennium video controller * ELSA Gloria-L video controller * ESS
	AudioDrive audio controller
	
	The following diskettes can be created when the SoftPaq is unbundled:
	* Disk 1 - Compaq Support Software for Microsoft NT 3.51 and 4.0 Disk #1
	* Disk 2 - Compaq Support Software for Microsoft NT 3.51 and 4.0 Disk #2
	* Disk 3 - Matrox MGA Millennium Video Drivers and ESS 1868 Audio Drivers for
	Microsoft Windows NT 3.51 and 4.0
	* Disk 4 - ELSA Gloria-L Video Drivers for Microsoft Windows NT 4.0.
	* Disk 5 - ELSA Gloria-L Video Drivers for Microsoft Windows NT 3.51
	
	For the previous Version, see Ver. 1.21 Revision A (27 March 1997)
	
	An ASCII version list of the current SoftPaq files can be found at Compaq's Web
	site or on their FTP server at:
	
	ftp://ftp.compaq.com/pub/softpaq/allfiles.txt
	
	SPECIAL NOTE:
	Prior to version 1.21a, SSD/SoftPaq's were Windows NT version specific - one for
	WinNT 3.51 and a different SSD / SoftPaq for WinNT4.0.
	
	Beginning with version 1.22a, the same SoftPaq/SSD works for either WinNT version
	3.51 or 4.0 and for server or workstation.
	
	The process of applying SSD's is similar to an upgrade of NT or the application
	of a service pack. It essentially updates the existing files and drivers already
	installed on the machine. It does not load new drivers or modify configuration
	settings. Registry entries are used to identify the existing device drivers and
	hardware configuration that will be updated. There is no detection process (like
	what happens during an initial install of Windows NT) that allows new drivers to
	be added or configuration changes to be made. New drivers must be added
	manually.
	
	For best results, contact Compaq to obtain current version or to inquire about
	compatibility with Microsoft Windows NT Service Packs. Compaq may have special
	instructions for updating operating system components depending on which NT
	service pack is installed.
	
	The latest SSD / SoftPaq can be downloaded from Compaq's Website via the
	following link:
	
	  http://www.compaq.com/support/files/server/us/locate/7_447.html
	
	All Compaq SoftPaqs are located at:
	
	  http://www.compaq.com/support/files/allsp.html
	
	For more information on Compaq SSD diskettes or compatibility with Microsoft
	Windows NT Service Packs, contact Compaq Technical Support at (800) 652-6672.
	
	Compaq Corporation, a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: prodnt SSD SP
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1,3.5,3.51,4.0; :
	
	=============================================================================
	
