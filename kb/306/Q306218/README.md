---
layout: page
title: "Q306218: Err Msg: &quot;Message too large&quot; When Sending Attachments Smaller Th"
permalink: /kb/306/Q306218/
---

## Q306218: Err Msg: &quot;Message too large&quot; When Sending Attachments Smaller Th

{% raw %}

	Article: Q306218
	Product(s): The Microsoft Network
	Version(s): 6.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network version 6.1 
	- The Microsoft Network Version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When sending attachments through e-mail in MSN Explorer, you may get the error
	message "Message too large", even though the size of the attachment is less than
	the 1.5 MB limit. If the total size of the message is greater than 1.5 MB, you
	will not be able to send the message.
	
	CAUSE
	=====
	
	This can be caused by either of two factors:
	
	- The size of the attachment--when added to the size of the body of the message
	  along with any other attachments--is over 1.5 MB. In this case, the error
	  message is appropriate.
	
	- A known issue with the way MSN Explorer encodes e-mail messages can cause
	  this issue. This encoding can result in an increase in the size of the
	  message.
	
	RESOLUTION
	==========
	
	If the total size of the message is less than 1.5 MB, you may be able to send
	the message through the Hotmail Web site. Hotmail encodes the message after
	checking the message size, so you may be able to send messages with Hotmail that
	will not send via MSN Explorer may be permitted.
	
	To send a message from the Hotmail Web site
	
	- Go to http://www.hotmail.com, sign in to your account (remembering to specify
	  msn.com or hotmail.com in the drop-down box provided), and click the Compose
	  tab at the top.
	
	Additional query words: kbimu; MSN Explorer
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN610 kbMSN700
	Version           : :6.1
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
