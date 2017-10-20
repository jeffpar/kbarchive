---
layout: page
title: "Q201185: Internet Tab Does Not Appear When NetBIOS Name Is 15 Characters"
permalink: /kb/201/Q201185/
---

## Q201185: Internet Tab Does Not Appear When NetBIOS Name Is 15 Characters

{% raw %}

	Article: Q201185
	Product(s): Internet Information Server
	Version(s): winnt:3.0
	Operating System(s): 
	Keyword(s): kbInternet
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the NetBIOS name of the Microsoft Internet Information Server (IIS) 3.0
	computer has 15 characters, the Internet tab does not appear in a directory's
	property sheet. IIS may fail to return Web pages and occasionally the WWW
	Service does not start.
	
	CAUSE
	=====
	
	This problem occurs because the NetBIOS name of the Windows NT Server computer
	running IIS 3.0 contains more than 14 characters.
	
	RESOLUTION
	==========
	
	To resolve this problem, reduce the number of characters in the NetBIOS name of
	the IIS 3.0 computer to 14 charters or less.
	
	
	Additional query words: length missing sharing
	
	======================================================================
	Keywords          : kbInternet 
	Technology        : kbiisSearch kbiis300
	Version           : winnt:3.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
