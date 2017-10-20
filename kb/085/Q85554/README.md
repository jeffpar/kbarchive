---
layout: page
title: "Q85554: Loss of Environment Space in Windows 3.1 with Norton Desktop"
permalink: /kb/085/Q85554/
---

## Q85554: Loss of Environment Space in Windows 3.1 with Norton Desktop

{% raw %}

	Article: Q85554
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Norton Desktop 2.0, you may lose MS-DOS environment space when
	running MS-DOS Prompt in Microsoft Windows 3.1 in 386 enhance mode.
	
	Low environment space can cause various problems when you run MS-DOS-based
	applications or use MS-DOS utilities (for example, you may have problems copying
	files).
	
	WORKAROUND
	==========
	
	To work around this problem, comment out the following device driver in the
	[386Enh] section of the SYSTEM.INI file by placing a semicolon in front of the
	line "device=vfintd.386," as follows:
	
	       ;device=vfintd.386
	
	For additional information, please contact Symantec.
	
	The Desktop product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: ndw 3.10 3.1 3.11 vm virtual machine dos box
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
