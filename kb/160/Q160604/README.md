---
layout: page
title: "Q160604: Access Violation in security!SspQueryContextAttributesW"
permalink: /kb/160/Q160604/
---

## Q160604: Access Violation in security!SspQueryContextAttributesW

{% raw %}

	Article: Q160604
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbProgramming
	Last Modified: 21-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When SECPKG_ATTR_NAMES or SECPKG_ATTR_DCE_INFO attributes are requested, using
	SspQueryContextAttributesW routine, an access violation is generated during
	cleanup code in this routine.
	
	CAUSE
	=====
	
	It appears that SspQueryContextAttributesW leaves pDceInfo uninitialized if
	SspDllGetLpcHandle fails.
	
	RESOLUTION
	==========
	
	Apply Service Pack 2 for Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt crash decinfo null
	
	======================================================================
	Keywords          : kbProgramming 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
