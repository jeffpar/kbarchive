---
layout: page
title: "Q135196: Extended Characters Displayed Incorrectly in Login Script"
permalink: kb/135/Q135196/
---

## Q135196: Extended Characters Displayed Incorrectly in Login Script

	Article: Q135196
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
	
	If the MS-DOS path contains elements with certain extended characters, the
	characters may not be displayed correctly in the login script processor when you
	use the MAP command to display search paths.
	
	CAUSE
	=====
	
	The extended characters are not properly converted from the OEM to the ANSI
	character set before being displayed.
	
	RESOLUTION
	==========
	
	You can safely ignore the display problem. Or, change the path names so that
	they do not contain extended characters.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
