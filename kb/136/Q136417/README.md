---
layout: page
title: "Q136417: No Sounds in Da Vinci eMAIL After Restarting Windows 95"
permalink: /kb/136/Q136417/
---

## Q136417: No Sounds in Da Vinci eMAIL After Restarting Windows 95

	Article: Q136417
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although you use the Sounds tool in Control Panel to assign sounds to events in
	Da Vinci eMAIL, the sounds are no longer assigned the next time you start
	Windows 95.
	
	CAUSE
	=====
	
	When you assign sounds to Da Vinci eMAIL events, the information is written to
	the registry. However, when the Da Vinci eMAIL program starts, it looks for
	sound information in the Win.ini file. If it does not find sound event
	information in the Win.ini file, it creates sound event entries in the [sounds]
	section of the file, but does not assign default values to the entries.
	
	The next time you start Windows 95, the blank entries for Da Vinci eMAIL sound
	events are copied automatically to the registry, overwriting the entries you
	created using the Sounds tool.
	
	RESOLUTION
	==========
	
	Please contact the program's manufacturer to inquire about a possible upgrade to
	the program that resolves this issue.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95.
	
	MORE INFORMATION
	================
	
	Da Vinci eMAIL is manufactured by Da Vinci Systems Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
