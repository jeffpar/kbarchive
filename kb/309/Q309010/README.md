---
layout: page
title: "Q309010: XADM: Exchange Server 5.5 Post-SP4 Mbclean.exe Fixes Available"
permalink: /kb/309/Q309010/
---

## Q309010: XADM: Exchange Server 5.5 Post-SP4 Mbclean.exe Fixes Available

	Article: Q309010
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Operating System(s): 
	Keyword(s): kbExchange550preSP5fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2, 5.5 SP3, 5.5 SP4 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists the article numbers for Exchange Server 5.5 Mailbox Cleanup
	Agent (Mbclean.exe) bugs that have been fixed after Exchange Server 5.5 Service
	Pack 4 (SP4) was released.
	
	For information about how to obtain the fixes listed in this article, click the
	article numbers listed in the "More Information" section of this article.
	
	NOTE: Exchange Server fixes for a particular component are cumulative and contain
	all of the previous fixes for that component. Fixes with a particular version
	number contain all of the fixes that have an earlier version number.
	
	MORE INFORMATION
	================
	
	Mailbox Cleanup Agent fixes include the following files:
	
	  
	  +-------------------------------+
	  | File name   | Current version | 
	  +-------------------------------+
	  | Mbclean.dll | 5.5.2654.55     | 
	  +-------------------------------+
	  | Mbclean.exe | 5.5.2655.34     | 
	  +-------------------------------+
	
	NOTE: Because of file dependencies, Exchange Server version 5.5 Service Pack 4
	must be applied before you apply this fix.
	
	Fixes Released on October 2, 2001
	---------------------------------
	
	The following files are modified:
	
	- Mbclean.dll is incremented to version 5.5.2654.55.
	
	- Mbclean.exe is incremented to version 5.5.2655.34.
	
	The following fixes are included:
	
	  Q285859 XADM: Mailbox Manager Stops Responding When You Click the Policy Tab
	
	  Q297686 XADM: Mailbox Manager Cleans Messages According to
	  PR_LAST_MODIFICATION_TIME in Service Pack 4
	
	  Q306060 XADM: Mailbox Manager Unable to Notify Users After Cleaning Mailboxes
	
	Additional query words:
	
	======================================================================
	Keywords          : kbExchange550preSP5fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2 kbExchange550SP3 kbExchange550SP4
	Version           : :5.5,5.5 SP1,5.5 SP2,5.5 SP3,5.5 SP4
	Issue type        : kbinfo
	Solution Type     : kbfix
	
	=============================================================================
	
