---
layout: page
title: "Q123611: SCSIPORT.PDR Installed on All Computers During Setup"
permalink: kb/123/Q123611/
---

## Q123611: SCSIPORT.PDR Installed on All Computers During Setup

	Article: Q123611
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you install Windows 95, the file SCSIPORT.PDR is installed even if you do
	not have a SCSI controller.
	
	MORE INFORMATION
	================
	
	This file is installed in the Windows \SYSTEM\IOSUBSYS directory on all
	computers, even those without SCSI controllers. Many original equipment
	manufacturers (OEMs) do not specify through their .INF files to install
	SCSIPORT.PDR when you add their SCSI devices; therefore, Windows 95 installs it
	during Setup.
	
	Microsoft recommends that you leave SCSIPORT.PDR on your hard disk in case you
	add a SCSI device at a later time. Its small size does not consume much space.
	
	
	Additional query words: 3rdparty scuzzy
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
