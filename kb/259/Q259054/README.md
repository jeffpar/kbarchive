---
layout: page
title: "Q259054: Exchange MAs Add Mailboxes to Exchange During Attribute Flow"
permalink: kb/259/Q259054/
---

## Q259054: Exchange MAs Add Mailboxes to Exchange During Attribute Flow

	Article: Q259054
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 01-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Zoomit VIA, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Deleted mailboxes in Microsoft Exchange are re-created during attribute flow.
	
	For example, during Mailbox Discovery in Exchange but before attribute flow back
	to the Exchange mailbox, an Exchange administrator (or another process) manually
	removes a previously discovered mailbox. Then, the Exchange Management Agent
	(MA), operating in Reflector or Association mode, attempts to update the
	attributes of the deleted mailbox through attribute flow. This does not succeed
	because the mailbox no longer exists. Cdir_ldp.exe or Cdir_ex.exe then
	re-creates the mailbox.
	
	The mailbox should not be re-created because the MA is running in either
	Reflector or Association mode and has no permission to create mailboxes in
	Exchange. Only an attribute flow process should succeed.
	
	CAUSE
	=====
	
	Cdir_ldp.exe and Cdir_ex.exe in both of the Exchange MAs interpret an "M" in the
	Modify templates as an ADD operation if the entry in Exchange does not exist.
	
	If it does exist, the MODIFY operation is correctly applied. This causes a
	problem if you delete entries after the discovery operation but before the start
	of the Meta/Attrib flow update.
	
	During the update phase, the entry (that had been deleted in Exchange prior to
	the update phase) is modified by attribute flow and a modification update is
	sent with an "M" tag in the update file. Because Cdir_ldp.exe and Cdir_ex.exe
	interpret an "M" as an ADD/MOD operation, the entry is re-created.
	
	RESOLUTION
	==========
	
	To resolve this issue, upgrade to Microsoft Metadirectory Services (MMS) version
	2.1 or later.
	
	STATUS
	======
	
	This problem occurs in all Zoomit VIA releases before MMS 2.1.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbZoomitSearch kbMSNonProductSearch kbZoomit210
	Version           : :2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
