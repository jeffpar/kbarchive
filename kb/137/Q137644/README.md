---
layout: page
title: "Q137644: &quot;Invalid Page Fault&quot; Starting PVCS Version Manager 5.2"
permalink: /kb/137/Q137644/
---

## Q137644: &quot;Invalid Page Fault&quot; Starting PVCS Version Manager 5.2

{% raw %}

	Article: Q137644
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
	
	When you try to start the 32-bit version of the PVCS Version Manager 5.2
	development management platform by Intersolv, you may receive an "invalid page
	fault" error message.
	
	CAUSE
	=====
	
	When you are installing PVCS Version Manager 5.2, a User ID prompt should
	appear. However, this prompt may not appear when you are installing the program
	in Windows 95.
	
	RESOLUTION
	==========
	
	For information about configuring the User ID for PVCS Version Manager 5.2,
	please consult the program's documentation or manufacturer.
	
	
	MORE INFORMATION
	================
	
	There are both 16-bit and 32-bit versions of PVCS Version Manager. The 16-bit
	version should run without problems in Windows 95.
	
	NOTE: When you are prompted to install the Win32s dynamic-link libraries (DLLs)
	during PVCS Version Manager Setup, click No. Installing these files causes some
	Windows 95 DLLs to be overwritten, which can cause problems.
	
	The third-party products discussed in this article are manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: 5.20
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
