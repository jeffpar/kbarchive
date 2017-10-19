---
layout: page
title: "Q105599: How to Search for Character Strings Using RQBE"
permalink: /kb/105/Q105599/
---

## Q105599: How to Search for Character Strings Using RQBE

	Article: Q105599
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are trying to locate character strings using the Visual FoxPro Query
	Designer, or the FoxPro 2.x Relational Query By Example (RQBE) interface, the
	percent sign (%) is used to find character strings in character fields, and the
	dollar sign ($) is used to find character strings in memo fields.
	
	Examples
	--------
	
	To search for a character string in a character field, the lines in the selection
	criteria would resemble the following:
	
	  Filename.fieldname        LIKE        %Stringtobefound%
	
	To search for a string in a memo field, the lines in the selection criteria would
	resemble the following:
	
	  ('Stringtobefound'$fieldname) = .t.
	
	Alternative Method
	------------------
	
	This method brings up records that contain the search string in any field.
	
	1. Select "<expression...>" from the Field Name list box.
	
	2. In the Expression text box of the Expression Builder dialog box, use one of
	  the following statements:
	
	  'Stringtobefound'
	
	  -or-
	
	  <variable_name>
	
	Additional query words: FoxDos VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a wild card wildcard
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
