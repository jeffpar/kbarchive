---
layout: page
title: "Q71408: Mac Hyp: Setting Automatic Self-Copy on a Message"
permalink: /kb/071/Q71408/
---

## Q71408: Mac Hyp: Setting Automatic Self-Copy on a Message

{% raw %}

	Article: Q71408
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
	following function sets the message's "Retain a copy in the Sent Mail folder"
	flag:
	
	     msmail (setRetainCopy, messageRef [, boolean])
	
	This function simulates the "Retain a copy in the Sent Mail folder" option in the
	Options dialog box of the message's send screen. The default boolean is true.
	
	For example, the following commands will cause a message to be retained in the
	Sent Mail folder:
	
	     put msmail (createMessage) into messageRef
	     get msmail (setRetainCopy, messageRef, true)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard300
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
