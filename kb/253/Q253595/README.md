---
layout: page
title: "Q253595: HOWTO: Build Indexes with DateTime Fields and Other Data Types"
permalink: /kb/253/Q253595/
---

## Q253595: HOWTO: Build Indexes with DateTime Fields and Other Data Types

{% raw %}

	Article: Q253595
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport
	Last Modified: 29-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Sometimes there is a need to create indexes using DateTime fields along with
	other fields in your table. To index on multiple fields of different data types,
	it is best to convert each non-character field value into a character value
	using the appropriate conversion function. The function TTOC() provides an
	indexable character value from a DATETIME value when used with the second
	parameter value of 1. This article provides examples of how to use this function
	to create various indexes using a DateTime field.
	
	MORE INFORMATION
	================
	
	By default, indexes are created in ascending order. If you include the
	DESCENDING keyword, the index is in descending order. Sometimes you might need
	to build an index on a field in ascending sequence and a second field in
	descending sequence. To achieve this result, you must calculate a value for the
	second field that decreases in value as the actual value increases. For a
	DateTime field, if you subtract the numeric value of the character value
	returned by the TTOC() function from the number 99999999999999, you obtain a
	value that decreases as the actual value increases. By converting this
	calculated value to a character value, you can combine this with another
	character value to achieve the desired results.
	
	The TTOC() function, with the second parameter having the value 1, returns a
	character value from a DATETIME value in the format YYYYMMDDhhmmss. If you enter
	the following statement in the Command window, you see the current system date
	and time presented in this format:
	
	  ? TTOC( DATETIME(), 1 )
	
	To see examples of various indexes with an integer field and a DateTime field,
	create a program called EXAMPLE.prg and paste the following code into the file:
	
	  #DEFINE ONEDAY 86400
	  LOCAL lcTag, x
	
	  CLEAR
	
	  CREATE TABLE Example (iRecID I, tDateTime T, cName C(10))
	
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (1, DATETIME(), "Record 1")
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (1, DATETIME() + ONEDAY, "Record 2")
	
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (2, DATETIME(), "Record 3")
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (2, DATETIME() - ONEDAY, "Record 4")
	
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (3, DATETIME(), "Record 5")
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (3, DATETIME() + ONEDAY, "Record 6")
	
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (4, DATETIME(), "Record 7")
	  INSERT INTO Example (iRecID, tDateTime, cName) ;
	     VALUES (4, DATETIME() - ONEDAY, "Record 8")
	     
	  INDEX ON iRecID    TAG T1
	  INDEX ON tDateTime TAG T2
	  INDEX ON STR(iRecID) + TTOC(tDateTime, 1) TAG T3
	  INDEX ON STR(iRecID) + TTOC(tDateTime, 1) TAG T4 DESCENDING
	  INDEX ON STR(iRecID) + ;
	  	STR(99999999999999 - VAL(TTOC(tDateTime, 1)), 14, 0) TAG T5
	  	
	  SET ALTERNATE TO Example.txt
	  SET TALK ON
	  SET ALTERNATE ON
	
	  FOR x = 1 TO 5
	     lcTag = "T" + LTRIM(STR(x))
	     SET ORDER TO TAG (lcTag)
	     ? "Index Tag " + TAG() + ;
	       ", index expression: " + KEY() + ;
	       ", sequence: " + IIF(DESCENDING(), "Descending", "Ascending")
	     LIST
	  ENDFOR
	
	  SET ALTERNATE OFF
	  SET TALK OFF
	  SET ALTERNATE TO
	  USE
	
	  MODIFY FILE Example.txt
	
	The above program creates a table consisting of an Integer field, a DateTime
	field, and a Character field. It then adds five records to the table. The
	program then creates five index tags for the following situations:
	
	- Integer field in ascending sequence
	- DateTime field in ascending sequence
	- Integer and DateTime fields in ascending sequence
	- Integer and DateTime fields in descending sequence
	- Integer field in ascending sequence and the DateTime field in descending
	  sequence
	
	After creating the index tags, the program creates a text file and lists the five
	records, each time using a different index tag. Once this is completed, the
	program displays the results so that you can see how the various indexing
	techniques affect the sequence of the records in the table.
	
	REFERENCES
	==========
	
	For additional information on indexing, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q97066 How to Index a Combined Date and Character Field
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
