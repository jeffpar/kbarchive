---
layout: page
title: "Q89700: Setting a Swap File on a RAM Drive"
permalink: /kb/089/Q89700/
---

## Q89700: Setting a Swap File on a RAM Drive

{% raw %}

	Article: Q89700
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	Windows running in 386 enhanced mode does not allow a swap file to be
	set up on a RAM drive.
	
	Windows uses its swap file to provide demand-paged virtual memory in
	386 enhanced mode. Virtual memory allows you to use more memory than
	is physically installed in your machine. Virtual memory is used when
	you run out of physical memory.
	
	A RAM drive occupies physical memory, which would take physical memory
	away from Windows running in 386 enhanced mode. Thus, swapping to a
	RAM drive is, effectively, taking away physical memory to provide a
	place to create virtual memory.
	
	Additional query words: kbhw 3.10 3.11 3.00 3.00a swapfile vm
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
