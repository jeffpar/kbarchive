---
layout: page
title: "Q139827: ThinkPad Hibernation File Does Not Work with DriveSpace"
permalink: /kb/139/Q139827/
---

## Q139827: ThinkPad Hibernation File Does Not Work with DriveSpace

{% raw %}

	Article: Q139827
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you compress the hard disk on your IBM ThinkPad computer, the IBM ThinkPad
	Hibernation file may no longer work.
	
	CAUSE
	=====
	
	This problem occurs because the compression driver (Dblspace.bin or
	Drvspace.bin) is not loaded in memory when the ThinkPad computer attempts to
	load the Hibernation file from the compressed volume. Because the compression
	driver is not loaded, the compressed volume cannot be read and the Hibernation
	file cannot be located.
	
	RESOLUTION
	==========
	
	To resolve this situation, increase the size of the host drive (thereby
	decreasing the size of the compressed drive) by an amount equal to the amount of
	RAM in the computer. Then, change the following line in the Autoexec.bat file
	from
	
	  c:\thinkpad\ps2 hfile c
	
	to
	
	  c:\thinkpad\ps2 hfile <host drive letter>
	
	where <host drive letter> is the letter of the host drive.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
