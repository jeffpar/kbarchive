---
layout: page
title: "Q139506: Connections to Share-Level Server May Fail"
permalink: /kb/139/Q139506/
---

## Q139506: Connections to Share-Level Server May Fail

{% raw %}

	Article: Q139506
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It is possible for multiple logon sessions to be in progress simultaneously from
	a single workstation to a single server. For example, the interactive logon user
	may initiate an interactive logon session and a service may initiate another
	session. These logon sessions are multiplexed over a single virtual circuit
	(VC.)
	
	When such connections are established to a share-level server such as Windows 95
	or LAN Manager running share-level security, the session may be terminated
	unexpectedly when one of the users log off.
	
	Applications may receive one of the following error messages:
	
	  An unexpected network error occurred
	
	  System error 59 has occurred
	
	CAUSE
	=====
	
	The Windows NT redirector incorrectly sends a logoff&X Server Message Block
	(SMB) to the share-level server when other sessions exist.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 5. We are researching this problem and will post additional information
	here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt 3.51 4.00
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
