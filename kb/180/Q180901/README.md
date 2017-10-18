---
layout: page
title: "Q180901: HOWTO: Create Categorized Table in Word 97 w/ OLE Automation"
permalink: kb/180/Q180901/
---

## Q180901: HOWTO: Create Categorized Table in Word 97 w/ OLE Automation

	Article: Q180901
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,Service Release 1 (SR-1)
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbvfp500 kbvfp600 kbWord
	Last Modified: 18-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Word 97 for Windows, version Service Release 1 (SR-1) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create and format a table in Microsoft Word 97
	from Visual FoxPro for Windows 5.0 and later using OLE automation. The table
	contains a grouping field, for instance, a state, company or customer sales ID.
	This example groups by country or region. The data for the Word document will be
	gathered using an SQL query into a temporary cursor.
	
	MORE INFORMATION
	================
	
	For this code to work correctly, the first field in the query must be the group
	field used in the Word 97 report. For instance, if it is necessary to use all
	fields in a table for the report, but the field that is to be the group field is
	not the first field in the source table, then issue a query similar to this:
	
	  SELECT state,* FROM Customer GROUP BY state, custid INTO CURSOR category
	
	This forces the group field, state in this example, to be the first field in the
	queried result.
	
	NOTE: This code only works with the Service Release-1 for Word 97. Using prior
	versions of Word 97 causes a "Type Mismatch" and other OLE errors.
	
	Create a program and enter the code given below. When the code is executed, the
	user will see two prompts. These prompts ask the user how the Word document
	should be formatted. The first prompt asks whether the user wants to have each
	grouping on its own page or not. The second question asks if the user wants
	underlines between the rows of the table or not. These questions are merely for
	viewing preferences and to show how the programmer may format the table in Word
	with these and other preferences.
	
	Here is the sample code:
	
	      */ Begin program code /*
	         CLEAR
	         SET TALK OFF
	         SET CONSOLE OFF
	         ctempfield = ""               && Variable to hold group category.
	         headings_added = .F.
	         newgrouppage = .F.
	
	     * Make sure the FIRST field in the SELECT is the field the report
	     * is categorized by. The Customer table is located in the
	     * \VFP\Samples\Data folder. In Visual FoxPro 6.0, the Customer table is
	     * in the Microsoft Visual Studio\Common\Samples\Data folder.
	
	     SELECT country, company, contact, title,maxordamt,phone;
	     FROM HOME()+"Samples\Data\testdata!customer" GROUP BY;
	        country,cust_id INTO CURSOR category
	
	     IF _TALLY > 0
	        oWord = CREATEOBJECT("Word.Application")
	        oWord.Documents.Add
	        owRange = oWord.Activedocument.Range(0,0)
	        numcols = FCOUNT()-1   && Get number of fields for detail section
	        oWord.Activedocument.Tables.Add(owRange, 1, numcols)
	
	        * First prompt, separate pages for each group.
	        nanswer = messagebox("Put each group on a new page?",36,;
	           "Sepatate Pages")
	        DO CASE
	           CASE nanswer = 6         && Yes
	              newgrouppage = .T.
	           CASE nanswer = 7         && No
	              headings_added = .F.
	        ENDCASE
	
	        WAIT WINDOW "Please wait while the data is formatted in Word.";
	           + CHR(13)+"This may take several minutes..." NOWAIT
	
	        DO WHILE !EOF()
	           ctempfield = EVAL(FIELD(1)) && Set 1st field in table as category
	           WITH oWord
	              .Selection.Font.Reset
	              .Selection.TypeText(EVAL(FIELD(1)))
	              .Selection.SelectRow
	              .Selection.ParagraphFormat.Alignment = 1
	              .Selection.Font.Name = "Arial"
	              .Selection.Font.Size = 16
	              .Selection.Font.Bold = .T.
	              .Selection.SelectRow
	              .Selection.Cells.Merge
	              .Selection.MoveRight(12)
	              .Selection.Cells.Split(1,numcols)
	
	              IF NOT headings_added && Put at least one heading in document
	                 .Selection.MoveRight(12)
	                 FOR i = 2 TO FCOUNT()
	                    .Selection.Font.Italic = .T.
	                    .Selection.ParagraphFormat.Alignment = 1
	                    .Selection.Font.Name = "Times New Roman"
	                    .Selection.Font.Size = 8
	                    .Selection.TypeText((FIELD(i)))
	                    .Selection.MoveRight(12)
	                    headings_added = .T.
	                 ENDFOR
	              ENDIF
	
	              FOR i = 2 TO FCOUNT()
	                 curfield = EVAL(FIELD(i))
	     * Check data type. Does not check Double, Float, Integer, General, Memo.
	                 IF TYPE((FIELD(i)))<>"C"
	                 DO CASE
	                    CASE TYPE((FIELD(i))) = "D"         && Date field
	                       curfield = DTOC((FIELD(i)))
	                    CASE TYPE((FIELD(i))) = "N"         && Numerical
	                       curfield = STR((FIELD(i)))
	                    CASE TYPE((FIELD(i))) = "Y"         && Currency
	                       curfield = STR(EVAL(FIELD(i)),8,2)
	                    CASE TYPE((FIELD(i))) = "L"         && Logical
	                       IF curfield
	                          curfield = "True"
	                       ELSE
	                          curfield = "False"
	                       ENDIF
	                    CASE TYPE((FIELD(i))) = "T"         && DateTime
	                       curfield = TTOC(EVAL(FIELD(i)))
	                    ENDCASE
	                    .Selection.Font.Reset
	                    .Selection.TypeText(curfield)
	                 ELSE
	                    .Selection.Font.Reset
	                    .Selection.TypeText(curfield)
	                 ENDIF
	                 .Selection.Font.Reset
	                 .Selection.MoveRight(12)
	              ENDFOR
	              SKIP
	           ENDWITH
	
	           DO WHILE ctempfield = EVAL(FIELD(1))   && Get other like records.
	              WITH oWord
	                 FOR i = 2 TO FCOUNT()
	                    curfield = EVAL(FIELD(i))
	                    IF TYPE((FIELD(i)))<>"C"
	                       DO CASE
	                       CASE TYPE((FIELD(i))) = "D"
	                          curfield = DTOC((FIELD(i)))
	                       CASE TYPE((FIELD(i))) = "N"
	                          curfield = STR((FIELD(i)))
	                       CASE TYPE((FIELD(i))) = "Y"
	                          curfield = STR(EVAL(FIELD(i)),8,2)
	                       CASE TYPE((FIELD(i))) = "L"
	                          IF curfield
	                             curfield = "True"
	                          ELSE
	                             curfield = "False"
	                          ENDIF
	                       CASE TYPE((FIELD(i))) = "T"
	                          curfield = TTOC(EVAL(FIELD(i)))
	                       ENDCASE
	                       .Selection.TypeText(curfield)
	                    ELSE
	                       .Selection.TypeText(curfield)
	                    ENDIF
	                       .Selection.MoveRight(12)
	                    ENDFOR
	              ENDWITH
	              SKIP
	           ENDDO
	
	           IF RECNO() > RECCOUNT()   && Prevents an empty table/cells.
	              EXIT
	           ELSE
	              IF newgrouppage
	                 headings_added = .F.    && False: add headings to each page.
	                 oWord.Selection.InsertBreak(2)  && Page break each category.
	              ENDIF
	           ENDIF
	        ENDDO
	
	        oWord.Selection.SelectRow   && Ensures no extra rows in the table.
	        oWord.Selection.Rows.Delete
	
	        * This section underlines or turns off all lines in the table.
	        nanswer = MESSAGEBOX("Turn off underlines Y/N",36,;
	           "No underlines in the table?")
	        DO CASE
	        CASE nanswer = 6       && Yes, turn off all underlines.
	           WAIT WINDOW 'Formating table with no underlines in the table.';
	              NOWAIT
	           WITH oWord
	              For Each aTable In .ActiveDocument.Tables && Format all tables.
	                 aTable.Borders(-1).LineStyle = 0         && Top border.
	                 aTable.Borders(-2).LineStyle = 0         && Left
	                 aTable.Borders(-3).LineStyle = 0         && Bottom
	                 aTable.Borders(-4).LineStyle = 0         && Right
	                 aTable.Borders(-5).LineStyle = 0         && Horizontal
	                 aTable.Borders(-6).LineStyle = 0         && Vertical
	                 aTable.Borders.Shadow = 0
	              ENDFOR
	           ENDWITH
	        CASE nanswer = 7         && Number just underlines.
	           WITH oWord
	              WAIT WINDOW 'Formating table with underlines between records.';
	                 NOWAIT
	              For Each aTable In .ActiveDocument.Tables && Format each table.
	                 aTable.Borders(-1).LineStyle = 0         && Top border
	                 aTable.Borders(-2).LineStyle = 0         && Left
	                 aTable.Borders(-3).LineStyle = 1         && Bottom
	                 aTable.Borders(-4).LineStyle = 0         && Right
	                 aTable.Borders(-5).LineStyle = 1         && Horizontal
	                 aTable.Borders(-6).LineStyle = 0         && Vertical
	                 aTable.Borders.Shadow = 0
	              ENDFOR
	           ENDWITH
	           oWord.ActiveWindow.View.TableGridlines = .F. && No table gridlines
	        ENDCASE
	
	     * Get the number of pages in the Word report. The code adds the report
	     * headings to the document header when the user chooses not to have the
	     * report categories print on separate pages. Makes viewing groups
	     * headings easier on other pages.
	        numpages = oWord.ActiveDocument.ComputeStatistics(2)
	        IF numpages > 1 AND NOT newgrouppage
	           WITH oWord
	              .Selection.MoveDown
	              .ActiveWindow.ActivePane.View.Type = 3 && Put Word in Page view
	              .ActiveWindow.ActivePane.View.SeekView = 9      && Open header.
	              .Selection.ParagraphFormat.TabStops.ClearAll   && Clear tabs.
	
	              * Printed header width is computed by subtracting margins
	              * from page width. The margins are divided by 72. Word stores
	              * these values as points; i.e. 72points/inch.
	              pagewidth = 8.5-(.ActiveDocument.PageSetup.RightMargin+;
	              .ActiveDocument.PageSetup.LeftMargin)/72
	              tabspace = (pagewidth/(numcols))*72 && Convert inches to points
	              tabstops = tabspace
	              FOR i = 2 TO FCOUNT()
	                 .Selection.Font.Italic = .T.   && Format heading captions.
	                 .Selection.ParagraphFormat.Alignment = 1
	                 .Selection.Font.Name = "Times New Roman"
	                 .Selection.Font.Size = 8
	                 .Selection.TypeText((FIELD(i)))
	                 .Selection.TypeText(chr(9)) && Tab to set the next heading.
	                 .Selection.ParagraphFormat.TabStops.Add(tabstops) && Tab
	                 tabstops = tabstops+tabspace
	              ENDFOR
	           ENDWITH
	        ENDIF
	        WITH oWord
	           .ActiveWindow.View.Type = 3 && Switch to page view. Normal view=1
	           .ActiveWindow.ActivePane.View.SeekView = 0 && Open main document.
	           .Selection.Homekey(6)               && Go to top of document.
	           .Visible = .T.                     && Make Word visible.
	           .Application.Activate               && Bring Word forward.
	           .WindowState = 0    && Show Word in normal state. Maximized=1
	           .ActiveWindow.ActivePane.View.ShowAll = 0 && No nonprinting items.
	        ENDWITH
	     ELSE
	        =MESSAGEBOX("There were no records in the query.",16,;
	           "Empty Query")
	     ENDIF
	     */ End program code /*
	
	REFERENCES
	==========
	
	For more information about obtaining Word for Windows 97 Service Release - 1,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q172475 HOWTO: Obtain and Install MS Office 97 SR-1
	
	
	Microsoft Word Visual Basic Help
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbinterop kbvfp500 kbvfp600 kbWord 
	Technology        : kbWordSearch kbVFPsearch kbAudDeveloper kbWord97 kbWord97Search kbZNotKeyword2 kbWord97SR1 kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0,Service Release 1 (SR-1)
	Issue type        : kbhowto
	
	=============================================================================
	
