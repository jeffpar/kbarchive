---
layout: page
title: "Q268059: INFO: Using Macro Substitution with Index Commands"
permalink: kb/268/Q268059/
---

## Q268059: INFO: Using Macro Substitution with Index Commands

	Article: Q268059
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox k
	Last Modified: 26-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several ways to misuse macro expansion and name expressions in the
	INDEX command. This article demonstrates how to avoid these pitfalls.
	
	MORE INFORMATION
	================
	
	The FoxPro documentation urges the use of name expressions (variables in
	parentheses) in preference to macro substitution wherever possible. The INDEX
	command is one place where this appears to be, but isn't necessarily, possible.
	
	All of the following code can be typed or pasted in the Command window, or put
	together in a program. To begin, uncomment and run the code for your specific
	version of FoxPro:
	
	  *!* The sample data changed between each version
	  *!* Necessary to create an index
	  SET EXCLUSIVE ON
	
	  *!* *VFP 3
	  *!* USE HOME() + "samples\data\customer"
	  *!* lnTag = 5  && There are already 4 indexes on the customer table.
	
	  *!* *VFP 5
	  *!* USE HOME() + "samples\data\customer"
	  *!* lnTag = 6  && In VFP 5 and above, a "country" index was added.
	
	  *!* *VFP 6
	  USE HOME(2) + "data\customer"
	  lntag=6
	
	  lcField = "City"
	  INDEX ON (lcField) TAG (lcField)
	
	Use the TAG() function to check the Index tag, and note that you see the
	following:
	
	  ? TAG(lnTag)
	  *!* Prints "City"
	
	This indicates that name expressions are fine for the TAG clause. However, if you
	use the SYS(14) function to check the index expression, you see the following,
	indicating that it did not correctly substitute "City:"
	
	  ? SYS(14, lnTag)
	  *!* Prints "(lcCity)"
	
	The Help file indicates that an index is created using an expression, so the
	INDEX command uses the valid expression (lcField) to create the index. If you
	change the value of lcField at this point, the index uses the new values to
	display the data in the browse window, as shown: (The currently selected record
	remains visible because the record pointer has not been moved.)
	
	  lcField = .F.
	  BROWSE
	  lcField = 0
	  BROWSE
	
	When you remove the variable and try to use the index with this code,
	
	  RELEASE lcField
	  BROWSE
	
	the following sequence of events occurs:
	
	1. FoxPro returns the error message:
	
	  "Variable 'LCFIELD' is not found."
	
	2. FoxPro returns the error message:
	
	  "Index does not match the table. Delete the index file and recreate the
	  index."
	
	3. Index is treated as an index on "(lcField)" (that is, a character string)
	  from here on out.
	
	4. If the table is closed and reopened, steps 1 and 3 occur.
	
	To get your intended results, use the following command:
	
	  INDEX ON &lcField TAG (lcField)
	  *!* or
	  INDEX ON &lcField TAG &lcField
	
	Another way to misuse macro expansion follows:
	
	  lcCity = "Seattle"
	  INDEX ON city TAG city FOR city = lcCity
	  BROWSE
	
	That works as expected. It shows you the records where the city matches the value
	of lcCity. But if you want it to be Seattle every time, you might try using the
	following:
	
	  INDEX ON city TAG city FOR city = &lcCity.
	
	However, this code returns the error message:
	
	  Variable 'SEATTLE' is not found.
	
	For this to work, you need to enclose the macro expression in quotes, as
	follows:
	
	  INDEX ON city TAG city FOR city = "&lcCity."
	
	REFERENCES
	==========
	
	For addition information on macro substitution and name expressions, as well as
	the INDEX command and HOME(), TAG() and SYS(14) functions, see the Visual FoxPro
	Help files.
	
	
	(c) Microsoft Corporation 2000, All Rights Reserved.
	Contributions by Garrett Fitzgerald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
