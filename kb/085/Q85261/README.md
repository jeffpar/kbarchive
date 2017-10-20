---
layout: page
title: "Q85261: CorelDRAW! Err Msg: Bad or Missing Font File(s)..."
permalink: /kb/085/Q85261/
---

## Q85261: CorelDRAW! Err Msg: Bad or Missing Font File(s)...

{% raw %}

	Article: Q85261
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error(s) may occur when you try to open a CorelDRAW! file from
	Microsoft Windows:
	
	  Bad or Missing Font File(s), Text Object May Be Incomplete
	
	  -or-
	
	  No font list in CORELDRW.INI. CorelDRAW! not properly installed
	
	CAUSE
	=====
	
	This error occurs when the entry corresponding to CorelDRAW! in the WIN.INI file
	is not properly updated or is missing.
	
	RESOLUTION
	==========
	
	To correct this problem, place the correct settings in the WIN.INI file.
	
	MORE INFORMATION
	================
	
	The above error message(s) may occur if the subdirectory for CorelDRAW! has been
	moved or if the WIN.INI file is missing the correct CorelDRAW! information. To
	eliminate these errors, place the correct settings in the WIN.INI file.
	
	During the installation process, CorelDRAW! versions 2.0 and 2.01L create an
	entry in the WIN.INI file that tells the system where to look for necessary
	files (for example, CorelDRAW! font files) as follows:
	
	     [CorelDraw]
	     dir=C:\CORELDRW
	
	Also, the following line is added to the [Extensions] section
	
	       cdr=C:\CORELDRW\coreldrw.exe ^.cdr
	
	where \CORELDRW is the default directory on drive C.
	
	For more information, contact Corel Corporation technical support.
	
	The products included here are manufactured by Corel Corporation; we make no
	warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.0 3.00 3.0a 3.1 3.11 3.10 fonts Corel Draw CorelDRAW!
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
