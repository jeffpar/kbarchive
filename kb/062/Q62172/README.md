---
layout: page
title: "Q62172: Mac Hyp: Setting the Message Subject"
permalink: kb/062/Q62172/
---

## Q62172: Mac Hyp: Setting the Message Subject

	Article: Q62172
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
	
	The following command sets the message subject:
	
	  msmail(addSubject, messageRef, data)
	
	This text will be displayed in the message's summary line in the Microsoft Mail
	Message Center to allow Mail users to quickly identify messages.
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	"data" is the text string or variable that will become the subject. This is
	limited to 255 characters.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
