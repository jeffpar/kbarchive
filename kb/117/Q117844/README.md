---
layout: page
title: "Q117844: PC Win: Missing Message Text When Sending to a Large Group"
permalink: kb/117/Q117844/
---

## Q117844: PC Win: Missing Message Text When Sending to a Large Group

	Article: Q117844
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 3.0 and 3.2 of Microsoft Mail for PC Networks, when sending mail
	such that the number of recipients is greater than 200 (the exact number depends
	on the specific address list), the body of the message will be missing.
	
	CAUSE
	=====
	
	A boundary condition occurred when the message was slightly smaller than 8192
	bytes that caused the Windows client to assume it had already processed the body
	text when it actually had not. This caused the body text to be lost.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0 and 3.2 of
	Microsoft Mail for Windows. This problem was corrected in version 3.2a (which
	includes MSSFS.DLL version 3.2.0.4074).
	
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
	
	Additional query words: 3.00 3.20 blank empty
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300
	Version           : :3.0,3.2
	
	=============================================================================
	
