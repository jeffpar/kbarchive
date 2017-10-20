---
layout: page
title: "Q173803: XADM: Exchange Setup Remove All Removes Mapi32.dll"
permalink: /kb/173/Q173803/
---

## Q173803: XADM: Exchange Setup Remove All Removes Mapi32.dll

{% raw %}

	Article: Q173803
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are using Exchange Setup to perform a Remove All procedure, the Remove
	All function prompts you to choose whether you want to remove shared components.
	If you select OK, this will remove all messaging shared components, including
	Mapi32.dll.
	
	CAUSE
	=====
	
	This is by design.
	
	MORE INFORMATION
	================
	
	In the Remove All procedure, all originally installed components are removed,
	including Mapi32.dll. This particular file may be important to the functionality
	of other applications running on this server. Even though these other
	applications depend on this file, the Remove All process has no way of "knowing"
	this, and it will remove the file.
	
	Additional query words: dll
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	
	=============================================================================
	

{% endraw %}
