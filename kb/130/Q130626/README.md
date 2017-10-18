---
layout: page
title: "Q130626: MHS: MHSINP.EXE Version 3.0.9 Update"
permalink: kb/130/Q130626/
---

## Q130626: MHS: MHSINP.EXE Version 3.0.9 Update

	Article: Q130626
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the INPOST.EXE file that is included with
	version 3.0 of Microsoft Mail Gateway to MHS.
	
	For complete information about obtaining and installing the INPOST.EXE file, see
	the following sections below:
	
	- To download the updated file
	
	- To update your INPOST.EXE file
	
	MORE INFORMATION
	================
	
	This update corrects the following problem:
	
	- Outgoing mail in the MHS queue does not get sent through the gateway. The
	  following error message is generated in the MHSGATE.LOG file: INPOST General
	  I/O
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mhsinp.exe now
	  (http://download.microsoft.com/download/pcmail/Update/16/DOS/EN-US/Mhsinp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MHSINP.EXE to a clean directory, run it (by typing "mhsinp"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  INPOST.EXE (73,211 bytes, dated 04-12-95, 10:32 P.M.)
	  README.TXT (this file)
	
	To update your INPOST.EXE file
	------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER after each line
	
	  " copy <path>:\inpost.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self extracting
	MHSINP.EXE file and <destination> is the drive and directory where your
	INPOST.EXE file currently resides. For example, if you ran the self-extracting
	file from the TEST directory on drive D, and your INPOST.EXE file is located in
	the MAILEXE directory on drive C, type the following command:
	
	  " copy d:\test\inpost.exe c:\mailexe " (without the quotation marks)
	
	Additional query words: 3.00 stuck message
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
