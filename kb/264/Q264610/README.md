---
layout: page
title: "Q264610: PRB: CDO Text Property Does Not Accept CR or LF"
permalink: /kb/264/Q264610/
---

## Q264610: PRB: CDO Text Property Does Not Accept CR or LF

{% raw %}

	Article: Q264610
	Product(s): Microsoft Exchange
	Version(s): 1.2,1.21,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4,6.0
	Operating System(s): 
	Keyword(s): kbCDO120 kbCDO121 kbMsg kbVBp kbGrpDSMsg kbDSupport
	Last Modified: 18-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	- Collaboration Data Objects (CDO), versions 1.2, 1.21 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you append a new line of text to an item's Text property and use a carriage
	return (CR) and/or line feed (LF) to force them to separate lines, the Text
	property ignores the CR and LF.
	
	CAUSE
	=====
	
	The Exchange store's Rich Text Format (RTF) synchronization routine groups the
	existing and appended text in an attempt to preserve any RTF formatting of the
	existing text. When checking for the existing text, it ignores changes that are
	white space only; for example, additional line wrapping. In this case, the CR/LF
	pair is recognized as a part of the existing text, and only the text that
	follows it is considered to be appended.
	
	RESOLUTION
	==========
	
	The workaround is to remove the item's CdoPR_RTF_COMPRESSED property before
	appending to the Text property, as illustrated by the following Visual Basic
	code:
	
	  With objMyAppt
	     'Delete the PR_RTF_COMPRESSED property so that
	     'RTF synchronization does not take place.
	     .Fields(CdoPR_RTF_COMPRESSED).Delete
	
	     .Text = .Text & vbCrLf & "(Line 2) Drive safely!"
	     .Update
	  End With
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior:
	
	  'NOTE: Assumes your project includes a reference to 
	  '      "Microsoft CDO 1.21 Library".
	
	  Dim objSession As MAPI.Session
	  Dim objCalendar As MAPI.Folder
	  Dim objMyAppt As MAPI.AppointmentItem
	
	  Set objSession = CreateObject("MAPI.Session")
	  objSession.Logon
	
	  Set objCalendar = objSession.GetDefaultFolder(CdoDefaultFolderCalendar)
	  Set objMyAppt = objCalendar.Messages.Add
	
	  With objMyAppt
	     'Add the first line.
	     .Subject = "Test appointment"
	     .Location = "Downtown"
	     .Text = "(Line 1) Go for a drive."
	     .Update
	     MsgBox Prompt:=.Text, Title:="Before updating"
	
	     'Add the second line.
	     .Subject = "Updated test appointment"
	     .Text = .Text & vbCrLf & "(Line 2) Drive safely!"
	     .Update
	     MsgBox Prompt:=.Text, Title:="After updating"
	  End With
	
	  'Log off and clean up.
	  objSession.Logoff
	  Set objMyAppt = Nothing
	  Set objCalendar = Nothing
	  Set objSession = Nothing
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCDO120 kbCDO121 kbMsg kbVBp kbGrpDSMsg kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbCDOsearch kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbVB600Search kbVB600 kbCDO120 kbCDO121 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :1.2,1.21,5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
