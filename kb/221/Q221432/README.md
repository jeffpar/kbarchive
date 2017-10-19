---
layout: page
title: "Q221432: XFOR: Pickup Folder Mishandles Read-Only File Permissions"
permalink: /kb/221/Q221432/
---

## Q221432: XFOR: Pickup Folder Mishandles Read-Only File Permissions

	Article: Q221432
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): winnt:2.0,4.0,5.5
	Operating System(s): 
	Keyword(s): MCIS_MSG exc55
	Last Modified: 05-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Commercial Internet System version 2.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you generate SMTP mail by creating files, some files are not removed. This
	happens when you create files in Request for Comments (RFC) 822 format in the
	Pickup subfolder of the Mailroot folder of the Internet Information Server (IIS)
	SMTP service (SMTPSVC). Subsequent restarts of the SMTPSVC causes the file to be
	reprocessed, but the file still is not removed.
	
	CAUSE
	=====
	
	These unremoved files that were copied into the Pickup folder have the Read-Only
	attribute set. There is no explicit checking to ascertain whether the files
	processed have the Read-Only attribute set or not. Note that this problem does
	not occur with the Pickup subfolder of the Imcdata folder when you are using the
	Exchange Server 5.5 Internet Mail Service.
	
	WORKAROUND
	==========
	
	When you copy files into the Pickup folder, ensure that the Read-Only attribute
	is not set.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : MCIS_MSG exc55 
	Component         : IMS
	Technology        : kbiisSearch kbAudDeveloper kbExchangeSearch kbExchange550 kbiis400 kbZNotKeyword2 kbMCISSearch kbMCIS200
	Version           : winnt:2.0,4.0,5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
