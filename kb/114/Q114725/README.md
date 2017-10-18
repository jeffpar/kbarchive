---
layout: page
title: "Q114725: Incorrect Right Margin with COM10 Center-Fed Envelope"
permalink: kb/114/Q114725/
---

## Q114725: Incorrect Right Margin with COM10 Center-Fed Envelope

	Article: Q114725
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Several new forms to the forms database of Windows NT when you install an Apple
	LaserWriter IINTX printer driver, including "Com10 Envelope Center Fed" and
	"Monarch Envelope Center Fed." Adding new forms to the database is expected
	behavior, however, the right margin values for these two forms are specified
	incorrectly in the forms database as 169091.02 inches and 169090.89 inches,
	respectively.
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	3.51.
	
	To work around the problem after these forms are added to the database, manually
	redefine the right margin value and save your changes.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in Windows NT
	Workstation or Server version 3.51.
	
	The Apple product included here is manufactured by Apple Computer, Inc., a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	
