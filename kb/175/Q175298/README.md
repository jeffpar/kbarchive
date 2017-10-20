---
layout: page
title: "Q175298: XADM: System Attendant Started After Running Restore"
permalink: /kb/175/Q175298/
---

## Q175298: XADM: System Attendant Started After Running Restore

{% raw %}

	Article: Q175298
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	If you run the Microsoft Exchange Server Setup program in forklift mode (setup
	/r) and then restore using NTBackup with the Start Services After Restore option
	unchecked, NTBackup will start the Microsoft Exchange System Attendant.
	
	This is by design. NTBackup requires that the System Attendant (MAD.EXE) be
	running. Therefore, it starts the service.
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : 5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
