---
layout: page
title: "Q242961: Exchange Server DNS Error Messages When Using Dial-Up Networking"
permalink: /kb/242/Q242961/
---

## Q242961: Exchange Server DNS Error Messages When Using Dial-Up Networking

{% raw %}

	Article: Q242961
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a Dial-Up Networking connection to connect to a computer running
	Exchange Server with DNS enabled, you may receive time-out error messages or a
	Non-Delivery Report (NDR).
	
	CAUSE
	=====
	
	This issue can occur because the "use DNS" feature located on the Connections
	tab of the Exchange Administrator Internet Mail Service properties is designed
	to work with full-time Internet connections.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the "Forward all messages to host" feature and
	specify an ISP relay server.
	
	This allows faster connections since e-mail is forwarded to a closer server and
	the Internet service provider (ISP) e-mail server is able to handle DNS queries
	that the Exchange server needs.
	
	MORE INFORMATION
	================
	
	The Small Business Server Internet Connection Wizard does not allow this
	configuration. You can change the "use DNS" feature after you complete the
	Internet Connection Wizard.
	
	An example of a Non-Delivery Report:
	
	Your message did not reach some or all of the intended recipients.
	
	     Subject:	test
	     Sent:	10/7/99 2:42 PM
	
	The following recipient(s) could not be reached:
	
	     'user@unknown.com' on 10/7/99 2:42 PM
	           Unable to deliver the message due to a communications failure
		The MTS-ID of the original message is: c=US;a= ;p=Marvin;l=MARVIN01-991003384222Z-1
	           MSEXCH:IMS:Organization:Site:MARVIN01 3902 (000B099C) Host Unknown
	
	Additional query words: smallbiz
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
