---
layout: page
title: "Q132688: PC MAPI: MAPIReadMail Retrieve Message Body as Blank"
permalink: /kb/132/Q132688/
---

## Q132688: PC MAPI: MAPIReadMail Retrieve Message Body as Blank

	Article: Q132688
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.2,3.2a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a simple MAPI (Messaging Application Programming Interface)
	application to retrieve large messages (7-10 pages with attachments), some of
	the message bodies may be read as blank, even though the actual contents are
	not.
	
	CAUSE
	=====
	
	The field MAPIMessages.MsgNoteText is read by MAPIReadMail as blank.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 3.0, 3.2, and 3.2a of
	Microsoft Mail for PC Networks. We are researching the problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN320a kbMailPCN300
	Version           : WINDOWS:3.0,3.2,3.2a
	
	=============================================================================
	
