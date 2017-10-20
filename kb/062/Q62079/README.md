---
layout: page
title: "Q62079: Mac Hyp: Initializing a New Message"
permalink: /kb/062/Q62079/
---

## Q62079: Mac Hyp: Initializing a New Message

{% raw %}

	Article: Q62079
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
	
	The command to initialize memory allocation for a new message is as follows:
	
	     msmail(createMessage [, type]) => messageRef
	
	createMessage allocates and initializes a new and empty message. If successful, a
	message reference number is returned. This can be passed to other routines to
	manipulate this particular message.
	
	The default message type is "Mess" or the standard Note form. To create other
	types of messages, put the correct four-character form ID in the type parameter.
	
	MORE INFORMATION
	================
	
	To convert the two-character IDs used by the Microsoft Mail Form Designer to the
	four-character IDs used by createMessage, add the characters "Me" to the
	beginning of the two-character ID. For example, the Phone message form has the
	two-character ID "sp", so to create a Phone message, use the following command:
	
	     put msmail (createMessage, "Mesp") into phoneMessage
	
	"phoneMessage" is any HyperCard container.
	
	For more information on message types, query on "getMessageType" (without the
	quotation marks).
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
