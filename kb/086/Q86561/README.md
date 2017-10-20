---
layout: page
title: "Q86561: Windows Screen Saver Password May Not Be Recognized"
permalink: /kb/086/Q86561/
---

## Q86561: Windows Screen Saver Password May Not Be Recognized

{% raw %}

	Article: Q86561
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain screen saver password names in Windows version 3.1 may not be recognized
	when entered. For example, any password in quotation marks will not be
	recognized.
	
	CAUSE
	=====
	
	This is caused when the encryption routine creates a string beginning and ending
	with quotation marks. This string is placed in the CONTROL.INI file's
	[ScreenSaver] section. When the string is read from the file, the quotation
	marks are ignored.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: protect pass word 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
