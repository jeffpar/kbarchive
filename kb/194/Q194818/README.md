---
layout: page
title: "Q194818: XADM: SBS: Event ID 1234 When Starting Exchange Server Services"
permalink: kb/194/Q194818/
---

## Q194818: XADM: SBS: Event ID 1234 When Starting Exchange Server Services

	Article: Q194818
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server services, you receive the following
	error message:
	
	  Event ID:1234
	  Source: MSexchangeDS
	  Type: Error
	  Category: Internal processing
	  Description: The name of this computer [New computername] does not
	  match the name recorded in the Microsoft Exchange Server directory
	  database [old computername]. If you have renamed this computer, you
	  must change the name back to [old computername]. If you have restored
	  this database from a backup, it must be restored on the same computer
	  that was used for the backup.
	
	WORKAROUND
	==========
	
	There are three workarounds for this issue:
	
	- If the computer name was changed, rename it to the original name.
	
	  1. Double-click Network Neighborhood. On the File menu, click Properties,
	     click the General tab, and click Change.
	
	  2. Type the old computer name from the description of Event ID 1234 as shown
	     above.
	
	- If you want to restore a backup, reinstall Exchange Server on the old
	  computer and use the correct name, and the same organization and site name.
	
	- Rename the computer to the correct name, as outlined in the first workaround,
	  and reinstall Exchange Server.
	
	
	Additional query words: smallbiz sbs
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
