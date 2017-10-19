---
layout: page
title: "Q118504: PC Ext: X.25 Err Msg: Mail Retry Count Exceeded..."
permalink: /kb/118/Q118504/
---

## Q118504: PC Ext: X.25 Err Msg: Mail Retry Count Exceeded...

	Article: Q118504
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sending numerous attachments to multiple recipients via the External Mail
	program (EXTERNAL.EXE) across an X.25 connection may fail with the following
	error message:
	
	  Mail retry count exceeded sending to <network/postoffice>
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 3.2 of Microsoft Mail
	for PC Networks. This problem is corrected in EXTERNAL.EXE version 3.2.12. If
	you do not have version 3.2.12 (or later), you can download EXTUPD.EXE, a
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
	  Type "mssupport" (without the quotation marks)
	  Double-click the MS Software Library icon.
	  Find the appropriate product area.
	  Locate and Download EXTUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	This problem does not exhibit itself until the combined number of attachments
	and recipients reaches some unspecified limit. In many cases, reducing the
	number of attachments or recipients will eliminate the problem. In extreme
	cases, only one attachment may be sent to any specific group of recipients.
	
	This problem is more prone to show when connecting multiple postoffices via Async
	or X.25 communications, running the MS-DOS version of EXTERNAL.EXE.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
