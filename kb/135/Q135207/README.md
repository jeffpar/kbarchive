---
layout: page
title: "Q135207: Setup Hangs During Hardware Detection on IBM ThinkPad"
permalink: /kb/135/Q135207/
---

## Q135207: Setup Hangs During Hardware Detection on IBM ThinkPad

{% raw %}

	Article: Q135207
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
	
	When you are installing Windows 95 on an IBM ThinkPad computer, Setup may stop
	responding (hang) while it is detecting the hardware in the computer.
	
	CAUSE
	=====
	
	Setup may fail to correctly detect the installed video capture device. When this
	occurs, Setup may attempt to detect the CD-ROM drive in a way that addresses the
	video capture device, causing the system to hang.
	
	RESOLUTION
	==========
	
	Run Setup again and choose the Safe Recovery option when you are prompted.
	Repeat this process, if necessary, until Setup finishes.
	
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
