---
layout: page
title: "Q152914: XCON: MTA Terminates Unexpectedly with Event ID 2050"
permalink: /kb/152/Q152914/
---

## Q152914: XCON: MTA Terminates Unexpectedly with Event ID 2050

	Article: Q152914
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 Service Packs 1, 2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances The Microsoft Exchange Message Transfer Agent (MTA)
	may terminate unexpectedly with the following error message:
	
	  message NMI2050: Internal Processing Error, severity 16
	
	  (BASE XFER-IN(21) Proc 9) 06-27-96 02:03:05pm
	  Illegal put to element A48E6500 at offset 31081
	
	CAUSE
	=====
	
	This problem occurs when the MTA has received a corrupted or incorrectly encoded
	message from a remote MTA. For example, if the MTA receives a message, the
	actual content length of which is "x," but the encoded content length was
	"100x", the MTA will terminate unexpectedly with the Event ID 2050.
	
	RESOLUTION
	==========
	
	In order to resolve the problem, the corrupted or incorrectly encoded message
	must be removed from the remote MTA's queue, and the Exchange MTA must be
	restarted.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	version 4.0 Service Pack 1 (SP1) and Service Pack 2 (SP2).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPTProdChange kbExchangeSearch kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
