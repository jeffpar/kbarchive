---
layout: page
title: "Q184830: XADM: Error 3355443730 Starting Information Store After Restore"
permalink: /kb/184/Q184830/
---

## Q184830: XADM: Error 3355443730 Starting Information Store After Restore

	Article: Q184830
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 10-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the information store after a restore, a server specific error
	3355443730 is generated.
	
	CAUSE
	=====
	
	This error is caused by restoring either the Priv.edb file or the Pub.edb file
	with BackupExec version 6.11 on a computer running Exchange Server 5.5 and not
	restoring the entire information store.
	
	WORKAROUND
	==========
	
	When using BackupExec version 6.11 with Exchange Server 5.5, you must choose to
	restore both the Priv.edb file and the Pub.edb file to prevent BackupExec from
	corrupting the log files.
	
	
	MORE INFORMATION
	================
	
	Seagate recommends upgrading to the current version.
	
	STATUS
	======
	
	BackupExec is manufactured by Seagate, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	For information about how to contact Seagate, query in the Knowledge Base for one
	of the following articles:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
