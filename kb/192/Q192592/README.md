---
layout: page
title: "Q192592: XADM: Paged Pool Memory Leak Caused by Attachment Processing"
permalink: kb/192/Q192592/
---

## Q192592: XADM: Paged Pool Memory Leak Caused by Attachment Processing

	Article: Q192592
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	While using a MAPI application that processes attachments, paged pool memory
	increases over time without decreasing. There may be visible problems with the
	desktop user-interface failing to process normally (failing to repaint the
	screen properly, and missing images).
	
	
	CAUSE
	=====
	
	When MAPI tries to obtain an icon image to display for the file attachment,
	memory is allocated for the icon, and is not freed. The memory allocation is
	small, but some messaging applications which process many messages with
	attachments may be subject to this problem.
	
	
	RESOLUTION
	==========
	
	MAPI has been corrected to free the memory allocation.
	
	Exchange Server 5.0
	-------------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression-tested and should be applied only to systems
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
	
	  Component: MAPI
	
	  File Name     Version
	  -----------------------
	  Mapi32.dll 5.0.1461.62
	
	
	Exchange Server 5.5
	-------------------
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: MAPI
	
	  File Name     Version
	  -----------------------
	  MAPI32.DLL    5.5.2395.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0 and 5.5.
	
	Additional query words: MAPI Leak XCLN
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
