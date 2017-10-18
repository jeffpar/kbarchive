---
layout: page
title: "Q125927: MS EXCEL 5 VB APPS SBS WIN Corrections and Comments"
permalink: kb/125/Q125927/
---

## Q125927: MS EXCEL 5 VB APPS SBS WIN Corrections and Comments

	Article: Q125927
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Excel Visual Basic for Applications Step by Step ISBN 1-55615-589-1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information on known errors, corrections, and comments
	relating to the Microsoft Press Book "Microsoft Excel Visual Basic for
	Applications Step by Step."
	
	The following topics are covered:
	
	- Page 290: Syntax for Querying in Lesson 13 Is Outdated
	
	- Pages 314-315: Error Generation Does Not Properly Occur
	
	MORE INFORMATION
	================
	
	In addition to a description of the error or comment, there are sometimes
	additional sections labeled "Correction" and "Comments." Please note that the
	"Correction" section is worded for correcting the book and does not necessarily
	address the problem introduced by the book error. The "Comment" section contains
	specific information for working around problems.
	
	Page 290: Syntax for Querying in Lesson 13 Is Outdated
	------------------------------------------------------
	
	The procedure described on page 290 has several syntax errors. These are due to
	changes made in the Microsoft Excel Visual Basic Applications syntax after the
	first printing of this book.
	
	Correction:
	
	The following table summarizes changes in syntax:
	
	  Old syntax           New syntax
	  ------------------------------------
	  ConnectionString     ConnectionStr
	  Connection           ConnectionNum
	  Query                QueryText
	  Destination          DestinationRef
	  ColumnNames          ColNamesLogical
	
	These changes also affect pages 287, 288, and possibly others. This information
	is corrected in the second printing of this book.
	
	Comments:
	
	The module code on page 290 should read as follows:
	
	  Sub InitializeData()
	     Dim myChannel
	     Dim mySQL
	     InitializeVariables
	     Application.StatusBar = "Retrieving data. Please wait."
	
	     myChannel = SQLOpen(ConnectionStr:="DSN=Miller Textiles")
	     SQLExecQuery _
	        ConnectionNum:=myChannel, _
	        QueryText:="SELECT Max(Date) from Orders"
	     SQLRetrieve _
	        ConnectionNum:=myChannel, _
	        DestinationRef:=myMatchDate
	
	     myExtract.Cells.Clear
	     mySQL = "SELECT Date, State, Category, Channel, Price, Units, Net "
	     mySQL = mySQL & "FROM Orders "
	     mySQL = mySQL & "WHERE Date = '"
	     mySQL = mySQL & Format(myMatchDate, "yyyy-mm-dd")
	     mySQL = mySQL & "'"
	     SQLExecQuery _
	        ConnectionNum:=myChannel, _
	        QueryText:=mySQL
	     SQLRetrieve _
	        ConnectionNum:=myChannel, _
	        DestinationRef:=myExtract.Cells(1), _
	        ColNamesLogical:=True
	     myExtract.Cells(1).CurrentRegion.Name = "Database"
	
	     SQLClose ConnectionNum:=myChannel
	     myPivot.RefreshTable
	     Application.StatusBar = False
	  End Sub
	
	On page 315, the following items need correction:
	
	- Step 2 should read as follows:
	
	  Immediately after the Sub Auto_Open() statement, enter the statements On
	  Error Goto HandleError and Application.EnableCancelKey = xlErrorHandler. The
	  EnableCancelKey property controls what happens when the user presses
	  CTRL+BREAK while the macro is running. Setting EnableCancelKey to
	  xlErrorHandler will cause a run-time error when you press CTRL+BREAK.
	
	- New margin text to left of step 2 should read as follows:
	
	  For more information about controlling the cancel key, search Help for the
	  word EnableCancelKey.
	
	- Added text at end of step 3 should read as follows:
	
	  Simulate an error by pressing CTRL+BREAK while the report runs.
	
	- Step 4 should read as follows:
	
	  Save the workbook, and press CTRL+SHIFT+D to run the application. Click the
	  Options button and change the orientation (Changing the orientation slows the
	  report enough for you to press CTRL+BREAK). Send a report to the printer, and
	  while the Calculating PivotTable message is in the status bar, press
	  CTRL+BREAK. The warning message appears, displaying the message "Sorry, an
	  error has occurred: 18 - User interrupt occurred," and then the application
	  closes.
	
	- Step 5 needs to be removed.
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. Later printings may already contain most or all of the
	above corrections.
	
	Additional query words: mspress ms_press press bookbug sbs
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch
	Version           : :
	
	=============================================================================
	
