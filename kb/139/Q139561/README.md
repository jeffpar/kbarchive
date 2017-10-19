---
layout: page
title: "Q139561: Availability of MSDLC32 and Support Boundaries"
permalink: /kb/139/Q139561/
---

## Q139561: Availability of MSDLC32 and Support Boundaries

	Article: Q139561
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbfile kbnetwork 3rdpartynet msnets dtssb win95 kbDLC kbGrpDSNet kb3rdPartyNetClient
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the availability of Microsoft's 32-bit Data Link Control
	(MSDLC32) protocol and provides information regarding Microsoft support policies
	for this protocol.
	
	MORE INFORMATION
	================
	
	MSDLC32 Explanation and Availability
	------------------------------------
	
	MSDLC32 is a 32-bit networking protocol for Windows 95. Its primary use is by
	3270 emulators for connectivity to IBM mini/mainframe computers. In many
	implementations, it replaces the 16-bit MSDLC that is currently available. The
	benefits of MSDLC32 are improved performance and an increase of available
	conventional memory. A configuration reporting and logging utility, Trcdlc.exe,
	is included. To download the Msdlc32.exe file, please see the "Instructions for
	Downloading" section later in this article.
	
	MSDLC32 Support Information
	---------------------------
	
	Microsoft Product Support Services supports the following: installation of this
	protocol through the user interface; functionality of the configuration dialog
	boxes; and booting without error with the protocol installed. Desktop Systems
	supports the command-line syntax of the Trcdlc utility. For more information
	about the command-line parameters for Trcdlc.exe, please consult the Readme.doc
	provided with the add-on.
	
	Microsoft will not support issues related to connecting to another computer with
	this protocol. For more information about server-related settings or other
	information regarding setting requirements to connect to the server with
	MSDLC32, please contact your System Administrator or the manufacturer of the
	network software.
	
	Installation
	------------
	
	1. Double-click Msdlc32.exe in the folder to which you downloaded the file.
	
	  NOTE: Do not run the Msdlc32.exe file in the Windows or Windows\System folder.
	  If you downloaded the file to either of these locations, copy it to a
	  temporary folder on your hard disk.
	
	2. Create an installation disk or create a temporary folder on your hard disk
	  and copy the files included in the Msdlc32.exe file to that location.
	
	3. Click the Start button, point to Settings, and then click Control Panel.
	
	4. In Control Panel, double-click the Network icon.
	
	5. In the Network dialog box, click Add, and in the Select Network Component
	  Type dialog box, double-click Protocol.
	
	6. In the Select Network Protocol dialog box, click Have Disk.
	
	7. Specify the drive and path where the Msdlc32.exe files are located. For
	  example, if you created an installation disk, type
	
	  <drive>:\
	
	  where <drive> is the floppy disk drive where your installation disk is
	  located.
	
	  Or if you created a temporary folder, type
	
	  c:\<folder>
	
	  where <folder> is the temporary folder to which you copied the
	  Msdlc32.exe file.
	
	8. Click OK.
	
	9. Click "Microsoft 32-bit DLC," and then click OK.
	
	10. When you are prompted to do so, insert the Windows 95 disks so that other
	  network components can be reinstalled.
	
	11. When you are prompted to do so, shut down your computer and restart Windows
	  95.
	
	Instructions for Downloading
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  Download Msdlc32.exe now
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Service Pack 1
	--------------
	
	The Microsoft Windows 95 Service Pack 1 includes the MSDLC32 protocol. For more
	information about the Windows 95 Service Pack 1, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	DLC Update
	----------
	
	For information about the DLC update for the MSDLC32 protocol, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q148765 Availablity of DLC Update for MSDLC32 Protocol
	
	Additional query words: servicepack1 AS400
	
	======================================================================
	Keywords          : kbfile kbnetwork 3rdpartynet msnets dtssb win95 kbDLC kbGrpDSNet kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
