---
layout: page
title: "Q124040: PC Win: Converting Dates Changes Message Update"
permalink: /kb/124/Q124040/
---

## Q124040: PC Win: Converting Dates Changes Message Update

	Article: Q124040
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When messages using an A.M./P.M. time format stamp are converted from the MS-
	DOS client to Microsoft Mail for Windows, the dates are incorrect.
	
	CAUSE
	=====
	
	When messages with the A.M./P.M. style time format in the MS-DOS client are
	converted to the Windows client, Mail adds 12 hours to the time if it is P.M.
	This does not work if the message was sent during the noon hour.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0b and 3.2 of
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
	
	Additional query words: 3.00b 3.20 date convert
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300b
	Version           : WINDOWS:3.0b,3.2
	
	=============================================================================
	
