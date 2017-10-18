---
layout: page
title: "Q127082: PC Mac: Case Sensitivity on Some Networks, such as UNIX"
permalink: kb/127/Q127082/
---

## Q127082: PC Mac: Case Sensitivity on Some Networks, such as UNIX

	Article: Q127082
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2, on platform(s):
	   - the operating system: Mac OS (ALL) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use version 3.2 of Microsoft Mail for PC Networks, Macintosh
	workstation, you may experience one or more or the following symptoms if the
	Mail postoffice is located on a UNIX server:
	
	1. The workstation software takes an unusually long time to load.
	
	2. When you try to view a message, you receive the following error: Cannot open
	  mail message possibly previously deleted
	
	3. Your address lists may be empty.
	
	CAUSE
	=====
	
	The problem may be caused by case sensitivity between the Macintosh client and
	the UNIX server.
	
	Some network operating systems will not allow a file to be created in all
	uppercase letters. Version 3.0.3 (or later) of the Macintosh client has been
	modified for these types of networks to allow the client to create filenames in
	lowercase letters if LOWRCASE.GLB exists in the GLB subdirectory of the Mail
	postoffice.
	
	RESOLUTION
	==========
	
	Verify the use of the Macintosh client version 3.0.3. If you do not have version
	3.0.3 (or later), you can download MACLIENT.HQX or MACLIENT.SEA (self-extracting
	files) on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile MACLIENT.HQX, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get MACLIENT.HQX
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download MACLIENT.HQX.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	You should also verify the existence of LOWRCASE.GLB in the GLB subdirectory of
	the Mail postoffice. If it does not exist, create the file. For additional
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q127079 PC Mac: Purpose and Location of LOWRCASE.GLB
	
	Verify the Mail postoffice is mounted on the Macintosh desktop. If the client is
	using a third-party Chooser extension to mount the postoffice, we cannot
	guarantee client functionality. If the third-party Chooser extension has a case
	sensitive option, enable this option, or contact the manufacturer of the Chooser
	extension.
	
	
	Additional query words: 3.20 3.0.3
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3
	Version           : WINDOWS:3.2
	
	=============================================================================
	
