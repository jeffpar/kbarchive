---
layout: page
title: "Q156734: XADM: Err Msg: Attribute Member Of is not Directly Importable"
permalink: /kb/156/Q156734/
---

## Q156734: XADM: Err Msg: Attribute Member Of is not Directly Importable

	Article: Q156734
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to import a Directory Import file using the Microsoft Exchange
	Administrator program, you may encounter the following error:
	
	  The attribute Member of is not directly importable.
	
	In addition, in the Windows NT Event Viewer, you will find the following event
	logged by MSExchangeDSImp:
	
	  Event ID: 154
	  The attribute Member of is not directly importable.
	
	SUMMARY
	=======
	
	The import file field Member Of is not a valid import field. It can only be
	exported from Microsoft Exchange.
	
	WORKAROUND
	==========
	
	When using the import function of Exchange Administrator to add mailboxes to a
	Distribution List, use one of the following two options:
	
	1. Create an import file with a list of DL's and put the list of users for that
	  DL in the Members field.
	
	2. Create an import file with a list of mailboxes and put the list of DL's that
	  each mailbox should belong to in a field titled Members instead of Member Of.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
