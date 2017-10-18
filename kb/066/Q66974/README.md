---
layout: page
title: "Q66974: WD97: Using the ASK Field with the IF Field in Word"
permalink: kb/066/Q66974/
---

## Q66974: WD97: Using the ASK Field with the IF Field in Word

	Article: Q66974
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbfield winword word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the ASK field conditioned upon the value of another field, include the IF
	statement inside the ASK field instead of including the ASK statement in the IF
	field.
	
	MORE INFORMATION
	================
	
	Example 1: Entry of "None" for No Spouse
	----------------------------------------
	
	The following example asks if you are married. If you respond with "Yes," it then
	asks for your spouse's name. If you respond with "No", it will then ask you to
	type "none." (The \*Firstcap switch is included so the response can be "yes" or
	"Yes".)
	
	  {ASK Married "Are you married?" \*Firstcap}
	  {ASK SpouseName {IF Married = "Yes" "What is your Spouse's Name?"
	  "Type 'none'"} }
	  {REF Married}
	  {REF SpouseName}
	
	In this example, the second ASK field has an IF statement that determines if the
	bookmark "Married" is equal to "Yes." If it is, the IF field has the value
	"SpouseName." If not, the field has no value. The ASK field is not updated if it
	does not have a valid bookmark name as the first element; therefore, it does not
	ask the question.
	
	Example 2: No entry for No Spouse
	---------------------------------
	
	The following example asks if you are married. If you respond with "Yes," it then
	asks for your spouse's name. If you respond with "No," it will enter No for the
	reference to the bookmark of "Married" and no question will be asked about the
	spouse. No entry will be made to the bookmark called "SpouseName."
	
	  {set SpouseName ""}
	  {ask Married "Are you married?" \* firstcap}
	  {ask{if{Married}="Yes" "SpouseName"}"What is your Spouses's name?"}
	
	Additional query words: fill in conditional fillin
	
	======================================================================
	Keywords          : kbdta kbfield winword word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
