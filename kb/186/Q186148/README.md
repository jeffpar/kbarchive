---
layout: page
title: "Q186148: PRB: Error 32002 Working with Attachments in MAPI Controls"
permalink: /kb/186/Q186148/
---

## Q186148: PRB: Error 32002 Working with Attachments in MAPI Controls

	Article: Q186148
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when trying to send a message with multiple
	attachments:
	
	  Error 32002: Unspecified Failure
	
	However, the message sends successfully if there is only one attachment.
	
	CAUSE
	=====
	
	If the AttachmentPosition property is not set for each attachment, it will
	default to 0. Therefore, any attachments beyond the first are overwriting the
	Position data for the prior attachment and thereby invalidating all but the last
	attachment added.
	
	RESOLUTION
	==========
	
	Designate a unique AttachmentPosition for each attachment in the message as
	demonstrated in this Visual Basic code sample:
	
	      Sub Main()
	         'Logon & Sync
	         MAPISession1.SignOn
	
	         'Create Message w/Attachments then Send
	         With MAPIMessages1
	             .SessionID = MAPISession1.SessionID
	             .Compose
	             .MsgSubject = "OCX - Test Message"
	
	             .RecipDisplayName = "YourRecipientNameHere"
	             .ResolveName
	
	             'The value 2 is passed to the Space() function in the
	             'next line because there are two attachments to add.
	             'These spaces act as placeholders for the attachments.
	             .MsgNoteText = _
	                 Space(2) & vbCrLf & _
	                 "This message was sent from the MSMAPI32.OCX." & vbCrLf & _
	                 "This message contains 2 attachments."
	
	             'Replace the AttachmentPathName values below as applicable...
	             .AttachmentIndex = 0
	             .AttachmentPosition = 0
	             .AttachmentPathName = ("c:\test1.txt")
	             .AttachmentIndex = 1
	             .AttachmentPosition = 1
	             .AttachmentPathName = ("c:\test2.txt")
	             .Send
	         End With
	
	         MAPISession1.SignOff
	
	      End Sub
	
	MORE INFORMATION
	================
	
	To reproduce this issue, comment the two lines in the code sample above that set
	the AttachmentPosition value for each attachment.
	
	Additional query words: kbDSupport kbMsg kbCtrl kbMAPI kbvbp400 kbvbp500
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
