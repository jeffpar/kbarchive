---
layout: page
title: "Q62053: Mac Hyp: Sending a Message After It Is Created"
permalink: kb/062/Q62053/
---

## Q62053: Mac Hyp: Sending a Message After It Is Created

	Article: Q62053
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
	
	The following syntax sends the message to the Microsoft Mail server:
	
	     msmail(sendMessage, messageRef)
	
	This command also releases the memory used to store the message. It is not
	necessary to call disposeMessage after a sendMessage.
	
	"messageRef" is a reference to a selected message created by making a call to the
	msmail function using a parameter that returns a message reference.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
