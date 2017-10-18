---
layout: page
title: "Q100018: PRB: RQBE Drops Field Name in Output After Saving"
permalink: kb/100/Q100018/
---

## Q100018: PRB: RQBE Drops Field Name in Output After Saving

	Article: Q100018
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5; WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.5 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are selecting output fields in the Relational Query By Example (RQBE)
	tool, you can create a new field and specify a field heading. This heading will
	appear in the SELECT statement and the query will contain the new field with the
	heading. The query will later produce the desired results unless the RQBE window
	is saved and opened again, in which case the field heading for the new field
	will be dropped and FoxPro will substitute "Exp_<#>", where <#> is a
	number signifying the display position of the field.
	
	RESOLUTION
	==========
	
	If you need to make a change to an existing query, repeat steps 2-4 above, and
	remove "string" from the fields list.
	
	STATUS
	======
	
	This problem was corrected in FoxPro version 2.5a for Windows and in FoxPro
	version 2.5a for MS-DOS.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. From the File menu, choose Open, and select the database to open.
	
	2. From the File menu, choose New, select Query, and then choose New.
	
	3. Select Fields.
	
	4. In the text box under the Function popup list, type the following:
	
	  " "string" as Newfield" (without the quotation marks)
	
	5. Choose Move to add "'string' as Newfield" to the Selected Output list. Choose
	  OK.
	
	6. Choose See SQL.
	
	  The SELECT statement will contain "'string' as Newfield" in the fields list.
	
	7. Choose Do Query. The query result will have a field titled "Newfield"
	  containing the word "string" in every record.
	
	8. Save the query, close it, and reopen it. The Output fields list will now list
	  just "'string'" NOT "'string'" as Newfield". However, the See SQL push button
	  will still show "'string' as Newfield" and the query result will still label
	  the field as "Newfield".
	
	9. Make any other change. Save the query. The field name will be dropped.
	  Running the query will produce a field labeled "Exp_#" instead of "Newfield".
	
	Additional query words: FoxDos FoxWin VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250 kbVFP300
	Version           : MS-DOS:2.0,2.5; WINDOWS:2.5,3.0
	
	=============================================================================
	
