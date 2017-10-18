---
layout: page
title: "Q97484: WD97: Conditional Alphanumeric Merge May Yield Incorrect Results"
permalink: kb/097/Q97484/
---

## Q97484: WD97: Conditional Alphanumeric Merge May Yield Incorrect Results

	Article: Q97484
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbfield winword word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	A mail merge operation may yield incorrect results if you use a conditional
	statement to evaluate alphanumeric data when the first character of the data is
	numeric.
	
	CAUSE
	=====
	
	This happens because conditional statements (IF fields) evaluate only the first
	two characters of a numeric string.
	
	WORKAROUND
	==========
	
	To work around this problem, modify the data so that each field begins with a
	non-numeric character. Then, modify the conditional field in the main merge
	document to match the data.
	
	To do this, follow these steps:
	
	1. In the data document, add a character to the beginning of each data field
	  that starts with a number. You can use any character, such as a parenthesis
	  (you can also add one to the end of the field, so that it's easier to read)
	  or an ampersand (&). This makes the first character in the number field a
	  character instead of a numeral.
	
	  Modified with parentheses:
	
	     ---------------------------------
	     |  Rec_Num  |Name      |Number  |
	     ---------------------------------
	     |     1     |John      |(1AA)   |
	     ---------------------------------
	     |     2     |Bill      |(1AB)   |
	     ---------------------------------
	     |     3     |Fred      |(2AA)   |
	     ---------------------------------
	     |     4     |George    |(ABC)   |
	     ---------------------------------
	
	  Modified with an ampersand:
	
	     ---------------------------------
	     |  Rec_Num  |Name      |Number  |
	     ---------------------------------
	     |     1     |John      |&1AA    |
	     ---------------------------------
	     |     2     |Bill      |&1AB    |
	     ---------------------------------
	     |     3     |Fred      |&2AA    |
	     ---------------------------------
	     |     4     |George    |&ABC    |
	     ---------------------------------
	
	2. In the main document, edit the test portion of the conditional field so that
	  it matches the newly modified data. For example:
	
	  If the data is surrounded by parentheses, modify the field to look like this:
	
	  {IF {MERGEFIELD number} = "(1A)" "This is true"}
	
	  If the data begins with an ampersand, modify the field to look like this:
	
	  {IF {MERGEFIELD number} = "&1A" "This is true"}
	
	MORE INFORMATION
	================
	
	For example, using the following sample data file, the following conditional
	statement incorrectly yields a true result for the first and second records,
	although only the second record satisfies the condition:
	
	  {IF {MERGEFIELD NUMBER} = "1AB" "This is true"}
	
	NOTE: The IF field evaluated only the first two characters (1A) of the numeric
	string.
	
	Sample Data File
	----------------
	
	  ---------------------------------
	  |  Rec_Num  |Name      |Number  |
	  ---------------------------------
	  |     1     |John      |1AA     |
	  ---------------------------------
	  |     2     |Bill      |1AB     |
	  ---------------------------------
	  |     3     |Fred      |2AA     |
	  ---------------------------------
	  |     4     |George    |ABC     |
	  ---------------------------------
	
	Additional query words: numbers strings alphabetic
	
	======================================================================
	Keywords          : kbualink97 kbfield winword word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbprb
	
	=============================================================================
	
