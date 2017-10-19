---
layout: page
title: "Q181899: PRB: Multiple E-mail Attachments Cause Error with MSMAPI OCX"
permalink: /kb/181/Q181899/
---

## Q181899: PRB: Multiple E-mail Attachments Cause Error with MSMAPI OCX

	Article: Q181899
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attaching multiple file attachments using the MSMAPI32 OCX, calling the
	Send method causes the following error to occur:
	
	  OLE IDispatch exception code 0 from MAPIMessages: Unspecified Failure has
	  occurred.
	
	CAUSE
	=====
	
	The AttachmentPosition property of the MAPIMessage control is not being
	incremented with each attachment. The AttachmentPosition property indicates the
	position of the attachment within the message. If two attachments occupy the
	same position, an error occurs when the MAPIMessage's Send method is called.
	
	RESOLUTION
	==========
	
	Change the AttachmentPosition for each attachment. In the code sample below,
	change the following section:
	
	     *-- Attach the files.
	     FOR lnCount = 1 TO ALEN(lcAttachment)
	        oMessage.AttachmentIndex = lnCount - 1
	        oMessage.AttachmentPathName = lcAttachment(lnCount)
	     ENDFOR
	
	The changes for the code are give below:
	
	     *-- Attach the files.
	     FOR lnCount = 1 TO ALEN(lcAttachment)
	        oMessage.AttachmentIndex = lnCount - 1
	        oMessage.AttachmentPathName = lcAttachment(lnCount)
	
	        *-- We have to increment the AttachmentPosition because two
	        *-- attachments cannot occupy the same space.
	        *-- The AttachmentPosition dictates the character position of the
	        *-- attachment, so stick them in after the message.
	        oMessage.AttachmentPosition = lnCount - 1
	     ENDFOR
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	NOTE: This code works with version 6.00.8023 of the Msmapi32.ocx control. If an
	earlier version of this control is installed, an error occurs when setting the
	LogonUI property. The Msmapi.ocx version 1.0.2815 ships with Visual FoxPro
	version 5.0. This code runs under Visual FoxPro 5.0; however, the later version
	of the MSMAPI32 control must be installed and registered.
	
	The AttachmentPosition property determines the character position of an
	attachment within a message. This value can be programmatically set to any
	position within the message body. However, since the number of attachments may
	be unknown, it would be easiest to increment the AttachmentPosition property one
	character for each attachment.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program file and run the program:
	
	  
	
	        oSession = CREATEOBJECT("MSMapi.MapiSession")
	        oMessage = CREATEOBJECT("MSMapi.MapiMessages")
	
	        oSession.LogonUI = .t.
	        oSession.SignOn
	
	        *-- The message control needs to reference the session control's ID.
	        oMessage.SessionID = oSession.SessionID
	        oMessage.MsgIndex = -1
	
	        *-- Set up our message and send it.
	        oMessage.Compose
	        oMessage.msgsubject = "Attachments sent using FoxPro and MAPI"
	        oMessage.msgnotetext = "   Attached are some test files."
	
	        *-- Create an array holding the attachment file names.
	        DIMENSION lcAttachment(2)
	        lcAttachment(1) = home()+ "samples\data\customer.dbf"
	        lcAttachment(2) = home()+ "samples\data\customer.cdx"
	
	        *-- Attach the files.
	        FOR lnCount = 1 TO ALEN(lcAttachment)
	           oMessage.AttachmentIndex = lnCount - 1
	           oMessage.AttachmentPathName = lcAttachment(lnCount)
	        ENDFOR
	
	        *-- Send the message on its way.
	        oMessage.send(1)
	
	2. A dialog box displays the following message:
	
	  OLE Idispatch exception code 0 from MAPIMessages: Unspecified Failure has
	  occurred.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q136638 How To Send Email Programmatically by Using MSMAPI OLE Control
	
	COMCTL1.HLP Help; Topic: "AttachmentPosition Property"
	
	Additional query words: MSMAPI MAPI OCX
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
