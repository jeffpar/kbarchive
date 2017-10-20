---
layout: page
title: "Q240814: ALT+PAGE DOWN and ALT+PAGE UP Change Keyboard Locale"
permalink: /kb/240/Q240814/
---

## Q240814: ALT+PAGE DOWN and ALT+PAGE UP Change Keyboard Locale

{% raw %}

	Article: Q240814
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you press ALT+PAGE DOWN or ALT+PAGE UP to change the active window within a
	Terminal Server session, the defined keyboard locale also changes if multiple
	keyboards are defined.
	
	CAUSE
	=====
	
	Each active window is permitted to have its own keyboard locale. Therefore, when
	you change windows, the keyboard locale changes to the locale that had
	previously been set for that window. In addition, if you have the ALT+SHIFT key
	combination set as the locale toggle sequence (this is the default), the
	ALT+SHIFT+TAB sequence is sent when you press ALT+PAGE DOWN or ALT+PAGE UP. This
	causes the locale to be toggled as well.
	
	RESOLUTION
	==========
	
	In Terminal Server, you can set the keyboard locale toggle by using the Keyboard
	tool in Control Panel. Set the locale toggle to either CTRL+SHIFT or none. This
	causes ALT+PAGE DOWN and ALT+PAGE UP not to toggle the locales.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
