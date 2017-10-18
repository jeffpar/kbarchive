---
layout: page
title: "Q155378: XCLN: Message Field Elements not Propagated to EFD Form"
permalink: kb/155/Q155378/
---

## Q155378: XCLN: Message Field Elements not Propagated to EFD Form

	Article: Q155378
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 05-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you open a message that has been created to emulate a Microsoft Electronic
	Forms Designer (EFD) message using either Microsoft OLE Messaging or MAPI 1.0,
	the form displayed when opening the submitted message may not propagate the
	fields collection data in the form. Therefore, the form controls appear blank.
	
	MORE INFORMATION
	================
	
	The forms designer requires that the MS_EXCHANGE_01 property be set to True.
	This property determines whether the initial values have been passed in. If this
	value is set to False (the default), EFD will display the initial values for the
	form (most of which are blank). These initial values are actually overwriting
	the values stored in the message object.
	
	The MS_EXCHANGE_01 property needs to be defined as true in the code for each
	message that is created.
	
	Example:
	
	     Private Sub Command2_Click()
	     Dim objSession As Object
	     Dim objMessage As Object
	     Dim objField As Object
	     'Dim objOneMsg As Object
	     Dim objOneRecip As Object
	     Const kCreatedProp = "MS_EXCHANGE_01"
	
	     Set objSession = CreateObject("MAPI.Session")
	     'Logon
	     objSession.Logon
	
	     Set objMessage = objSession.Inbox.Messages.Add
	     'Create the message properties
	     objMessage.Subject = "EFD message"
	     objMessage.Type = "IPM.MyForm.Cool"   'Installed EFD type
	     'Set the message fields
	     Set objField = objMessage.Fields.Add("Entry1", vbString)
	     objField.Value = "The latest Stuff"
	     Set objField = Nothing
	     Set objField = objMessage.Fields.Add("Entry2", vbString)
	     objField.Value = "Additional NewStuff"
	     Set objField = Nothing
	     Set objField = objMessage.Fields.Add(kCreatedProp, vbBoolean, True)
	     Set objField = Nothing
	     'Set the message recip
	     Set objOneRecip = objMessage.Recipients.Add
	     objOneRecip.Name = "John Doe"
	     objOneRecip.Type = 1
	     objOneRecip.Resolve
	
	     objMessage.Update
	
	     objSession.Logoff
	     End Sub
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	
