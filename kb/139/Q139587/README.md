---
layout: page
title: "Q139587: Novell Setpass and Whoami Failures with CSNW and GSNW"
permalink: kb/139/Q139587/
---

## Q139587: Novell Setpass and Whoami Failures with CSNW and GSNW

	Article: Q139587
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
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
	
	If you run Microsoft Client Services for NetWare (CSNW) or Gateway Services for
	NetWare (GSNW) on a Windows NT Server, version 3.5 or 3.51, and you run the
	Novell "Setpass" command, the following error message can appear:
	
	  You are not connected to <servername>
	
	where <servername> represents the name of the server on which you are
	trying to set the password. Or, if the Setpass command is successful the
	following message appears:
	
	  The password for <servername> has been changed <ServerList>
	
	  Synchronize passwords on these file servers with
	  <servername>/<username>? <Y/N>
	
	where <ServerList> represents the list of Novell servers to which you are
	attached, and <username> is your logged on account name. But in this case
	one or more of the attached Novell servers are missing from the list.
	
	Similarly, if you run the Novell Whoami command, one or more of the connected
	Novell servers will be missing from the list. At the same time you can change to
	the connected drive letter of the "missing" server and view the directory
	listing using the Dir command.
	
	CAUSE
	=====
	
	These problems are caused by having identical letter sequences in two or more of
	the server names, and by having connected to these servers in descending order
	of name length. For example, the following server names and drive letters
	assigned in the order will produce the problem:
	
	  Assigned Drive Letter         Server Name
	
	     H:                           DPOPS2
	     I:                           DPOPS
	     J:                           DP
	
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	To work around this problem for Windows NT 3.51, ensure that all Novell servers
	connected to your computer have names that are spelled with unique letter
	sequences so that no beginning sequence of letters compares the same between any
	two of the names.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5 and 3.51.
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Contact Microsoft
	Product Support Services for more information on the availability of this fix.
	This problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
