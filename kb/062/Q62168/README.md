---
layout: page
title: "Q62168: Mac Hyp: Replying to a Message"
permalink: /kb/062/Q62168/
---

## Q62168: Mac Hyp: Replying to a Message

	Article: Q62168
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
	
	The following command returns a new message that is a reply to the message in
	"originalMessage":
	
	     msmail(createReply, originalMessage [,replyAll][,copyText])
	     => messageRef
	
	"originalMessage" is a reference to a selected message obtained by making a call
	to the msmail function using a parameter that returns a message reference, such
	as getMessageListField.
	
	The message will be addressed to the sender of the original message (and all the
	original recipients if "replyAll" is true). If "copyText" is true, the original
	message text will be included in the reply. If they are omitted, "replyAll" and
	"copyText" default to the currently logged-on user's preferences.
	
	Note that the following message types cannot be replied to:
	
	- Return receipt (which has the ID "Merr")
	
	- Undeliverable mail message (ID "Mest")
	
	- Gateway status message (ID "Mege")
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
