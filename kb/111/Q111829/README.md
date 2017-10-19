---
layout: page
title: "Q111829: Problems Installing IBM Quietwriter Driver with WFWG 3.11"
permalink: /kb/111/Q111829/
---

## Q111829: Problems Installing IBM Quietwriter Driver with WFWG 3.11

	Article: Q111829
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to install the IBM Quietwriter printer driver, Setup displays the
	following message:
	
	  Insert Microsoft Windows for
	  Workgroups 3.11 Disk 6 or a disk
	  with the updated QWIII.DRV file in: A:\
	
	When you insert Disk 6 and choose OK, Setup displays the following message:
	
	  Insert the disk with the file in: A:\
	
	If you choose OK, Setup displays the same message and appears to be stuck in a
	loop. If you choose Cancel, Setup returns to the Printers dialog box and the IBM
	Quietwriter does not appear. However, the QWIII.DRV driver is copied to the
	Windows SYSTEM directory. At this point, if you try to load the IBM Quietwriter
	printer, Setup repeatedly displays the second message.
	
	CAUSE
	=====
	
	The [io.device] section of the CONTROL.INF file contains the driver names as
	well as any associated files and driver information for each printer driver that
	ships with Windows for Workgroups 3.11. The entry for the IBM Quietwriter
	(QWIII.DRV) has two commas after the driver name--all other drivers have one.
	
	RESOLUTION
	==========
	
	To correct this problem, edit the CONTROL.INF file and delete one of the commas
	after the QWIII.DRV entry. For example, if the entry currently looks like this
	
	     6:QWIII.DRV,,"IBM Quietwriter III","DEVICESPECIFIC"
	
	After you remove the comma, the line should appear as follows:
	
	     6:QWIII.DRV,"IBM Quietwriter III","DEVICESPECIFIC"
	
	Save the file and then try installing the printer.
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
