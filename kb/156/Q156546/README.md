---
layout: page
title: "Q156546: &quot;Cannot Connect to Internet&quot; When Starting Microsoft Exchange"
permalink: /kb/156/Q156546/
---

## Q156546: &quot;Cannot Connect to Internet&quot; When Starting Microsoft Exchange

{% raw %}

	Article: Q156546
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3,2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have the service type for MSN, The Microsoft Network, set to MSN only,
	you may receive the following message when you start Microsoft Exchange:
	
	  Cannot connect to the Internet.
	
	  To get Internet Access with MSN, you need to change your service type
	  to 'Internet and The Microsoft Network' and choose new phone numbers.
	  Would you like to do this now?
	
	CAUSE
	=====
	
	This symptom occurs with some retail versions of Microsoft Exchange when the
	"Connect to the Internet as needed" option is enabled.
	
	
	RESOLUTION
	==========
	
	Click No to acknowledge the message. Microsoft Exchange continues to open. When
	you receive the message a second time, click No again. Note that the second
	message may be hidden behind the Microsoft Exchange window.
	
	To prevent the message from occurring, follow these steps:
	
	1. In Control Panel, double-click Internet.
	
	2. Click the Connection tab.
	
	3. Click the "Connect to the Internet as needed" check box to clear it.
	
	4. Click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3,2.0
	
	=============================================================================
	

{% endraw %}
