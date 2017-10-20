---
layout: page
title: "Q149564: Poor Performance Reading Video CD in IDE CD-ROM Drive"
permalink: /kb/149/Q149564/
---

## Q149564: Poor Performance Reading Video CD in IDE CD-ROM Drive

{% raw %}

	Article: Q149564
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile diskmem win95 kbgraphxlinkcritical kbDiskMemory
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Data transfer can occur very slowly when you are reading a video CD in an IDE
	CD-ROM drive if the following conditions are true:
	
	- The IDE CD-ROM drive is configured as the slave device on an IDE channel,
	  with another device (such as a hard disk) configured as the master device on
	  the chain.
	
	- You are using protected-mode drivers to access the IDE devices, including the
	  CD-ROM drive.
	
	For example, playing an MPEG file from a video CD can cause the computer to seem
	to stop responding (hang) due to the very slow rate at which data is being read
	from the CD.
	
	CAUSE
	=====
	
	There is a problem in the Ios.vxd file that causes excessive seeks on data
	requests from the CD-ROM drive under these conditions. This results in
	degradation in the rate of data transfer from the drive.
	
	RESOLUTION
	==========
	
	Microsoft has released an updated version of the Ios.vxd file that corrects this
	problem. The file is:
	
	  IOS.VXD version 4.00.953 (3/19/96, 68,825 bytes) and later
	
	To install the updated Ios.vxd file, follow these steps:
	
	1. Download the IOSUPD.EXE file from one of the online services listed below to
	  an empty folder.
	
	2. In My Computer or Windows Explorer, double-click the IOSUPD.EXE file you
	  downloaded in step 1.
	
	3. Follow the instructions on your screen.
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Iosupd.exe now
	
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
	
	  Q149563 Fatal Exception 0E in IOS.VXD with SCSI Printer
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile diskmem win95 kbgraphxlinkcritical kbDiskMemory 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
