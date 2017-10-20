---
layout: page
title: "Q131770: PDC Not Listed in Server Manager After Changing Computer Name"
permalink: /kb/131/Q131770/
---

## Q131770: PDC Not Listed in Server Manager After Changing Computer Name

{% raw %}

	Article: Q131770
	Product(s): Microsoft Windows NT
	Version(s): 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose the Show Only Domain Members option in Server Manager for
	Domains, the primary domain controller (PDC) is not listed. When you clear the
	Show Domain Members Only option, the PDC is listed.
	
	CAUSE
	=====
	
	This problem occurs when you change the computer name of the PDC, but do not
	create a machine account for the new name.
	
	RESOLUTION
	==========
	
	Follow the instructions on page 164 of the Windows NT Server "System Guide" to
	rename the PDC.
	
	NOTE: Step one in these instructions was omitted. Before renaming the PDC, create
	a machine account as a backup domain controller ( BDC) using the new name that
	will be given to the PDC.
	
	Additional query words: prodnt rename
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.50
	
	=============================================================================
	

{% endraw %}
