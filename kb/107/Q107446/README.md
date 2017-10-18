---
layout: page
title: "Q107446: FFAPI: Application-Put Executables 3.04.1 Update"
permalink: kb/107/Q107446/
---

## Q107446: FFAPI: Application-Put Executables 3.04.1 Update

	Article: Q107446
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): kbgraphxlinkcritical
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit: FFAPI for Gateways and Applications, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft provides replacements for the APPPUT.EXE, LAPPPUT.EXE, and OAPPPUT.EXE
	files that are included with version 3.0 of the Microsoft Mail SDK: FFAPI for
	Gateways and Applications.
	
	For complete information about obtaining and installing the APPPUT.EXE,
	LAPPPUT.EXE, and OAPPPUT.EXE files, see the following sections:
	
	- To download the updated file
	
	- To update your APPPUT.EXE, LAPPPUT.EXE, and OAPPPUT.EXE files (FFAPI
	  executable files)
	
	MORE INFORMATION
	================
	
	This update contains APPPUT.EXE, LAPPPUT.EXE, and OAPPPUT.EXE, which replace the
	application-put executable files that are included with version 3.0 of the
	Microsoft Mail Software Development Kit (SDK): File Format Application
	Programming Interface (FFAPI) for Gateways and Applications. These replacement
	files correct a problem in version 3.0 of Microsoft Mail for Windows where the
	To: line is left blank when the message header is viewed from the Inbox
	summary.
	
	NOTE: The OAPPPUT.EXE executable file is actually version 3.04.3, which contains
	only the fix noted above.
	
	To download the updated file
	----------------------------
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Ffapiupd.exe now
	  (http://download.microsoft.com/download/pcmail/Update/5/DOS/EN-US/Ffapiupd.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	After you download FFAPIUPD.EXE to a clean directory, run it (by typing
	"ffapiupd" (without the quotation marks) at the MS-DOS prompt) to extract the
	contents of the file. You should receive the following files:
	
	  APPPUT.EXE ( 67,641 bytes, dated 04-26-93, 6:58 P.M.)
	  LAPPPUT.EXE (101,689 bytes, dated 04-26-93, 7:15 P.M.)
	  OAPPPUT.EXE ( 89,641 bytes, dated 03-08-94, 3:12 P.M.)
	  README.TXT
	
	To update your APPPUT.EXE, LAPPPUT.EXE, and OAPPPUT.EXE files (FFAPI executable
	files) At the MS-DOS command prompt, type the following and press ENTER
	
	  " copy <path>:\*.exe <destination> " (without the quotation
	  marks)
	
	where <path> is the drive and directory where you ran the self-extracting
	FFAPIUPD.EXE file and <destination> is the drive and directory where your
	FFAPI executable files currently reside. For example, if you ran the self-
	extracting file from the TEST directory on drive D, and your FFAPI executable
	files are located in the MAILEXE directory on drive C, type the following
	command:
	
	  " copy d:\test\*.exe c:\mailexe " (without the quotation marks)
	
	NOTE: Mail does not require that the FFAPI executable files be located in the
	MAILEXE directory. Also, the FFAPI executable files can be part of a third-party
	application. Make sure you check with the application developer before updating
	copies of the FFAPI executable files.
	
	Additional query words: 3.00 3.20 wga
	
	======================================================================
	Keywords          : kbgraphxlinkcritical 
	Technology        : kbAudDeveloper kbMailSearch kbSDKSearch
	Version           : MS-DOS:3.0
	
	=============================================================================
	
