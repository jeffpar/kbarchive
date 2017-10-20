---
layout: page
title: "Q159789: Windows NT 4.0 OLE Automation Data Marshalling Error"
permalink: /kb/159/Q159789/
---

## Q159789: Windows NT 4.0 OLE Automation Data Marshalling Error

{% raw %}

	Article: Q159789
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running a Visual Basic program that uses OLE Automation, the following
	error may occur:
	
	  Error number 0x8001011D: OLE Automation Error. The marshaled interface data
	  packet (OBJREF) has an invalid or unknown format.
	
	CAUSE
	=====
	
	Changes made to OLE and to RPC for Windows NT version 4.0 introduced problems
	with marshalling data. The problem is more prevalent on very fast computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. This problem was corrected in the latest Microsoft Windows NT 4.0 U.S.
	Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
