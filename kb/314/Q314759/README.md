---
layout: page
title: "Q314759: Microsoft ADO.NET Step by Step Comments and Corrections"
permalink: /kb/314/Q314759/
---

## Q314759: Microsoft ADO.NET Step by Step Comments and Corrections

	Article: Q314759
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft ADO.NET Step By Step ISBN 0-7356-1236-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Microsoft ADO.NET Step by Step, ISBN
	0-7356-1236-6.
	
	The following topics are covered:
	
	- Page 91: Me.dsProducts1.Table Should Be Me.dsProducts1._Table
	
	- Page 102: Incorrect Code
	
	- Pages 102, 105, & 107: "\n" Parameter Does Not Create Multiple Lines
	
	- Page 152: Error In Step 1
	
	- Page 155: Error In Step 1
	
	- Page 252: Incorrect Statement Regarding RejectChanges
	
	MORE INFORMATION
	================
	
	Page 91: Me.dsProducts1.Table Should Be Me.dsProducts1._Table
	-------------------------------------------------------------
	
	On page 91, in the code sample at the bottom,
	
	Change:
	"Me.daProducts.Fill(Me.dsProducts1.Table)"
	
	To:
	"Me.daProducts.Fill(Me.dsProducts1._Table)"
	
	
	Page 102: Incorrect Code
	------------------------
	
	The code sample at the top of page 102 is incorrect. The code should read:
	
	  this.txtMessages.Text += "\r\n Executing a command of type ";
	  this.txtMessages.Text += args.StatementType.ToString();
	
	
	Pages 102, 105, & 107: "\n" Parameter Does Not Create Multiple Lines
	--------------------------------------------------------------------
	
	The code sample at the top of page 102 is incorrect. The code should read:
	
	  this.txtMessages.Text += "\r\n Executing a command of type ";
	  this.txtMessages.Text += args.StatementType.ToString();
	
	
	Page 152: Error In Step 1
	-------------------------
	
	There is an error in step 1 on page 152.
	
	Change:
	"1. In the form designer, double-click the Clone DataSet button."
	
	To:
	"1. In the form designer, double-click the Create Relation button."
	
	
	Page 155: Error In Step 1
	-------------------------
	
	There is an error in step 1 on page 152.
	
	Change:
	"1. In the form designer, double-click the Create Relation button."
	
	To:
	"1. In the form designer, double-click the Clone DataSet button."
	
	
	Page 252: Incorrect Statement Regarding RejectChanges
	-----------------------------------------------------
	
	There is an error in the second paragraph on page 252.
	
	Change:
	"...will have the Original values of each column changed to the Current values,"
	
	To:
	"...will have the Current values of each column changed to the Original values,"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1236-6 Riordan EUBOOK EUSBS
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
