---
layout: page
title: "Q93264: Problems Running Autocad 386 Version 12 in Privileged Mode"
permalink: /kb/093/Q93264/
---

## Q93264: Problems Running Autocad 386 Version 12 in Privileged Mode

{% raw %}

	Article: Q93264
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	AutoCAD technical support has confirmed that AutoCAD 386 version 12 may have
	problems running in privileged mode under Windows 3.1.
	
	MORE INFORMATION
	================
	
	To check to see if the customer is in privileged mode, type the following at the
	ACAD directory and press ENTER:
	
	  Cfig386 Acad
	
	There should be a set of variables on the screen.
	
	If you see the variable privileged, then the AutoCAD mode has been changed to
	privileged. You must be in unprivileged mode to run in the Windows environment.
	
	To Change from Privilege to Unprivileged Mode
	---------------------------------------------
	
	From within the ACAD directory:
	
	1. Type the following and press ENTER:
	
	  Cfig386 Acad -Clear
	
	2. Type the following and press ENTER:
	
	  Cfig386 Acad -MINSWFSIZE 400000 -SWAPDEFDISK -SWAPCHK OFF -DEMANDLOAD VSCAN
	  20000 -UNPRIV
	
	This resets AutoCAD to its default settings as well as sets the mode to
	unprivileged.
	
	For more information, contact Autodesk.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
