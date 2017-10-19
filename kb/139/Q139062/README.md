---
layout: page
title: "Q139062: DOCERR: Note in REPLACE Command Documentation Is Misleading"
permalink: /kb/139/Q139062/
---

## Q139062: DOCERR: Note in REPLACE Command Documentation Is Misleading

	Article: Q139062
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Note in the REPLACE command documentation describes a limitation that in
	fact does not exist in Visual FoxPro. The incorrect note states:
	
	  No replacement occurs if the record pointer is at the end of the file in the
	  current work area and you specify a field in another work area.
	
	It is possible to replace a field in another work area if the pointer is at the
	end of the file in the current work area by using the REPLACE command with the
	IN clause as in this example:
	
	     REPLACE <Fieldname>  WITH  <Varible>  IN  <TableAlias >
	
	MORE INFORMATION
	================
	
	The REPLACE command will not work if the pointer is at the end of the file in
	the table where the replacement is supposed to occur no matter where the pointer
	is in the current table.
	
	Sample Code
	-----------
	
	Run the following code from the Visual FoxPro Command window.
	
	  SET DEFAULT TO C:\VFP\SAMPLES\DATA
	  OPEN DATA testdata
	  USE products  IN 0
	  GO TOP       && Move record pointer to the first record
	  USE customer IN 0
	  SELECT customer
	  GO BOTTOM
	  SKIP         && Now the current work area(customer) is at EOF
	  REPLACE Eng_name WITH  "John Doe" IN products
	
	Browse the products table, and note that Eng_name has been changed to John Doe
	contrary to what the documentation says.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
