---
layout: page
title: "Q142609: Corruption Problem When Running DPMI Application"
permalink: /kb/142/Q142609/
---

## Q142609: Corruption Problem When Running DPMI Application

{% raw %}

	Article: Q142609
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbinteropkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Random corruption may occur when you run an MS-DOS protected-mode interface
	(DPMI) application under Windows NT 3.51.
	
	CAUSE
	=====
	
	Bits below 64K can randomly change if a 32-bit DPMI (DOS protect mode interface)
	application has a 32-bit stack and a stack pointer greater than 64K.
	
	WORKAROUND
	==========
	
	To resolve this issue, install the fix referenced below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          : kbinterop kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
