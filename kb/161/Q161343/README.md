---
layout: page
title: "Q161343: HOWTO: Create a New Contact in Schedule Plus from Visual Basic"
permalink: kb/161/Q161343/
---

## Q161343: HOWTO: Create a New Contact in Schedule Plus from Visual Basic

	Article: Q161343
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbprogramming kbVBp500 kbhowto
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to use Visual Basic to add a contact to Schedule
	Plus.
	
	MORE INFORMATION
	================
	
	1. Start a new Standard EXE project. Form1 is added by default.
	
	2. Add the following code to Form1's Click event procedure:
	
	        Private Sub Form1_Click()
	           Dim objSchdPlus As Object
	           Dim objContact As Object
	
	           Set objSchdPlus = CreateObject("SchedulePlus.Application")
	           objSchdPlus.Logon
	           Set objContact = objSchdPlus.ScheduleSelected.Contacts.New
	           objContact.SetProperties FirstName:="Santa", _
	              LastName:="Claus", PhoneBusiness:="(206)555-4321", _
	              PhoneHome:="(206)555-6789"
	           objSchdPlus.Logoff
	           Set objContact = Nothing
	           Set objSchdPlus = Nothing
	         End Sub
	
	3. Start Microsoft Schedule Plus.
	
	4. Press the F5 key to run the program. Click the form, and then view your list
	  of contacts in Schedule Plus to see the new entry.
	
	NOTE: If Schedule Plus is not running, the above code will result in run- time
	error 450: Wrong number of arguments or invalid property assignment.
	
	
	Additional query words: OLE
	
	======================================================================
	Keywords          : kbprogramming kbVBp500 kbhowto 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Version           : WINDOWS:5.0
	Issue type        : kbhowto
	
	=============================================================================
	
