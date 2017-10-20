---
layout: page
title: "Q174567: AGP Video Support for Windows NT 3.51 and 4.0"
permalink: /kb/174/Q174567/
---

## Q174567: AGP Video Support for Windows NT 3.51 and 4.0

{% raw %}

	Article: Q174567
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a video card that has Accelerated Graphic Port (AGP) functionality,
	the only video resolution mode that works correctly is VGA mode (640x480, 16
	colors). Third-party video drivers do not function as expected, if at all. In
	addition, when you open a command prompt window and then maximize the screen,
	the screen turns black. You can press ALT+ENTER to make the screen a window.
	
	
	CAUSE
	=====
	
	Support for AGP functionality is not part of the base operating system for
	Windows NT 3.51 or Windows NT 4.0.
	
	RESOLUTION
	==========
	
	AGP support has been added to Windows NT 4.0 in Service Pack 3. Obtain and
	install the latest service pack.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article. This problem has been corrected in the
	latest U.S. Service Pack for Windows NT version 4.0. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base:
	
	SERVPACK
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
