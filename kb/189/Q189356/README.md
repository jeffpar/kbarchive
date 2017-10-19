---
layout: page
title: "Q189356: SAMR Pipes Cause Problems with Domain Controllers"
permalink: /kb/189/Q189356/
---

## Q189356: SAMR Pipes Cause Problems with Domain Controllers

	Article: Q189356
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Server 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following:
	
	- Performance problems on domain controllers in the form of lock ups, crashes,
	  or console freezes.
	
	- Clients may receive the following error messages:
	
	   - Semaphore timeout period has expired
	
	   - Network path cannot be found.
	
	   - Insufficient system resources.
	
	CAUSE
	=====
	
	Novell's intraNetWare client for Windows NT Workstation v4.11a and previous
	versions can cause SAMR pipes to be left open on domain controllers throughout
	the enterprise. This can result in performance problems with these domain
	controllers if the number of SAMR pipes open approaches 2048. Nwgina.dll
	performs remote API operations including NetUserGetInfo to get security
	information from the SAM database located on a domain controller.
	
	RESOLUTION
	==========
	
	Because of performance design reasons, Windows NT does not directly close an
	active context associated with an open SAMR file handle used to perform a remote
	API operation. Once remote API calls have been performed, the client must
	perform local API calls (for example, NetUserModalsGet...) which indirectly
	close the handle.
	
	Nwgina.dll has been modified so that the handle references are closed
	successfully. Please refer to Novell TID #2939557, "Clients can't connect to NT
	server," for more information.
	
	After the limit of 2048 SAMR pipe references is approached, the LSASS process may
	fail, requiring the system to be restarted to reinitialize the LSASS service.
	However, the problem can be alleviated by monitoring the system. Perform the
	following command before LSASS has failed to stop the server service and close
	the file handles in question:
	
	Net Stop Server
	Net Start Server
	Net Start Netlogon
	Net Start Computer Browser
	
	NOTE: This command will also stop the dependency services including Netlogon and
	the Computer Browser, which must be restarted again as well.
	
	This problem occurs in the Novell intraNetWare Windows NT v4.11 v4.30 Clients.
	Novell has corrected this problem in the NetWare 5 NT Client v4.50 (Z.E.N.) for
	Windows NT.
	
	
	MORE INFORMATION
	================
	
	Novell's intraNetWare client opens 4 SAMR pipes to the domain controller that it
	authenticates with. This is done because NWGINA is used to perform Microsoft
	Networking authentication operations. During the logon process, the client
	closes 3 of the 4 pipes. This leaves one pipe open and idle. Large domains with
	limited numbers of domain controllers can suffer performance problems when large
	numbers of these pipes are left open. Microsoft Windows NT has a limit of 2048
	SAMR pipe references that can be open at one time in the LSASS process.
	
	Protocol Analysis using a tool such as NETMON will reveal the following command
	performed to open the SAMR handle. Ordinarily, a subsequent SMB close operation
	will be performed to close the file handle. A lack of the close exhibits
	evidence of an application handle leak.
	
	SMB C NT create & X, file = \samr
	
	The following commands will allow the SAMR pipe references to be monitored on a
	domain controller. Server Manager can be used to list the references as well by
	selecting Computer, Properties, and then In Use. While logged on as an
	administrator, type the following to obtain a listing:
	
	Net Files > Files.txt
	Findstr samr Files.txt > Samr.txt
	
	An editor such as Notepad can be used to list and enumerate Samr.txt. This will
	show SAMR handle references similar to the following:
	
	  9999       \PIPE\samr              UserName            0
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q155601
	  TITLE : Understanding SAM Active Contexts in Windows NT [win32sdk]
	
	  ARTICLE-ID: Q145583
	  TITLE : Err Msg: Insufficient System Resources Exist to Complete...
	
	
	Additional query words: Novell NetWare
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbAudDeveloper kbBackOfficeSearch kbBackOfficeServ400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
