---
layout: page
title: "Q100450: PRB: SYS(18) Does Not Return Name of GET Objects"
permalink: /kb/100/Q100450/
---

## Q100450: PRB: SYS(18) Does Not Return Name of GET Objects

	Article: Q100450
	Product(s): Microsoft Fox Miscellaneous Products
	Version(s): MACINTOSH:2.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxBASE+ for Macintosh, version 2.01 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SYS(18) function will not return the name of a GET object, only the current
	GET field.
	
	CAUSE
	=====
	
	Normally, while information is being entered in a GET field on a screen,
	triggering the ON KEY= routine allows the SYS(18) function to return the name of
	that field. However, this technique does not work on a GET object such as a
	check box or popup. In FoxBASE+/Mac, GET objects cannot be selected with the
	keyboard, nor can they remain selected after they are clicked with the mouse.
	Since these GET objects cannot remain selected, the SYS(18) function will not
	return the name of the object. SYS(18) also won't work if it is put in a VALID
	procedure that is connected with a GET object.
	
	MORE INFORMATION
	================
	
	The SYS(18) function returns the name of the field being entered when the
	current ON KEY= routine was triggered. A READ needs to be in effect for SYS(18)
	to function.
	
	REFERENCES
	==========
	
	"Commands & Functions," version 2.01, pages 4-77 and 3-147
	
	Additional query words: 2.01 SYS system eighteen
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxBASE201Mac kbFoxBASESearch
	Version           : MACINTOSH:2.01
	
	=============================================================================
	
