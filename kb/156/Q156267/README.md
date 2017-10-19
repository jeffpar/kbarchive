---
layout: page
title: "Q156267: HOWTO: Use the DataToClip Method"
permalink: /kb/156/Q156267/
---

## Q156267: HOWTO: Use the DataToClip Method

	Article: Q156267
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can easily send the contents of a table or a portion of the contents of a
	table, cursor, or view to the Clipboard with the DataToClip() method.
	
	MORE INFORMATION
	================
	
	With the table open, issue this command in the Command window:
	
	     _VFP.DataToClip()
	
	You can then paste the records that have been copied to the Clipboard into a
	document or worksheet. The online documentation has an example of using the
	DataToClip method from an Excel module that is using FoxPro as an OLE server.
	This code needs some modification to run. The Help file and the Online
	Documentation give the following syntax:
	
	  DataToClip([nWorkArea | cTableAlias]|[, nRecords] [, nClipFormat])
	
	If the nClipFormat property is 1, columns are space-delimited. If the nClipFormat
	property is 3, the columns are delimited with tabs (which is nice for creating
	tables in Microsoft Word and Microsoft Excel). The default is to copy all
	records from the currently selected work area, so be sure to specify nRecords if
	it is a table with a large number of records.
	
	If you would like to copy only some fields or if you want records based on some
	criteria, issue a SELECT - SQL command first and use the DataToClip method on
	the cursor created.
	
	One limitation is that the DataToClip method does not handle .NULL. field values.
	It may or may not copy the record containing the .NULL. value, or other records
	may be missing.
	
	REFERENCES
	==========
	
	For more information about the changes to the example in the Online
	documentation, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q156453 DOCERR: Excel Code in Chapter 16 of Online Docs Incorrect
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
