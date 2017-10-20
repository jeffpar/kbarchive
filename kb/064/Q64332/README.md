---
layout: page
title: "Q64332: PostScript Driver 3.30 Doesn't Save Scaling Between Sessions"
permalink: /kb/064/Q64332/
---

## Q64332: PostScript Driver 3.30 Doesn't Save Scaling Between Sessions

{% raw %}

	Article: Q64332
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The PostScript driver version 3.30 included with Microsoft Windows version 3.0
	does not save the setting for the scaling factor between Windows sessions. To
	illustrate this problem, go into the PostScript driver and set the scaling for
	70 percent. Once this is accomplished, exit Windows, then restart and check the
	scaling factor. It will be set back to 100 percent.
	
	This behavior is by design. Settings like this are reset to the default on every
	Windows session, so you don't leave yourself at some unusual setting, wondering
	why your documents are smaller/larger than usual.
	
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
