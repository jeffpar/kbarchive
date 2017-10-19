---
layout: page
title: "Q122390: RCONSOLE Not Listing NetWare File Servers"
permalink: /kb/122/Q122390/
---

## Q122390: RCONSOLE Not Listing NetWare File Servers

	Article: Q122390
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.50 3.51
	
	WINDOWS
	
	kbinterop kb3rdparty kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the RCONSOLE utility for NetWare in Windows NT versions 3.5 or 3.51
	with the Gateway Service for NetWare (GSNW) or Client Service for NetWare (CSNW)
	in File Manager or from a command prompt, RCONSOLE does not display all the
	available NetWare file servers.
	
	
	WORKAROUND
	==========
	
	
	To work around this problem, do one of the following from a network client
	computer:
	
	- From a NetWare client computer, connect to the NetWare file server and run
	  RCONSOLE (for example: Rconsole /b)
	
	  -or-
	
	- From a Windows for Workgroups version 3.11 client computer, disable the
	  Microsoft Windows Network from the Network Setup utility and install the
	  Novell NetWare driver. Restart Windows for Workgroups and run RCONSOLE (for
	  example: Rconsole /b).
	
	  -or-
	
	  Use a later version of RCONSOLE dated 10/12/94 which will search the bindery
	  as well as make SAPs to commplete the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	NetWare is manufactured by Novell, Inc., a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: wfw wfwg prodnt wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
