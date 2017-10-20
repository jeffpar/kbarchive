---
layout: page
title: "Q122891: Nonexistent or Corrupted Values in WINMSD"
permalink: /kb/122/Q122891/
---

## Q122891: Nonexistent or Corrupted Values in WINMSD

{% raw %}

	Article: Q122891
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50
	
	WINDOWS
	
	kbenv kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	WINMSD fails to display values or displays corrupted values for some fields in a
	screen. For example, after choosing the Memory button, the values for Total
	Physical Memory, Available Physical Memory, and others are blank or corrupted.
	
	CAUSE
	=====
	
	This problem occurs when Windows NT is set to a language other than
	"English(American)." The language setting can be configured from the
	International section in Control Panel.
	
	RESOLUTION
	==========
	
	Currently, there is no resolution. As a workaround, you can temporarily change
	the language to "English(American)" when you want to use WINMSD.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
