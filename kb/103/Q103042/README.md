---
layout: page
title: "Q103042: Event Msg: The Browser Has Forced an Election..."
permalink: kb/103/Q103042/
---

## Q103042: Event Msg: The Browser Has Forced an Election...

	Article: Q103042
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	When you start a Windows NT Advanced Server 3.1 computer, you may
	receive the following error message:
	
	  At Least One Service or Driver Failed During System Startup. Use Event Viewer
	  to Examine the Event Log for Details.
	
	In the Event Viewer, there may be the following event message from the
	Browser service:
	
	  The browser has forced an election on network \Device\Nbf_Lance01 because a
	  Windows NT Advanced Server (or domain master) browser is started.
	
	If this error message is present, it means that there was no browse
	master available at the time you started the computer. Therefore, the
	Browser service forced an election (of a Browsemaster) on the network.
	The error message is harmless and should be ignored.
	
	This message occurs on a Windows NT Advanced Server computer if that
	computer is the only domain controller for that domain. You will
	receive this error message each time you start up this computer. The
	Windows NT Advanced Server computer has a higher priority than any
	other computers, such as Windows for Workgroups computers, so it was
	chosen as the browse master.
	
	Additional query words: wfw wfwg prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
