---
layout: page
title: "Q196395: XADM: DS_E_UNABLE_TO_PROCEED While Opening Admin Program"
permalink: kb/196/Q196395/
---

## Q196395: XADM: DS_E_UNABLE_TO_PROCEED While Opening Admin Program

	Article: Q196395
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After restoring an Exchange Server directory to an offline recovery server, it
	is possible to receive a DS_E_UNABLE_TO_PROCEED error message when you open the
	Exchange Server Administrator program.
	
	CAUSE
	=====
	
	The restored server and the original backup server do not have matching service
	pack levels.
	
	WORKAROUND
	==========
	
	To work around this problem, install the correct service pack on the recovery
	server.
	
	Additional query words: admin restore
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
