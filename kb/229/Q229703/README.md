---
layout: page
title: "Q229703: User Mode Programs May Cause a Bugcheck in Windows NT"
permalink: /kb/229/Q229703/
---

## Q229703: User Mode Programs May Cause a Bugcheck in Windows NT

{% raw %}

	Article: Q229703
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Usermode programs may cause Windows NT 4.0, up to and including Service Pack 4,
	to experience a kernel-mode STOP error message. This STOP error message is also
	known as a bugcheck. The bugcheck code and parameters may vary.
	
	CAUSE
	=====
	
	This behavior occurs in some scenarios where the Windows NT kernel does not
	verify the parameters passed to it from the usermode program.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 4.0
	and 4.0 Service Pack 4. This problem was first corrected in Windows NT 4.0
	Service Pack 5.
	
	MORE INFORMATION
	================
	
	After you apply Service Pack 5, parameters passed from usermode processes should
	not cause Windows NT 4.0 to bugcheck.
	
	
	Additional query words: dump sp5
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0,4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
