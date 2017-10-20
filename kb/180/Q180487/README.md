---
layout: page
title: "Q180487: DOC: For Each ... Next Statement Does Not Work for Collections"
permalink: /kb/180/Q180487/
---

## Q180487: DOC: For Each ... Next Statement Does Not Work for Collections

{% raw %}

	Article: Q180487
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbToolkit kbVBp kbVBp500 kbVBp600 kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB
	Last Modified: 15-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft eMbedded Visual Basic, version 3.0 
	- Microsoft Windows CE Toolkit for Visual Basic 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Help topics for eMbedded Visual Basic (eVB) and Microsoft Windows CE
	Toolkit for Visual Basic (VBCE), the description for the "For Each ... Next"
	statement is as follows:
	
	"Repeats a group of statements for each element in an array or collection."
	
	However, this is not true for collections because you cannot declare a collection
	in either eVB or VBCE.
	
	MORE INFORMATION
	================
	
	Unlike the information presented in the Help documentation, the following code
	will not work in either eVB or VBCE because the New keyword is not supported:
	
	     Private Sub Command1_Click()
	        Dim col As New Collection
	        Dim vnt
	        col.Add "Item1"
	        col.Add "Item2"
	        col.Add "Item3"
	        col.Add "Item4"
	        For Each vnt In col
	            MsgBox vnt
	        Next
	     End Sub
	
	Additional query words: wince vbce vbce6 evb
	
	======================================================================
	Keywords          : kbToolkit kbVBp kbVBp500 kbVBp600 kbOSWinCEsearch kbOSWinCE100 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword2 kbVBeMbSearch kbWinCETKVBSearch kbWinCESearch kbVBeMb300
	Version           : :3.0
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
