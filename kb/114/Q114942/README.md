---
layout: page
title: "Q114942: PC Win: Err Msg: Undeliverable Mail"
permalink: /kb/114/Q114942/
---

## Q114942: PC Win: Err Msg: Undeliverable Mail

	Article: Q114942
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.0b or 3.2 of Microsoft Mail for Windows, if there are more than
	66 network names defined, the following error may occur when you send mail:
	
	  Undeliverable Mail
	
	This problem applies to gateway users, as well as external postoffice users.
	
	CAUSE
	=====
	
	The NETWORK.GLB file is used to define any external postoffices or gateways the
	postoffice can address mail to. Network names are defined by the Mail
	Administrator program and a new record is added to this file every time a new
	network name is defined. Gateway names are defined and added to this file when
	the gateway is installed.
	
	If the NETWORK.GLB file contains more than 66 network names, any mail sent to the
	remaining subsequent network names will cause Mail to return an "Undeliverable
	Mail" error message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0b and 3.2 of
	Microsoft Mail for Windows. This problem was corrected in version 3.2a (which
	includes MSSFS.DLL version 3.2.0.4074).
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base:
	
	  mailupd
	
	There is also a newer version of MSSFS.DLL, which is available from the Microsoft
	Download Center.
	
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
	
	Additional query words: 3.00b 3.20 admin sixty six 66th 67th seven sixth seventh
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300b
	Version           : :3.0b,3.2
	
	=============================================================================
	
