---
layout: page
title: "Q131661: Microsoft Office Manager Stays On Top of Screen Saver"
permalink: /kb/131/Q131661/
---

## Q131661: Microsoft Office Manager Stays On Top of Screen Saver

{% raw %}

	Article: Q131661
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Windows 95 screen saver activates, the Microsoft Office Manager toolbar
	may remain visible.
	
	CAUSE
	=====
	
	This problem occurs only if the following conditions are met:
	
	- You are running a 16-bit version of Office Manager and a 32-bit screen saver.
	
	- You have selected the Always On Top option in Office Manager.
	
	- The Office Manager toolbar had the focus when the screen saver activated.
	
	When Office Manager loses focus, it automatically puts itself on top. In Windows
	version 3.x, with cooperative multitasking, Office Manager does not lose the
	focus when a screen saver activates. In Windows 95, with pre- emptive
	multitasking, Office Manager does lose the focus when a 32-bit screen saver
	activates. When Windows 95 gives Office Manager control again, it puts itself on
	top.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
