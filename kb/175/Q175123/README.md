---
layout: page
title: "Q175123: XCLN: Non-Creator of Public Folder Cannot Remove Self as Owner"
permalink: /kb/175/Q175123/
---

## Q175123: XCLN: Non-Creator of Public Folder Cannot Remove Self as Owner

	Article: Q175123
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The creator of a public folder is the only one who can remove other owners from
	within the Permissions page. When other owners try to remove themselves, their
	changes are silently not applied. After a non-creator selects OK or Apply, the
	properties for this owner are changed from Owner to Custom (with Owner
	properties).
	
	CAUSE
	=====
	
	This is by design.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	
	=============================================================================
	
