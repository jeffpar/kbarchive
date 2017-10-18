---
layout: page
title: "Q113165: PC Ext: Err Msg: Retry Count Exceeded"
permalink: kb/113/Q113165/
---

## Q113165: PC Ext: Err Msg: Retry Count Exceeded

	Article: Q113165
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the External Mail program (EXTERNAL.EXE) cannot deliver mail to an .MAI
	file, the following error message appears:
	
	  Retry count exceeded
	
	The External Mail program generates this error after it has tried to deliver a
	message three times. It takes approximately 16 minutes to make the three
	attempts. If the file remains locked, the External Mail program's copy of the
	message is destroyed. You can tell this problem has occurred by looking in the
	sending postoffice's SESSION.LOG and SYSTEM.LOG files for "Retry Count Exceeded"
	and "Missing Message File" messages.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. This problem was corrected in version 3.2a (which includes
	EXTERNAL.EXE version 3.2.9).
	
	For information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  mailupd
	
	There is also a newer version of EXTERNAL.EXE, which is available from the
	Microsoft Download Center.
	
	You can find EXTUPD.EXE,
	(http://support.microsoft.com/download/support/mslfiles/EXTUPD.EXE,) a
	self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet
	
	  On the www.microsoft.com home page, click the Support icon.
	  Click Knowledge Base, and select the product.
	  Enter kbfile EXTUPD.EXE, and click GO!
	  Open the article, and click the button to download the file.
	
	- Internet (anonymous FTP)
	
	  ftp ftp.microsoft.com
	  Change to the Softlib/Mslfiles folder.
	  Get EXTUPD.EXE
	
	- The Microsoft Network
	
	  On the Edit menu, click Go To, and then click Other Location.
	  Type "mssupport" (without the quotation marks).
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download EXTUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
