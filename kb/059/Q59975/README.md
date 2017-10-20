---
layout: page
title: "Q59975: Mac Hyp: Getting the Status of the Return Receipt Flag"
permalink: /kb/059/Q59975/
---

## Q59975: Mac Hyp: Getting the Status of the Return Receipt Flag

{% raw %}

	Article: Q59975
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
	
	To evaluate whether the sender of a Microsoft Mail message message requested a
	return receipt, use the following command:
	
	     msmail (getReturnReceipt, messageRef) => boolean
	
	"messageRef" is a reference to a selected message obtained by making a call to
	the msmail function using a parameter that returns a message reference.
	
	The function returns "true" if the sender of the message requested a return
	receipt. The function returns "false" if a return receipt was not requested.
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
