---
layout: page
title: "Q149107: How to Return Values to AppleScript from FoxPro"
permalink: kb/149/Q149107/
---

## Q149107: How to Return Values to AppleScript from FoxPro

	Article: Q149107
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use AppleScript to run a Visual FoxPro program and return a
	value to AppleScript.
	
	MORE INFORMATION
	================
	
	In the following example, the AppleScript portion asks the user for a Customer
	ID and then calls a Visual FoxPro program. The Visual FoxPro program then opens
	a database, sums the order amounts for the Customer ID that was entered, and
	returns the sum to the script. Then the script displays the result in a dialog
	box.
	
	1. Save the following FoxPro program file as MyQuery.prg in the Visual FoxPro
	  folder:
	
	    PARAMETERS lcCustID
	     SET DEFAULT TO HOME()+"Samples:Data"
	     OPEN DATA TestData.DBC
	     SELECT SUM(Order_Amt) AS Tot_Ord_Amt ;
	        FROM Orders ;
	        WHERE Cust_Id=UPPER(lcCustID) ;
	        INTO CURSOR Temp
	     SET DEFAULT TO HOME()
	     IF _TALLY > 0   && Check to see that any records where found
	        RETURN Temp.Tot_Ord_Amt
	     ELSE
	        RETURN _TALLY
	     ENDIF
	
	2. Use the AppleScript Script Editor to save and run the following script.
	
	  IMPORTANT: When typing the code listed below, replace the semicolons with the
	  AppleScript line continuation character by typing Option+Enter in the Script
	  Editor.
	
	     copy (display dialog "Please enter the Customer's ID" buttons ;
	        {"OK", "Cancel"} default answer "") to dialogResults
	
	     if the button returned of dialogResults is "OK" and ;
	        {the text returned of dialogResults} is not "" then
	
	        tell application ;
	           "Macintosh HD:Microsoft Visual FoxPro:Microsoft Visual FoxPro"
	
	              activate
	              Do Script "SET DEFAULT TO HOME()"
	              Do Script ;
	                 "myquery(["&{the text returned of dialogResults}&"])"
	              display dialog the result
	
	        end tell
	
	     end if
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
