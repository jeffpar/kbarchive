---
layout: page
title: "Q113900: FIX: dBASE &amp; FoxPro Memos Corrupted During Concurrent Addnew"
permalink: kb/113/Q113900/
---

## Q113900: FIX: dBASE &amp; FoxPro Memos Corrupted During Concurrent Addnew

	Article: Q113900
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbDatabase kbIISAMkbbuglist
	Last Modified: 02-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 3.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When two or more programs concurrently edit and/or add new records to the same
	dBASE or FoxPro table and that table contains a memo field, the memo field can
	become corrupted.
	
	CAUSE
	=====
	
	This is not a bug Visual Basic itself, but a bug in the Microsoft Jet Database
	Engine used by Visual Basic.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem has been corrected in Visual Basic
	version 4.0.
	
	MORE INFORMATION
	================
	
	This problem arises when two or more Edit or Addnew operations are pending on
	the same table at the same time. When the record is updated, whichever program
	updates the memo field last has its memo data written into the memo field of the
	previously updated record.
	
	Steps to Reproduce Problem
	--------------------------
	
	To duplicate this problem, you must already have a dBASE or FoxPro table that has
	a memo field in it.
	
	1. From Visual Basic's Window menu, choose the Data Manager (ALT, W, A).
	
	2. Restore the Data Manager's window to normal by clicking the Restore/Max
	  button (ALT, SPACE, R).
	
	3. Open a dBASE or FoxPro database that contains a table with a memo field (ALT,
	  F, O).
	
	4. Select the table from the Tables list, and choose Open.
	
	5. Repeat steps 1 through 4 to provide a second instance of the Data Manager
	  editing your table.
	
	6. For the first instance, add a new record and edit the data in the memo field
	  to say Instance1.
	
	7. For the second instance, add a new record and edit the data in the memo field
	  to say Instance2.
	
	8. Choose Update and Save the Changes for the first instance. Repeat for the
	  second.
	
	9. Choose Refresh to update the recordset. When you view the records, you'll see
	  that the memo fields in both instances read Instance2.
	
	Additional query words: buglist3.00 3.00 fixlist4.00
	
	======================================================================
	Keywords          : kbDatabase kbIISAM kbbuglist
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB300Search kbVB300
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
