---
layout: page
title: "Q140780: DocErr: WINS Help Lists Incorrect Max Value for Verify Interval"
permalink: /kb/140/Q140780/
---

## Q140780: DocErr: WINS Help Lists Incorrect Max Value for Verify Interval

	Article: Q140780
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The WINS Help File defining the Verify Interval from within the WINS Server
	Configuration gives an incorrect Maximum value of 24 days.
	
	MORE INFORMATION
	================
	
	The help file should read that the Minimum Value for the Verify Interval is 24
	days (576 hours). WINS will not allow the value to be lowered below this limit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
