---
layout: page
title: "Q297534: ReceiveAny Thread Generates &quot;RPC_S_OUT_OF_MEMORY&quot; Error"
permalink: kb/297/Q297534/
---

## Q297534: ReceiveAny Thread Generates &quot;RPC_S_OUT_OF_MEMORY&quot; Error

	Article: Q297534
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a program uses RPC for socket communication, it may stop working for no
	apparent reason. If you quit and start the program again, it works correctly,
	but may stop working again. If you check the output of the netstat -n command,
	Netstat reports many open connections in a CLOSE_WAIT state with the port that
	the program is using. This is a sample of the output from the netstat -n
	command:
	
	  
	
	  Active Connections
	
	 Proto  Local Address          Foreign Address        State
	  ...
	 TCP    10.0.0.1:1091          10.0.0.5:1306          CLOSE_WAIT
	 TCP    10.0.0.1:1091          10.0.0.5:4001          CLOSE_WAIT
	 TCP    10.0.0.1:1091          10.0.0.5:1500          CLOSE_WAIT
	...
	
	CAUSE
	=====
	
	This problem occurs because RPC uses a socket that is called a SyncSocket to
	optimize data communication. If the Syncsocket is closed incorrectly by the
	program that loaded the RPC transport, RPC enters an error loop that it cannot
	return from. RPC always assumes that the SyncSocket will always be a valid
	socket, and does not have any recovery mechanism to handle situations in which
	another function closes the SyncSocket.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Size     File name     Platform
	  ---------------------------------------------------
	  05/17/2001  04:54p  37,648   Rpcltscm.dll  Intel
	  05/17/2001  04:50p  60,176   Rpcltscm.dll  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, restart the program that is using RPC.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
