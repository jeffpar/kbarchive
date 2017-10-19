---
layout: page
title: "Q156294: XCLN: Obtaining the Current User from an EFD Form"
permalink: /kb/156/Q156294/
---

## Q156294: XCLN: Obtaining the Current User from an EFD Form

	Article: Q156294
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 12-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following Microsoft Visual Basic version 4.0 16-bit code fragment
	illustrates how to obtain the current user running an Electronic Forms Designer
	for Microsoft Exchange Server 4.0 application. This code fragment uses the
	current session object already established by the Electronic Forms Designer
	application. The message box arguments are merely for clarity.
	
	     Private Sub Command1_Click()
	     Dim objAddrEntry As Object
	
	     Set objAddrEntry = mfobj.session.currentuser
	
	     MsgBox " Name: " & objAddrEntry.Name
	     MsgBox "Address: " & objAddrEntry.address
	     MsgBox "Address Type: " & objAddrEntry.Type
	
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
