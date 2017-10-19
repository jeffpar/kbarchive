---
layout: page
title: "Q188861: HOWTO: Use the Remote Data Control to Pass Bookmarks"
permalink: /kb/188/Q188861/
---

## Q188861: HOWTO: Use the Remote Data Control to Pass Bookmarks

	Article: Q188861
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If two RemoteData controls (RDCs) have the same result set, they can use the
	same bookmark.
	
	MORE INFORMATION
	================
	
	The following sample uses two forms, each with its own RDC, to demonstrate that
	one RDC can use the bookmark set on the result set of another RDC. If you set a
	bookmark to the result set of the RDC on Form1, you can use the same bookmark
	for the result set of the RDC on Form2. The RDC on Form2 opens the result set
	and points to the same record that was saved to the bookmark.
	
	NOTE: Each RDC must have the same SQL property or the bookmark does not work.
	Also, each RDC must be bound to the same source in the DataSourceName property.
	
	Steps to Create Sample
	----------------------
	
	1. Open a Standard EXE project in Visual Basic.
	
	2. Add a form so that you have Form1 and Form2 in your project.
	
	3. Add a RemoteData control to Form1 and another one to Form2.
	
	4. Add a TextBox control to Form1 and another one to Form2
	
	5. Create a Microsoft Access DataSourceName for the Northwind database in the
	  ODBC Administrator. Set the DataSourceName property for each of the RDCs to
	  your Northwind DataSource. Set the SQL property for each of the RDCs to the
	  following:
	
	        Select * From Customers
	
	6. Set the DataSource property for each TextBox control to MSRDC1.
	
	7. Create a Command button on form1. Paste in the following code:
	
	        Private Sub Command1_Click()
	          Dim varBookmark As Variant
	
	          varBookmark = Form1.MSRDC1.Resultset.Bookmark
	          Form2.MSRDC1.Resultset.Bookmark = varBookmark
	          Form2.Show
	        End Sub
	
	REFERENCES
	==========
	
	"Jet Database Engine Programmer's Guide," Dan Haught and Jim Ferguson, 756
	pages, Microsoft Press, 1997
	
	Additional query words: kbCtl kbDAO kbVBp400 kbVBp500 kbEEdition
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
