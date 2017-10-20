---
layout: page
title: "Q251049: XFOR: Lotus Notes Dirsync Specification of Read Only Field"
permalink: /kb/251/Q251049/
---

## Q251049: XFOR: Lotus Notes Dirsync Specification of Read Only Field

{% raw %}

	Article: Q251049
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you define an AMAP (allocation map) attribute for export to a remote system,
	Lotus Notes directory synchronization (dirsync) may cause severe performance
	issues.
	
	CAUSE
	=====
	
	This issue can occur when you define an AMAP attribute for export to a remote
	system, because the process defines the attribute for export by default, and
	there is no corresponding mapping rule for import.
	
	During import, the Exchange Server (Dxamex) and Lotus Notes (Dxanotes) processes
	compare the attribute import value (usually a null value, because there is no
	import mapping rule) against an internal system value (which is most likely not
	a null value). Because the two values are different, the Directory Exchange
	Agent (DXA) also tries to update the target entry, even if none of the
	attributes have been updated at the source, because some of the export-only
	attributes are included as part of the import. This behavior causes a severe
	performance hit, because a very full load causes every entry in the system to be
	refreshed.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	The Lotus Notes directory synchronization (dirsync) process now allows an AMAP
	attribute definition (an AMAP column specifier) that designates an attribute
	either for export only, or for import and export.
	
	
	
	WORKAROUND
	==========
	
	To work around this issue, modify the mapping rules.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	Before this attribute definition capability was added, there was no way to
	specify a particular attribute as "Read Only."
	
	Additional query words: readonly attribute reload notes dirsync
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
