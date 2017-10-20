---
layout: page
title: "Q152972: How to Pass Values from VFP Back to Calling AppleScript"
permalink: /kb/152/Q152972/
---

## Q152972: How to Pass Values from VFP Back to Calling AppleScript

{% raw %}

	Article: Q152972
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro evaluates the Apple Script command DO SCRIPT argument as an
	expression. This article describes the specific command syntax that must be used
	to use returned values successfully in AppleScripts. Visual FoxPro will only
	return character and numeric data; all others must be converted before being
	returned.
	
	MORE INFORMATION
	================
	
	The following examples show syntax for returning different data types as values
	from Visual FoxPro to a calling AppleScript:
	
	EXAMPLE 1
	---------
	
	To return a numeric value from a program file (.PRG):
	
	AppleScript:
	
	     tell application "Microsoft Visual FoxPro"
	       display dialog "Enter thickness in inches:" default answer 1
	       set param1 to the text returned of the result
	       display dialog "Enter width in inches:" default answer 6
	       set param2 to the text returned of the result
	       display dialog "Enter length in feet:" default answer 8
	       set param3 to the text returned of the result
	       Do Script "BdFeet(" & param1 & "," & param2 & "," & param3 & " ) "
	       display dialog "Calculated board feet: " & the result
	     end tell
	
	Visual FoxPro:
	
	     * BdFeet.PRG - Program to return the board feet based on TWL
	     * nThick  - Thickness (in)
	     * nWidth  - Width     (in)
	     * nLength - Length    (ft)
	     *
	     #DEFINE nInPerCuFt 144
	     #DEFINE nInPerLinFt 12
	     PARAMETERS nThick, nWidth, nLength
	
	     nBoardFeet = nThick * nWidth *  nLength * nInPerLinFt
	     nBoardFeet = nBoardFeet / nInPerCuFt
	
	     RETURN nBoardFeet
	
	EXAMPLE 2
	---------
	
	To set and return a numeric value from an object property:
	
	AppleScript:
	
	     tell application "Microsoft Visual FoxPro"
	       activate
	       Do Script "_screen.resettodefault('backcolor')"
	       -- Syntax 1 incorrect example to set backcolor to red
	       Do Script "_screen.backcolor = RGB(255,0,0)"
	       -- grab the backcolor
	       Do Script "_screen.backcolor"
	       display dialog "The current value of the backcolor is " & the result
	       -- Syntax 2 correct example to set backcolor to red
	       Do Script "Store RGB( 255, 0, 0 ) to _screen.backcolor"
	       -- grab the backcolor
	       Do Script "_screen.backcolor"
	       display dialog "The current value of the backcolor is " & the result
	     end tell
	
	Both syntax 1 and 2, if executed directly in Visual FoxPro, would assign a value
	to a property. In AppleScript, only Syntax 2 would work as expected. The equal
	sign in Visual FoxPro is used as an assignment and a comparison operator. Syntax
	1 is simply a test for equivalence, but Syntax 2 will correctly store the value
	to the property.
	
	EXAMPLE 3
	---------
	
	To return a numeric value from a MessageBox:
	
	AppleScript:
	
	     tell application "Microsoft Visual FoxPro"
	       activate
	       -- iconless message box with yes no cancel, note no equals sign
	       Do Script "MESSAGEBOX('What happens happens.', 3 , 'Acceptance')"
	       if the result is 6 then
	         -- yes    (6)
	         set btnclicked to "Yes"
	       else if the result is 7 then
	         -- no     (7)
	         set btnclicked to "No"
	       else
	        -- cancel (2)
	        set btnclicked to "Cancel"
	       end if
	       display dialog "The user chose " & the result & "."
	     end tell
	
	EXAMPLE 4
	---------
	
	To return a text value and a logical value as a text value from a table:
	
	AppleScript:
	
	     tell application "Microsoft Visual FoxPro"
	       activate
	       Do Script "USE :samples:data:customer"
	       display dialog "Enter a key in all caps." default answer "LETSS"
	       set keyval to the text returned of the result
	       -- note concatenation and inclusion of single quotes for argument
	       Do Script "LOCATE for Cust_Id = '" & keyval & "'"
	       -- forced conversion of logical result to string
	       Do Script "IIF(FOUND(),'TRUE','FALSE')"
	       if the result is "TRUE" then
	         -- note argument syntax
	         Do Script "customer.company"
	         display dialog "Key: " & keyval & ", Company: " & the result
	       else
	         display dialog "Key: " & keyval & " not found."
	       end if
	     end tell
	
	Additional query words: VFoxMac passing
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	

{% endraw %}
