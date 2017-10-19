---
layout: page
title: "Q164331: XCLN: How to Add Recipients to an EFD Project"
permalink: /kb/164/Q164331/
---

## Q164331: XCLN: How to Add Recipients to an EFD Project

	Article: Q164331
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,8.0; Win95:4.0,5.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): kbprogramming
	Last Modified: 06-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows you two methods to programmatically add a recipient to a
	Microsoft Electronic Forms Designer Form using Microsoft Visual Basic version
	4.0 for 16 bit applications. One method uses OLE messaging and the other uses
	Msriched.vbx.
	
	MORE INFORMATION
	================
	
	Method 1
	--------
	
	This method uses OLE messaging.
	
	NOTE: For the following code to function properly, at least one recipient must be
	placed on the To line (by using the Form user interface)
	
	     Private Sub Command1_Click()
	     'Call this sub routine from the Window_Store() function.
	     'Towards the end of the function, just above the
	     '"Window_Store = True" line of code
	
	     Dim szRecip As String
	     Dim objOneMsg As Object
	     Dim objOneRecip As Object
	
	     szRecip = "John Doe"
	     Set objOneMsg = mfobj.message
	     Set objOneRecip = objOneMsg.Recipients.Add
	     objOneRecip.Name = szRecip
	     objOneRecip.Type = 1    'MapiTo
	     objOneRecip.Resolve
	
	     objOneMsg.Update
	
	     End Sub
	
	Method 2
	--------
	
	This method uses Msriched.vbx.
	
	     Private Sub Command1_Click()
	     Dim szRecip As String
	
	     szRecip = "John Doe"
	     ctlTo.Text(0) = szRecip
	     ctlTo.TextBlocks = Len(szRecip)
	
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword2 kbZNotKeyword3
	Version           : WINDOWS:4.0,5.0,8.0; Win95:4.0,5.0; :8.0,8.01,8.02,8.03
	Issue type        : kbhowto
	
	=============================================================================
	
