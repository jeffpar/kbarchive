---
layout: page
title: "Q160601: Bad Parameters Sent to Win32k.sys May Cause Stop Message"
permalink: /kb/160/Q160601/
---

## Q160601: Bad Parameters Sent to Win32k.sys May Cause Stop Message

{% raw %}

	Article: Q160601
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbother kbProgramming kbui
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible for an errant application to pass a bad parameter to a WIN32K
	function and cause Win32k.sys to have an access violation. This violation will
	usually result in Windows NT crashing with a STOP 0x0000001E blue screen error.
	
	CAUSE
	=====
	
	Not all of the WIN32K functions were correctly checking parameters for validity
	before processing them.
	
	
	RESOLUTION
	==========
	
	Install Windows NT 4.0 Service Pack 2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest US Service Pack for Windows NT. For
	information on obtaining this update, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt crash ntcrash
	======================================================================
	Keywords          : kbother kbProgramming kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
