---
layout: page
title: "Q59978: Mac Hyp: Setting the Return Receipt Flag for a Message"
permalink: /kb/059/Q59978/
---

## Q59978: Mac Hyp: Setting the Return Receipt Flag for a Message

{% raw %}

	Article: Q59978
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
	
	To set a Microsoft Mail message's Return Receipt flag, use the following
	command:
	
	     msmail (setReturnReceipt, messageRef [, boolean])
	
	If this command is not used, the Return Receipt flag is set to the user's default
	preference. This command overrides that setting for this one message. After the
	Return Receipt flag has been set, a confirmation message will be sent back to
	the user when a recipient first reads the mail. If the boolean variable is left
	off, the boolean variable is assumed to be "true."
	
	This information is taken from the "Microsoft Mail HyperCard Interface
	Documentation."
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbMailSearch kbSDKSearch kbSDKMailHypercard200 kbSDKMailHypercard300
	Version           : :2.0,3.0
	
	=============================================================================
	

{% endraw %}
