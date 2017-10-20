---
layout: page
title: "Q153394: XADM: Error When Selecting Security Tab for Mailbox."
permalink: /kb/153/Q153394/
---

## Q153394: XADM: Error When Selecting Security Tab for Mailbox.

{% raw %}

	Article: Q153394
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 11-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to select the Security tab of the properties page for a
	Microsoft Exchange recipient in the Microsoft Exchange Administrator program,
	after properly configuring the Microsoft Exchange Key Management (KM) Server,
	the following error might appear:
	
	  Stop: The specified module could not be found.
	  Microsoft Windows NT
	  ID no: 0xc002007e
	
	CAUSE
	=====
	
	This error occurs because the Microsoft Exchange Administrator program cannot
	access Secadmin.dll. This file must be located in the <exchange_root>\bin
	directory and the error will be displayed if the file is not present or is
	damaged.
	
	The KM Server Setup program will install a copy of Secadmin.dll in the
	\security\bin directory, however, the file is also copied the
	<exchange_root>\bin directory during the Microsoft Exchange Server
	installation and it must remain there for KM Server administration to function
	properly.
	
	The error also shows when selecting the "Key Management Server Administrator"
	button from the "Security" tab in the Encryption object found under the
	Configuration container.
	
	To solve the problem simply copy SECADMIN.DLL from the \security\bin directory
	into the <exchange_root>\bin directory.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
