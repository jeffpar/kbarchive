---
layout: page
title: "Q138940: Windows 95 Hangs with Ibmtok.dos Network Adapter Driver"
permalink: kb/138/Q138940/
---

## Q138940: Windows 95 Hangs with Ibmtok.dos Network Adapter Driver

	Article: Q138940
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, your computer may stop responding (hang) or pause
	for from 45 seconds to 1.5 minutes after the NET START command in the
	Autoexec.bat file is processed.
	
	CAUSE
	=====
	
	This problem can occur if a real-mode protocol is installed and you are using
	the NDIS2 version of the network adapter driver (Ibmtok.dos) for an IBM Token
	Ring network adapter.
	
	The Ibmtok.dos driver installed by default in Windows 95 does not function
	correctly.
	
	RESOLUTION
	==========
	
	Install the updated IBM Token Ring adapter driver. To do so, follow these
	steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click Add, click Adapter, and then click Add.
	
	3. Click Have Disk.
	
	4. In the Copy Manufacturer's Files From box, enter the following line, and then
	  click OK
	
	  <drive>:\drivers\network\ibm
	
	  where <drive> is the CD-ROM drive containing the Windows 95 CD-ROM.
	
	NOTE: There may be two installed network adapters after you perform these steps.
	Remove either adapter from the list of adapters. Both adapters refer to the same
	driver.
	
	If you do not have the CD-ROM version of Windows 95, you can obtain the A464.exe
	file from the following Microsoft File Transfer Protocol (FTP) site:
	
	  ftp://ftp.microsoft.com/Services/whql/drivers/win95/netlan/
	
	Obtain the A464.exe file from the Microsoft FTP site, double-click the A464.exe
	file to extract the files it contains, and then follow the steps above. In step
	4, replace "<drive>:\drivers\network\ibm" with the folder containing the
	files you downloaded and extracted.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
