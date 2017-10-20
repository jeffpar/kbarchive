---
layout: page
title: "Q277715: BUG: ExitWindowsEx Function Fails to Shut Down the System"
permalink: /kb/277/Q277715/
---

## Q277715: BUG: ExitWindowsEx Function Fails to Shut Down the System

{% raw %}

	Article: Q277715
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbGrpDSUser
	Last Modified: 25-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Windows NT 4.0 Service Pack 6 (SP6) or Windows NT 4.0 SP6a-based system,
	when any application calls the ExitWindowsEx function, the system sends the
	WM_QUERYENDSESSION message to all top-level windows. If any windows that receive
	the message return FALSE, the shutdown process is stopped, irrespective of how
	many windows return TRUE. Any subsequent calls to ExitWindowsEx fail to trigger
	a reboot or a shutdown operation.
	
	RESOLUTION
	==========
	
	Configure your applications to call the InitiateSystemShutdownEx function to
	reboot the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q245148 Windows NT Appears to Hang When You Log Off After Installing Windows
	  NT 4.0 Service Pack 6
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSUser 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search
	Version           : :4.0 SP6,4.0 SP6a
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
