---
layout: page
title: "Q230230: Password Protected Screen Saver Does Not Function Properly"
permalink: /kb/230/Q230230/
---

## Q230230: Password Protected Screen Saver Does Not Function Properly

{% raw %}

	Article: Q230230
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP4, 4.0 SP5, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the "Password protected" option for the screen saver is selected during a
	Windows NT Server, Terminal Server Edition client session:
	
	- The screen saver does not lock the workstation when you minimize the Terminal
	  Server client program.
	
	- The Logoff option on the Start menu does not function; the only way to log
	  off under this condition is to press CTRL+ALT+END, and select Logoff.
	
	RESOLUTION
	==========
	
	There are two ways to avoid this problem:
	
	- Do not minimize the Terminal Server client application if you are using a
	  password protected screen saver.
	
	  OR
	
	- Press CTRL+ALT+END, and then click Lock Workstation before you minimize the
	  Terminal Server client application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: WTS TSCLIENT
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400sp4 kbNTTermServ400sp5 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : winnt:4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
