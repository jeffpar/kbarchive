---
layout: page
title: "Q142626: LogonUser API Now Has Support for Network Logons"
permalink: /kb/142/Q142626/
---

## Q142626: LogonUser API Now Has Support for Network Logons

	Article: Q142626
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.00
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.00 
	- Microsoft Windows NT Server versions 3.51, 4.00 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In Windows NT 3.51 the version of LogonUser API prevented a user from accessing
	the network while the interactive or batch logon right was given to that user.
	
	CAUSE
	=====
	
	This was due to the fact that the Logon From Network right was removed for that
	user. For Windows NT 3.51, the Network logon-type support was removed, because
	at the time it was deemed too confusing for the user.
	
	WORKAROUND
	==========
	
	To resolve this problem on Windows NT 3.51 Workstation or Server, obtain the fix
	referenced below, or upgrade to Windows NT Workstation or Server version 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	The API confusion was based on the fact that Interactive and Batch logons
	allowed the logon session to go out on the net, while the Network logon would
	not allow the logon session to go out on the net. However, with the exposure of
	DuplicateTokenEx, this potential confusion has been documented in the Win32 SDK,
	and should no longer pose an issue. The Logonuser API is called from
	advapi32.dll.
	
	Additional query words: prodnt samsrv fix
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.00
	
	=============================================================================
	
