---
layout: page
title: "Q113341: PC WRmt: Mail Remote MSRMTSU.DLL Version 3.2.0.4013 Update"
permalink: /kb/113/Q113341/
---

## Q113341: PC WRmt: Mail Remote MSRMTSU.DLL Version 3.2.0.4013 Update

	Article: Q113341
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
	
	Microsoft provides a replacement for the MSRMTSU.DLL that is included with
	version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the MSRMTSU.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MSRMTSU.DLL file
	
	MORE INFORMATION
	================
	
	This update contains MSRMTSU.DLL, a replacement for the MMSRMTSU.DLL file that
	is included with version 3.2 of Microsoft Mail Remote for Windows. This
	replacement file provides additional enhancements to the original MSRMTSU.DLL
	file, correcting the following problems:
	
	- When you use Microsoft Mail Remote for Windows to connect to a postoffice and
	  you attempt to switch to the Mail Remote driver with MAILDRV.EXE, the
	  following error message may occur:
	
	  Mailbox ID not Found: <userid>
	
	- A message remaining in the Outbox could be misdirected if the remote address
	  book was updated without uploading messages. The client will now check for
	  the outbound messages prior to updating the address book. To ensure this fix
	  works correctly, the following DLLs must be upgraded in conjunction with this
	  DLL:
	
	     MSRMT.DLL    version 3.2.4013
	     MSRMTCN.DLL  version 3.2.4013
	     MSRMTTR.DLL  version 3.2.4013
	     MSRMTUI.DLL  version 3.2.4013
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Msrmtsu.exe now
	  (http://download.microsoft.com/download/pcmail/Update/10/WIN/EN-US/Msrmtsu.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MSRMTSU.EXE to a clean directory, run it (by typing "msrmtsu"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MSRMTSU.DLL (34,816 bytes, dated 6-15-95, 6:36 P.M.)
	  README.TXT
	
	To replace your MSRMTSU.DLL file
	--------------------------------
	
	1. Verify that the Microsoft Mail Remote driver (MSRMT.DLL) is the current
	  driver in the Mail System Selector (MAILDRV.EXE) by running the Mail System
	  Selector from the Windows Program Manager, choosing Microsoft Mail Remote,
	  and then selecting Set As Current Mail Driver.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\msrmtsu.dll <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting MSRMTSU.EXE file and <destination> is the drive and
	  directory where your MSRMTSU.DLL file currently resides. For example, if you
	  ran the self-extracting file from the TEST directory on drive D, and your
	  MSRMTSU.DLL file is located in the Windows SYSTEM subdirectory on drive C,
	  type the following command:
	
	  " copy d:\test\msrmtsu.dll c:\windows\system " (without the quotation marks)
	
	Additional query words: 3.20 wga mail ID not found
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
