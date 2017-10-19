---
layout: page
title: "Q139524: How to Create a Builder to Add Tables to the Data Environment"
permalink: /kb/139/Q139524/
---

## Q139524: How to Create a Builder to Add Tables to the Data Environment

	Article: Q139524
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Often several tables must be added to the data environment of a form. It is
	possible to create a builder that allows you to select and add multiple tables
	at one time.
	
	MORE INFORMATION
	================
	
	The following steps create a builder that allows the developer to select a
	single .dbc file. Then a form appears containing two multiple-select list boxes.
	The first list contains the names of the tables in the .dbc file, and the second
	list contains the names of the views in the .dbc file.
	
	When you click the Add to DE button, each table selected is added to the data
	environment of the form.
	
	Steps to Create Builder
	-----------------------
	
	1. Create a new form.
	
	2. Add the following new properties to the form:
	
	     dbcName
	     dbcTables[1]
	     dbcViews[1]
	     gaDataEnvironment[1]
	
	3. Add the following code to the Init event of the form:
	
	     *   Obtain an object reference to the data environment of the form in
	     *   the Forms Designer
	     =ASELOBJ(ThisForm.gaDataEnvironment,2)
	
	     *   Ask the user which .dbc file should be used, cancel builder if none
	     ThisForm.dbcname = GETFILE("DBC", "Select Database", "Open")
	     IF EMPTY(thisForm.dbcName)
	        RETURN .F.
	     ENDIF
	
	     *  Populate arrays with the names of tables and views
	     OPEN DATABASE (thisForm.DBCName)
	     lnTables=ADBOBJECTS(thisform.dbcTables,"TABLE")
	     ThisForm.LstTables.Requery
	     IF lnTables = 0
	        thisform.dbcTables(1,1) = "No Tables found"
	        thisform.LstTables.Enabled = .F.
	     ENDIF
	     lnViews=ADBOBJECTS(thisform.dbcViews,"VIEW")
	     ThisForm.LstViews.Requery
	      IF lnViews = 0
	        thisform.dbcViews(1,1) = "No Views found"
	        thisform.LstViews.Enabled = .F.
	     ENDIF
	
	4. Add two list boxes to the form. Set the following properties for the first
	  list box:
	
	     MultiSelect   = .T.
	     Name          = LstTables
	     RowSourceType = 5 (Array)
	     RowSource     = Thisform.dbcTables
	
	5. Set the following properties for the second list box.
	
	     MultiSelect   = .T.
	     Name          = LstViews
	     RowSourceType = 5 (Array)
	     RowSource     = Thisform.dbcViews
	
	6. Add a command button to the form. Change the caption to Add to DE. Place the
	  following code in its Click event:
	
	     FOR iCnt = 1 TO THISForm.LstTables.ListCount
	     IF ThisForm.LstTables.Selected(iCnt)
	        lcName = PROPER(ThisForm.LstTables.ListItem(iCnt))
	        IF TYPE('ThisForm.aDataEnvironment(1).&lcname') != 'O'
	           ThisForm.gaDataEnvironment(1).AddObject(lcname, "Cursor")
	           WITH ThisForm.gaDataEnvironment(1).&lcname.
	              .Alias = lcname
	              .CursorSource = lcname
	              .Database = ThisForm.dbcName
	           ENDWITH
	        ENDIF
	     ENDIF
	     ENDFOR
	     FOR iCnt = 1 TO THISForm.LstViews.ListCount
	     IF ThisForm.LstViews.Selected(iCnt)
	        lcName = PROPER(ThisForm.LstViews.ListItem(iCnt))
	        IF TYPE('ThisForm.aDataEnvironment(1).&lcname') != 'O'
	           ThisForm.gaDataEnvironment(1).AddObject(lcname, "Cursor")
	           WITH ThisForm.gaDataEnvironment(1).&lcname.
	              .Alias = lcname
	              .CursorSource = lcname
	              .Database = ThisForm.dbcName
	           ENDWITH
	        ENDIF
	     ENDIF
	     ENDFOR
	     ThisForm.Release
	
	7. Add a Cancel command button that contains the following line of code in its
	  Click event:
	
	     ThisForm.Release
	
	8. Save the form as Deblder.
	
	9. Register the builder by using one of the methods described in the Visual
	  FoxPro Help file or by adding a record to the Builder.dbf file.
	
	
	Because the builder is based on a form, it can easily be customized. You may want
	your builder to include several common sets of data.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
