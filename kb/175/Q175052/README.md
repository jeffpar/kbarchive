---
layout: page
title: "Q175052: HOWTO: Send a Message in Visual FoxPro Using Active Messaging"
permalink: /kb/175/Q175052/
---

## Q175052: HOWTO: Send a Message in Visual FoxPro Using Active Messaging

	Article: Q175052
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbActMsg kbvfp300 kbvfp500 kbvfp600
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Collaboration Data Objects (CDO), version 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides two small code samples using Active Messaging from Visual
	FoxPro.
	
	It is the intention of the author of this article to make you, the developer,
	aware that you have the option of Active Messaging available to you in order to
	implement messaging functionality in your applications.
	
	While this article is designed as a mere introduction to demonstrate just the
	most basic functionality of the Active Messaging Library, you should be aware
	that the Active Messaging Library is very robust, much more so than the vast
	majority of Messaging Controls.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q171440 Where to Acquire the Collaboration Data Objects Library
	
	
	MORE INFORMATION
	================
	
	This first sample is a minimal scenario providing just enough to construct and
	send a message:
	
	     * AM_BareBones.PRG
	     * ----------------
	     *
	     *Create a MAPI Session object then Logon. The Logon dialog can be
	     *bypassed by providing a valid ProfileName as the first parameter
	     *(as a string) to the Logon Method.
	     objSession = CREATEOBJECT("mapi.session")
	     objSession.Logon
	
	     *Create a new message in the Outbox
	     objMessage = objSession.Outbox.Messages.Add
	
	     *Populate a few basic properties of the message
	     objMessage.Subject = "This is the subject"
	     objMessage.Text = "This is the message text"
	
	     *Add a Recipient to the message we just created and resolve
	     objRecip = objMessage.Recipients.Add
	     *Alias of who you are sending to
	     objRecip.name = "TargetEmailName"
	     objRecip.Resolve
	
	     *Send it
	     objMessage.Send
	
	     *Clean up then bail
	     objSession.Logoff
	     RELEASE objRecip, objMessage, objSession
	     *EOP: AM_BareBones.PRG
	
	The second sample is similar to the first except that it adds an attachment to
	the outgoing message. This sample also demonstrates a few alternate ways that
	the same functionality can be accomplished without using the same code. For
	instance, logging on and passing a ProfileName instead of getting prompted to
	enter one, or the slightly different manner in which the recipient is added.
	
	     * AM_Attachments.PRG
	     * ------------------
	     *
	     *Create a MAPI Session object then Logon. The Logon dialog can be
	     *bypassed by providing a valid ProfileName as the first parameter
	     *(as a string) to the Logon Method as seen below.
	     objSession = CREATEOBJECT("mapi.session")
	     objSession.Logon("YourProfileName")
	
	     *Create a new message in the Outbox and populate a few basic properties
	     objMessage = objSession.Outbox.Messages.Add
	     objMessage.Subject = "Visual Fox Active Messaging Sample - Attachments"
	     objMessage.Text = "This is the message text."
	
	     *Add an attachment (assumes "myfile.doc" exist in c:\)
	     objMessage.Attachments.Add("MyFile.doc", 0, 1, "c:\myfile.doc")
	
	     *Add a Recipient to the message we just created and resolve
	     objRecip = objMessage.Recipients.Add("TargetsEmailName") && who it's to
	     objRecip.Resolve
	
	     *Send it
	     objMessage.Send
	
	     *Clean up then bail
	     objSession.Logoff
	     RELEASE objRecip, objMessage, objSession
	     *EOP: AM_Attatchments.PRG
	
	REFERENCES
	==========
	
	MSDN, and OLEMSG.HLP in Platform SDK
	
	Additional query words: Active Messaging
	
	======================================================================
	Keywords          : kbcode kbActMsg kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbCDOsearch kbExchangeSearch kbCDO110 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
