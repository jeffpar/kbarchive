---
layout: page
title: "Q106436: SmartVu Disabled on Dell Computers with VFAT"
permalink: /kb/106/Q106436/
---

## Q106436: SmartVu Disabled on Dell Computers with VFAT

{% raw %}

	Article: Q106436
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SmartVu display on Dell computers is bypassed if the virtual file allocation
	table (VFAT) is enabled using Windows for Workgroups 3.11.
	
	CAUSE
	=====
	
	This occurs because the system BIOS is bypassed when reading and writing to the
	hard disk drive if VFAT is enabled. The most recently accessed cylinder (prior
	to the loading of VFAT) on the hard disk drive is displayed in the viewing
	window.
	
	Additional query words: 3.11 DE ME 420 425 433 466 333 vfat
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
