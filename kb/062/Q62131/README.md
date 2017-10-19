---
layout: page
title: "Q62131: Mac Hyp: Forwarding a Message and Its Enclosures"
permalink: /kb/062/Q62131/
---

## Q62131: Mac Hyp: Forwarding a Message and Its Enclosures

	Article: Q62131
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following command returns a reference number to a new message that is a copy
	of the message in "originalMessage":
	
	     msmail(createForward, originalMessage) => messageRef
	
	"originalMessage" is a reference to a selected message obtained by making a call
	to the msmail function using a parameter that returns a message reference, such
	as getMessageListField.
	
	Before sending the copy of the message, the message must be addressed with the
	addRecipients call. Any enclosure or enclosures of the original message will be
	included with the new message. They can be removed in Mail version 3.00 only
	with removeEnclosure.
	
	To pre-pend text, retrieve the current body with getBody, and replace it with
	addBody:
	
	  put msmail(getmessage, messageType, messageID) in messageRef
	  put msmail(getBody, messageRef) into oldBody
	  put "This forwarded message matches your interests" into newBod
	  put msmail(createForward, messageRef) into newMessRef
	  put msmail(disposeMessage, messageRef)
	  put msmail(addBody, newMessRef, newBod& return &oldBody)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
