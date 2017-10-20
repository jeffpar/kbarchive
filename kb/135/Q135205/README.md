---
layout: page
title: "Q135205: UNC Connection Causes Failed Program Installation"
permalink: /kb/135/Q135205/
---

## Q135205: UNC Connection Causes Failed Program Installation

{% raw %}

	Article: Q135205
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
	
	When you try to install a program from a network drive, the Setup program may
	not work correctly, resulting in an error message or an incomplete installation.
	
	CAUSE
	=====
	
	This problem can occur if you are using a Universal Naming Convention (UNC) path
	to run the Setup program. Many programs require that you map a network drive,
	and then run the Setup program from that drive.
	
	RESOLUTION
	==========
	
	Map a network drive to the share containing the program you want to install, and
	then run the Setup program from that drive.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
