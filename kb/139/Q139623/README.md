---
layout: page
title: "Q139623: System Hangs When You Quit Windows with Heavy Network Traffic"
permalink: /kb/139/Q139623/
---

## Q139623: System Hangs When You Quit Windows with Heavy Network Traffic

{% raw %}

	Article: Q139623
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31kbbuglist
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a real-mode network client, such as the Novell VLM or NETX
	network client, or the Banyan Vines real-mode network client, the screen may
	turn black and leave the pointer flashing in the upper-left corner when you
	attempt to quit Windows. After several minutes, you may receive the following
	error message:
	
	  General failure reading device NETWORK
	
	This problem occurs independent of the type of computer and network interface
	card you are using and independent of the real-mode network client you are
	using.
	
	CAUSE
	=====
	
	This is a known problem with Windows and Windows for Workgroups version 3.1 and
	later that occurs when network traffic is unusually heavy.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.1 and 3.11
	and Windows for Workgroups versions 3.1 and 3.11. We are researching this
	problem and will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: hang compaq drop
	
	======================================================================
	Keywords          : win31 kbbuglist
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
