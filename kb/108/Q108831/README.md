---
layout: page
title: "Q108831: PC DirSync: Err Msg: Fatal [203] GAL Rebuild Problem"
permalink: kb/108/Q108831/
---

## Q108831: PC DirSync: Err Msg: Fatal [203] GAL Rebuild Problem

	Article: Q108831
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2 of Microsoft Mail for Windows, persistent failures of directory
	synchronization (Dir-Sync) may be recorded in the DIRSYNC.LOG file:
	
	  Fatal [203] GAL Rebuild problem accessing files Global Address List not
	  installed on this Postoffice
	
	CAUSE
	=====
	
	The GAL.NME file is being held open (but not locked) by the MSSFS.DLL file. The
	problem only occurs with MSSFS.DLL version 3.2.0.4046 through 3.2.0.4074.
	
	MSSFS.DLL is used to resolve the names of intended recipients. When an intended
	recipient is an external user with a name already in the Personal Address Book
	(PAB), the GAL.NME file is not closed after the message is sent. The server does
	not allow REBUILD.EXE to delete the old GAL.NME, thus generating the error.
	
	RESOLUTION
	==========
	
	There are currently two workarounds:
	
	- From the Mail menu, choose Options and uncheck Add Recipients To Personal
	  Address Book.
	
	- Make sure every workstation performs an Exit And Sign Out from Mail for
	  Windows before you run REBUILD.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for Windows. This problem was corrected in version 3.2a (which includes
	MSSFS.DLL version 3.2.0.4074).
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  m a i l u p d
	
	There is also a newer version of MSSFS.DLL, which is available from the Microsoft
	Download Center.
	
	You can find MSSFS.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MSSFS.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile MSSFS.EXE, and click GO! Open the article, and click the button
	  to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get MSSFS.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks). Double-click the MS
	  Software Library icon. Find the appropriate product area. Locate and Download
	  MSSFS.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
