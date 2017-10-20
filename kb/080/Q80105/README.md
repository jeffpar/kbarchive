---
layout: page
title: "Q80105: Using PowerLan with Windows 3.0"
permalink: /kb/080/Q80105/
---

## Q80105: Using PowerLan with Windows 3.0

{% raw %}

	Article: Q80105
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you set up the PowerLan product from Performance Technologies with
	Microsoft Windows version 3.0, use the "Microsoft Network (or 100 compatible)"
	network driver.
	
	MORE INFORMATION
	================
	
	According to Performance Technologies, the PowerLan product is 100-percent
	compatible with the Microsoft Network protocol.
	
	Performance Technologies has also stated that Windows 3.0 does not run in
	enhanced mode on a non-dedicated server (a server that is also acting as a
	workstation). Performance Technologies is researching this issue and will notify
	Microsoft as new information becomes available.
	
	When performing a network setup, use the following command:
	
	  SETUP /I /N
	
	On certain Arcnet network cards, the following command removes all network
	connections:
	
	  SETUP /N
	
	The PowerLan Network handles all print spooling, so Print Manager should be
	disabled in Control Panel.
	
	The Performance Technologies and Arcnet products included here are manufactured
	by vendors independent of Microsoft; we make no warranty, implied or otherwise,
	regarding these products' performance or reliability.
	
	Additional query words: pclan power lan 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
