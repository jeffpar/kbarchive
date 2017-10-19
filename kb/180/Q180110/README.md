---
layout: page
title: "Q180110: XADM: Directory Export Does Not Append to Existing File"
permalink: /kb/180/Q180110/
---

## Q180110: XADM: Directory Export Does Not Append to Existing File

	Article: Q180110
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you select Directory export in the Microsoft Exchange Administrator program
	and specify an existing file as the Export file, the Export function of the
	Administrator program overwrites this file without any warnings.
	
	CAUSE
	=====
	
	This behavior is by product design.
	
	MORE INFORMATION
	================
	
	During the export process, you may choose to only export mailboxes to the export
	file. However, if you then select the same export file and choose to export
	Distribution Lists (DL), the DL entries are not appended to the export file as
	you may expect. The existing export file is overwritten with the DL exports, and
	the original mailbox export file is renamed to filename.Cxx , where "xx"
	represents how many times an export has been attempted to the existing filename.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
