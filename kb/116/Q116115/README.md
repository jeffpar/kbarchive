---
layout: page
title: "Q116115: PC DOS: MS-DOS Client MAIL.EXE 3.0.2 Update"
permalink: /kb/116/Q116115/
---

## Q116115: PC DOS: MS-DOS Client MAIL.EXE 3.0.2 Update

	Article: Q116115
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the MAIL.EXE file that is included with
	versions 3.0 and 3.2 of Microsoft Mail for PC Networks.
	
	For complete information about obtaining and installing the MAIL.EXE file, see
	the following sections:
	
	- To download the updated file
	
	- To update your MAIL.EXE file
	
	MORE INFORMATION
	================
	
	This update contains MAIL.EXE, a replacement for the MAIL.EXE file that is
	included with versions 3.0 and 3.2 of Microsoft Mail for PC Networks. This
	update includes a modification to correct the following problem:
	
	- With version 3.0 of the MS-DOS client, when you read certain messages that
	  contain color highlights, the message may exhibit a host of problems ranging
	  from benign (characters changing color) to severe (user's system locking up).
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Dosmail.exe now
	  (http://download.microsoft.com/download/pcmail/Update/1/DOS/EN-US/Dosmail.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download DOSMAIL.EXE to a clean directory, run it (by typing "dosmail"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  MAIL.EXE (267,169 bytes, dated 04-25-94, 4:09 P.M.)
	  README.TXT
	
	To update your MAIL.EXE file
	----------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\mail.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	DOSMAIL.EXE file and <destination> is the drive and directory where your
	MAIL.EXE file currently resides.
	
	For example, if you ran the self-extracting file from the TEST directory on drive
	D, and your <filename> file is located in the MAILEXE directory on drive
	C, type the following command:
	
	  " copy d:\test\mail.exe c:\mailexe " (without the quotation marks)
	
	NOTE: The MAIL.EXE file typically resides on the postoffice server in the Mail
	executables directory as well as on the machine importing addresses into the
	database. Make sure you update all copies of the MAIL.EXE file.
	
	Additional query words: 3.00 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.0,3.2
	
	=============================================================================
	
