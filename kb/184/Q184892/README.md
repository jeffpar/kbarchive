---
layout: page
title: "Q184892: Unexpected Behavior After Changing Settings in the DirectX Tool"
permalink: /kb/184/Q184892/
---

## Q184892: Unexpected Behavior After Changing Settings in the DirectX Tool

{% raw %}

	Article: Q184892
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kbenv kberrmsg kbtool kbui win95 win98
	Last Modified: 14-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change settings in the DirectX tool in Control Panel, you may
	experience unexpected behavior. Note that the Directx.cpl file is the DirectX
	tool in Control Panel
	
	CAUSE
	=====
	
	This behavior can occur if you change any of the original settings in the
	DirectX tool.
	
	RESOLUTION
	==========
	
	To resolve this behavior, restore the original settings in the DirectX tool, and
	then restart your computer.
	
	NOTE: It is impossible to determine what the original settings were unless you
	noted them. If you do not know the original settings, Microsoft suggests that
	you restore your system from a known good backup. If you do not have a backup
	copy of your system, you may need to install Windows into a new folder, and then
	install your programs again to re-create affected registry entries.
	
	MORE INFORMATION
	================
	
	The DirectX tool is available only when you install the Microsoft DirectX
	Software Development Kit (SDK). It is designed only for developers to test
	DirectX programs under a variety of conditions. For example, it is used to turn
	off DirectX features to test games under "problem" conditions.
	
	
	The DirectX tool is not designed to solve problems with DirectX. It is designed
	to review and alter DirectX configuration settings as DirectX- based programs
	are being developed. The original settings in the DirectX tool are based on
	installed hardware and drivers, and vary from computer to computer.
	
	For more information about how to troubleshoot DirectX issues, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q178098 How to Troubleshoot DirectX Video Problems
	
	Additional query words: strange fail error game directx.cpl
	
	======================================================================
	Keywords          : kbdisplay kbenv kberrmsg kbtool kbui win95 win98 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
