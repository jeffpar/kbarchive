---
layout: page
title: "Q117762: PC MAPI: README: Messaging Applications Development Tools Disk"
permalink: /kb/117/Q117762/
---

## Q117762: PC MAPI: README: Messaging Applications Development Tools Disk

	Article: Q117762
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, version 3.0 
	-------------------------------------------------------------------------------
	
	The following is the text of the Readme from the Messaging Application
	Tools Development Disk.
	
	CUSTOM COMMAND AND MESSAGE TYPE INFORMATION
	-------------------------------------------
	
	Saving and Printing Behavior for Custom Message Types:
	
	The description of a custom message type declaration on page 31 of the
	Microsoft Mail Technical Reference manual states that array positions 5 and
	6 in the "operation map" parameter control the 'Print' and 'Save'
	operations, respectively. This feature is not available in this version of
	Microsoft Mail, and the values entered in array positions 5 and 6 are
	ignored. The message is always printed or saved as if it were a standard
	note message.
	
	If you desire this functionality, you can include a button or a menu
	command in your custom message form that allow the user to Print or Save
	the message using code you've written.
	
	Using APPEXEC.DLL:
	
	The APPEXEC.DLL file described in the sections on installing custom
	commands and custom message types expects some additional tokens to be
	supplied in the "command line" parameter of a custom message declaration.
	See the APPEXEC.H file in the MAILEXTS\APPEXEC directory for complete
	information on the APPEXEC tokens.
	
	APPEXEC.DLL also exports some callback functions that must be called by the
	launched executable to implement a custom message type. See the APPEXEC.H
	file in the MAILEXTS\APPEXEC directory for complete information on the
	APPEXEC callback functions. The HELPREQ.C file in the MAILEXTS\HELPREQ
	directory provides a source code example of how the APPEXEC.DLL call back
	functions are used.
	
	MAPI Information
	----------------
	
	Using MAPI in Visual Basic Environments (BMAPI.DLL):
	
	Page 90 of the Technical Reference manual describes BMAPI.DLL as a windows
	DLL necessary for running Visual Basic applications which use Simple MAPI.
	Due to a design change after the Technical Reference manual went to press,
	BMAPI.DLL is no longer required and is not shipped with Microsoft Mail.
	Now, a Visual Basic application needs to use only the declarations in
	MAPI.BAS and the support code in MAPIVB.BAS with Simple MAPI functions. The
	reference to the BMAPI.DLL file should be ignored.
	
	Using MAPISaveMail with Messages in Shared Folders:
	
	Due to a bug in the implementation of Simple MAPI for shared folders, the
	ID of the saved message is invalidated after the call to MAPISaveMail.
	Custom form programmers should make sure that all message processing is
	complete before calling MAPISaveMail.
	
	Using MAPI_BCC with Microsoft Mail:
	
	The Microsoft Mail transport does not support the MAPI_BCC definition. On
	pages 86 and 133, the Technical Reference manual implies that the
	MAPI_E_BAD_RECIPTYPE error is returned when attempting to send a message
	with Microsoft Mail whose recipient type is set to MAPI_BCC. Due to a bug,
	MAPISendMail and MAPIReadMail will not return an error and will not send a
	message whose recipient type is set to MAPI_BCC.
	
	Using MAPIMessage with Large Subject Strings:
	
	Pages 46 and 94 of the Technical Reference manual state that the subject of
	a message is limited to 256 characters or less. While this is true of
	messages sent using MAPISendMail, messages saved with MAPISaveMail are not
	limited to 256 characters.
	
	Using MAPIFindNext with the MAPI_GUARANTEE_FIFO Flag:
	
	Pages 60 and 108 of the Technical Reference manual state that the value of
	MAPI_GUARANTEE_FIFO is 256 (0x200 hex). The correct value is 128 (0x100
	hex). The correct value is used in the MAPI.H file included on the
	Messaging Application Development Tools disk.
	
	Using MAPIReadMail with the MAPI_SUPPRESS_ATTACH flag:
	
	Pages 68 and 115 of the Technical Reference manual state that the value of
	MAPI_SUPPRESS_ATTACH is 128 (0x100 hex). The correct value is 1024 (0x800
	hex). The correct value is used in the MAPI.H file included on the
	Messaging Application Development Tools disk.
	
	The MapiMessage Structure:
	
	Pages 46 of the Technical Reference manual fails to describe the
	lpOriginator field of the MapiMessage structure. The description should be
	as follows:
	
	  A pointer to a MapiRecipDesc structure that describes the originator of the
	  message.
	
	  Similarly, page 94 fails to describe the Originator field of the Visual Basic
	  MapiMessage type. The description should be as follows:
	
	  A MapiRecip type that describes the originator of the message.
	
	The MAPIFreeBuffer Function:
	
	Page 62 of the Technical Reference manual erroneously states the list of
	return values as being the list of return values for the MAPILogoff
	function. The return values listed on page 62 are in fact correct for the
	MAPIFreeBuffer function.
	
	Additional query words: 3.00 README.TXT
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN300
	Version           : :3.0
	
	=============================================================================
	
