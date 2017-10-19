---
layout: page
title: "Q79800: PRB: Pen-Based Computer Unavailable While Running AfterDark"
permalink: /kb/079/Q79800/
---

## Q79800: PRB: Pen-Based Computer Unavailable While Running AfterDark

	Article: Q79800
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Microsoft Windows for Pen Computing environment, when the AfterDark
	screen saver application runs a password-protected screen saver on a pen-based
	computer that has no keyboard attached, it is not possible to regain control of
	the machine.
	
	NOTE: The AfterDark screen saver application is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this products' performance or reliability.
	
	CAUSE
	=====
	
	Apparently, AfterDark installs a hook function and eliminates all mouse activity
	when it installs a password-protected screen saver; this disables pen input as
	well.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	
