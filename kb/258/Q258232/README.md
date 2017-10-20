---
layout: page
title: "Q258232: Cannot Run Delprof.exe Against Remote Computers on the Network"
permalink: /kb/258/Q258232/
---

## Q258232: Cannot Run Delprof.exe Against Remote Computers on the Network

{% raw %}

	Article: Q258232
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbWin2000FixNoSP
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run Delprof.exe against a remote computer on the network, the
	tool may not work.
	
	CAUSE
	=====
	
	This behavior can occur when the remote computer name includes a hyphen or a
	space.
	
	RESOLUTION
	==========
	
	To resolve this behavior, upgrade your computer to Microsoft Windows 2000.
	
	WORKAROUND
	==========
	
	To work around this behavior, change the remote computer name so that it does
	not contain a hyphen or a space.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Delprof.exe is included in the Microsoft Windows NT 4.0 Resource Kit.
	
	When you start Delprof.exe from a command prompt and run it against a remote
	computer whose name contains a hyphen or a space, one of the following behaviors
	may occur:
	
	- If you do not type "DELPROF" (without the quotation marks) in capital
	  letters, Delprof.exe causes the online help to appear.
	
	- If you type "DELPROF" (without the quotation marks) in capital letters, the
	  tool may run but you are prompted to delete profiles on the local computer
	  instead of the remote computer.
	
	Additional query words: profile
	
	======================================================================
	Keywords          : kbtool kbWin2000FixNoSP 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
