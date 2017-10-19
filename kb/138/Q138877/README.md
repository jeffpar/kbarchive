---
layout: page
title: "Q138877: RAS Authentication Retry Dialog Box Skipped"
permalink: /kb/138/Q138877/
---

## Q138877: RAS Authentication Retry Dialog Box Skipped

	Article: Q138877
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On your computer running Windows NT Workstation, when you run Remote Access
	Service (RAS) to call a RAS server and you enter an incorrect user name or
	password in the RAS Authentication dialog box, the authentication retry dialog
	box does not appear if your local logon credentials are the same as the ones
	defined for you on the remote network. This is because RAS automatically
	compares your local logon credentials to the remote credentials if you initially
	enter an incorrect user name or password in the RAS Authentication dialog box.
	
	MORE INFORMATION
	================
	
	To reproduce the problem, run RAS, select the entry for the server you are
	calling, choose Edit, and then clear the "Authenticate using current user name
	and password" option. Choose Dial and leave the RAS Authentication dialog box
	username, password, and Domain fields blank. Now RAS automatically checks
	whether your local logon credentials match your remote logon credentials and
	proceeds as follows:
	
	- If they match, RAS grants you access without prompting you with the Retry
	  Authentication dialog box.
	
	- If they differ, the retry authentication dialog box appears and RAS grants
	  you access only if you enter the correct remote logon credentials.
	
	NOTE: You may enter any workgroup or domain name you choose in the RAS
	Authentication dialog box on a Windows NT 3.5 or 3.51 Workstation. But if you
	use a Windows NT 3.5 or 3.51 server as a dial-out RAS client, then you must
	enter the appropriate domain or workgroup name associated with the username and
	password on the remote network.
	
	Additional query words: prodnt remote
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
