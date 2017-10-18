---
layout: page
title: "Q173917: XWEB: Pine Puts Windows NT Domain Name in Internet Address"
permalink: kb/173/Q173917/
---

## Q173917: XWEB: Pine Puts Windows NT Domain Name in Internet Address

	Article: Q173917
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	If you are using the Pine POP3 client running against an Exchange Server 5.5
	computer, when you attempt to send Internet mail, you may find that the Windows
	NT domain and user name are included in your Internet address.
	
	If you enter the following user ID
	
	  NT_Domain_Name\NT_User_Name\Exchange_Alias_Name
	
	and the user domain "server.domain," you will be able to log on to the IMAP
	server and retrieve messages. But when a message is sent to the Internet, the
	address will be constructed as follows:
	
	  <NT_Domain_Name\NT_User_Name\Exchange_Alias_Name@server.domain>
	
	Pine constructs the Internet address from the user ID and user domain entered in
	the Pine Setup Configuration menu. Pine does not offer a separate entry for
	Internet address. It always constructs the address from the user ID and user
	domain entered in the configuration.
	
	CAUSE
	=====
	
	There may be other clients that do the same thing to construct the Internet
	address. If you will be using Pine (or any other client that does the same
	thing), make sure your Exchange Server alias (mail account) is the same as your
	Windows NT user name (domain account). In this way, you can log on with just
	user name and password.
	
	WORKAROUND
	==========
	
	To work around this problem in Pine:
	
	- To be able to configure the From field, Pine must be recompiled with the
	  option /d ALLOW_CHANGING_FROM.
	
	There is no Microsoft-centered solution to the problem.
	
	MORE INFORMATION
	================
	
	Pine is manufactured by a vendor independent of Microsoft; we make no warranty,
	implied or otherwise, regarding this product's performance or reliability.
	
	Additional query words: XCLN
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
