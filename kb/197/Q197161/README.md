---
layout: page
title: "Q197161: SYSDIFF /INF Uses Decimal Format for REG_DWORD Values"
permalink: /kb/197/Q197161/
---

## Q197161: SYSDIFF /INF Uses Decimal Format for REG_DWORD Values

{% raw %}

	Article: Q197161
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an .inf file from a SYSDIFF package, registry values in the
	package will be 0 after running the .inf file when the value in the .inf file is
	bigger than 2147483647.
	
	CAUSE
	=====
	
	When a registry entry contained in a SNAP file is written to an .inf file using
	the SYSDIFF /INF syntax, REG_DWORD values are written in decimal form. For
	example, 0x80000010 is written as 2147483664.
	
	When Setupapi.dll runs this .inf file, it checks whether decimal REG_DWORD values
	exceed 2147483647 and writes 0 to the registry. SETUPAPI checks the value
	because all decimal values are supposed to be signed integers and, therefore, an
	overflow occurs.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
