---
layout: page
title: "Q111704: PC WRmt: Mail Remote MSRMT.DLL Version 3.2.4013 Update"
permalink: /kb/111/Q111704/
---

## Q111704: PC WRmt: Mail Remote MSRMT.DLL Version 3.2.4013 Update

	Article: Q111704
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MSRMT.DLL that is included with version
	3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the MSRMT.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MSRMT.DLL file
	
	MORE INFORMATION
	================
	
	This update contains MSRMT.DLL, a replacement for the MSRMT.DLL file that is
	included with version 3.2 of Microsoft Mail Remote for Windows. This replacement
	file provides additional enhancements to the original MSRMT.DLL file, correcting
	the following problems:
	
	- External postoffices, SNADS DGNs, and nodes for PROFS and OfficeVision are
	  not displayed in alphabetic order because Remote Mail for Windows reads them
	  in one at a time and adds them to the address list hierarchy. With the
	  updated version of MSRMT.DLL, Remote Mail for Windows reads in the external
	  postoffices, SNADS DGNs, and PROFS nodes all at once, sorts them, and then
	  adds them to the address list hierarchy.
	
	- The Windows Remote client may receive general-protection (GP) faults when it
	  reads in a new message whose header within the .MAI file is greater than a
	  certain length. The message is successfully downloaded from the postoffice to
	  the Inbox .MBG file; however, it fails when it is read into the Mail message
	  file (MMF). This problem has been fixed with version 3.2.4010 of MSRMT.DLL.
	
	
	- A message remaining in the Outbox could be misdirected if the remote address
	  book was updated without uploading messages. The client will now check for
	  the outbound messages prior to updating the address book. To ensure this fix
	  works correctly, the following DLLs must be upgraded in conjunction with this
	  DLL:
	
	     MSRMTCN.DLL  version 3.2.4013
	     MSRMTSU.DLL  version 3.2.4013
	     MSRMTTR.DLL  version 3.2.4013
	     MSRMTUI.DLL  version 3.2.4013
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Msrmt.exe now
	  (http://download.microsoft.com/download/pcmail/Update/2/WIN/EN-US/Msrmt.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MSRMT.EXE to a clean directory, run it (by typing "msrmt"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MSRMT.DLL (234,544 bytes, dated 6-15-95, 6:21 P.M.)
	  README.TXT
	
	To update your MSRMT.DLL file
	-----------------------------
	
	1. Verify that the Microsoft Mail Remote driver (MSRMT.DLL) is the current
	  driver in the Mail System Selector (MAILDRV.EXE) by running the Mail System
	  Selector from the Windows Program Manager, selecting Microsoft Mail Remote,
	  then choosing Set As Current Mail Driver.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\msrmt.dll <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting MSRMT.EXE file and <destination> is the drive and directory
	  where your MSRMT.DLL file currently resides. For example, if you ran the
	  self-extracting file from the TEST directory on drive D, and your MSRMT.DLL
	  file is located in the Windows SYSTEM subdirectory on drive C, type the
	  following command:
	
	  " copy d:\test\msrmt.dll c:\windows\system " (without the quotation marks)
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
