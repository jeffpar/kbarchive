---
layout: page
title: "Q107091: PROFS: Duplicate Messages Delivered to PROFS Users"
permalink: /kb/107/Q107091/
---

## Q107091: PROFS: Duplicate Messages Delivered to PROFS Users

{% raw %}

	Article: Q107091
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	PROFS users sometimes find duplicates in their inboxes of mail messages that
	originate from a Microsoft Mail for PC Networks user and are transferred through
	Microsoft Mail Gateway to PROFS.
	
	CAUSE
	=====
	
	As part of its message processing, the PROFS Gateway creates temporary files
	that contain a copy of the original mail message and attachments. If the Gateway
	crashes while PROFS is processing a mail message, PROFS uses a temporary file to
	re-process the message when operations resume.
	
	If the original message is properly delivered but the Gateway crashes or halts
	before the temporary files are deleted, PROFS still re-processes and re-delivers
	the message when operations resume, causing a duplicate.
	
	WORKAROUND
	==========
	
	This is a normal Gateway safeguard against lost mail. Delete the duplicate
	message.
	
	Additional query words: 3.00 3.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
