---
layout: page
title: "Q135550: Err Msg: &quot;Net 815: Network Name Was Deleted&quot; Remoteboot Wrksta"
permalink: kb/135/Q135550/
---

## Q135550: Err Msg: &quot;Net 815: Network Name Was Deleted&quot; Remoteboot Wrksta

	Article: Q135550
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you are using a diskless remoteboot workstation you cannot regain access to
	your workstation after this network error appears:
	
	  Net 815: Network name was deleted.
	
	This symptom occurs when the following conditions apply:
	
	- Your workstation boots from a Windows NT 3.5 or 3.51 remoteboot server.
	
	- Your workstation is running LAN Manager for MS-DOS, version 2.2c
	
	- Your remoteboot server has the AutoDisconnect parameter set to -1.
	
	- Your workstation is booted but not used for a long time (for example,
	  overnight).
	
	WORKAROUND
	==========
	
	To work around this problem, set the remoteboot server's Autodisconnect
	parameter to a smaller value, such as 15 minutes (the default) or 480 minutes (8
	hours).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: 3.50 3.51 prodnt 2.20 rpl ripl remote program load
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	
