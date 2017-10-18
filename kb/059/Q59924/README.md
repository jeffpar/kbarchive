---
layout: page
title: "Q59924: Mac Hyp: Displaying Mail's Message Center Window"
permalink: kb/059/Q59924/
---

## Q59924: Mac Hyp: Displaying Mail's Message Center Window

	Article: Q59924
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
	
	To display a Microsoft Mail Message Center similar to the one used in Microsoft
	Word and Microsoft Excel, use the following command with Microsoft Mail version
	2.0:
	
	     msmail (displayMessageCenter [, typeFilter] [, subjectFilter]
	     [, enclosureFilter]) => messageList
	
	With Microsoft Mail version 3.0, the command has an additional parameter:
	
	     msmail(DisplayMessageCenter [, typeFilter][, subjectFilter]
	     [, enclosureFilter][, buttonTitle]
	
	This function allows you interactively browse through and delete messages, and
	select one or several messages. A list of the selected messages is returned in
	"messageList" if you click OK. If you click Cancel, a message list is returned,
	but the messagecount is zero. NOTE: The "Microsoft Mail HyperCard Interface
	Documentation" stack incorrectly states on the card describing the
	DisplayMessageCenter command that "empty" is returned if Cancel is clicked.
	
	"typeFilter" is a single message type to be returned. For example, "Mess" would
	display only Note messages.
	
	"subjectFilter" specifies the exact subject a message must have. An empty string
	"" matches all messages.
	
	"enclosureFilter" specifies the type(s) of enclosure a message must have. For
	example, "TEXTWDBN" would display messages containing text or Microsoft Word
	files.
	
	"buttonTitle" specifies the name of the action button, and it defaults to
	"Open".
	
	For a description of the format of messageList, see getMessageList in the
	documentation. Note that in Mail 3.0 you cannot move messages from one folder to
	another, except when deleting files.
	
	Note: This command in Mail 2.0 is not compatible with HyperCard version 2.0.
	Microsoft has confirmed this to be a problem in Mail 2.0. This problem was
	corrected in Mail 3.0.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	
