---
layout: page
title: "Q132816: Suspend Command Cannot Be Used on an SBS Computer"
permalink: /kb/132/Q132816/
---

## Q132816: Suspend Command Cannot Be Used on an SBS Computer

{% raw %}

	Article: Q132816
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
	
	On a Server-Based Setup (SBS) computer that has Advanced Power Management
	Support turned on, when you click the Suspend command on the Start menu, the
	computer stops responding.
	
	NOTE: A Server-Based Setup computer is a computer that is running Windows 95 from
	files that exist on a network server.
	
	CAUSE
	=====
	
	When you click Suspend, it unloads the Windows 95 network drivers. Without the
	network loaded, an SBS computer cannot run.
	
	RESOLUTION
	==========
	
	You cannot suspend a Server-Based Setup computer. To remove the Suspend command
	from the Start menu, turn off Advanced Power Management Support in the System
	Devices dialog box.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
