---
layout: page
title: "Q176397: XFOR: Access Violation Migrating Messages from SFS Postoffice"
permalink: /kb/176/Q176397/
---

## Q176397: XFOR: Access Violation Migrating Messages from SFS Postoffice

{% raw %}

	Article: Q176397
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to migrate messages from a private folder on a Microsoft Mail
	for PC Networks Shared File System (SFS) postoffice, you may see an error
	message indicating that the Migration Wizard (Mailmig.exe) caused an access
	violation.
	
	CAUSE
	=====
	
	This problem occurs if one or more of the messages contain an attachment that
	has a file name (or full path and file name) longer than 13 characters.
	Microsoft Exchange Server cannot properly migrate a message from a Microsoft
	Mail postoffice if the message contains an attachment with a file name (or full
	path and file name) longer than 13 characters. This problem frequently occurs
	when the full path is maintained for an attachment contained in a message,
	instead of the file name only.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	When a message stored in a private folder on a Microsoft Mail postoffice
	contains an attachment, the attachment's file name is normally maintained, but
	not its full path. However, in some cases, the full path is also maintained,
	even if the message was moved to the private folder with the Microsoft Mail
	MS-DOS client.
	
	Additional query words: av
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
