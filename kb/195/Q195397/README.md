---
layout: page
title: "Q195397: XCLN: Attachments with Long Filenames Crash Client"
permalink: kb/195/Q195397/
---

## Q195397: XCLN: Attachments with Long Filenames Crash Client

	Article: Q195397
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0;WINDOWS:5.0;WinNT:5.0
	Operating System(s): 
	Keyword(s): exc55sp2fix kbExchange500preSP3fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows NT client, version 5.0 
	- Microsoft Exchange Windows 95/98 client, version 5.0 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you receive an attachment from the Internet with a long file name, your
	Exchange or Outlook client may crash with the following symptoms.
	
	Exchange 5.0 Client
	-------------------
	
	When you try to open or save the attachment, a Dr. Watson error message will be
	displayed, and then the computer will crash.
	
	Outlook for Macintosh Client
	----------------------------
	
	When you try to open or save the attachment, the following error message will be
	displayed:
	
	  The Application "unknown" has unexpectedly quit, because an error of type 2
	  occurred.
	
	CAUSE
	=====
	
	Both the Exchange Server and Outlook clients incorrectly handle long filenames.
	
	RESOLUTION
	==========
	
	Exchange 5.0 Client
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem. If you are not severely affected by this
	specific problem, Microsoft recommends that you wait for the next Microsoft
	Exchange Server version 5.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information on support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Exchange 5.0 Client
	
	  File Name     Version
	  -------------------------
	  Wmsui32.dll   5.0.1461.67
	
	
	Outlook for Macintosh Client
	----------------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Outlook for Macintosh Client
	
	  Version
	  -------
	  8.01
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	======================================================================
	Keywords          : exc55sp2fix kbExchange500preSP3fix 
	Technology        : kbHWMAC kbOSMAC kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbOutlookMacSearch kbExchange500NT kbOutlook800Mac kbExchange500Win95
	Version           : MACINTOSH:8.0;WINDOWS:5.0;WinNT:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
