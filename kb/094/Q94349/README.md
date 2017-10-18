---
layout: page
title: "Q94349: Using FoxPro Text Merge Feature with Multiple Databases"
permalink: kb/094/Q94349/
---

## Q94349: Using FoxPro Text Merge Feature with Multiple Databases

	Article: Q94349
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Documents developed with the Text Merge feature can use fields from two or more
	databases. The example below uses customer names and addresses from the FoxPro
	2.x CUSTOMER.DBF sample database merged with form letters contained in memo
	fields from a second database (INVOICE.DBF).
	
	MORE INFORMATION
	================
	
	NOTE: This example only works using the FoxPro 2.x sample files.
	
	The memo field contains all text to be merged. Page spacing (top, bottom, and
	side margins) is controlled within the memo field. A memo field can appear
	similar to the following example:
	
	  <<DATE()>>
	
	  <<ALLTRIM(PROPER(CONTACT))>>
	  <<ALLTRIM(PROPER(COMPANY))>>
	  <<ALLTRIM(PROPER(ADDRESS))>>
	  <<ALLTRIM(PROPER(CITY))>>, <<ALLTRIM(STATE)>> <<ALLTRIM(ZIP)>>
	
	  Dear <<ALLTRIM(PROPER(CONTACT))>>:
	
	  This area includes the body of a letter to be
	  sent to the contact.
	
	  Sincerely,
	
	  Name
	
	  ENDTEXT
	
	The following program connects the information from the two databases. Work area
	1 includes the database (INVOICE) with memo fields that contain form letters.
	Work area 2 includes a database (CUSTOMER) that contains names and addresses
	that should receive the letter. The program will execute from work area 2.
	
	This example assumes that you have a customer database (CUSTOMER) with account
	status information and a database (INVOICE) with multiple form letters for
	different account statuses.
	
	     SELECT 1
	     USE INVOICE
	     SELECT 2
	     USE CUSTOMER
	     CLEAR                               && Clear screen.
	     SET TEXTMERGE ON                    && Enable evaluation of components.
	     SET TALK OFF                        && Prevent printing of commands.
	     SET TEXTMERGE DELIMITERS TO         && Set default delimiters.
	     SET MEMOWIDTH TO 80                 && Set memo width for 80 columns.
	     SCAN                                && Force top-down processing.
	       FOR J=1 TO MEMLINES(invoice.memo)
	          X="\"+MLINE(invoice.memo,J)  && Process each line in memo field.
	          &X                        && Macro substitution.
	       ENDFOR
	     ENDSCAN
	
	For more information about performing text merges, see the following article in
	the Microsoft Knowledge Base:
	
	  Q97163 General Text Merge Functionality
	
	
	Additional query words: VFoxWin FoxDos FoxWin form 2.x mail text merge functionality
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
