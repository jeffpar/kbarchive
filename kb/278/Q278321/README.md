---
layout: page
title: "Q278321: HOWTO: Force a Particular Internet Encoding by Using MAPI"
permalink: kb/278/Q278321/
---

## Q278321: HOWTO: Force a Particular Internet Encoding by Using MAPI

	Article: Q278321
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Messaging Application Programming Interface (MAPI) property
	PR_INETMAIL_OVERRIDE_FORMAT (0x59020003) to force the Exchange Internet Mail
	Service (IMS) to use a particular encoding scheme for the message body and
	attachments. This per-message property can be set in both Collaboration Data
	Objects (CDO) and Extended MAPI code.
	
	MORE INFORMATION
	================
	
	The possible values of PR_INETMAIL_OVERRIDE_FORMAT, which correspond to the Send
	Options settings in Microsoft Outlook, are as follows:
	
	+---------------------------------------------------------------------------------------------+
	| Value | Outlook Setting | Message Format                  | Attachment Encoding             | 
	+---------------------------------------------------------------------------------------------+
	| 0     | Unknown         | Depends on default IMS settings | Depends on default IMS settings | 
	+---------------------------------------------------------------------------------------------+
	| 1     | MIME            | MIME                            | Base64                          | 
	+---------------------------------------------------------------------------------------------+
	| 2     | UUEncode        | Text                            | UUEncode                        | 
	+---------------------------------------------------------------------------------------------+
	| 3     | BINHEX          | Text                            | BinHex                          | 
	+---------------------------------------------------------------------------------------------+
	
	Sample Code for CDO
	-------------------
	
	The following CDO Microsoft Visual Basic code sends a MIME message with two
	attachments, encoded with Base64:
	
	  ' Reference to Microsoft CDO 1.21 library.
	  Private Sub SendMail_Click()
	      Dim objSession As MAPI.Session
	      Dim objMessage As MAPI.Message
	      Dim objAttachments As MAPI.Attachments
	      Dim objAttachment As MAPI.Attachment
	      Dim objRecipients As MAPI.Recipients
	      Dim objRecipient As MAPI.Recipient
	         
	      Dim Recipient As String
	      Dim MsgSubject As String
	      Dim EncodingFlag As Integer
	      Dim bmpFile As String
	      Dim txtFile As String
	      Dim FileLocation As String
	      
	      'TODO: Modify the following to appropriate values.
	      Recipient = "myaccount@hotmail.com"
	      EncodingFlag = 1 'Use MIME encoding
	      bmpFile = "mybmp.bmp"
	      txtFile = "mytxt.txt"
	      FileLocation = "c:\"
	      
	      MsgSubject = "Test Encoding: " & EncodingFlag
	      
	      On Error GoTo Err
	      
	      Set objSession = CreateObject("MAPI.Session")
	      
	      objSession.Logon showdialog:=True
	      
	      Set objMessage = objSession.Outbox.Messages.Add(MsgSubject, "body")
	          
	      Set objAttachments = objMessage.Attachments
	      objAttachments.Add txtFile, 0, CdoFileData, FileLocation & txtFile
	      objAttachments.Add bmpFile, 0, CdoFileData, FileLocation & bmpFile
	      
	      Set objRecipients = objMessage.Recipients
	      Set objRecipient = objRecipients.Add
	      
	      objRecipient.Name = Recipient
	      objRecipient.Resolve
	          
	      objMessage.Fields.Add &H59020003, EncodingFlag
	      
	      objMessage.Update
	      
	      objMessage.Send True
	      
	  Err:
	      If Err.Number Then
	          Debug.Print Err.Number & ": " & Err.Description & "::" & Err.Source
	          Err.Clear
	      End If
	      
	      If Not objSession Is Nothing Then objSession.Logoff
	
	  End Sub
	
	An issue in the CDO ReadFromFile method can interfere with the encoding process.
	If ReadFromFile is used, CdoPR_ATTACH_LONG_FILENAME needs to be set on the
	attachment. For more information, see the following article in the Microsoft
	Knowledge Base:
	
	  Q278358 PRB: File Attached Via CDO Has Incorrect Filename
	
	Headers for MAPI
	----------------
	
	You can use this property from Extended MAPI code as well; the following #defines
	will help:
	
	  #define PR_INETMAIL_OVERRIDE_FORMAT PROP_TAG(PT_LONG,0x5902)
	
	  #define ENCODEDONTKNOW 0
	  #define ENCODEMIME 1
	  #define ENCODEUUENCODE 2
	  #define ENCODEBINHEX 3
	
	
	Important Notes
	---------------
	
	The encoding specified in PR_INETMAIL_OVERRIDE_FORMAT take effect only if the IMS
	does not encode the message as Rich Text/TNEF. For information on preventing the
	use of transport-neutral encapsulation format (TNEF), see the following
	article:
	
	  Q149203 XFOR: Preventing Winmail.dat From Being Sent Over IMC
	
	The information in this article applies only to mail that is sent through the
	Exchange Internet Mail Connector (IMC). It does not apply to mail that is sent
	through the Outlook Internet Mail Provider.
	
	
	
	REFERENCES
	==========
	
	For more information on Outlook and message encodings, see the following
	article:
	
	  Q268547 OL2000: Information About Outlook and Encoded Messages
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
