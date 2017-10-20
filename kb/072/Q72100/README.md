---
layout: page
title: "Q72100: WordPerfect 5.1 Retrieve Function Requires APPEND"
permalink: /kb/072/Q72100/
---

## Q72100: WordPerfect 5.1 Retrieve Function Requires APPEND

{% raw %}

	Article: Q72100
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WordPerfect technical support has confirmed that the Retrieve function in
	WordPerfect version 5.1 needs the MS-DOS APPEND command to work properly.
	However, the APPEND command is not compatible with Microsoft Windows.
	
	MORE INFORMATION
	================
	
	The WordPerfect Retrieve function (SHIFT+F10) is used to quickly search the hard
	disks for all WordPerfect data files, no matter which directory they are located
	in. APPEND is used for this function.
	
	WordPerfect technical support suggests that when using the Retrieve command
	without APPEND, you supply the full logical path to the file:
	
	For example, instead of using
	
	  MYFILE.WP
	
	use the path:
	
	  C:\MYFILE\MYFILE.WP
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3rdparty word perfect wp WIN30 3.00 3.0 3.00a 3.0a WP51
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
