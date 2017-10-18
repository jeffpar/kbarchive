---
layout: page
title: "Q195283: Programming Active Server Pages Comments and Corrections"
permalink: kb/195/Q195283/
---

## Q195283: Programming Active Server Pages Comments and Corrections

	Article: Q195283
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 09-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Active Server Pages ISBN 1-57231-700-0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Active Server Pages, ISBN
	1-57231-700-0.
	
	The following topics are covered:
	
	- Page 38: Complete Object Reference Not Included On CD-ROM
	
	- Page 112-115: Code Correction
	
	MORE INFORMATION
	================
	
	Page 38: Complete Object Reference Not Included On CD-ROM
	---------------------------------------------------------
	
	On page 38, in the 4th paragraph, change the last sentence to reference Appendix
	D.
	
	Change:
	"A complete object reference is also included on the CD-ROM that accompanies this
	book."
	
	To:
	"For a complete object reference refer to Appendix D."
	
	
	Page 112-115: Code Correction
	-----------------------------
	
	There is a paging recordset example on page 112-115 and in the code you specify
	the pagesize as 10. This creates a problem if you end up with a recordcount not
	divisible by 10.
	
	Add the following code to resolve the issue:
	
	  <%
	  If CLng(Session("CurrentPage")) = ObjRecordset.PageCount Then
	
	      'how many records are here
	
	      If ObjRecordset.RecordCount < 10 Then
	
	          ObjRecordset.PageSize = ObjRecordset.RecordCount
	
	      Else
	
	          'we do some maths
	
	          counted = ((ObjRecordset.Pagecount - 1)*10)
	
	          ObjRecordSet.PageSize = ObjRecordset.RecordCount - Clng(counted)
	
	      End If
	
	  End If
	
	  %>
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press asp 1-572321-700-0 Hiller Mezick DevBook
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
