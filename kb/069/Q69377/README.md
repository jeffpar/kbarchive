---
layout: page
title: "Q69377: Entering Special Characters in MS-DOS Editor (5.0 &amp; Later)"
permalink: /kb/069/Q69377/
---

## Q69377: Entering Special Characters in MS-DOS Editor (5.0 &amp; Later)

{% raw %}

	Article: Q69377
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can enter any special ASCII characters into a file in the MS-DOS Editor by
	pressing CTRL+P and then ALT+<ASCII character code>.
	
	NOTE: You must use the numeric keypad to enter the ASCII character code.
	
	MORE INFORMATION
	================
	
	The escape character is one type of ASCII character. There are three ways to
	enter this character:
	
	- Press CTRL+P, then ALT+027
	
	- Press CTRL+P, then CTRL+[
	
	- Press CTRL+P, then ESC.
	
	When you use any of the above methods, a left arrow representing the escape
	character is displayed.
	
	The only special character MS-DOS Editor does not always accept is the CTRL+Z
	character (ALT 026). If you press CTRL+Z on a line with other text, the
	character is accepted. However, if CTRL+Z is the only character on the line,
	MS-DOS Editor removes it from the file. If you start Edlin with the /B option,
	you can enter CTRL+Z on its own line. The /B option forces Edlin to ignore
	end-of-file (EOF) characters.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	

{% endraw %}
