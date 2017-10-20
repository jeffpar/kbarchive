---
layout: page
title: "Q146550: XCLN: EFD, Address Book Dialog Displayed in Background"
permalink: /kb/146/Q146550/
---

## Q146550: XCLN: EFD, Address Book Dialog Displayed in Background

{% raw %}

	Article: Q146550
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you call the objSession.AddressBook method in the Microsoft Object Linking
	and Embedding Messaging interface from a Microsoft Visual Basic (VB) 4.0 16 bit
	extended Microsoft Electronic Forms Designer (EFD) 4.0 form, the address dialog
	might appear in the background and not have the focus during runtime.
	
	
	WORKAROUND
	==========
	
	The following code can be used as a workaround:
	
	     Dim frmhwnd As Long
	     frmhwnd = Me.hWnd
	     Dim objrecipcoll As Object
	     Set objrecipcoll=mfobj.Session.AddressBook(Title:="List of Addresses",_
	         forceResolution:=True, recipLists:=1, toLabel:="&Names", _
	         parentwindow:=frmhwnd)
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
