---
layout: page
title: "Q170391: MTG: System Time Advances One Day When You Run Mail's EXTERNAL"
permalink: /kb/170/Q170391/
---

## Q170391: MTG: System Time Advances One Day When You Run Mail's EXTERNAL

	Article: Q170391
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.1,3.2,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, used with:
	   - the operating system: Microsoft Windows NT, versions 3.1, 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install Microsoft Mail version 3.2 and run the MS-DOS Message Transfer
	Agent (External.exe) in Windows NT, the computer system clock increments by 24
	hours.
	
	CAUSE
	=====
	
	This problem occurs if the BIOS type of the computer is not detected properly.
	This problem may occur on any network operating system that is running the
	MS-DOS Message Transfer Agent and the Postoffice is located on the system.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- Make sure the following entry in the External.ini file for Mail version 3.2x
	  is set as follows: ClockRollOver=0
	
	- From the MS-DOS command prompt, run External.exe with the /ClockRollOver
	  switch as follows: EXTERNAL /ClockRollOver=0
	
	NOTE: The ClockRollOver value is set to 1 by default. If you set this value to 0,
	EXTERNAL does not attempt to read the system BIOS.
	
	MORE INFORMATION
	================
	
	External.exe version 3.2.13 or later is required to correct this problem.
	
	To Update Your MS-DOS External.exe File
	---------------------------------------
	
	You can find Extupd.exe, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile Extupd.exe, and click GO! Open the article, and click the button
	  to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get Extupd.exe.
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks). Double-click the MS
	  Software Library icon. Find the appropriate product area. Locate and Download
	  Extupd.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : :3.1,3.2,3.5
	Issue type        : kbprb
	
	=============================================================================
	
