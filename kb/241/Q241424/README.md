---
layout: page
title: "Q241424: HOWTO: Export Memo Fields w/ Other Field Types to Text File"
permalink: /kb/241/Q241424/
---

## Q241424: HOWTO: Export Memo Fields w/ Other Field Types to Text File

{% raw %}

	Article: Q241424
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to dynamically export records that contain Memo
	fields in a table, together with the other field types, into a comma delimited
	text file.
	
	MORE INFORMATION
	================
	
	The sample code in this article follows this order:
	
	1. Prompts for a source table (.dbf file).
	
	2. Prompts for a target text file (.txt file).
	
	3. Export the contents of the table to the text file.
	
	The code scans and determines every field type and every record in the table and
	then processes them accordingly to the data type:
	
	  CLOSE ALL
	  CLEAR ALL
	
	  lcFieldString = ''
	  lcMemo = ''
	
	  USE GETFILE('dbf', 'Select DBF') && Prompts for table to be used.
	
	  lnFieldCount = AFIELDS(laGetFields) && Builds array of fields from the
	                                      && selected table.
	
	  *!* Prompt for Output file and use Low-Level functions
	  *!* to create it.
	  lcTextFile = FCREATE(GETFILE('txt', 'Select Text'))
	
	  *!* Starts scanning the table and converts the fields
	  *!* values according to their types **
	  SCAN
	     WAIT WINDOW STR(RECNO()) + ' Of ' + STR(RECCOUNT()) NOWAIT
	    
	     FOR lnCount = 1 TO lnFieldCount
	        lcType = laGetFields(lnCount, 2)
	
	        IF lcType # 'G' && Don't try to turn a general field into a string
	           lcString = EVALUATE(laGetFields(lnCount, 1))
	        EndIf
	        
	        DO CASE
	           CASE lcType = 'M' && Process the Memo Fields
	              lnMemoLines = MEMLINES(EVALUATE(laGetFields(lnCount,1)))
	              FOR lnLoop = 1 TO lnMemoLines
	                 IF lnLoop < lnMemoLines
	                    lcMemo = lcMemo + ;
	                       ALLTRIM(MLINE(EVALUATE(laGetFields(lnCount, 1)), ;
	                                     lnLoop)) + ' '
	                 ELSE
	                    lcMemo = lcMemo + ;
	                       ALLTRIM(MLINE(EVALUATE(laGetFields(lnCount, 1)), ;
	                                     lnLoop))
	                 ENDif
	              ENDfor
	             
	              lcString = lcMemo
	              lcMemo = ''
	           CASE lcType = 'G' && Process the General Fields
	              lcString = 'Gen'
	           CASE lcType = 'D' && Process the Date Fields
	              lcString = DTOC(lcString)
	           CASE lcType = 'T' && Process the DateTime Fields
	              lcString = TTOC(lcString)
	           CASE lcType = 'N' && Process the Numeric Fields
	              lcString = STR(lcString, LEN(STR(lcString)), 2)
	           CASE lcType = 'I' && Process the Integer Fields
	              lcString = STR(lcString)
	           CASE lcType = 'L' && Process the Logical Fields
	              IF lcString = .T.
	                 lcString = 'T'
	              ELSE
	                 lcString = 'F'
	              ENDif
	        ENDcase
	       
	        IF lnCount < lnFieldCount && Determines if the last field was
	                                  && processed and sets the closing quote.
	           lcFieldString = lcFieldString + '"' + lcString + '"' + ','
	        ELSE
	           lcFieldString = lcFieldString + '"' + lcString + '"'
	        ENDif
	     ENDfor
	
	     FPUTS(lcTextFile, lcFieldString) && Writes string to the text file.
	     lcFieldString = ''
	  ENDscan
	
	  FCLOSE(lcTextFile)
	
	  CLOSE All
	  CLEAR All
	  WAIT WINDOW 'Text File Creation Completed' NOWAIT
	
	REFERENCES
	==========
	
	For additional information exporting memo fields, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q95722 How to Export Memo Fields to an ASCII File
	
	Additional query words: kbdse
	
	======================================================================
	Keywords          : kbAutomation kbvfp500 kbvfp500a kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
