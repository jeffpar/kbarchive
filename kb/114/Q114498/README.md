---
layout: page
title: "Q114498: INFO: Transposing First Character w/ Last Character in a Field"
permalink: kb/114/Q114498/
---

## Q114498: INFO: Transposing First Character w/ Last Character in a Field

	Article: Q114498
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The code below shows how to switch the first character with the last character
	in a field for all records.
	
	MORE INFORMATION
	================
	
	The following code demonstrates an easy way to accomplish this:
	
	  * Creates an array containing the leftmost character
	  SELECT LEFT(ALLTRIM(<fieldname>),1) FROM <table-name> ;
	
	  INTO ARRAY <arrayname>
	
	  * Replaces all the records in the field
	  REPLACE ALL <fieldname> WITH RIGHT(ALLTRIM(<fieldname>),1)+ ;
	
	  SUBSTR(ALLTRIM(<fieldname>),2,LEN(ALLTRIM(<fieldname>))-2) ;
	  +<arrayname>(RECNO())
	
	Before the commands are executed, a sample table may look like the following:
	
	  <FIELDNAME>
	  -----------
	  A-0000-Z
	  B-0-Y
	  C-000000-X
	  D-00000-W
	
	After the commands are executed, it will look like:
	
	  <FIELDNAME>
	  -----------
	  Z-0000-A
	  Y-0-B
	  X-000000-C
	  W-00000-D
	
	The first command takes the leftmost character and stores the information in an
	array for each record. This leftmost character must be stored in this manner;
	otherwise, the rightmost character will be substituted into the leftmost
	position in the REPLACE expression, which will cause the resulting records to
	contain the original rightmost character at the beginning and at the end.
	
	These commands work with variable-length character fields. With a few
	modifications, this code can be quite flexible and useful for string-
	manipulation purposes and can be adapted to work with other types of fields.
	
	REFERENCES
	==========
	
	"Commands & Functions," version 2.0 (MS-DOS), pages C3-701 to C3-704, and
	C3-659 to C3-660
	
	"Language Reference," version 2.5 (MS-DOS and Windows), pages L3-862 to L3-866,
	and L3-816 to L3-818
	
	Additional query words: FoxMac FoxDos FoxWin VFoxWin 2.50 2.50a 2.50b 2.50c 2.60 change reverse alter
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbVFP300 kbVFP500 kbVFP600
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
