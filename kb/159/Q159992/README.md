---
layout: page
title: "Q159992: System Policy Editor Error Opening Policy Template File"
permalink: /kb/159/Q159992/
---

## Q159992: System Policy Editor Error Opening Policy Template File

	Article: Q159992
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open a policy template (.adm) file using System Policy
	Editor (Poledit.exe), you may receive an error message similar to the following
	message:
	
	  The following error occurred in <drive>:\<path>\<filename>
	  on line <n>: Error 2011. The corresponding string was not found in the
	  [strings] section.
	
	  Found: !!Message Timeout1_TIP
	
	  The file can not be loaded.
	
	CAUSE
	=====
	
	System Policy Editor cannot read a policy template file that exceeds 64K in
	size.
	
	RESOLUTION
	==========
	
	Reduce the size of the policy template file so that it does not exceed 64K.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
