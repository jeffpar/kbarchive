---
layout: page
title: "Q198309: WD97: Find Record in Database Loses Track of the Record Number"
permalink: kb/198/Q198309/
---

## Q198309: WD97: Find Record in Database Loses Track of the Record Number

	Article: Q198309
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): word97 kbmerge
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a data document, when you search a data list using the Find feature in the
	Data Form dialog box until you find a match, and then you do the following:
	
	- Search for the next match until there are no more matches found
	
	  -and-
	
	- From the Data Form dialog box, click to view the next record, the record
	  number advances, but the field data is not updated to reflect the change.
	
	To use the Find feature with a database, click Data Form on the Database toolbar,
	and click the Find button.
	
	CAUSE
	=====
	
	This problem occurs when the last match found is the next to the last record in
	your data list.
	
	
	WORKAROUND
	==========
	
	To work around this problem, after clicking to view the next record, do either
	of the following:
	
	- Move back one record and then move forward to update the display.
	
	  -or-
	
	- Click the Next Record button again to update the display.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
