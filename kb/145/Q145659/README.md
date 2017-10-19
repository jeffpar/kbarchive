---
layout: page
title: "Q145659: Queries of Static WINS Entries Fail With NetBIOS Scopes"
permalink: /kb/145/Q145659/
---

## Q145659: Queries of Static WINS Entries Fail With NetBIOS Scopes

	Article: Q145659
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use NetBIOS scopes, WINS computer queries with static WINS entries do
	not work. You are unable to add NetBIOS scope information to static WINS entries
	using WINS Manager (WINSADMN.EXE).
	
	RESOLUTION
	==========
	
	Use the WINSCL.EXE utility included in the Windows NT Resource Kit version 3.51
	or use the LMHOSTS file. For additional information on WINSCL.EXE, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q137582
	  TITLE : Using WINSCL.EXE
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server versions 3.51
	and 4.0. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt error 53
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
