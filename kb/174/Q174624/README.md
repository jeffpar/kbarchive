---
layout: page
title: "Q174624: Improper Display Name for OEM Driver after Unattend Setup."
permalink: kb/174/Q174624/
---

## Q174624: Improper Display Name for OEM Driver after Unattend Setup.

	Article: Q174624
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you complete an unattended installation of Windows NT Workstation 4.0 or
	Windows NT Server 4.0 using the $OEM$\TEXTMODE option to install OEM SCSI device
	drivers, the Control Panel SCSI Adapters tool will only display the driver name
	instead of the full descriptions specified in the TXTSETUP.OEM [SCSI] section.
	
	For complete details on $OEM$\TEXTMODE usage, refer to the Windows NT 4.0
	Deployment Guide from:
	
	http://www.microsoft.com/ntworkstation/deploy/default.asp
	
	NOTE: The Deployment Guide is valid for both Windows NT Workstation and Windows
	NT Server.
	
	
	CAUSE
	=====
	
	The absence of the full description in the SCSI Adapters applet is because of
	the Key Name not being specified in the [SCSI] section of Txtsetup.oem.
	
	The [SCSI] section of Txtsetup.oem consists of three components; the ID,
	Description, and Key Name. If the last field Key Name is missing, the adapter
	description is not used properly.
	
	For Example:
	
	If you click the Devices tab in the Control Panel SCSI Adapters tool, you will
	see the device name as piixice.sys instead of the proper display name of Intel
	PIIX PCI Bus Master IDE Controller as defined in Txtsetup.oem.
	
	The Txtsetup.oem files [SCSI] section should consist of three components. The ID,
	Description, and Key Name.
	
	ID        Description                                Key Name
	==        ===========                                ========
	piixide = "Intel PIIX PCI Bus Master IDE Controller", piixide
	
	NOTE: The ID and Key Name are the same.
	
	For Example:
	
	The information provided below is an example of an improper Textsetup.oem file.
	Note the missing Key Name in the [SCSI] section.
	
	  [Disks]
	  d1 = "Intel PIIX PCI Bus Master IDE Controller", \disk1.nt, \ 
	
	  [Defaults]
	  scsi = piixide
	
	  [SCSI]
	  piixide = "Intel PIIX PCI Bus Master IDE Controller"  <-- Missing key name
	
	  [Files.scsi.piixide]
	  driver = d1,piixide.sys, piixide
	  inf = d1,oemsetup.inf
	
	RESOLUTION
	==========
	
	To correct this problem, you need to add the Key Name to the entry under the
	[SCSI] section.
	
	This Texsetup.oem file below is configured properly to display a full
	Description. Note the addition of the Key Name.
	
	  [Disks]
	  d1 = "Intel PIIX PCI Bus Master IDE Controller", \disk1.nt, \ 
	
	  [Defaults]
	  scsi = piixide
	
	  [SCSI]
	  piixide = "Intel PIIX PCI Bus Master IDE Controller", piixide
	
	  [Files.scsi.piixide]
	  driver = d1,piixide.sys, piixide
	  inf = d1,oemsetup.inf
	
	Additional query words: unattend
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
