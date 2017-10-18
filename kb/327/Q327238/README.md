---
layout: page
title: "Q327238: Programming Microsoft SQL Server 2000 with Visual Basic .Net Com"
permalink: kb/327/Q327238/
---

## Q327238: Programming Microsoft SQL Server 2000 with Visual Basic .Net Com

	Article: Q327238
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Programming Microsoft SQL Server 2000 with Visual Basic.Net, ISBN 0-7356-1535-7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Programming Microsoft SQL Server 2000 with
	Visual Basic .Net, ISBN 0-7356-1535-7.
	
	The following topics are covered:
	
	- CD-ROM: Correction To InheritingSample Code
	
	- Page 324: CDbl Should Be Val
	
	- Page 325: Missing Statement in Code Sample
	
	- Page 338: Missing EndIf Statement
	
	MORE INFORMATION
	================
	
	CD-ROM: Correction To InheritingSample Code
	-------------------------------------------
	
	There is an error in the class3.vb and form1.vb files found on the CD in the
	SQLVBNET\Chapter_09\InheritingSample folder.
	
	The change to form1.vb is the addition of one line of code.
	
	Change:
	
	  num1 = 55.5
	  MsgBox(c3.TenPercentOfIt(num1).ToString, , _
	  	"Return based on a double input")
	
	To:
	
	  num1 = 55.5
	  TextBox1.Text = "55.5"
	  MsgBox(c3.TenPercentOfIt(num1).ToString, , _
	  	"Return based on a double input")
	
	The change to class3.vb is the correction of CDbl to Val in the Return statement
	
	Change:
	
	  Return (CDbl(It) * 0.1)
	
	To:
	
	  Return (Val(It) * 0.1)
	
	
	Page 324: CDbl Should Be Val
	----------------------------
	
	On page 324, at the bottom of the page in the Class3 code sample,
	
	Change:
	
	  Return (CDbl(It) * 0.1)
	
	To:
	
	  Return (Val(It) * 0.1)
	
	
	Page 325: Missing Statement in Code Sample
	------------------------------------------
	
	In the code sample on page 325, a statement is missing.
	
	Change:
	
	  num1 = 55.5
	  MsgBox(c3.TenPercentOfIt(num1).ToString, , _
	  	"Return based on a double input")
	
	To:
	
	  num1 = 55.5
	  TextBox1.Text = "55.5"
	  MsgBox(c3.TenPercentOfIt(num1).ToString, , _
	  	"Return based on a double input")
	
	
	Page 338: Missing EndIf Statement
	---------------------------------
	
	On page 338, at the center of the page, the required EndIf statement is missing.
	This code is correct on the sample CD.
	
	Change:
	
	  	If temp <= 255 Then
	  		MsgBox("Sum of " & frm2bytel & " and " & frm2byte2 & _
	  		" is " & temp & ".", MsgBoxStyle.OkOnly, _
	  		"Result from Form2")
	
	  End Sub
	
	To:
	
	  	If temp <= 255 Then
	  		MsgBox("Sum of " & frm2bytel & " and " & frm2byte2 & _
	  		" is " & temp & ".", MsgBoxStyle.OkOnly, _
	  		"Result from Form2")
	  	EndIf
	  End Sub
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: 0-7356-1535-7 DOBSON .NET VB VSTUDIO SQL
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
