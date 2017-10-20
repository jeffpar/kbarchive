---
layout: page
title: "Q154700: HALMCA Does Not Check got PCI"
permalink: /kb/154/Q154700/
---

## Q154700: HALMCA Does Not Check got PCI

{% raw %}

	Article: Q154700
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience a performance problem on computers with PCI architecture.
	
	CAUSE
	=====
	
	The hardware abstraction layer (HAL) is treating PCI transfers like ISA
	transfers. Transfers that use buffers greater than 16MB are mapped into HAL
	buffers and the PCI transfer size limits are incorrectly set to ISA limits
	(limited to the HAL buffer size, which is typically 64K). The HalGetAdapter
	routine in the HALMCA does not check for PCI.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below. This fix to the HALMCA.DLL adds the condition
	to check for the PCI.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt 3.50 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	

{% endraw %}
