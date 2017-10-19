---
layout: page
title: "Q139200: PerfMon: Text for Redirector Server Session Counter is Wrong"
permalink: /kb/139/Q139200/
---

## Q139200: PerfMon: Text for Redirector Server Session Counter is Wrong

	Article: Q139200
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article specifies what is wrong with the explanation of the Redirector
	Server Sessions Counter in Performance Monitor and gives you a corrected
	explanation.
	
	MORE INFORMATION
	================
	
	In Performance Monitor, if you choose Add To Chart from the Edit menu, the Add
	To Chart dialog box appears. If you then select Redirector in the Object field
	and Server Sessions in the Counter list and choose Explanation, the following
	incorrect Counter Definition information appears:
	
	  Server Sessions counts the number of active security objects the Redirector
	  is managing. For example, a Logon to a server followed by a network access to
	  the same server will establish one connection, but two sessions.
	
	This explanation incorrectly states that this counter counts only the number of
	active security objects and, therefore, active connections to other computers.
	
	However, this counter specifies the total number of connections (whether still
	active or not) the computer has made over the period the redirector is running.
	The following is an example of a corrected Counter Definition:
	
	  Server Sessions counts the total number of security objects the Redirector
	  has managed since the Redirector was started. For example, a Logon to a
	  server followed by a network access to the same server will establish one
	  connection, but two sessions.
	
	
	Additional query words: prodnt Redir
	
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
