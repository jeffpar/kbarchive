---
layout: page
title: "Q129634: Jet DB Engines Process 'Data Has Changed' Error Differently"
permalink: kb/129/Q129634/
---

## Q129634: Jet DB Engines Process 'Data Has Changed' Error Differently

	Article: Q129634
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Jet version 1.1 database engine behaves differently from the
	version 2.0 and 3.0 database engines when it comes to processing the 'Data Has
	Changed' error message.
	
	MORE INFORMATION
	================
	
	The Microsoft Jet version 1.1 database engine shipped with Visual Basic version
	3.0. The Microsoft Jet version 2.0 database engine shipped with Microsoft Access
	version 2.0, and the The Microsoft Jet version 3.0 database engine shipped with
	Visual Basic version 4.0.
	
	In Jet 1.1, the error is triggered, by default, to warn the user whenever data is
	changed in the table. However, in Jet 2.0 and 3.0 this error is not
	automatically triggered when data changes. To cause the Jet 2.0 and 3.0 database
	engines to trigger the error message, you need to set the Options property for
	the recordset to dbSeeChanges (512).
	
	Examples Using Visual Basic Version 4.0 Syntax
	----------------------------------------------
	
	To change the Options property on a data control to the proper value, use one of
	the following two methods:
	
	- In the design environment, make sure that the data control is the selected
	  item on your form. Then go to the properties sheet, and set the Options
	  property to 512.
	
	-or-
	
	- In the runtime environment, use the following line of code to set the Options
	  property of a data control named data1:
	
	      data1.options = dbSeeChanges
	
	To create a recordset with the Options property set to dbSeeChanges, you can use
	this code segment:
	
	     Dim db As Database
	     Dim rs As Recordset
	
	     Set db = DBEngine.WorkSpaces(0).OpenDatabase("biblio.mdb")
	     Set rs = db.OpenRecordset("authors", dbOpenDynaset, dbSeeChanges)
	
	Steps to Trigger Error
	----------------------
	
	After the Options property of the recordset is set, you can trigger the error by
	performing the following sequence of events:
	
	1. Ensure that two programs have the same record open in an edit mode.
	
	2. Have both programs make changes to that record.
	
	3. Have one program save its changes.
	
	4. Have the second program attempt to save its changes. At this point, the error
	  message is triggered.
	
	Additional query words: 4.00 vb4win vb4all
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVBSearch kbAudDeveloper kbVB400Search kbVB400 kbVB16bitSearch
	Version           : :4.0
	
	=============================================================================
	
