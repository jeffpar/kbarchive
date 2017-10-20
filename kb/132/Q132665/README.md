---
layout: page
title: "Q132665: Cannot Run External Programs from NetWare Login Script"
permalink: /kb/132/Q132665/
---

## Q132665: Cannot Run External Programs from NetWare Login Script

{% raw %}

	Article: Q132665
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client For NetWare Networks component, the
	following login script fails to work correctly:
	
	  map n:=sys:\public
	  #n:syscon
	
	This problem occurs for any such drive mapping in a login script. The Microsoft
	Login Script Processor for NetWare (NWLSPROC) returns an error message stating
	that the external program cannot be found.
	
	CAUSE
	=====
	
	The script processor does not handle lowercase drive letters correctly in the
	external program command ("#").
	
	RESOLUTION
	==========
	
	To work around this problem, change the driver letter after the number sign (#)
	to an uppercase letter.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
