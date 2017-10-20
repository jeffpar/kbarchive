---
layout: page
title: "Q62173: Mac Hyp: Tips for Using the msmail() Function"
permalink: /kb/062/Q62173/
---

## Q62173: Mac Hyp: Tips for Using the msmail() Function

{% raw %}

	Article: Q62173
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
	
	Because msmail() is a HyperTalk function, it always returns a value.
	
	This holds true even in cases when the effect of the msmail() function, rather
	than the result it returns, is the purpose of the msmail() call. For instance,
	when using the sendMessage call, the value the msmail() function returns is
	unimportant; what is important is the effect: mail is sent over the network to
	the server.
	
	In cases like these, the result of the msmail() function must be redirected;
	otherwise, HyperCard will put the result into the message box. To keep the
	message box from appearing, use the HyperCard "get" command, which will absorb
	the result of the function by putting it into the HyperCard global "it". For
	example:
	
	  get msmail (sendMessage, myMessage)
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
