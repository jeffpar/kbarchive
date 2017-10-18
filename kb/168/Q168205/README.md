---
layout: page
title: "Q168205: INFO: Difference Between BeginTrans/CommitTrans and Optimistic B"
permalink: kb/168/Q168205/
---

## Q168205: INFO: Difference Between BeginTrans/CommitTrans and Optimistic B

	Article: Q168205
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some confusion may exist between the Optimistic Batch Update and the
	BeginTrans/CommitTrans methods of updating databases. This article explains the
	differences between the two methods.
	
	MORE INFORMATION
	================
	
	Batch updates are used when you open a connection using the Optimistic (Client)
	Batch cursor library. Each time the Update or UpdateRow method is used, the
	rdoResultSet is cached locally but the main database remains unchanged. The
	BatchUpdate method must be used to update the main database.
	
	The BeginTrans/CommitTrans methods will cache the information on the database
	server each time it's changed. When the CommitTrans method is used, the
	information is permanently updated. If the RollBackTrans method is used, the new
	data is discarded.
	
	For optimization purposes, it is best to use the Batch update method when large
	amounts of data are going to be changed all at once. This will send one large
	burst of data across the network when the BatchUpdate method is called as
	opposed to sending many small updates. For the same reason, it's best to use
	BeginTrans/CommitTrans when updating smaller bits of data.
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Issue type        : kbinfo
	
	=============================================================================
	
