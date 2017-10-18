---
layout: page
title: "Q177766: Remove All Leaves Exchange Keys In Registry"
permalink: kb/177/Q177766/
---

## Q177766: Remove All Leaves Exchange Keys In Registry

	Article: Q177766
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 09-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run Exchange Server setup and choose Remove All, the following keys may
	still exist in the registry:
	
	  HKLM\Software\Microsoft\Exchange\Security
	
	HKLM\System\CurrentControlSet\Services\EventLog\Application\MSExchangeDS
	  Exp
	  HKLM\System\CurrentControlSet\Services\EventLog\Application\MSExchangeDS
	  Imp
	  HKLM\System\CurrentControlSet\Services\EventLog\Application\MSExchangeNT
	  Ext
	
	HKLM\System\CurrentControlSet\Services\EventLog\Application\MSExchangeNW
	  Ext
	  HKLM\System\CurrentControlSet\Services\EventLog\Application\MSExchangeSe
	  tup
	
	These keys will not be deleted if the user elects not to remove Shared Messaging
	components.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
