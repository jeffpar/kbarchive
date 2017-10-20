---
layout: page
title: "Q82454: TIGA May Hang with Window Border Width Equal to 1"
permalink: /kb/082/Q82454/
---

## Q82454: TIGA May Hang with Window Border Width Equal to 1

{% raw %}

	Article: Q82454
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems using the Texas Instruments Graphics Adapter (TIGA) display drivers may
	stop responding (hang) after setting the Window Border Width to 1 in the Control
	Panel Desktop dialog box. A system reboot is required.
	
	RESOLUTION
	==========
	
	To correct this, use Notepad or Write to manually edit the WIN.INI file in the
	Windows directory. Change the border width to a value greater than 1.
	
	The border width setting in WIN.INI appears as follows:
	
	     [windows]
	     :
	     BorderWidth=1
	     :
	
	MORE INFORMATION
	================
	
	This behavior also only seems to occur with dithered border colors.
	
	The product included here is manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.10 TIGA border width 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
