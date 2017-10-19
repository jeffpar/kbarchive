---
layout: page
title: "Q129705: How DBCS Characters Are Used Depends on the Operating System"
permalink: /kb/129/Q129705/
---

## Q129705: How DBCS Characters Are Used Depends on the Operating System

	Article: Q129705
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When using Visual Basic for Windows with Double-Byte Character Sets (DBCS) of
	different languages, characters from a language that does not use the same
	character set as the current localized operating system version will not be
	available and may cause problems.
	
	MORE INFORMATION
	================
	
	In Visual Basic, edits to any foreign language must be made from that language's
	localized operating system because not all characters are valid and visible from
	every language. For example, some extended characters in French are valid
	leading bytes for DBCS, so they eat up the next character and create (or appear
	as) a invalid DBCS character.
	
	Additionally, you can only enter DBCS characters from a DBCS version of Visual
	Basic on a DBCS localized operating system.
	
	This essentially means that if you want to view or access double-byte characters
	by using the System font on a DBCS operating system, the font you choose on your
	U.S. operating system must be one that is available on a DBCS operating system.
	This limits the choices to "System" font and (for some localized versions) and
	"Terminal."
	
	NOTE: There is also a difference in default font sizes on Japanese machines. The
	display system is different on Japanese machines. Therefore, some dialog text or
	button captions may appear cut off on DBCS displays if this is not accounted for
	at design time.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : 4.00
	
	=============================================================================
	
