---
layout: page
title: "Q119410: PC Win: MSSFS.DLL and TRNSCHED.DLL Copied Locally"
permalink: /kb/119/Q119410/
---

## Q119410: PC Win: MSSFS.DLL and TRNSCHED.DLL Copied Locally

{% raw %}

	Article: Q119410
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Mail administrator follows the instructions available in SETUPD.EXE on
	the Microsoft Software Library (MSL) to install and run version 3.2 of Microsoft
	Mail for Windows from the network, the MSSFS.DLL and TRNSCHED.DLL files are
	still copied to each workstation.
	
	These two DLLs need to be copied locally on each workstation to enable the Mail
	System Selector (MAILDRV.EXE) to switch transports. The System Selector looks
	for these two DLLs in the Windows SYSTEM directory when it needs to deactivate
	the LAN driver and activate the Remote driver.
	
	MORE INFORMATION
	================
	
	The Mail System Selector is a program delivered with version 3.2 of Microsoft
	Mail Remote. The Mail System Selector allows the user to switch to a different
	mail service.
	
	NOTE: The following is additional information on the DLLs:
	
	  MSSFS.DLL Microsoft Shared File System PC Mail transport
	  TRNSCHED.DLL Microsoft Schedule+ transactions
	
	You can find SETUPD.EXE,
	(http://support.microsoft.com/download/support/mslfiles/SETUPD.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile SETUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get SETUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download SETUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : :3.2
	
	=============================================================================
	

{% endraw %}
