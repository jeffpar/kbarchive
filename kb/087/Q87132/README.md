---
layout: page
title: "Q87132: Upgrading to LAN Manager 2.1 and/or MS OS/2 1.3"
permalink: /kb/087/Q87132/
---

## Q87132: Upgrading to LAN Manager 2.1 and/or MS OS/2 1.3

	Article: Q87132
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	While upgrading to LAN Manager version 2.1, users may also want to upgrade their
	version of Microsoft OS/2 to version 1.3, which ships with LAN Manager 2.1.
	
	Microsoft OS/2 version 1.3 supports a wide range of computer hardware. A hardware
	compatibility list (HCL) is provided with the LAN Manager package. If your
	system is listed in the HCL, upgrading to Microsoft OS/2 1.3 is highly
	recommended.
	
	MORE INFORMATION
	================
	
	Upgrading to Microsoft OS/2 1.3 provides the following benefits:
	
	- It provides very broad device support for storage media, such as CD-ROM,
	  tape, SCSI devices, and so forth, through LADDR (layered device driver)
	  architecture. LADDR is not available in earlier versions of OS/2 or from IBM.
	
	- OS/2 1.3 includes large partition support up to 2 GB with FAT or HPFS, and up
	  to 7.8 GB with HPFS386 (not available in earlier OS/2 releases or from IBM).
	
	- OS/2 1.3 is required for fault tolerance implementations. Other
	  configurations cannot use LAN Manager 2.1 fault tolerance support unless they
	  are running a LADDRized OEM version of OS/2.
	
	  LAN Manager 2.1 fault tolerance allows users to mirror the boot volume, and it
	  has been tested much more extensively than the LAN Manager 2.0 fault
	  tolerance. Many corrections have been added to the fault tolerance subsystem
	  in HPFS386 and in the OS/2 kernel.
	
	  LAN Manager 2.1 also allows users to mirror on the fly, which means that the
	  drive to be mirrored does not need to be reformatted first.
	
	- OS/2 1.3 includes additional corrections and enhancements by Microsoft (such
	  as the MSNULL driver), which are not available in previous OS/2 releases or
	  from IBM.
	
	In summary, the only reasons to continue using an earlier version of OS/2 are:
	
	- If you have a special OEM version of OS/2 that is required for your
	  environment/hardware.
	
	- If you have a special localized and/or international version of OS/2 that is
	  required for your environment/hardware.
	
	- If you have special third-party vendor drivers that work only on the earlier
	  OS/2 version, or with the earlier OS/2 device architecture.
	
	Additional query words: 2.10 1.30
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
