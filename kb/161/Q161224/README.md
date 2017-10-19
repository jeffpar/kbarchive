---
layout: page
title: "Q161224: Error Message During Setup on DEC Ultra II Laptop"
permalink: /kb/161/Q161224/
---

## Q161224: Error Message During Setup on DEC Ultra II Laptop

	Article: Q161224
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 2,2.1
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are installing Windows 95 OEM Service Release 2 (OSR2) on a DEC Ultra
	II P133 or P150 laptop computer, you may receive an error message on a blue
	screen.
	
	CAUSE
	=====
	
	This behavior can occur if the Viking Memory 9443195a 16-MB add-on memory module
	is installed in your computer. This memory module is incompatible with the DEC
	Ultra II P133 and P150 laptop computers.
	
	RESOLUTION
	==========
	
	To work around this problem, use one of the following methods:
	
	- Disable PC Audio in the computer's CMOS settings, and then run Setup again.
	
	- Contact Viking Components or a hardware vendor to exchange the memory for a
	  compatible module.
	
	Additional query words: 95 fatal exception gpf page fault kberrmsg
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :2,2.1
	
	=============================================================================
	
