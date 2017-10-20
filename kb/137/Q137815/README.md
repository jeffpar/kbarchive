---
layout: page
title: "Q137815: Shutdown Problems with Matrox Video Cards"
permalink: /kb/137/Q137815/
---

## Q137815: Shutdown Problems with Matrox Video Cards

{% raw %}

	Article: Q137815
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to shut down Windows 95, your computer may stop responding (hang).
	
	CAUSE
	=====
	
	This problem can occur if you have a Matrox Impression+ ISA or VLB video card
	installed in your computer. These video cards require additional settings in the
	Config.sys and System.ini files.
	
	RESOLUTION
	==========
	
	To correct this problem, follow these steps:
	
	1. Click the Start button, and then click Run.
	
	2. Type the following line in the Open box, and then click OK:
	
	  " sysedit " (without the quotation marks)
	
	3. Click the Config.sys window, and then add the following line to the end of
	  the Config.sys file
	
	  " device=<path>:\rambios.sys " (without the quotation marks)
	
	  where <path> is the full path to the Rambios.sys file.
	
	  NOTE: The Rambios.sys file is available from Matrox. To obtain this file,
	  please contact Matrox Technical Support.
	
	4. Click the System.ini window, and then add the following line to the [386Enh]
	  section of the file:
	
	  " EMMEXCLUDE=C000-C7FF " (without the quotation marks)
	
	  NOTE: If the Config.sys file contains an Emm386.exe entry, add "X=C000-C7FF"
	  to the end of the line in the Config.sys file.
	
	5. On the File menu, click Exit. When you are prompted to save the changes to
	  the Config.sys and System.ini files, click Yes.
	
	6. Restart your computer.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	

{% endraw %}
