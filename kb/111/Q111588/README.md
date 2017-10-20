---
layout: page
title: "Q111588: BUG: OpenFile() Doesn't Handle Forward Slash (&quot;/&quot;) Character"
permalink: /kb/111/Q111588/
---

## Q111588: BUG: OpenFile() Doesn't Handle Forward Slash (&quot;/&quot;) Character

{% raw %}

	Article: Q111588
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	OpenFile() does not correctly handle paths beginning with a forward slash
	character ("/") (for example, as in "x:/").
	
	CAUSE
	=====
	
	The forward slash character "/" is put into the normalized name as is, instead
	of being converted to a backslash character ("\"). OpenFile() is not implemented
	to check for the forward slash character.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: buglist3.10 3.10 backward
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
