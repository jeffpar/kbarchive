---
layout: page
title: "Q123320: PC Forms: Err Msg: Could Not Copy File.."
permalink: /kb/123/Q123320/
---

## Q123320: PC Forms: Err Msg: Could Not Copy File..

	Article: Q123320
	Product(s): Microsoft Mail For PC Networks
	Version(s): 1.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	1.00
	WINDOWS
	kbusage kberrmsg kbfile kbbug1.00
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install version 1.0 of Microsoft Electronic Forms Designer to a server in
	a shared Microsoft Windows environment as documented on page 124 of the
	"Developer's Guide," you will receive one of the following error messages
	(depending on the version of the SETUP.EXE):
	
	  Error - Could not copy file: A:\VER.DL_-> X:\<WINUSERDIR>\Y:\\VER.DLL
	
	-or-
	
	  Error - Could not execute: X:\<WINUSERDIR>\CMDKINST.exe 2
	
	A shared Windows environment consists of a shared Windows directory and user
	directory created with Windows SETUP /A and SETUP /N, and shown above as Y:\ and
	X:\<WINUSERDIR>, respectively.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. This problem was corrected in SETUP.EXE version 1.01.
	If you do not have version 1.01 (or later), you can download EFSETUP.EXE, a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile EFSETUP.EXE, and click GO! Open the article, and click the
	  button to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get EFSETUP.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks). Double-click the MS
	  Software Library icon. Find the appropriate product area. Locate and Download
	  EFSETUP.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : 1.00
	
	=============================================================================
	
