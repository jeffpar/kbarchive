---
layout: page
title: "Q99120: PC Win: Network List Doesn't Sort Alphabetically"
permalink: /kb/099/Q99120/
---

## Q99120: PC Win: Network List Doesn't Sort Alphabetically

	Article: Q99120
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	External postoffices, SNADS DGNs, and nodes for PROFS and OfficeVision are not
	displayed in alphabetic order in the Network List because version 3.0 of
	Microsoft Mail for Windows reads them in one at a time and adds them to the
	hierarchy. Thus they are displayed in the order they were set up.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.0 of Microsoft Mail
	for Windows. This problem was corrected in version 3.2a (which includes
	MSSFS.DLL version 3.2.0.4074).
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	There is also a newer version of MSSFS.DLL, which is available from the Microsoft
	Software Library (MSL).
	
	You can find MSSFS.EXE,
	(http://support.microsoft.com/download/support/mslfiles/MSSFS.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MSSFS.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MSSFS.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MSSFS.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	This problem does not occur in version 2.1 or 3.0 of the Microsoft Mail for PC
	Networks, MS-DOS workstation or in version 2.1 of the Windows workstation.
	
	Additional query words: 3.00 bug sort
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
