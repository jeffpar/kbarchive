---
layout: page
title: "Q103246: FFAPI: Gateway-Put Executables Version 3.04.7 Update"
permalink: /kb/103/Q103246/
---

## Q103246: FFAPI: Gateway-Put Executables Version 3.04.7 Update

{% raw %}

	Article: Q103246
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides a replacement for the gateway-put executable files that are
	included with version 3.0 of the Microsoft Mail Software Development Kit: File
	Format API (FFAPI) for Gateways and Applications.
	
	For complete information about obtaining and installing the gateway-put files,
	see the following sections:
	
	- To download the updated files
	
	- To update your FFAPI executable files
	
	MORE INFORMATION
	================
	
	This update contains GTWPUT.EXE, OGTWPUT.EXE, and LGTWPUT.EXE, which replace the
	gateway-put executable files that are included with version 3.0 of the Microsoft
	Mail Software Development Kit: File Format Application Programming Interface
	(FFAPI) for Gateways and Applications. These replacement files correct the
	following problems:
	
	- The To: line is left blank when the message header is viewed from the Inbox
	  summary.
	
	- Using LGTWPUT after EDIT.COM may corrupt the From: field of incoming
	  messages.
	
	
	To download the updated files
	-----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Gwput.exe now
	  (http://download.microsoft.com/download/pcmail/Update/6/DOS/EN-US/Gwput.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download GWPUT.EXE to a clean directory, run it (by typing "gwput"
	(without the quotation marks) at the MS-DOS prompt) to extract the contents of
	the file. You should receive the following files:
	
	  LGTWPUT EXE (100,229 bytes, dated 12-02-94, 4:01 P.M.)
	  GTWPUT EXE (66,751 bytes, dated 03-09-93, 12:35 P.M.)
	  OGTWPUT EXE (88,341 bytes, dated 04-30-93, 2:53 P.M.)
	  README.TXT
	
	To update your FFAPI executable files
	-------------------------------------
	
	At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\*.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self- extracting
	GWPUT.EXE file and <destination> is the drive and directory where your
	FFAPI executable files currently reside. For example, if you ran the
	self-extracting file from the TEST directory on drive D and your FFAPI
	executable files are located in the MAILEXE subdirectory on drive C, type the
	following command:
	
	  " copy d:\test\*.exe c:\mailexe " (without the quotation marks)
	
	NOTE: Mail does not require that the FFAPI executable files be located in the
	MAILEXE directory. Also, the FFAPI executable files can be part of a third-party
	application. Make sure you check with the application developer before you
	update copies of the FFAPI executable files.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:
	
	=============================================================================
	

{% endraw %}
