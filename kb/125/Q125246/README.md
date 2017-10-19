---
layout: page
title: "Q125246: MHS: Microsoft Mail Gateway to MHS OUTPOST.EXE Version 3.0.10"
permalink: /kb/125/Q125246/
---

## Q125246: MHS: Microsoft Mail Gateway to MHS OUTPOST.EXE Version 3.0.10

	Article: Q125246
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
	
	Microsoft provides a replacement for the OUTPOST.EXE file that is included with
	version 3.0 of Microsoft Mail Gateway to MHS.
	
	For complete information about obtaining and installing OUTPOST.EXE, see the
	following sections below:
	
	- To download the updated file
	
	- To update your OUTPOST.EXE file
	
	MORE INFORMATION
	================
	
	This update resolves the following problems:
	
	- Incoming messages that contain a line longer than 79 characters are wrapped
	  after the 78th column, and the 79th character is deleted.
	
	
	- Version 3.0.5 of Microsoft Mail Gateway to MHS may display the following
	  error when a reply is sent to a MHS mail user from Microsoft Mail in a
	  non-delivery notice: Invalid Address
	
	
	- A /u (with an umlaut) and a blank subject line are displayed on an incoming
	  MHS message.
	
	
	- MS Mail user sends message to another MS Mail user and copies a MHS addressee
	  (cc:Mail). The cc:Mail user replies to all instead of just to the sender, the
	  message received back on MS Mail has a blank Subject line.
	
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mhsout.exe now
	  (http://download.microsoft.com/download/pcmail/Update/17/DOS/EN-US/Mhsout.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download MHSOUT.EXE to a clean directory, run it (by typing "mhsout"
	(without the quotation marks) at the MS-DOS command prompt) to extract the
	contents of the file. You should receive the following files:
	
	  OUTPOST.EXE (73,643 bytes, dated 06-06-95, 10:44 P.M.)
	  README.TXT
	
	To replace your OUTPOST.EXE file
	--------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>\outpost.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self extracting
	MHSOUT.EXE file and <destination> is the drive and directory where your
	OUTPOST.EXE file currently resides. For example, if you ran the self extracting
	file from the TEST directory on drive D, and your OUTPOST.EXE file is located in
	the MAILEXE directory on drive C, type the following command:
	
	  " copy d:\test\outpost.exe c:\mailexe " (without the quotation marks)
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
