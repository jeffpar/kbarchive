---
layout: page
title: "Q154435: Windows 95 IDE Support for SMART, DMA, and ATAPI Tape Drives"
permalink: /kb/154/Q154435/
---

## Q154435: Windows 95 IDE Support for SMART, DMA, and ATAPI Tape Drives

	Article: Q154435
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ATAPI IDE driver in Windows 95 (Esdi_506.pdr) does not include functionality
	for the following features:
	
	- SMART support (the ability for certain programs to predict whether a hard
	  disk failure may occur)
	
	- DMA support for ATAPI devices
	
	- ATAPI tape drive support
	
	CAUSE
	=====
	
	The functionality for these features is not built into the Windows 95 IDE
	driver. However, Microsoft has released an updated Esdi_506.pdr file that
	supports these features as follows:
	
	- SMART provides support for SMART programs, which will be able to predict some
	  hard disk failures. The updated driver itself does not provide this
	  functionality, but provides the support for SMART programs to implement this
	  functionality.
	
	- DMA (also called bus mastering) reduces CPU overhead by providing a mechanism
	  for data transfers that do not have to be monitored by the CPU. Transfer rate
	  for a particular transfer will not noticeably increase, but the CPU overhead
	  should be significantly reduced in DMA mode. (For example, a 10 percent CPU
	  overhead may be observed for DMA transfers versus a 30 percent CPU overhead
	  for PIO transfers, in typical ATAPI CD-ROM transfers.)
	
	- ATAPI tape drive support is included in the IDE driver, which will allow a
	  backup program that supports ATAPI tape to be used.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Remideup.exe now
	  (http://download.microsoft.com/download/win95upg/update2/1/w95/en-us/remideup.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The following files are installed by remideup.exe:
	
	 File name     Version    Date/Time       Size    Destination folder
	 ------------------------------------------------------------------------
	 ESDI_506.PDR  4.00.1116  8/25/97 11:16a  24,426  Windows\SYSTEM\IOSUBSYS
	 VOLTRACK.VXD  4.00.954   3/6/96 9:54a    18,518  Windows\SYSTEM\IOSUBSYS
	
	NOTE: The Voltrack.vxd file is installed on Windows 95 (not OSR2 or later) only.
	
	
	This issue is resolved in Microsoft Windows 98.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information about issues resolved by updates to this component,
	please see the following articles in the Microsoft Knowledge Base:
	
	  Q171353 Computer with Ultra DMA IDE Controller May Hang
	
	  Q161642 Auto Insert Notification May Prevent Automatic Suspend
	
	  Q160800 "Fatal Exception Error" with Iomega IDE Zip Drives
	
	  Q154976 Error Message Running Jet Database Engine Stress Test
	
	  Q154436 Errors Accessing Hard Disk with Spin-Down Enabled
	
	  Q153471 Problems with Removable IDE Drives in Windows 95
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 kbgraphxlinkcritical 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :95
	Issue type        : kbprb
	
	=============================================================================
	
