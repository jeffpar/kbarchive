---
layout: page
title: "Q165698: XADM: Corrupt Admin.Ins"
permalink: /kb/165/Q165698/
---

## Q165698: XADM: Corrupt Admin.Ins

	Article: Q165698
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Exchange Server, the following error message may
	appear:
	
	  Processing file "Admin.ins" at or near line 1. The file appears to be
	  corrupted
	  Microsoft Exchange server setup id c103264a
	
	CAUSE
	=====
	
	The Admin.ins file is required for Microsoft Exchange Server Setup to complete.
	Some reasons for the error are:
	
	- The CDROM is defective The CD is defective or dirty.
	
	- The Exchange setup files have been copied to a local drive and the Admin.ins
	  file is corrupt.
	
	To verify the integrity of the file, use a text editor such as Edit. The file is
	ASCII.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
