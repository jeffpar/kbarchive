---
layout: page
title: "Q105059: DIR Listings Do Not Support Commas in 40-Column Mode"
permalink: /kb/105/Q105059/
---

## Q105059: DIR Listings Do Not Support Commas in 40-Column Mode

	Article: Q105059
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run MS-DOS in 40-column mode, numerical output in directory listings
	does not contain comma support.
	
	CAUSE
	=====
	
	In 40-column mode, at most, 39 characters can be displayed before line-wrapping
	occurs. With comma support added, directory listings are 43 characters wide. To
	prevent directory listings from wrapping in 40- column mode, MS-DOS disables
	comma support.
	
	
	Additional query words: 6.22 6.20 dir "mode co40"
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620
	Version           : MS-DOS:6.2,6.21,6.22
	
	=============================================================================
	
