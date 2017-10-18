---
layout: page
title: "Q130346: How to Manipulate DateTime Fields in a Browse"
permalink: kb/130/Q130346/
---

## Q130346: How to Manipulate DateTime Fields in a Browse

	Article: Q130346
	Product(s): Microsoft FoxPro
	Version(s): 3.00
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Visual FoxPro introduces a new data type, DateTime, that allows a date
	and time value to be stored in a single field. By default, Visual FoxPro
	displays the data stored to DateTime fields in a MM/DD/YY HH:MM:SS XM format.
	This article describes how to display just the date or just the time portion of
	a DateTime field in a Browse window.
	
	MORE INFORMATION
	================
	
	Visual FoxPro does not offer a command or function that automatically retrieves
	just the Date or just the Time portion of a DateTime field. The code provided
	below creates two functions GETDATE() and GETTIME(). The BROWSE command will use
	those functions to display just the date and just the time of a Datetime field.
	
	Code Sample
	-----------
	
	  *
	  * Begin Program
	  *
	  * This program assumes a table already exists with a DateTime field named
	  * tField.
	  *
	
	  BROWSE FIELDS date=getdate(tField), time=gettime(tField)
	
	  *
	  * The BROWSE command passes tField to the functions getdate()
	  * and gettime(). Each function returns to the BROWSE the values of
	  * justdate and justtime.
	  *
	
	  FUNCTION getdate
	  PARAMETERS tField
	  justdate = SUBSTR(TTOC(tField),1,8)
	  RETURN justdate
	  ENDFUNC
	
	  FUNCTION gettime
	  PARAMETERS tField
	  justtime = SUBSTR(TTOC(tField),10)
	  RETURN justtime
	  ENDFUNC
	
	  * NOTE: The justdate and justtime fields will be read-only at run time.
	  *
	  * End Program
	  *
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : 3.00
	
	=============================================================================
	
