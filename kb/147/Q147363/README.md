---
layout: page
title: "Q147363: AlphaServer Hangs on Install of Windows NT Version 4.0"
permalink: /kb/147/Q147363/
---

## Q147363: AlphaServer Hangs on Install of Windows NT Version 4.0

{% raw %}

	Article: Q147363
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	During the installation of Windows NT 4.0 on a Digital Equipment Corporation DEC
	AlphaServer, the setup process may stop responding (hang) and may not respond to
	user input.
	
	CAUSE
	=====
	
	Setup may hang when it attempts to update the NVRAM variables on computers that
	have 120 N/S EPROM parts. This problem affects Sable, Gamma, Lynx, and Rawhide.
	
	See KB Article:
	
	  ARTICLE-ID: Q164594
	  TITLED : NT 4.0 hangs on DEC AlphaServer 2000, 2100, and 2100A Systems
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt alpha dec crash hang freeze
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA
	
	=============================================================================
	

{% endraw %}
