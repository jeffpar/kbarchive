---
layout: page
title: "Q194117: XADM: Error: Move Server Wizard Requires Service Pack 1"
permalink: /kb/194/Q194117/
---

## Q194117: XADM: Error: Move Server Wizard Requires Service Pack 1

{% raw %}

	Article: Q194117
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Microsoft Exchange Server 5.5 Move Server Wizard (MSW), the
	following error occurs:
	
	  The server you are running on must be an Exchange Server version 5.5
	  Service Pack 1.
	
	  Microsoft Exchange Move Server Wizard
	  ID no: c103754f
	
	CAUSE
	=====
	
	The MSW requires that Exchange Server 5.5 Service Pack 1 be installed on the
	server that is being moved.
	
	WORKAROUND
	==========
	
	To work around this problem, install Service Pack 1.
	
	MORE INFORMATION
	================
	
	The following servers must be running Microsoft Exchange Server version 5.5
	Service Pack 1:
	
	- The server being moved.
	
	- The server that the wizard will use to gather information about the
	  destination site.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
