---
layout: page
title: "Q246504: XADM: Cannot Access Public Folder Properties, C1010AAE"
permalink: /kb/246/Q246504/
---

## Q246504: XADM: Cannot Access Public Folder Properties, C1010AAE

	Article: Q246504
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some public folders generate the following error message when you use the
	Microsoft Exchange Server Administrator program to get public folder
	properties:
	
	  The object cannot be found in the directory. This may be because replication
	  has not completed.
	  Microsoft Exchange Directory ID no: c1010aae
	
	Any of the following events may appear in the application log for the Exchange
	Server computer:
	
	  Event ID: 2037
	  Source: MSExchangeSA
	  Type: Error
	  Category: General
	  Description:
	  The file version of '\address\SMTP\i386\inproxy.dll' installed on the local
	  server is not current. Unable to locate a correct version on any server in
	  the site.
	
	  Event ID: 2037
	  Source: MSExchangeSA
	  Type: Error
	  Category: General
	  Description:
	  The file version of '\address\MS\i386\pcproxy.dll' installed on the local
	  server is not current. Unable to locate a correct version on any server in
	  the site.
	
	  Event ID: 2037
	  Source: MSExchangeSA
	  Type: Error
	  Category: General
	  Description:
	  The file version of '\address\X400\i386\x400prox.dll' installed on the local
	  server is not current. Unable to locate a correct version on any server in
	  the site.
	
	Clients can create and access public folders even with the above error messages.
	
	CAUSE
	=====
	
	The file version for the proxy address generator does not match the File-Version
	object attribute for the corresponding e-mail address generator.
	
	RESOLUTION
	==========
	
	Reapply the latest service pack.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
