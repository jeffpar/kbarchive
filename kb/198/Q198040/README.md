---
layout: page
title: "Q198040: WD97: How to Use Dates as Mail Merge Selection Criteria"
permalink: kb/198/Q198040/
---

## Q198040: WD97: How to Use Dates as Mail Merge Selection Criteria

	Article: Q198040
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbfield word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	You can perform a selective mail merge based on a list of dates. For example,
	you can merge records based on such criteria as a group of months, days of
	months, years, or combinations of all three. For example, you can perform a
	selective mail merge based on a list of names and birth dates.
	
	In addition, you can instruct Word to change the date format of data in the
	merged document.
	
	MORE INFORMATION
	================
	
	To use the selective merge function, do the following:
	
	1. Set up the data document. For example:
	
	  FRIENDS,BIRTHDATE
	  Karan Khanna, 10-5-1940
	  Jon Morris, 6/1/1926
	  Megan Sherman, 5/26/1907
	
	  NOTE: You can use either forward slashes or dashes in the dates. If your data
	  document is formatted as a table, you can also spell out the date (for
	  example, "June 1, 1926").
	
	  NOTE: The example companies, organizations, products, people, and events
	  depicted herein are fictitious. No association with any real company,
	  organization, product, person, or event is intended or should be inferred.
	
	2. Set up the main document:
	
	Note: Using the If field in the document to do a selective merge will generate
	blank papers. This is by design; the merge command will create a document for
	each record read, whether or not the record meets the criteria in the IF
	statement.
	
	  a. {if {MERGEFIELD Birthdate \@ "MMMM"}="October" "{MERGEFIELD Friends}
	     {MERGEFIELD Birthdate \@ "MMMM d, yyyy"}"}
	
	     This example merges records for people born in October. The Birthdate field
	     is formatted as "October 5, 1940", regardless of the data format of the
	     data document (October 5, 1940, or 10/5/1940, or 10/5/40).
	
	  b. {if {MERGEFIELD Birthdate \@ "MM"}="10" "{MERGEFIELD Friends} {MERGEFIELD
	     Birthdate}"}
	
	     This example works the same as example a, except that the Birthdate prints
	     exactly as it appears in the data document.
	
	  c. {if {MERGEFIELD Birthdate \@ "yy"}="40" "{MERGEFIELD Friends} {MERGEFIELD
	     Birthdate \@ "MM/dd/yy"}"}
	
	     This example merges records for people born in 1940. The Birthdate field is
	     formatted as "10/5/40."
	
	  d. {if {MERGEFIELD Birthdate \@ " yyyy"}="1940" "{MERGEFIELD Friends}
	     {MERGEFIELD Birthdate \@ "d-MMM-yy"}"}
	
	     Same result as example 3 above, except that the Birthdate prints in
	     "5-October-40" format.
	
	  e. {if {MERGEFIELD Birthdate \@ "MMMM d, yyyy"}="October 5, 1940"
	     "{MERGEFIELD Friends} {MERGEFIELD Birthdate}"}
	
	     Merges only the records of people born on October 5, 1940.
	
	NOTE: To enter the field brackets ({}), choose Field from the Insert menu (or
	press CTRL+F9).
	These examples do not illustrate all possible selective merge combinations or
	date formats. To view all possible DATE field switches, choose Field from the
	Insert menu. Under Categories, select Date And Time; under Field Names, select
	Date, and then click Options. All the possible date switch combinations appear
	in the Instructions box.
	
	It is not possible to do a selective print merge using less than or greater than
	statements based on dates, because Word interprets the dates as text. The dates
	in Word do not have a numerical value that can be compared.
	
	For example, this will NOT work:
	
	{ if {MERGEFIELD mydate \@ "M/d/yy"} > "4/15/97 "true" "false" }
	
	Additional query words: conditional pmh
	
	======================================================================
	Keywords          : kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
