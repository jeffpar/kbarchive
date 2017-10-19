---
layout: page
title: "Q176486: BUG: Bookmark for Unbound DBGrid is Incorrect for the Last Row"
permalink: /kb/176/Q176486/
---

## Q176486: BUG: Bookmark for Unbound DBGrid is Incorrect for the Last Row

	Article: Q176486
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Bookmark property of the DBGrid control can be used to save a reference to
	the current row. By setting the Bookmark property, the current row can be
	updated as well.
	
	If the Bookmark property of an unbound DBGrid control is saved while the last row
	is selected, setting the Bookmark property back to the saved value will update
	the current row to be the first row, rather than the last.
	
	RESOLUTION
	==========
	
	As a workaround, use the RowBookmark method of the DBGrid control when saving
	the Bookmark of the current row:
	
	     Private MyBookmark
	
	     Private Sub cmdSaveBookmark_Click()
	
	         MyBookmark = DBGrid1.RowBookmark(DBGrid1.Row)
	
	     End Sub
	
	Also, the following error handling code will need to be included when updating
	the current row:
	
	     Private Sub cmdRestoreBookmark_Click()
	     On Error GoTo err_handler
	
	         DBGrid1.Bookmark = MyBookmark
	
	     Exit Sub
	
	     err_handler:
	     Dim r
	
	         If Err.Number = 6149 Then
	             For r = 0 To DBGrid1.VisibleRows - 1
	                 DBGrid1.Row = r
	             Next r
	             Resume
	         Else
	             Err.Raise Err.Number
	         End If
	
	     End Sub
	
	The above error handling code is necessary because the bug associated with the
	Bookmark property for the last row will also cause run-time error 6149.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the sample project, UnBndGrd.vbp, in the Visual Basic samples directory
	  (such as C:\Program Files\DevStudio\VB\samples\Misc\UnBndGrd\UnBndGrd.vbp).
	
	  This article uses the Sample application UnBndGRd.Vbp. In the current
	  MarchPreRelease of VB 6.0 this sample is not available. This may have to be
	  changed to reflect what is shipped with the product.
	
	2. Add two CommandButtons to Form1 and name them cmdSaveBookmark and
	  cmdRestoreBookmark.
	
	3. Add the following code to the General Declarations section of Form1:
	
	        Private MyBookmark
	
	        Private Sub cmdSaveBookmark_Click()
	
	            MyBookmark = DBGrid1.Bookmark
	
	        End Sub
	
	        Private Sub cmdRestoreBookmark_Click()
	
	            DBGrid1.Bookmark = MyBookmark
	
	        End Sub
	
	4. Run the project.
	
	5. Select a row in the DBGrid (not the last row) and click on cmdSaveBookmark to
	  save the Bookmark. Move to another row and click on cmdRestoreBookmark to
	  return to the original row.
	
	6. Repeat step 5 with the last row and notice that the DBGrid does not return to
	  the last row but to the first row instead.
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Issue type        : kbbug
	
	=============================================================================
	
