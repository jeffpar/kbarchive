---
layout: page
title: "Q134290: Cannot Forward Attachment from BBS by E-Mail"
permalink: /kb/134/Q134290/
---

## Q134290: Cannot Forward Attachment from BBS by E-Mail

{% raw %}

	Article: Q134290
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.0,1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.0, 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you forward a bulletin board (BBS) message by e-mail, attached files are
	not forwarded.
	
	CAUSE
	=====
	
	Files attached to BBS messages are stored in rich text format (RTF). When you
	forward or reply to a message by e-mail, the BBS uses Simple MAPI. Simple MAPI
	does not support RTF. For this reason, attached files are not forwarded.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	Additional query words: 1.2 msn email
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.0,1.05,1.2,1.3
	
	=============================================================================
	

{% endraw %}
