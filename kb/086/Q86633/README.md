---
layout: page
title: "Q86633: MS-DOS Typematic Rate Changes After Running Windows"
permalink: /kb/086/Q86633/
---

## Q86633: MS-DOS Typematic Rate Changes After Running Windows

{% raw %}

	Article: Q86633
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The keyboard typematic rate set in Windows affect both Windows and MS-DOS. This
	rate can be set in Windows through the Control Panel.
	
	NOTE: Only the Repeat Rate is available for adjustment in Windows 3.0. Both the
	Delay Before First Repeat and Repeat Rate are adjustable in Windows 3.1.
	
	RESOLUTION
	==========
	
	To reset the Typematic Rate in MS-DOS (versions 4.01 and 5.0), type the
	following at the MS-DOS command prompt
	
	  mode con: rate=r delay=d
	
	where r is in the range 1 through 32, with a default value of 20 or 21 depending
	on your keyboard, and d is in the range 1 through 4, with the default value 2.
	
	Setting the typematic rate in MS-DOS does not affect Windows.
	
	Additional query words: 3.00 3.00a 3.10 3.11 typing speed faster slower fast slow msdos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
