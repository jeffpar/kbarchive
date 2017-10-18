---
layout: page
title: "Q110572: Deleting Fax from Outbox Does Not Remove It from the Queue"
permalink: kb/110/Q110572/
---

## Q110572: Deleting Fax from Outbox Does Not Remove It from the Queue

	Article: Q110572
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a fax is set for retry, and you delete it from the Outbox, it remains in the
	fax queue and Microsoft At Work PC Fax continues trying to send it.
	
	CAUSE
	=====
	
	Microsoft At Work PC Fax is not designed to allow faxes to be deleted from the
	Outbox. The only supported way to cancel a fax is to use the queue.
	
	KBCategory: kbtool kbatwork kbenv
	KBSubcategory: wfw wfwg awfax
	
	Additional query words: 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
