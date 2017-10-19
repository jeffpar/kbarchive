---
layout: page
title: "Q108157: 32-Bit File Access Cache Size Is Incorrectly Displayed"
permalink: /kb/108/Q108157/
---

## Q108157: 32-Bit File Access Cache Size Is Incorrectly Displayed

	Article: Q108157
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows for Workgroups 3.11 with 32-bit file access enabled and a
	cache size over 9,984 kilobytes (K), the cache size displayed in the Virtual
	Memory dialog box of Control Panel is truncated. (To see the cache size, choose
	the 386 Enhanced icon in Control Panel, choose Virtual Memory, and then choose
	the Change button.)
	
	CAUSE
	=====
	
	This is a display error; the actual cache size is still the value that was
	entered in the dialog box, provided sufficient physical RAM is available to
	allocate to the cache.
	
	Additional query words: 3.11 vfat
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
