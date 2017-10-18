---
layout: page
title: "Q180631: WD97: Example Macro to Send E-mail Using MAPI Commands"
permalink: kb/180/Q180631/
---

## Q180631: WD97: Example Macro to Send E-mail Using MAPI Commands

	Article: Q180631
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbinterop kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article includes a sample Visual Basic for Applications macro that uses
	MAPI commands to send an e-mail message.
	
	MORE INFORMATION
	================
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The following sample Visual Basic for Applications macro uses MAPI commands to
	send an e-mail message. The macro uses the InputBox function to gather
	information for Recipient, Subject, and E-mail message text. These functions can
	be replaced with valid text strings to avoid prompting the user for the
	information.
	
	  Sub MapiSendMail()
	     Dim objSession As Object
	     Dim objMessage As Object
	     Dim objRecipient As Object
	     Dim sProfile As String
	     Dim sSubjPrmpt As String
	     Dim sTextPrmpt As String
	     Dim sEmailPrmpt As String
	     Dim sMsgTitle As String
	     ' Leaving sProfile equal to Null will
	     ' force the user to select which Mapi
	     ' profile to use. To keep from being
	     ' prompted, you must supply a valid
	     ' user profile.
	     sProfile = ""
	     sEmailPrmpt = "Enter valid Email Name of message recipient:"
	     sSubjPrmpt = "Enter the subject line for this message:"
	     sTextPrmpt = "Enter the text for this message:"
	     sMsgTitle = "Mapi Macro Example"
	     ' Create the Session Object.
	     Set objSession = CreateObject("mapi.session")
	     ' Log on using the session object.
	     ' Specify a valid profile name if you want to
	     ' avoid the logon dialog box.
	     objSession.Logon profileName:=sProfile
	     ' Add a new message object to the OutBox.
	     Set objMessage = objSession.Outbox.Messages.Add
	     ' Set the properties of the message object.
	     objMessage.Subject = InputBox(sSubjPrmpt, sMsgTitle)
	     objMessage.Text = InputBox(sTextPrmpt, sMsgTitle)
	     ' Add a recipient object to the objMessage.Recipients collection.
	     Set objRecipient = objMessage.Recipients.Add
	     ' Set the properties of the recipient object.
	     objRecipient.Name = InputBox(sEmailPrmpt, sMsgTitle)
	     objRecipient.Resolve
	     ' Send the message. Setting showDialog to False
	     ' sends the message without displaying the message
	     ' or requiring user intervention. A setting of True
	     ' displays the message and the user must choose
	     ' to Send from within the message dialog.
	     objMessage.Send showDialog:=False
	     MsgBox "Message sent successfully!"
	     ' Log off using the session object.
	     objSession.Logoff
	  End Sub
	
	For more information about getting help with Visual Basic for Applications,
	please see the following article in the Microsoft Knowledge Base:
	
	  
	
	  Q163435 VBA: Programming Resources for Visual Basic for Applications
	
	Additional query words: wordcon kbmacro vba
	
	======================================================================
	Keywords          : kbinterop kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
