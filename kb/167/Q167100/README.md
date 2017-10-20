---
layout: page
title: "Q167100: XCLN: Out of Memory Errors with Exchange 5.0 16-Bit Client"
permalink: /kb/167/Q167100/
---

## Q167100: XCLN: Out of Memory Errors with Exchange 5.0 16-Bit Client

{% raw %}

	Article: Q167100
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange 5.0 Windows 3.x client, the following
	error message is displayed:
	
	  Microsoft Exchange could not be started. The operation could not be
	  completed due to insufficient memory. Close one or more applications to
	  make more memory available.
	
	If NetBEUI is being used instead of TCP/IP, the following error message is
	didplayed:
	
	  Microsoft Exchange could not be started. The Microsoft Exchange
	  Address Book was unable to log on to the Microsoft Exchange Server
	  computer. Contact your system administrator if the problem persists.
	
	Or, when you try to resolve the name in the profile, the following error message
	is displayed:
	
	  The name could not be resolved. The Microsoft Exchange Address
	  Book was unable to log on to the Microsoft Exchange Server computer.
	  Contact your system administrator if the problem persists.
	
	NOTE: This problem occurs while the client is trying to resolve the during name
	resolution. If a profile is set up to work offline, the error Message is not
	displayed.
	
	CAUSE
	=====
	
	More than 61 objects (sites and recipient containers) exist in the Global
	Address List (GAL).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Windows
	3.x client, version 5.0. This problem was corrected in the latest Microsoft
	Exchange Server 5.0 U.S. Service Pack. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchangeClientSearch kbZNotKeyword3
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
