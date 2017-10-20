---
layout: page
title: "Q59969: Mac Hyp: Releasing Memory Used by Message Reference"
permalink: /kb/059/Q59969/
---

## Q59969: Mac Hyp: Releasing Memory Used by Message Reference

{% raw %}

	Article: Q59969
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
	
	When getMessage is called, a block of memory is allocated and the message is
	read from the server. When you have finished reading fields from the message,
	you must call disposeMessage to release this memory. This does NOT delete the
	message from the mail server.
	
	Additionally, when a message is created, memory is allocated for it, and released
	automatically when the message is sent. If the message is not sent, then
	disposeMessage should be called to release that memory.
	
	     msmail (disposeMessage, messageRef)
	
	For related functions, query on the following words:
	
	  " disposeMessageList and disposeHandle " (without the quotation marks)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
