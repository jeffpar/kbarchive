---
layout: page
title: "Q129189: BUG: SourceSafe Suddenly Terminates After Running a Long Time"
permalink: /kb/129/Q129189/
---

## Q129189: BUG: SourceSafe Suddenly Terminates After Running a Long Time

{% raw %}

	Article: Q129189
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbSSafe400bug kbSSafe500bug kbSSafe310bug kbSSafe304bug
	Last Modified: 07-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe will unexpectedly terminate after running for a long time.
	
	CAUSE
	=====
	
	This occurs when network connection has been lost and reestablished, and then
	you try to use SourceSafe.
	
	In Visual SourceSafe version 4.0, this problem will only occur if you are running
	the exe files from a Windows NT server over the network. It will not occur if
	you run the EXE locally.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbSSafe400bug kbSSafe500bug kbSSafe310bug kbSSafe304bug 
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
