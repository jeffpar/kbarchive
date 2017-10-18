---
layout: page
title: "Q130146: How to Create a Scrolling Field in a BROWSE Window"
permalink: kb/130/Q130146/
---

## Q130146: How to Create a Scrolling Field in a BROWSE Window

	Article: Q130146
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Windows versions 2.x, you can't scroll a field in a Browse window
	when a field is wider than the column width. However, In Visual FoxPro version
	3.0, you can make the field in a Browse window an edit box with a scroll bar.
	This articles shows by example how to do it.
	
	MORE INFORMATION
	================
	
	Code Sample
	-----------
	
	  #DEFINE FIELDLENGTH 100
	
	  cText = "This is how it works in 2.x. You can't see the entire field. The ;
	  new way - pay attention to the 'BROWSE NAME' clause. You can now use the ;
	  BROWSE as a Visual FoxPro 3.0 object and introduce a control into a long ;
	  field so that the data is easier to view."
	
	  CREATE CURSOR issues (topic C(20),  long_desc C(254))
	  INSERT INTO issues VALUES ('Horizontal Scrolling', cText)
	
	  BROWSE TITLE "Close this Window to see what you can do with Visual FoxPro!"
	
	  BROWSE NAME oIssues NOWAIT TITLE 'Issues'
	
	  LOCAL nColumn, oRef
	  FOR nColumn = 1 TO FCOUNT()
	     IF FSIZE(FIELD(m.nColumn)) >= FIELDLENGTH
	        oRef = EVAL('oIssues.Column'+LTRIM(STR(nColumn)))
	        oRef.AddObject('edit1','editbox')  && Add edit box.
	        oRef.edit1.Visible = .t.
	        oRef.Sparse = .f.
	        oRef.CurrentControl = 'edit1'
	        oRef.Width = 150
	        oRef.edit1.ScrollBars = 2
	     ENDIF
	  ENDFOR
	
	  oIssues.RowHeight = 60     && Change the row height for the browse object.
	
	Instructions
	------------
	
	Run the program. In the first browse window, you cannot see the entire long
	description field (it's an old version 2.x browse window). Press the ESC key to
	quit the first browse window. Then bring up the second Browse window, which is
	the new version 3.0 browse window. Now, the entire long description appears in
	an edit box, so the data can be more easily viewed.
	
	NOTE: You can use BROWSE NAME to create an object reference for the Browse
	window. This allows you to manipulate the Browse window with object-oriented
	properties available for the Grid control.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
