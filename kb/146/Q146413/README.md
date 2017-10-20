---
layout: page
title: "Q146413: Japanese Characters Not Displayed Correctly in BBS Author List"
permalink: /kb/146/Q146413/
---

## Q146413: Japanese Characters Not Displayed Correctly in BBS Author List

{% raw %}

	Article: Q146413
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.2,1.3
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Japanese version of MSN, The Microsoft Network, and you post a
	bulletin board (BBS) message, the Japanese characters in your name may not be
	correctly displayed in the Author list.
	
	CAUSE
	=====
	
	The name in the BBS Author list is taken from the address book, which does not
	store your member data in Unicode. When the BBS asks for your member name, the
	name is received in ASCII. The name is not displayed correctly because the
	correct code page information is not available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in The Microsoft Network. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: msn bbs
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbMSNSearch kbMSN130 kbMSN120
	Version           : WINDOWS:1.2,1.3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
