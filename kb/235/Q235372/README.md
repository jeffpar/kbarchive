---
layout: page
title: "Q235372: XADM: Display Name Corrupts and Information Store Stops"
permalink: /kb/235/Q235372/
---

## Q235372: XADM: Display Name Corrupts and Information Store Stops

{% raw %}

	Article: Q235372
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you install Microsoft Exchange Server version 5.5 on a computer running the
	Korean version of Windows NT Server 4.0, the Microsoft Exchange Server
	Information Store may stop unexpectedly with a stack dump similar to the
	following:
	
	  FramePtr RetAddr Param1 Param2 Param3 Function Name
	  0e45f688 00433144 000004e4 0000001e 00000010
	  STORE!@EcFormatStandardStringProp@36+0x44
	  0e45f744 0042b22a 0edba016 00000001 000004e4
	  STORE!@EcFormatRecipientRow@44+0x452
	  0e45f7b4 0042ae68 000004e4 00000000 0ed453bb STORE!FormatRecipRows+0x316
	  0e45f800 004bac13 0ed84d70 00000002 0ed73fe0 STORE!FormatHeader+0x126
	  0e45f860 00406958 00000000 000004b0 00147d44 STORE!EcReloadCachedInfo+0x12a
	  0ed8b338 0ed8b338 00000001 00000040 00000000 STORE!@EcRpc@16+0x49e
	
	Also, when an English client attempts to open a message, the display name of the
	recipient may be corrupt.
	
	CAUSE
	=====
	
	The problem only occurs when the recipient's mailbox has a longer alias name in
	English than the display name in Korean. When an English client attempts to open
	a message whose recipient has a Korean display name, the Information Store
	attempts to perform a conversion between the English code page and the Korean
	code page, which always fails and returns a string of question marks. The
	Information Store will then use the simple display name, which is the same as
	the alias name; however, it passes the incorrect parameter of the string length
	to the function to allocate the memory for the simple display name, so that the
	new display name does not end with "/0." Following access to the new display
	name causes the Information Store to stop responding or corrupt the display
	name.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File Name  | Version    | 
	+-------------------------+
	| Store.exe  | 5.5.2639.0 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2639.0 | 
	+-------------------------+
	| Gapi32.dll | 5.5.2639.0 | 
	+-------------------------+
	| Netif.dll  | 5.5.2639.0 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	MORE INFORMATION
	================
	
	Note: This is an SP3 fix. You must have previously installed Exchange Server 5.5
	SP2 on your computer before applying this fix.
	
	Note: Before applying this fix, you must be running Dsamain.exe build 2600.0 or
	later. Please see the following article in the Microsoft Knowledge Base for more
	information:
	
	  Q230285 XADM: Denial of Service Vulnerability in Store with IMAP or POP3
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
