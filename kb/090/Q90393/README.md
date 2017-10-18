---
layout: page
title: "Q90393: WD97: How to Use Nested IF Fields in a Mail Merge Document"
permalink: kb/090/Q90393/
---

## Q90393: WD97: How to Use Nested IF Fields in a Mail Merge Document

	Article: Q90393
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbdta kbfield word97 kbmergekbfaq
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Word, you can use the IF field to obtain customized mail merge results. By
	nesting IF fields, as described in this article, you can obtain conditional mail
	merge results and logically construct the equivalent of Boolean AND and OR
	statements.
	
	MORE INFORMATION
	================
	
	The IF field syntax is as follows:
	
	  {IF Exp Op Exp TrueResult [FalseResult]}
	
	where TrueResult and FalseResult can be either text or a nested IF field. If you
	do not include the FalseResult argument, Word returns nothing if the result is
	false.
	
	Conditional Mail Merge Results Using IF Field
	---------------------------------------------
	
	In the following example, each form letter requests that its recipient attend a
	meeting on a different date, based on the city field.
	
	Data Document:
	
	  NAME, ADDRESS, CITY, STATE, ZIP
	  Bill Brown, 123 Acorn St., Seattle, WA, 98035
	  Sandy Sill, 234 Ash St., Los Angeles, CA, 99888
	  Fred Turner, 345 Birch Ave., San Francisco, CA, 45555
	  Lynne Lowe, 456 Walnut St., Boise, ID, 83240
	
	Main Document:
	
	  Please attend the Windows meeting on {if {city}= "Seattle"
	  "Tuesday, March 21." "{if {city}= "Los Angeles" "Wednesday, March
	  22." {if {city}= "San Francisco" "Thursday, March 23." "Friday,
	  March 24."}"}"}.
	
	Merged Results:
	
	  (for Mr. Brown)
	  Please attend the Windows meeting on Tuesday, March 21.
	
	  (for Ms. Sill)
	  Please attend the Windows meeting on Wednesday, March 22.
	
	  (for Mr. Turner)
	  Please attend the Windows meeting on Thursday, March 23.
	
	  (for Ms. Lowe)
	  Please attend the Windows meeting on Friday, March 24.
	
	Using IF Field to Perform Boolean AND and OR Operations
	-------------------------------------------------------
	
	The IF field does not directly support Boolean AND and OR operations in a mail
	merge. However, the logical AND and OR operators are actually just abbreviations
	of nested IF statements; therefore, you can construct the equivalent of Boolean
	AND and OR operations using the following syntax:
	
	- OR: Position the second test inside the second set of quotation marks.
	
	  {IF test1 "TrueResult" "{IF test2 "TrueResult" "FalseResult"}"}
	
	- AND: Position the second test inside the first set of quotation marks.
	
	  {IF test1 "{IF test2 "TrueResult" "FalseResult"}" "FalseResult"}
	
	Constructing a Boolean AND Statement
	------------------------------------
	
	This AND statement
	
	  IF (field <> "A") AND (field <> "B") THEN
	  "TrueResult"
	  ELSE
	  "FalseResult"
	  END IF
	
	can be translated to an IF statement for use in a mail merge as follows:
	
	  {IF field <> "A" "{IF field <> "B" "TrueResult" "FalseResult"}"
	  "FalseResult"}
	
	Constructing a Boolean OR Statement
	-----------------------------------
	
	This OR statement
	
	  IF (field = "A") OR (field = "B") THEN
	  "TrueResult"
	  ELSE
	  "FalseResult"
	  END IF
	
	can be translated to an IF statement for use in a mail merge as follows:
	
	  {IF field = "A" "result" "{IF field = "B" "TrueResult" "FalseResult"}"}
	
	
	Additional query words: winword winword2 mailmerge mail merge how to 8.0 word97 print printmerge
	
	======================================================================
	Keywords          : kbualink97 kbusage kbdta kbfield word97 kbmerge kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
