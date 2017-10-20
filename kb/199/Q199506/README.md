---
layout: page
title: "Q199506: Active Visual Basic 5.0 Comments and Corrections"
permalink: /kb/199/Q199506/
---

## Q199506: Active Visual Basic 5.0 Comments and Corrections

{% raw %}

	Article: Q199506
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr
	Last Modified: 10-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Active Visual Basic 5.0 ISBN 1-57231-512-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information about known errors
	relating to the Microsoft Press book Active Visual Basic 5.0, ISBN
	1-57231-512-1.
	
	The following topics are covered:
	
	- Page 125: One Line Of Code is Missing
	
	MORE INFORMATION
	================
	
	Page 125: One Line Of Code is Missing
	-------------------------------------
	
	Page 125, Exercise 7-2, Step 12:
	
	One line of code is missing. Right before the If statement insert:
	
	    OneSmile.Name = TheName
	
	Corrected Code:
	
	  Private Sub Command1_Click()
	
	    Dim TheName As String
	    Dim MySmile As Smile
	
	    Do
	
	      Dim OneSmile As New Smile
	      TheName = InputBox("Please enter a name for this _
	      Smile object," & Chr(13) & "Press Cancel to see names in _
	      the collection.", "Name the Smiles collection items")
	
	      OneSmile.Name = TheName
	
	    If OneSmile.Name <> "" Then
	
	      Smiles.Add OneSmile
	
	    End If
	
	    Set OneSmile = Nothing
	    Loop Until TheName = ""
	    Print Smiles.Count & " Smile object(s) in the _
	    Smiles collection."
	
	    For Each MySmile In Smiles
	
	      Print MySmile.Name
	
	    Next MySmile
	
	  End Sub
	
	The sample code on the enclosed CD-ROM is correct.
	
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: ms_press 1-57231-512-1
	
	======================================================================
	Keywords          : kbdocfix kbdocerr 
	Technology        : kbMSPressSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
