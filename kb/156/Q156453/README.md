---
layout: page
title: "Q156453: DOCERR: Excel Code in Chapter 16 of Online Docs Incorrect"
permalink: kb/156/Q156453/
---

## Q156453: DOCERR: Excel Code in Chapter 16 of Online Docs Incorrect

	Article: Q156453
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An Excel code example under the section titled "Controlling Visual FoxPro from
	Other Applications" in Chapter 16 of the Visual FoxPro 5.0 Online Documentation
	needs modification to work.
	
	MORE INFORMATION
	================
	
	The following incorrect code from the Online Documentation demonstrates how
	Excel might use Visual FoxPro as a server:
	
	     Sub FoxTest()
	        Dim oFox as Object
	        Set oFox = CreateObject("VisualFoxPro.Application")
	
	        oFox.DoCmd "USE customer"
	        oFox.DoCmd "SELECT contact, phone FROM customer
	          WHERE country = " + Chr$(39) + USA+ Chr$(39) + " INTO CURSOR cust"
	        oFox.DataToClip "cust",,3
	        Range("A1:B1").Select
	        ActiveSheet.Paste
	     End Sub
	
	Make the following changes to the Online Documentation example:
	
	1. Add the following line before 'oFox.DoCmd "USE customer"':
	
	        oFox.DoCmd "SET DEFAULT TO HOME()+ '\samples\data'"
	
	2. The WHERE clause has to be on the same line with the SELECT. Make sure the
	  Excel editor does not place any extra characters in this line.
	
	3. Add the following line before 'Range("A1:B1").Select' :
	
	        ActiveWorkbook.Sheets(2).Activate
	
	Additional query words: kbdsd ole VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	
	=============================================================================
	
