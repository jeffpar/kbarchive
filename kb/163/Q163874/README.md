---
layout: page
title: "Q163874: Pressing CTRL+ALT+DEL When Logging On Can Cause Blue Screen"
permalink: /kb/163/Q163874/
---

## Q163874: Pressing CTRL+ALT+DEL When Logging On Can Cause Blue Screen

{% raw %}

	Article: Q163874
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If Client Services for NetWare (CSNW) is installed and a user presses the
	CTRL+ALT+DEL key sequence immediately after entering his or her password at the
	logon prompt, the system halts with a C000021A STOP code.
	
	CAUSE
	=====
	
	It is by design within Windows NT that, if the Secure Attention Sequence (SAS)
	(CTRL+ALT+DEL) is pressed, any logon scripts currently running are terminated.
	This gives the user the ability to easily kill any logon scripts that may have
	stopped responding. However, if this sequence is pressed before a process
	running a logon script has started running properly, a blue screen STOP error
	can result. This error is caused because Winlogon.exe performs an access
	violation.
	
	NOTE: The user does not have to have a logon script defined for this problem to
	occur. With CSNW, the logon script processor is responsible for checking to see
	if a logon script is actually available to run and, therefore, is started even
	if no script is defined.
	
	RESOLUTION
	==========
	
	There is a fix available from Microsoft Technical Support that fixes this
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
