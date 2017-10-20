---
layout: page
title: "Q181951: XFOR: Err Msg. Installing AT&amp;T Easylink Gateway on Connector PO"
permalink: /kb/181/Q181951/
---

## Q181951: XFOR: Err Msg. Installing AT&amp;T Easylink Gateway on Connector PO

{% raw %}

	Article: Q181951
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5, Japanese version 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing the AT&T Easylink gateway on the Exchange Connector
	postoffice (shadow post office), the installation may fail with the following
	error message:
	
	  The Ms Mail postoffice could not be found in the destination directory.
	
	CAUSE
	=====
	
	The installation program is searching for the Ms Mail maildata directory with
	its 19 subdirectories. The shadow post office is a reduced version of the
	Microsoft Mail for PC Networks and has no users. Some of the 19 subdirectories
	are not included in the shadow post office.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. Create the following five empty subdirectories: CAL\, FOLDERS\, INI\, MEM\,
	  and MMF\ under the Directory Exchsrvr \ CONNECT \ Maildata\.
	
	2. Try the Setup of the AT&T gateway again; it should proceed without a
	  problem.
	
	MORE INFORMATION
	================
	
	Please refer to the Microsoft Exchange Administrator's Guide for more
	information about setting up the AT&T Easylink gateway to provide service
	between Microsoft Exchange Server and the AT&T system.
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHLangJapanese kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
