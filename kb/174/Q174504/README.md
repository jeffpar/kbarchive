---
layout: page
title: "Q174504: Detection of IntelliPoint Mouse on Serial Adapter Fails"
permalink: /kb/174/Q174504/
---

## Q174504: Detection of IntelliPoint Mouse on Serial Adapter Fails

{% raw %}

	Article: Q174504
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT does not detect the IntelliPoint (wheel) mouse if using a serial
	adapter. It will detect a serial mouse or a PS/2 mouse, but, if the PS/2-style
	IntelliPoint mouse has a serial adapter, Windows NT does not detect it. If a
	serial mouse driver was previously installed, Windows NT will use it; however,
	the Mouse tool in Control Panel shows the mouse type as Unknown and the Change
	button is grayed out.
	
	CAUSE
	=====
	
	Windows NT Plug and Play service is not handling the migration of the mouse and
	keyboard devices at each boot properly. Windows NT installs the device as class
	Unknown instead of class Mouse. And, after the device type is set to Unknown,
	Windows NT stops trying to detect it.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix below, or wait for the next service
	pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. A
	supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft
	Technical Support for more information.
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
