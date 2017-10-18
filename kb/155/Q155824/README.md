---
layout: page
title: "Q155824: Installing a Panasonic KXL-D740 4X CDROM using KXLC002"
permalink: kb/155/Q155824/
---

## Q155824: Installing a Panasonic KXL-D740 4X CDROM using KXLC002

	Article: Q155824
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install drivers for the Panasonic KXL-D740 4X CDROM using the
	KXLC002 PC Card, Windows NT 4.0 may detect the PCMCIA SCSI card as the AMD PCI
	SCSI Controller/Ethernet Adapter. This is the incorrect driver for this adapter.
	
	RESOLUTION
	==========
	
	To install the proper driver follow the steps outlined below:
	
	1. From the Windows NT 4.0 compact disc, copy the contents of the
	  \DRVLIB\STORAGE\KXL002\I386 directory to a blank floppy disk.
	
	2. Start the SCSI Adapters tool in Control Panel and choose the Drivers Tab.
	
	3. If the AMD SCSI driver has been installed incorrectly, select it from the
	  list and click the "Remove" button and answer Yes to remove the driver.
	
	4. Click Add to install the proper driver.
	
	5. From the Install Driver dialog box, click the "Have Disk..." button.
	
	6. Insert the disk containing the files you copied in the floppy disk drive and
	  click OK.
	
	7. Select the "Panasonic KXLC002 SCSI Host Adapter" from the list of available
	  drivers and click OK.
	
	8. From the Windows NT Setup dialog box, type "A:\" (without quotes) in text box
	  and then click Continue.
	
	9. When the installation is complete, restart your system.
	
	MORE INFORMATION
	================
	
	The Panasonic KXL-D740 4X CDROM with the KXLC002 PC Card is on the current
	Hardware Compatibility List as a Non-SCSI CDROM drive. Although this is a SCSI
	device, it is listed here because the CDROM drive and PCMCIA SCSI controller
	have not been tested separately. Therefore, the Panasonic KXL-D740 4X CDROM
	drive is not supported on other SCSI controllers and other SCSI devices are not
	supported with the KXLC002 PC Card SCSI Adapter.
	
	The Panasonic KXL-D740 4X CDROM with the KXLC002 PC Card is manufactured by
	Panasonic, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise, regarding this product's performance or reliability.
	
	
	Additional query words: panasonic prodnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
