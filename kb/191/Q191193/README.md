---
layout: page
title: "Q191193: XCLN: Error Msg. Opening PST: The Folder Could Not Be Opened"
permalink: /kb/191/Q191193/
---

## Q191193: XCLN: Error Msg. Opening PST: The Folder Could Not Be Opened

	Article: Q191193
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a personal folder file (.pst file) that is located on a
	NetWare server or locally on the client computer, one of the following error
	messages may appear:
	
	  The folder could not be opened. The file <path>\*.pst could not be
	  accessed because another workstation has modified it. Close and then
	  restart all mail-enabled applications.
	
	  -or-
	
	  The file <path>\*.pst is in use and could not be accessed. Close any
	  application that is using this file, and then try again.
	
	CAUSE
	=====
	
	Int21 (Interrupt 21) traces show that a file was assigned JFT FF, which is
	reserved. Any attempt to close the file with JFT FF fails. This explains why the
	workstation reports that the file is already open.
	
	WORKAROUND
	==========
	
	There is a problem with a Symantec file Symevnt.386, which is used by mulitiple
	Symantec products. The patch Symevnt.exe from Symantec fixes the problem.
	
	This problem is referenced in Novell Doc ID 2927787. The files can be downloaded
	from the following location:
	
	  ftp://ftp.symantec.com/public/english_us_canada/symevnt/symevnt.exe
	
	STATUS
	======
	
	Microsoft has confirmed that this is an interoperability problem with the
	NetWare client 32 for Windows 95 redirector and some Symantec products.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: 8.5
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbOutlook97 kbZNotKeyword2 kbOutlook97Search kbOutlook98Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbprb
	
	=============================================================================
	
