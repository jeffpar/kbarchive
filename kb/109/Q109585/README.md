---
layout: page
title: "Q109585: PC WRmt: ATTMAIL.DLL Version 3.2.0.4003 Update"
permalink: kb/109/Q109585/
---

## Q109585: PC WRmt: ATTMAIL.DLL Version 3.2.0.4003 Update

	Article: Q109585
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
	
	Microsoft provides a replacement for the ATTMAIL.DLL file that is included with
	version 3.2 of Microsoft Mail Remote for Windows.
	
	For complete information about obtaining and installing the ATTMAIL.DLL file, see
	the following sections:
	
	- To download the updated file
	
	- To update your ATTMAIL.DLL file
	
	MORE INFORMATION
	================
	
	This update contains ATTMAIL.DLL, a replacement for the ATTMAIL.DLL file that is
	included with version 3.2 of Microsoft Mail Remote for Windows. This replacement
	file provides additional enhancements to the original ATTMAIL.DLL file,
	correcting a problem with the AT&T(R) driver losing the remainder of the
	message body when a null character is detected.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Attmail.exe now
	  (http://download.microsoft.com/download/mail35pcnet/Update/1/W97/EN-US/Attmail.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After you download ATTMAIL.EXE to a clean directory, run it (by typing "attmail"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  ATTMAIL.DLL (215,760 bytes, dated 12-15-93, 1:36 P.M.)
	  README.TXT
	
	To update your ATTMAIL.DLL file
	-------------------------------
	
	1. Verify that the AT&T Mail driver is the current driver in the Mail System
	  Selector (MAILDRV.EXE) by running the Mail System Selector from Program
	  Manager, selecting AT&T Mail, and choosing Set As Current Mail Driver.
	
	2. At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\attmail.dll <destination> " (without the quotation
	  marks)
	
	  where <path> is the drive and directory where you ran the self-
	  extracting ATTMAIL.EXE file and <destination> is the drive and
	  directory where your ATTMAIL.DLL file currently resides. For example, if you
	  ran the self-extracting file from the TEST directory on drive D, and your
	  ATTMAIL.DLL file is located in the Windows SYSTEM subdirectory on drive C,
	  type the following command:
	
	  " copy d:\test\attmail.dll c:\windows\system " (without the quotation marks)
	
	Additional query words: 3.20 wga lose truncated ATT
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3 kbMailRemote320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
