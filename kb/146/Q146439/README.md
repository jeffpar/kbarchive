---
layout: page
title: "Q146439: Cannot Delete Briefcase on Novell NetWare Server"
permalink: kb/146/Q146439/
---

## Q146439: Cannot Delete Briefcase on Novell NetWare Server

	Article: Q146439
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot delete a Briefcase created on a Novell NetWare server. If you try to
	do so, you receive an access violation error message.
	
	CAUSE
	=====
	
	Briefcase folders are created with the Read-Only attribute. Novell NetWare
	servers do not allow read-only folders to be deleted.
	
	RESOLUTION
	==========
	
	Use the right mouse button to click the Briefcase, and then click Properties on
	the menu that appears. Click the Read-Only check box to clear it, and then click
	OK. Delete the Briefcase.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
