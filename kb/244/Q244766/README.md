---
layout: page
title: "Q244766: MS Access 2000/VBA Fundamentals Comments and Corrections"
permalink: /kb/244/Q244766/
---

## Q244766: MS Access 2000/VBA Fundamentals Comments and Corrections

	Article: Q244766
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 05-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Access 2000/Visual Basic for Applications Fundamentals ISBN 0-7356-0592-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft Access 2000/Visual Basic for
	Applications Fundamentals, ISBN 0-7356-0592-0.
	
	The following topics are covered:
	
	- CD-ROM: Error With SmallMailingLabels Report
	
	- Page 173: Error In Sample Code
	
	- Page 338: Incorrect Reference To OnClick Event
	
	MORE INFORMATION
	================
	
	CD-ROM: Error With SmallMailingLabels Report
	--------------------------------------------
	
	When you run the SmallMailingLabels report from the "Ch 08 Subscriptions.mdb"
	file on the CD-ROM, you will receive a dialog box asking you to "Enter Parameter
	Value." This is due to the ActiveX Data Objects library not being correctly
	referenced. To work around the issue,
	
	1. Choose References, deselect the "MISSING: Microsoft ActiveX Data Objects 2.1
	  Library" reference, and click OK.
	
	2. Choose References again, select Microsoft ActiveX Data Objects 2.1 Library,
	  and click OK.
	
	
	Page 173: Error In Sample Code
	------------------------------
	
	The code on page 173 and the sample mdb on the CD are incorrect. The Show Record
	button does not function without the Subscribers form loaded.
	
	Change:
	
	  Private Sub ShowRecord_Click()
	  ' Find the selected record, then close the dialog box.
	
	      Dim rst As DAO.Recordset
	      
	      ' Store the recordset for the Subscribers form.
	      Set rst = Forms!Subscribers.RecordsetClone
	
	      ' Locate the record for the selected subscriber.
	      rst.FindFirst "SubscriberID = " & List0
	
	      ' Set the form's Bookmark property to move to the record.
	      Forms!Subscribers.Bookmark = rst.Bookmark
	
	      ' Close the dialog box.
	      DoCmd.Close acForm, "GoToRecordDialog"
	  End Sub
	
	To:
	
	  Private Sub ShowRecord_Click()
	  ' Find the selected record, then close the dialog box.
	
	      Dim rst As DAO.Recordset
	      
	      DoCmd.OpenForm "Subscribers"
	
	      ' Store the recordset for the Subscribers form.
	      Set rst = Forms!Subscribers.RecordsetClone
	
	      ' Locate the record for the selected subscriber.
	      rst.FindFirst "SubscriberID = " & List0
	
	      ' Set the form's Bookmark property to move to the record.
	      Forms!Subscribers.Bookmark = rst.Bookmark
	
	      ' Close the dialog box.
	      DoCmd.Close acForm, "GoToRecordDialog"
	  End Sub
	
	
	Page 338: Incorrect Reference To OnClick Event
	----------------------------------------------
	
	Step 2 at the bottom of page 338 incorrectly refers to an OnClick event.
	
	Change:
	"... attaching it to the onclick event ..."
	
	To:
	"... attaching it to the onchange event ..."
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-0592-0 DEVBOOK VB ACCESS
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
