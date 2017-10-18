---
layout: page
title: "Q168332: XADM: Unable To Create or Modify a Windows NT Account"
permalink: kb/168/Q168332/
---

## Q168332: XADM: Unable To Create or Modify a Windows NT Account

	Article: Q168332
	Product(s): Microsoft Exchange
	Version(s): WINDOWS4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you modify or create a new Microsoft Exchange mailbox and are prompted to
	select an existing Windows NT account or create a new Windows NT account, the
	following error occurs:
	
	  Internal error: Can not find Windows NT domain controller. Specified domain
	  is invalid or the controller may be down. Microsoft Windows NT ID
	  No:0xc0020995.
	
	RESOLUTION
	==========
	
	From the Exchange Administrator program, select Options from the Tools menu.
	Then select the Permissions tab and change the Default Windows NT domain to the
	correct Windows NT domain.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
