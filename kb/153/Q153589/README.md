---
layout: page
title: "Q153589: Compaq NetFlex-3/E Controller not Upgraded During WinNT 4.0 Setu"
permalink: /kb/153/Q153589/
---

## Q153589: Compaq NetFlex-3/E Controller not Upgraded During WinNT 4.0 Setu

	Article: Q153589
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbnetwork kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the Windows NT 4.0 upgrade, the Network Wizard states that the Compaq
	NetFlex-3/E Controller is being upgraded. After the upgrade process is finished,
	however, the driver is not upgraded and the Network Setup Warning fails to
	appear and warn you to upgrade the driver.
	
	More Information
	----------------
	
	The adapters in the DRVLIB subdirectory of the Windows NT 4.0 Installation
	compact disc are supposed to display a warning similar to the following:
	
	  Network Setup Warning
	
	  The following software needs to be updated to run with this version Windows
	  NT: Intel EtherExpress Pro Ethernet Adapter Driver. If you have an updated
	  version of the software, please upgrade following the instructions supplied
	  with the software. Otherwise, please contact Microsoft for more information.
	
	RESOLUTION
	==========
	
	Update the Compaq NetFlex-3/E Controller card manually.
	
	To update the driver for this card, install the latest driver from the COMPAQ
	SSD:
	
	1. Contact Compaq Corporation to obtain the file name or the file of the updated
	  Windows NT driver for the NetFlex-3/E Controller card. If you plan to
	  download the file from the Compaq FTP site, use the following FTP address:
	
	  ftp://ftp.compaq.com/pub/softpaq/Drivers/
	
	2. In Windows NT, click the Start button, point to Settings, and click Control
	  Panel.
	
	3. Double-click Network. Click the Adapters tab and then click Update.
	
	4. Type the path to the Oemsetup.inf file for the Compaq NetFlex-3/E Controller
	  card.
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
