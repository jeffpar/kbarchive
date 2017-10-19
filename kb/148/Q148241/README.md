---
layout: page
title: "Q148241: RUNNING MS ACCESS FOR WIN 95 Corrections and Comments"
permalink: /kb/148/Q148241/
---

## Q148241: RUNNING MS ACCESS FOR WIN 95 Corrections and Comments

	Article: Q148241
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Running Microsoft Access for Windows 95 ISBN 1-55615-886-6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press book "Running Microsoft Access for Windows 95."
	
	The following topics are covered:
	
	- Pages 277-279: Example Using an Append Query to Archive Data
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, this document might also
	include sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comments" section
	contains specific information for working around problems.
	
	Pages 277-279: Example Using an Append Query to Archive Data
	------------------------------------------------------------
	
	The extended example in this section has two known problems
	
	1. Running the qryXmplArchiveOldContracts query invokes two extra Enter
	  Parameter Value dialog boxes in addition to the one shown in Figure 9-18.
	
	2. qryXmplArchiveOldContracts fails to append the 78 rows of data to the
	  tblContractHistory table due to key violations.
	
	Correction:
	
	
	Comments:
	
	1. The extra dialog boxes arise from two superfluous fields (Expr1: and Expr2:)
	  in the qryXmplArchiveOldContracts query. These two fields should be deleted.
	  In addition, the corresponding fields in the tblContractHistory table should
	  also be deleted (CommissionAgent3 and Commission3%).
	
	2. The rows which qryXmplArchiveOldContracts attempts to append already exist in
	  the tblContractHistory table. All of the rows from Contract Number 4642 to
	  Contract Number 4748 should be deleted from the table.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
