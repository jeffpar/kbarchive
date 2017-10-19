---
layout: page
title: "Q59973: Mac Hyp: Getting a List of Messages"
permalink: /kb/059/Q59973/
---

## Q59973: Mac Hyp: Getting a List of Messages

	Article: Q59973
	Product(s): Microsoft Mail For Appletalk Networks
	Version(s): 2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Software Development Kit (SDK) for HyperCard, versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To return a list of the messages in a user's mailbox, use the following
	command:
	
	  msmail (getMessageList[, typeFilter][, subjectFilter][, enclosureFilter])
	  =>
	  messageList
	
	The fields in messageList can be accessed with getMessageListField. If no filters
	are specified, then all messages are returned. Otherwise, only the messages that
	satisfy the filter requirements are returned.
	
	"typeFilter" is a single message type to be returned (for example, "Mess" would
	display only Note messages).
	
	"subjectFilter" specifies the exact subject that a message must have (an empty
	string matches all messages).
	
	"enclosureFilter" specifies the type(s) of enclosure a message must have (for
	example, "TEXTWDBN" would display messages containing text or Microsoft Word
	files).
	
	When finished with messageList, dispose of it by calling disposeMessageList to
	free up the memory allocated by calling this function.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
