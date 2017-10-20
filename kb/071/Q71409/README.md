---
layout: page
title: "Q71409: Mac Hyp: Removing an Enclosure Before Sending a Message"
permalink: /kb/071/Q71409/
---

## Q71409: Mac Hyp: Removing an Enclosure Before Sending a Message

{% raw %}

	Article: Q71409
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Mail Software Development Kit (SDK) for HyperCard, the
	following function removes the enclosure, specified by the value of "index",
	from the message in "messageRef":
	
	     msmail(removeEnclosure, messageRef, index)
	
	If index has a value of negative one (-1), all enclosures are removed.
	
	This call should be used only for messages that have not yet been sent. Removing
	an enclosure from a sent message will not remove the enclosure from the server.
	
	For example, to forward a message, but not the enclosures, use the following
	commands:
	
	     put msmail (getMessage, messageType, messageID) into messageRef
	     put msmail (createForward, messageRef) into forwardMessage
	     get msmail (removeEnclosure, forwardMessage, -1)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
