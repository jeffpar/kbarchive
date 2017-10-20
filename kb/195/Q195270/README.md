---
layout: page
title: "Q195270: Hitchhiker's Guide to VB &amp; SQL Server, 6th Ed. Corrections"
permalink: /kb/195/Q195270/
---

## Q195270: Hitchhiker's Guide to VB &amp; SQL Server, 6th Ed. Corrections

{% raw %}

	Article: Q195270
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr
	Last Modified: 16-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Hitchhiker's Guide to Visual Basic and SQL Server, 6th Edition ISBN 1-57231-848-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book "Hitchhiker's Guide to Visual Basic and SQL
	Server, Sixth Edition," ISBN 1-57231-848-1.
	
	The following topics are covered:
	
	- Back Cover: VBSQL as Visual Basic/SQL
	
	- Tip to be Added to Chapter 30
	
	- Page 64: Search Event Procedure Produces Error After First Search
	
	- Page 80: The note on the side of the page is missing text
	
	- Page 631: ADO Find method incorrectly described
	
	- Page 722: Heading On Table Is Incorrect
	
	MORE INFORMATION
	================
	
	Back Cover: VBSQL as Visual Basic/SQL
	-------------------------------------
	
	In the second bulleted list entry on the left and in the third entry under
	"Included on CD-ROM!" what now is spelled out as "Visual Basic/SQL" should be
	"VBSQL."
	
	
	Tip to be Added to Chapter 30
	-----------------------------
	
	The author requested that the following tip be added to Chapter 30.
	
	  Tip: Don't expect ADO or any of the interfaces to return after "n" seconds
	  (based on your connection timeout setting) if the LAN is down. These
	  connection routines assume a working connection. Most of the LAN protocols
	  wait for about 90 seconds before giving up trying to send bits into the
	  ether.
	
	
	Page 64: Search Event Procedure Produces Error After First Search
	-----------------------------------------------------------------
	
	On page 64, under "Coding the SearchButton_Click event procedure", the ADO code
	sample will successfully search the pubs database. However, if you try to
	perform additional searches during the current connection, the following error
	will be displayed when you click the Search button:
	
	  Run-time error '3705'
	  Operation is not allowed when the object is open.
	
	This error occurs because the Open method on the Recordset object is called while
	the Recordset object is currently open. One way to eliminate this error is to
	check the state of the Recordset object before calling the Open method. The
	following code change in the SearchButton_Click() procedure will eliminate the
	problem.
	
	Change:
	
	  Private Sub SearchButton_Click()
	  Cmd(0) = "%" & TitleWanted & "%"
	  Rs.Open Cmd, , adOpenStatic
	  If Rs.EOF = False Then
	      ShowRecord
	  Else<BR/>
	      MsgBox "No records found. Choose another title to search for."
	  End If
	  End Sub
	
	To:
	
	  Private Sub SearchButton_Click()
	  Cmd(0) = "%" & TitleWanted & "%"
	  If Rs.State = adStateOpen Then
	      Rs.Close
	  End If
	  Rs.Open Cmd, , adOpenStatic
	  If Rs.EOF = False Then
	      ShowRecord
	  Else
	      MsgBox "No records found. Choose another title to search for."
	  End If
	  End Sub
	
	
	Page 80: The note on the side of the page is missing text
	---------------------------------------------------------
	
	Page 80: The note on the side of the page is incomplete.
	
	Replacement text will be posted as soon as it is available.
	
	
	Page 631: ADO Find method incorrectly described
	-----------------------------------------------
	
	On page 631, the ADO Find method is incorrectly described as returning a Boolean
	data type. The Find method does not return a value, but actually sets the
	recordset position. As indicated in the ADO documentation, if the find criteria
	is met, the recordset position is set on the found record; otherwise, the
	position is set on the end of the recordset.
	
	On page 631, the Criteria argument does not specify all of the comparison
	operators. The comparison operators should include:
	>, <, =, >=, <=, <>, LIKE
	Steps to correct page 631.
	
	1. The Find syntax after the first paragraph should be changed: Find(Criteria,
	  SkipRecords, SearchDirection, Start)
	
	2. The paragraph after Table 29-34 should be replaced with the following:
	  "When the Find method is executed and the Criteria argument is satisfied, the
	  recordset position is set to the found record. If the Criteria argument is
	  not satified, the recordset position is set to the end of the recordset."
	
	3. The second paragraph after Table 29-34 should be replaced with the
	  following:
	  "The comparison operator in criteria can be > (greater than), < (less
	  than), = (equal), >= (greater than or equal), <= (less than or equal),
	  <> (not equal), or LIKE (pattern matching)."
	
	
	Page 722: Heading On Table Is Incorrect
	---------------------------------------
	
	Page 722, Table 31-4, heading 1:
	Change: "RDO/ADO"
	To: "RDO/DAO"
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 1-57231-848-1 vb60
	
	======================================================================
	Keywords          : kbdocerr 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
