---
layout: page
title: "Q71555: Paintbrush: Insufficient Memory and Disk Error Messages"
permalink: /kb/071/Q71555/
---

## Q71555: Paintbrush: Insufficient Memory and Disk Error Messages

{% raw %}

	Article: Q71555
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you open Paintbrush, you may have a monochrome palette and one of the
	following error messages may be generated:
	
	- Insufficient memory to edit image; close one or more Windows applications to
	  increase available memory and try again.
	
	- Insufficient disk space to edit image; delete one or more files from drive %s
	  and try again.
	
	Both of these errors may result on a system with ample free memory and disk space
	if the standard drawing size is set to a very large area.
	
	To check the standard drawing size, choose Image Attributes from the Paintbrush
	Options menu.
	
	If the standard drawing size is found to be substantially larger than the default
	(6.67 inches x 5.00 inches), try using the default size.
	
	MORE INFORMATION
	================
	
	A very large standard drawing size may require more disk space or free memory
	than available, causing the appropriate error message. Paintbrush switches to a
	monochrome palette in these situations to use less memory.
	
	Additional query words: 3.00 3.00a 3.10 3.11 win31 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
