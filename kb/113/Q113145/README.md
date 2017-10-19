---
layout: page
title: "Q113145: PC WRmt: Mail Remote MSRMTTR.DLL Version 3.2.2000.4013 Update"
permalink: /kb/113/Q113145/
---

## Q113145: PC WRmt: Mail Remote MSRMTTR.DLL Version 3.2.2000.4013 Update

	Article: Q113145
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Remote for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MSRMTTR.DLL file that is included with
	version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the MSRMTTR.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MSRMTTR.DLL file
	
	MORE INFORMATION
	================
	
	This update contains the MSRMTTR.DLL file, a replacement for the MSRMTTR.DLL
	file that is included with versions 3.2 of Microsoft Mail Remote for Windows.
	This replacement file provides additional enhancements to the original
	MSRMTTR.DLL file, correcting the following problems:
	
	- The algorithm used to compare strings received by the script command WAITRSP
	  did not correctly identify valid strings.
	
	- The Echo command used to be ignored in modem scripts for EXTERNAL.EXE
	  versions 3.2.x and Mail Remote for Windows.
	
	
	- A message remaining in the Outbox could be misdirected if the remote address
	  book was updated without uploading messages. The client will now check for
	  the outbound messages prior to updating the address book. To ensure this fix
	  works correctly, the following DLLs must be upgraded in conjunction with this
	  DLL:
	
	     MSRMT.DLL    version 3.2.4013
	     MSRMTCN.DLL  version 3.2.4013
	     MSRMTSU.DLL  version 3.2.4013
	     MSRMTUI.DLL  version 3.2.4013</ITEM></STEPS>
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Msrupd.exe now
	  (http://download.microsoft.com/download/pcmail/Update/12/WIN/EN-US/Msrupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MSRUPD.EXE to a clean directory, run it (by typing "msrupd"
	(without the quotation marks) at the MS-DOS command prompt) to extract the
	contents of the file. You should receive the following files:
	
	  MSRMTTR.DLL (76,576 bytes, dated 6-15-95, 5:58 P.M.)
	  README.TXT
	
	To update your MSRMTTR.DLL file
	-------------------------------
	
	1. Verify that the Microsoft Mail Remote driver (MSRMT.DLL) is the current
	  driver in the Mail System Selector (MAILDRV.EXE) by running the Mail System
	  Selector from the Windows Program Manager, choosing Microsoft Mail Remote,
	  and then selecting Set As Current Mail Driver.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\msrmttr.dll <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting MSRUPD.EXE file and <destination> is the drive and directory
	  where your MSRMTTR.DLL file currently resides. For example, if you ran the
	  self-extracting file from the TEST directory on drive D, and your MSRMTTR.DLL
	  is located in the Windows SYSTEM directory on drive C, type the following
	  command:
	
	  " copy d:\test\msrmttr.dll c:\windows\system " (without the quotation marks)
	
	Additional query words: 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : :3.2
	
	=============================================================================
	
