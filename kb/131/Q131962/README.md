---
layout: page
title: "Q131962: XCON: X25CallFacilities and X25CallUserData in Registry"
permalink: kb/131/Q131962/
---

## Q131962: XCON: X25CallFacilities and X25CallUserData in Registry

	Article: Q131962
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following registry entries are present for every instance of the Microsoft
	Mail (PC) MTA for Microsoft Exchange Server created through the Microsoft
	Exchange Administrator program:
	
	  X25CallFacilities
	  X25CallUserData
	
	These entries are specific to X.25 configurations only; however, they will be
	present in the registry even if the instances of the MTA are not configured for
	X.25 connections.
	
	MORE INFORMATION
	================
	
	The MTA entries can be found under the following registry location:
	
	  HKEY_LOCAL_MACHINE
	     \SYSTEM
	        \CurrentControlSet
	           \Services
	              \<name given to instance of external>
	                 \Parameters...
	                    X25CallFacilities
	                    X25CallUserData
	
	These entries in no way affect the performance of the Microsoft Mail (PC) MTA and
	should not be removed.
	
	Additional query words: message transfer agent MTA
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
