---
layout: page
title: "Q132546: PC WRmt: Mail Remote MSRMTCN.DLL Version 3.2.4013 Update"
permalink: kb/132/Q132546/
---

## Q132546: PC WRmt: Mail Remote MSRMTCN.DLL Version 3.2.4013 Update

	Article: Q132546
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
	
	Microsoft provides a replacement for the MSRMTCN.DLL file that is included with
	version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the MSRMTCN.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MSRMTCN.DLL file
	
	MORE INFORMATION
	================
	
	This update contains the MSRMTCN.DLL file, a replacement for the MSRMTCN.DLL
	file that is included with versions 3.2 of Microsoft Mail Remote for Windows.
	This replacement file provides additional enhancements to the original
	MSRMTCN.DLL file, correcting the following problems:
	
	- A message remaining in the Outbox could be misdirected if the remote address
	  book was updated without uploading messages. The client will now check for
	  the outbound messages prior to updating the address book. To ensure this fix
	  works correctly, the following DLLs must be upgraded in conjunction with this
	  DLL:
	
	     MSRMT.DLL   v3.2.4013
	     MSRMTSU.DLL v 3.2.4013
	     MSRMTTR.DLL v3.2.4013
	     MSRMTUI.DLL  v3.2.4013
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Msrmtcn.exe now
	  (http://download.microsoft.com/download/pcmail/Utility/3/WIN/EN-US/Msrmtcn.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MSRMTCN.EXE to a clean directory, run it (by typing "msrmtcn"
	(without the quotation marks) at the MS-DOS command prompt) to extract the
	contents of the file. You should receive the following files:
	
	  MSRMTCN.DLL (23,776 bytes, dated 6-15-95, 6:04 P.M.)
	  README.TXT
	
	To update your MSRMTCN.DLL file
	-------------------------------
	
	1. Verify that the Microsoft Mail Remote driver (MSRMT.DLL) is the current
	  driver in the Mail System Selector (MAILDRV.EXE) by running the Mail System
	  Selector from the Windows Program Manager, choosing Microsoft Mail Remote,
	  and then selecting Set As Current Mail Driver.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <drive>:\msrmtcn.dll <destination> " (without the
	  quotation marks)
	
	  where <drive> is the drive and directory where you ran the self
	  extracting MSRMTCN.EXE file and <destination> is the drive and
	  directory where your MSRMTCN.DLL file currently resides. For example, if you
	  ran the self-extracting file from the TEST directory on drive D, and your
	  MSRMTCN.DLL is located in the Windows SYSTEM directory on drive C, type the
	  following command:
	
	  " copy d:\test\msrmtcn.dll c:\windows\system " (without the quotation marks)
	
	Additional query words: 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
