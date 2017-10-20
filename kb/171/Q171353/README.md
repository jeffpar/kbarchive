---
layout: page
title: "Q171353: Computer with Ultra DMA IDE Controller May Hang"
permalink: /kb/171/Q171353/
---

## Q171353: Computer with Ultra DMA IDE Controller May Hang

{% raw %}

	Article: Q171353
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): kbhw osr2 win95 kbHardware kbgraphxlinkcriticalkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows 95 on a computer with an IDE (ATA) hard disk and
	controller that support Ultra DMA mode, the computer may stop responding (hang)
	while the hard disk is being accessed.
	
	CAUSE
	=====
	
	This problem can occur if there is a hardware error while data is being read
	from the hard disk. When such an error occurs in Ultra DMA mode, the Windows
	device driver does not successfully recover from the error and retry the
	operation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95 OEM Service
	Release 2 (OSR2). An update to address this problem is now available, but is not
	fully regression-tested and should be applied only to computers experiencing
	this specific problem. Unless you are severely impacted by this specific
	problem, Microsoft does not recommend implementing this update at this time.
	
	This issue is resolved by the following updated file for Windows 95 OSR2:
	
	  Esdi_506.pdr version 4.00.1116 (dated 8/25/97) and later
	
	To install this update, follow these steps:
	
	1. Download the Remideup.exe file from the online service listed below to an
	  empty folder.
	
	2. In My Computer or Windows Explorer, double-click the Remideup.exe file you
	  downloaded in step 1.
	
	3. Follow the instructions on the screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Remideup.exe now
	  (http://download.microsoft.com/download/win95upg/update2/1/w95/EN-US/remideup.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The following files are installed by Remideup.exe:
	
	  File name     Version    Date/Time       Size    Destination folder
	  ------------------------------------------------------------------------
	  Esdi_506.pdr  4.00.1116  8/25/97 11:16a  24,426  Windows\System\Iosubsys
	  Voltrack.vxd  4.00.954   3/6/96 9:54a    18,518  Windows\System\Iosubsys
	
	NOTE: The Voltrack.vxd file is installed on Windows 95 computers only. This file
	is not installed on computers running OSR2.
	
	
	MORE INFORMATION
	================
	
	Ultra DMA, also known as Ultra DMA/33, is an extension of the ATA hard disk
	interface that allows burst data transfer rates of 33.3 MB per second (double
	the ATA-2/ATA-3 standard of 16.6 MB per second).
	
	This new standard is supported by controller chip sets such as the Intel PIIX4
	chip set.
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q161642 Auto Insert Notification May Prevent Automatic Suspend
	
	  Q160800 "Fatal Exception Error" with Iomega IDE Zip Drives
	
	  Q154976 Error Message Running Jet Database Engine Stress Test
	
	  Q154436 Errors Accessing Hard Disk with Spin-Down Enabled
	
	  Q154435 Windows 95 IDE Support for SMART, DMA, and ATAPI Tape Drives
	
	  Q153471 Problems with Removable IDE Drives in Windows 95
	
	Additional query words: 95 w95hw
	
	======================================================================
	Keywords          : kbhw osr2 win95 kbHardware kbgraphxlinkcritical kbfixlist
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	

{% endraw %}
