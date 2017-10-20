---
layout: page
title: "Q112358: Err Msg: At Least One Service or Driver Failed..."
permalink: /kb/112/Q112358/
---

## Q112358: Err Msg: At Least One Service or Driver Failed...

{% raw %}

	Article: Q112358
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Windows NT, the following error message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	In addition to other entries, Event Viewer shows a Workstation Event error. This
	error is explained as:
	
	  Could not load any transport.
	
	CAUSE
	=====
	
	This error message is caused by disabling the Workstation part of the bindings
	and still having the Workstation service loaded.
	
	RESOLUTION
	==========
	
	To avoid receiving this error message, do one of the following:
	
	- Enable the Workstation part of the bindings by doing the following:
	
	  1. In the Control Panel window, choose the Network icon.
	
	  2. In the Network Settings dialog box, choose Bindings.
	
	  3. In the Network Bindings dialog box, select the Workstation binding, and
	  then choose the Enable button.
	
	  -or-
	
	- Remove the Workstation service by doing the following:
	
	  1. In the Control Panel window, choose the Network icon.
	
	  2. In the Network Settings dialog box, select Workstation, and then choose the
	  Remove button.
	
	Additional query words: prodnt err msg
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
