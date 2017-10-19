---
layout: page
title: "Q125489: PC Win: Err Msg: MMFCLEAN.EXE Has Stopped Responding..."
permalink: /kb/125/Q125489/
---

## Q125489: PC Win: Err Msg: MMFCLEAN.EXE Has Stopped Responding...

	Article: Q125489
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run MMFCLEAN.EXE, the system you are running it on can lock up or hang.
	You will also receive the following error message:
	
	  MMFCLEAN.EXE has stopped responding to the system.
	
	CAUSE
	=====
	
	In the first step of the MMFCLEAN.EXE procedure, it creates a TEMP file
	(~mmf.tmp), which is a copy of the MMF file that it is attempting to clean. If
	the program is halted in any way, the TEMP MMF will not get deleted. Trying to
	run MMFCLEAN.EXE again may cause the system to lock up or hang.
	
	RESOLUTION
	==========
	
	The resolution is to delete the offending TEMP files from the MAILDATA\MMF
	directory, and MMFCLEAN should work.
	
	NOTE: Insufficient disk space on the postoffice can also cause the system to
	lock-up or hang without warning or error message.
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q117693 PC Adm: Microsoft Mail MMFCLEAN.EXE Utility
	
	You can find MMFUTIL.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MMFUTIL.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MMFUTIL.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MMFUTIL.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area. Locate and Download MMFUTIL.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
