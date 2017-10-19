---
layout: page
title: "Q169148: XFOR: GroupWise Migration Fails with Shared Directory WPC20 Err"
permalink: /kb/169/Q169148/
---

## Q169148: XFOR: GroupWise Migration Fails with Shared Directory WPC20 Err

	Article: Q169148
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kb3rdparty exc4 exc5
	Last Modified: 24-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Migration wizard to migrate GroupWise
	mailboxes, the following error message may appear:
	
	  Microsoft Exchange Server Migration Wizard
	
	  GroupWise Shared Directory "WPC20" not specified in the Registry. Cannot
	  continue with the GroupWise Migration.
	
	This error occurs when you select Migrate from Novell GroupWise in the Migration
	Wizard.
	
	CAUSE
	=====
	
	The Novell GroupWise 4.1 Windows client is not installed or the GroupWise Shared
	Code is not registered correctly on the computer you are running the migration
	from. The GroupWise Shared code is registered in the HKEY_ROOT\WpConfig\SHWin2x
	registry key. If the key is not present, or the information is invalid, you will
	need to re-install the GroupWise client.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Install or re-install the Novell GroupWise 4.1 client. This will install and
	  register the GroupWise Shared Code.
	
	MORE INFORMATION
	================
	
	The Exchange Server GroupWise Migration utility uses the GroupWise client to
	access the GroupWise post office. Currently, only GroupWise 4.1 post offices can
	be migrated.
	
	GroupWise is manufactured by Novell, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: gwise
	
	======================================================================
	Keywords          : kb3rdparty exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
