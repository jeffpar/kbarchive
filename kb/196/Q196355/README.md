---
layout: page
title: "Q196355: Sscntrl.sys May Cause a Fatal Crash"
permalink: /kb/196/Q196355/
---

## Q196355: Sscntrl.sys May Cause a Fatal Crash

{% raw %}

	Article: Q196355
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer with Windows NT 4.0 and Service Pack 3 may crash with the following
	blue screen error message:
	
	  STOP 0000000a (0x00000000 0x0000001c 0x00000001 0x801171b6)
	  IRQL_NOT_LESS_OR_EQUAL
	
	NOTE: The fourth parameter may vary depending on the system configurations.
	
	CAUSE
	=====
	
	Sscntrl.sys passed a wrong pointer for an object to KeWaitForSingleObject.
	
	RESOLUTION
	==========
	
	Sscntrl.sys is a kernel-mode driver belonging to Dr. Solomon Anti Virus. Contact
	the manufacturer of this product for possible newer versions of this driver or
	product.
	
	For a temporary resolution to this issue, rename this driver and restart the
	system.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
