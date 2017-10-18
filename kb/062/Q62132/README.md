---
layout: page
title: "Q62132: Mac Hyp: Getting the Name of the Message Sender"
permalink: kb/062/Q62132/
---

## Q62132: Mac Hyp: Getting the Name of the Message Sender

	Article: Q62132
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
	
	The following command returns the name of the sender of the message:
	
	     msmail(getSender, messageRef [, extended]) => data
	
	If "extended" is true (the default), the name is returned in the form
	"userName@serverName".
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail() function using a parameter that returns a message reference, such
	as getMessageListField.
	
	If the message was received through a gateway, the "extended" parameter is
	ignored, and only the user name is returned.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
