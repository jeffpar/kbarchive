---
layout: page
title: "Q98445: How to Create an Index on Part of a Character Field"
permalink: kb/098/Q98445/
---

## Q98445: How to Create an Index on Part of a Character Field

	Article: Q98445
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to create an index on part of a character field, you can create the
	index with the SUBSTR() function. The following code is used for indexing on the
	first five characters of a field called NAME:
	
	     INDEX on SUBSTR(Name,1,5) TAG partnam
	
	If the NAME field contains a last name and first name separated by a comma,
	indexing on the last name can be performed as follows:
	
	     INDEX on SUBSTR(Name,1,(AT(",",Name,1)-1)) TAG lastname
	
	However, if the above command is used, FoxPro will create an index tag that does
	not order the database accordingly. For example, with the NAME field in a
	five-record database as listed below
	
	  Record 1: Brown, John
	  Record 2: Williams, Mary
	  Record 3: William, Bob
	  Record 4: Willis, James
	  Record 5: Williams, Mark
	  Record 6: William, Bill
	
	using the INDEX statement above will result in the database being ordered as
	follows:
	
	  Record 1: Brown, John
	  Record 2: Williams, Mary
	  Record 3: William, Bob
	  Record 5: Williams, Mark
	  Record 6: William, Bill
	  Record 4: Willis, James
	
	To have the database ordered accordingly, you must use the PADR() function to pad
	the string returned by the SUBSTR() function with spaces equal to the length of
	the field. For example:
	
	     INDEX on PADR(SUBSTR(Name,1,(AT(",",Name,1)-1)),15," ") TAG partnam
	
	For more information, see the "Commands & Functions" manual for FoxPro
	version 2.0 or the "Language Reference" manual for FoxPro version 2.5.
	
	Additional query words: VFoxWin FoxDos FoxWin string
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
