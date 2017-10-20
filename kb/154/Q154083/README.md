---
layout: page
title: "Q154083: E-mail Sent to Internet Address Arrives Multiple Times"
permalink: /kb/154/Q154083/
---

## Q154083: E-mail Sent to Internet Address Arrives Multiple Times

{% raw %}

	Article: Q154083
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 19-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5, 2.51, 2.52, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message from MSN, The Microsoft Network, to an Internet
	address, the recipient may receive the message multiple times.
	
	CAUSE
	=====
	
	This behavior occurs when the MSN e-mail server does not receive confirmation of
	receipt of the sent message within the allotted time of 90 seconds.
	
	MORE INFORMATION
	================
	
	When sending a message to an Internet address, the SMTP server verifies the
	connection, sends the body of the message, and then waits 90 seconds for
	verification that the message has been received.
	
	Occasionally, the necessary confirmation is not received within 90 seconds due to
	slow processing on the receiving server or unusually noisy telephone line
	conditions. If MSN does not receive the necessary confirmation within 90
	seconds, the message is repeatedly sent until confirmation is received. In these
	cases, the recipient receives the message multiple times.
	
	MSN members may see the same behavior when receiving mail from another domain and
	it is caused by the reverse of the above problem.
	
	Additional query words: 2.00 2.50 2.60
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN252 kbMSN130 kbMSN251 kbMSN260 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5,2.51,2.52,2.6
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
