---
layout: page
title: "Q62124: Mac Hyp: Explanation of messageRef (Message Reference)"
permalink: /kb/062/Q62124/
---

## Q62124: Mac Hyp: Explanation of messageRef (Message Reference)

{% raw %}

	Article: Q62124
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
	
	Many of the Microsoft Mail function calls refer to a "message reference." This
	is a number passed back from, for example, the createMessage or readMessage
	command. (The number is actually a Macintosh "handle.") This number must be
	passed to all commands that will manipulate a message to let the commands know
	which message to work on. For example:
	
	     put msmail (createMessage) into myMessage
	     put msmail (addSubject, myMessage, "Test")
	
	Any valid HyperCard variable can be used as a message reference. "messageRef" is
	used in most examples for continuity.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
