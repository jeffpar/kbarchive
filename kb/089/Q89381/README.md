---
layout: page
title: "Q89381: Install HP Ultra VGA and Appian Rendition as Standard VGA"
permalink: /kb/089/Q89381/
---

## Q89381: Install HP Ultra VGA and Appian Rendition as Standard VGA

{% raw %}

	Article: Q89381
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When installing Microsoft Windows on a computer using a Hewlett-Packard (HP)
	8514 Ultra VGA card or an Appian Rendition video card, you should select
	standard VGA (640 x 480) as your display driver. If you choose another driver,
	then Windows Setup hangs.
	
	MORE INFORMATION
	================
	
	Do not use the ATI or HP drivers while installing Windows 3.1. Use the standard
	VGA.DRV. After installation, switch to the OEM drivers using maintenance mode
	Setup. This may also require a BIOS upgrade depending on the age of the
	adapter.
	
	This may also be true for the ATI Graphics Ultra because the HP Ultra VGA and ATI
	Graphics Ultra share BIOS versions.
	
	Additional query words: 3.10 3.11 winfest ATI RGDI Appian Rendition HP UVGA 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
