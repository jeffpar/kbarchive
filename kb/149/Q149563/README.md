---
layout: page
title: "Q149563: Fatal Exception 0E in Ios.vxd with SCSI Printer"
permalink: /kb/149/Q149563/
---

## Q149563: Fatal Exception 0E in Ios.vxd with SCSI Printer

	Article: Q149563
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile win95
	Last Modified: 15-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a SCSI printer powered on, online, and connected to a configured
	SCSI port, you may receive the following error message on a blue screen when you
	start Windows 95:
	
	  Fatal exception 0E at 0028:<xxxxxxxx> in VxD IOS(01)+<xxxxxxxx>.
	
	When you receive this error message, you cannot install or use the printer in
	Windows 95. You must turn the printer off or disconnect it from the SCSI port to
	start Windows 95.
	
	CAUSE
	=====
	
	There is a problem in the Ios.vxd file that causes this error if an unknown SCSI
	device is enumerated.
	
	RESOLUTION
	==========
	
	Microsoft has released an updated version of the Ios.vxd file that corrects this
	problem. The updated file is:
	
	  IOS.VXD version 4.00.953 (3/19/96, 68,825 bytes) and later
	
	To install the updated Ios.vxd file, follow these steps:
	
	1. Download the IOSUPD.EXE file from one of the online services listed below to
	  an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the IOSUPD.EXE file you
	  downloaded in step 1.
	
	3. Follow the instructions on your screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Iosupd.exe now
	  (http://download.microsoft.com/download/win95upg/tool_k/1.0/W95/EN-US/Iosupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	MORE INFORMATION
	================
	
	For information about other issues resolved by this update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q149564 Poor Performance Reading Video CD in IDE CD-ROM Drive
	
	
	Additional query words: gpf
	
	======================================================================
	Keywords          : kbfile win95 
	Technology        : kbWin95search kbWin95
	Version           : :
	
	=============================================================================
	
