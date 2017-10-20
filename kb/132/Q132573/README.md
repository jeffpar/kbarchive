---
layout: page
title: "Q132573: Fleet Defender F14 Does Not Run When MIDI Is Already in Use"
permalink: /kb/132/Q132573/
---

## Q132573: Fleet Defender F14 Does Not Run When MIDI Is Already in Use

{% raw %}

	Article: Q132573
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start Microprose Fleet Defender F14 Simulation in Windows
	95, you may receive the following error message if another program is already
	using MIDI:
	
	  This program has performed an illegal operation and will be terminated. Quit
	  all programs, and then restart your computer.
	
	CAUSE
	=====
	
	When it starts, Fleet Defender F14 Simulation attempts to acquire the system's
	internal MIDI hardware that is virtualized in Windows 95. The above error
	message is caused by a conflict between the hardware detection routine initiated
	by Fleet Defender F14 Simulation and the virtualization algorithm used by
	Windows 95.
	
	
	RESOLUTION
	==========
	
	Before you start Fleet Defender F14 Simulation, make sure that no other programs
	are using MIDI.
	
	MORE INFORMATION
	================
	
	Fleet Defender F14 Simulation is manufactured by Microprose, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
