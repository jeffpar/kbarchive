---
layout: page
title: "Q127919: PC Ext: Err Msg: &#91;002&#93; Mail Was Received...Unknown Addresses"
permalink: /kb/127/Q127919/
---

## Q127919: PC Ext: Err Msg: &#91;002&#93; Mail Was Received...Unknown Addresses

	Article: Q127919
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.20 3.20a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With version 3.2.11, 3.2.12, 3.2.13, and 3.2.14 of External.exe, if mail is
	received at a postoffice with an unknown address, the following error message is
	displayed:
	
	  [002] Mail was received that was addressed to unknown addresses.
	
	The unknown addresses of the original mail message will not be added to the
	report in the System.log. Versions earlier than 3.2.11 of External.exe would
	include the invalid addresses as part of the report.
	
	Also, the non-delivery report mailed back to the sender would not include the
	invalid addresses. In version earlier than 3.2.11, the addresses were included.
	
	CAUSE
	=====
	
	Revisions to the External program in version 3.2.11 resulted in this behavior.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.2.11, 3.2.12, 3.2.13,
	and 3.2.14 of External.exe. This problem was corrected in External.exe version
	3.2.15 (or later).
	
	For version 3.2.15 (or later) of the MS-DOS version of External.exe, you can find
	Extupd.exe, a self-extracting file, on the following services:
	
	- Microsoft's World Wide Web Site on the Internet On the www.microsoft.com home
	  page, click the Support icon. Click Knowledge Base, and select the product.
	  Enter kbfile EXTUPD.EXE, and click GO! Open the article, and click the button
	  to download the file.
	
	- Internet (anonymous FTP) ftp ftp.microsoft.com Change to the Softlib/Mslfiles
	  folder. Get EXTUPD.EXE
	
	- The Microsoft Network On the Edit menu, click Go To, and then click Other
	  Location. Type "mssupport" (without the quotation marks). Double-click the MS
	  Software Library icon. Find the appropriate product area. Locate and Download
	  EXTUPD.EXE.
	
	
	For additional information about downloading, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	For version 3.2.15 (or later) of the OS/2 version of External.exe, you need
	Application Note WA0975 "Microsoft Mail External.exe Update for OS/2 Mail
	Multitasking MTA." You can only obtain this Application Note from Microsoft
	Product Support Services.
	
	MORE INFORMATION
	================
	
	Here are examples of correct and incorrect reports.
	
	Correct reporting:
	
	NOTE: The example was created with version 3.2.1 of External.exe. The mail item
	was sent to an unknown address.
	
	Message data:
	
	  From: Administrator Date: 05-21-94 Time: 11:26 Subject: test message
	
	  [002] Mail was received that was addressed to unknown addresses. Mail item
	  was not delivered to:
	
	  Allen, Angelia
	
	Incorrect reporting:
	
	NOTE: The example was created with version 3.2.11 of External.exe. The mail item
	was sent to an unknown address.
	
	Message data:
	
	  From: Administrator Date: 11-29-94 Time: 06:38 Subject: test message
	
	  [002] Mail was received that was addressed to unknown addresses. Mail item
	  was not delivered to:
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a
	Version           : 3.20 3.20a
	
	=============================================================================
	
