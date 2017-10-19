---
layout: page
title: "Q215533: XADM: Directory Export Sends OBJ-DIST-NAME Instead of Directory"
permalink: /kb/215/Q215533/
---

## Q215533: XADM: Directory Export Sends OBJ-DIST-NAME Instead of Directory

	Article: Q215533
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Directory Export sometimes does not use the directory name object attribute as
	the directory name when performing a directory export. Instead, Directory Export
	may construct the directory name from the OBJ-DIST-NAME object attribute using
	the last common name field as the directory. Normally this would be fine, as the
	last common name and the directory name are usually the same. But if a customer
	deletes and recreates a mailbox changing the case of the directory name, then
	the directory name object attribute and the last common name of the
	OBJ-DIST-NAME will be different. This can cause problems when performing a
	dirsync operation with third-party e-mail servers.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Administrator Program
	
	+------------------------+
	| File name | Version    | 
	+------------------------+
	| Dapi.dll  | 5.5.2541.0 | 
	+------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
