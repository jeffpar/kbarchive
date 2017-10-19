---
layout: page
title: "Q135180: Device Manager Reports a PCI-to-ISA Bridge Conflict"
permalink: /kb/135/Q135180/
---

## Q135180: Device Manager Reports a PCI-to-ISA Bridge Conflict

	Article: Q135180
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Device Manager displays a PCI-to-ISA bridge with an exclamation point in a
	yellow circle, indicating that there is a resource conflict.
	
	CAUSE
	=====
	
	This behavior is typically caused by a Plug and Play BIOS that reports both a
	PCI and an ISA bus. There is no actual conflict.
	
	RESOLUTION
	==========
	
	You may want to contact your hardware manufacturer to inquire about obtaining an
	updated Plug and Play BIOS that reports only a PCI bus, which in turn reports
	the ISA bus.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
