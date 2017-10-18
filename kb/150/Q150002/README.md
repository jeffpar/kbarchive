---
layout: page
title: "Q150002: How to Sort Schedule+ 7.0 Contacts List Using VB for Apps"
permalink: kb/150/Q150002/
---

## Q150002: How to Sort Schedule+ 7.0 Contacts List Using VB for Apps

	Article: Q150002
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows 95, version 7.0 
	- Microsoft Excel for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Schedule+ stores records in the Contacts list in the order in which you enter
	them. When you sort your contacts in Schedule+, if you have a large number of
	contacts, Schedule+ can be slow to load because it loads your schedule and then
	must perform a sort of the contact list. This article contains a Visual Basic
	for Applications macro you can use to sort the Schedule+ contact list.
	
	MORE INFORMATION
	================
	
	Microsoft provides examples of Visual Basic for Applications procedures for
	illustration only, without warranty either expressed or implied, including, but
	not limited to the implied warranties of merchantability and/or fitness for a
	particular purpose. The Visual Basic procedures in this article are provided 'as
	is' and Microsoft does not guarantee that they can be used in all situations.
	While Microsoft Support professionals can help explain the functionality of a
	particular macro, they will not modify these examples to provide added
	functionality, nor will they help you construct macros to meet your specific
	needs. If you have limited programming experience, you may want to consult one
	of the Microsoft Solution Providers. Solution Providers offer a wide range of
	fee-based services, including creating custom macros. For more information about
	Microsoft Solution Providers, call Microsoft Customer Information Service at
	(800) 426-9400.
	
	The following Visual Basic for Applications macro connects to Schedule+ (which
	must be running before you start the macro), and then copies the Contacts list
	to a Microsoft Excel worksheet. The Contacts list is sorted on the worksheet
	using built-in sort routines. In the below sample, the sort only occurs on the
	first column. The macro deletes the original Contacts list in Schedule+, and
	then writes the data back from the worksheet into the Contacts list.
	
	To enter the macro code, do the following:
	
	1. Start Microsoft Excel.
	
	2. On the Insert menu, point to Macro, and then click Module.
	
	3. Enter the macro code on the module sheet.
	
	In this example, the macro sorts the firstname, surname, and home phone number.
	The macro assumes a contact list similar to the following:
	
	Firstname     Surname     Homephone
	---------     -------     ---------
	   D             D            4
	   B             B            2
	   A             A            1
	   C             C            3
	
	  '====================================================================
	  'Macro SortScheduleContacts
	  'This macro only sorts the firstname, surname, and homephone fields
	  'and will need to be expanded to cover all additional contact fields
	  '====================================================================
	
	     Sub SortScheduleContacts()
	        Dim objSched, objTable, objItem As Object
	        Dim i, j As Integer
	
	        'Create the Schedule+ object
	        Set objSched = CreateObject("scheduleplus.application.7")
	
	        'Creates the contacts database object
	        Set objTable = objSched.ScheduleSelected.Contacts
	
	        'Moves to first row of contact list
	        objTable.Reset
	        For i = 1 To objTable.Rows
	           'Get item in contacts database
	           Set objItem = objTable.Item
	           'Copy contact details to worksheet
	           Cells(i, 1).Value = Format(objItem.FirstName)
	           Cells(i, 2).Value = Format(objItem.lastname)
	           Cells(i, 3).Value = Format(objItem.phonehome)
	           'Go to Next item
	           objTable.skip
	        Next
	
	        'Sorts the contact list on worksheet (sorts on column A)
	        Range("a1").CurrentRegion.Select
	        Selection.Sort Key1:=Range("A1"), Order1:=xlAscending, Header:= _
	        xlGuess, OrderCustom:=1, MatchCase:=False, Orientation:= _
	        xlTopToBottom
	
	        'Deletes all items on schedule contact list
	        objTable.Reset
	        For i = 1 To objTable.Rows
	        Set objItem = objTable.Item
	           objTable.deleteitem (objItem.itemid)
	           objTable.skip
	        Next
	
	        'Copies sorted contact list from worksheet to Schedule+ 95
	        Range("a1").CurrentRegion.Select
	        j = Selection.Rows.Count
	        For i = j To 1 Step -1
	           'Creates a blank new entry in the table
	           Set objItem = objTable.New
	           'Creates new entries in the contacts database
	           objItem.SetProperties FirstName:=Cells(i, 1)
	           objItem.SetProperties lastname:=Cells(i, 2)
	           objItem.SetProperties phonehome:=Cells(i, 3)
	        Next
	
	        'Delete objects
	        Set objItem = Nothing
	        Set objTable = Nothing
	        Set objSched = Nothing
	     End Sub
	
	For more information about programming Schedule+, see the Microsoft Developer
	Network compact disc.
	
	Additional query words: XL7 Contact Sort Schedule MSDN CD-ROM
	
	======================================================================
	Keywords          :  
	Technology        : kbExcelSearch kbExcel95 kbScheduleSearch kbExcel95Search kbZNotKeyword3 kbSchedule700Win95
	Version           : WINDOWS:7.0
	
	=============================================================================
	
