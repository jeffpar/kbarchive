---
layout: page
title: "Q189599: HOWTO: Make Outlook Empty Mail from the Outbox w/OLE Automation"
permalink: kb/189/Q189599/
---

## Q189599: HOWTO: Make Outlook Empty Mail from the Outbox w/OLE Automation

	Article: Q189599
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you send an e-mail message to Outlook 97 or 98 using the MAPI OLE container
	controls in Visual FoxPro for Windows, your e-mail messages might not leave the
	Outbox.
	
	MORE INFORMATION
	================
	
	One possible cause of this problem is that Outlook has the Internet Mail Only
	(IMO) option installed, you are working offline, and you have not made a remote
	connection.
	
	If the e-mail message you sent is stuck in the Outbox, use the following code to
	force Outlook to send the message:
	
	     oOutlook = GETOBJECT(,"Outlook.Application")
	     oNameSpace= oOutlook.GetNamespace("MAPI")
	     oFolder = oNameSpace.GetDefaultfolder(4)     && Go to Outbox, folder 4
	     oSend = oFolder.Items(1).Send                && Send waiting items
	
	To test this code, create a new e-mail message addressed to yourself. Save and
	close the message without sending it. Move this message to the Outbox and run
	the preceding code. This should make Outlook send the message.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q185314 OL97: E-mail Does Not Leave the Outbox
	
	  Q162343 OL97: How to Troubleshoot Mail Stuck in the Outbox
	
	  Q185313 OL98: (IMO) E-mail Does Not Leave the Outbox
	
	  Q182572 OL98: How to Troubleshoot Mail Stuck in the Outbox
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words: kbAutomation kbVFp300b kbVFp300 kbVFp500 kbVFp500a kbMAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbhowto
	
	=============================================================================
	
