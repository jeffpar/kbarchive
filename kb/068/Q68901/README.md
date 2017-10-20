---
layout: page
title: "Q68901: Windows Setup Adds &quot;?&quot; in WordPerfect's Calendar PIF File"
permalink: /kb/068/Q68901/
---

## Q68901: Windows Setup Adds &quot;?&quot; in WordPerfect's Calendar PIF File

{% raw %}

	Article: Q68901
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft Windows Setup creates a PIF file for WordPerfect's Calendar
	program, it inserts a question mark (?) under the Optional Parameters. This is
	not a valid parameter for WordPerfect's Calendar and generates an error message
	when executed.
	
	MORE INFORMATION
	================
	
	To Correct this Problem
	-----------------------
	
	1. Start the PIF Editor and open CL.PIF.
	
	2. Remove the "?" from the Optional Parameters field.
	
	3. Change the Window Title text as desired for Calendar.
	
	4. Save the PIF File and exit the PIF Editor.
	
	Additional query words: 3rdparty 3.0 3.0a 3.00a WP WP51 Word Perfect
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
