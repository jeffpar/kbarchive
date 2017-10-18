---
layout: page
title: "Q152478: ErrMsg: Local Policy Does not Permit You to Logon..."
permalink: kb/152/Q152478/
---

## Q152478: ErrMsg: Local Policy Does not Permit You to Logon...

	Article: Q152478
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have set up Microsoft Windows NT, joined a domain, and restarted, you
	attempt to log on locally. The following error message may be displayed:
	
	  The local policy of this system does not permit you to logon interactively
	
	CAUSE
	=====
	
	This error occurs because the domain user does not have local logon rights to
	the computer while connected to the domain.
	
	NOTE: If TCP/IP is installed on the computer, another indication that the domain
	user does not have local logon rights is that entering the ipconfig/release
	command from a command prompt on the computer results in the following error
	message:
	
	  Access Denied
	
	RESOLUTION
	==========
	
	To correct this problem and provide local access when connected to the domain,
	do the following:
	
	1. Log off the domain and log on to the local computer using an account with
	  administrative rights.
	
	2. Go to the Administrative Tools group, select User Manager, click the Policies
	  tab, and select User Rights.
	
	3. Use the down arrow next to the "Right" dialog box and select "Log on
	  locally", and then click Add. The Add Users and Groups dialog box is
	  displayed.
	
	4. In "List Names From:" select the domain name, and then in the Add Names box
	  type your <domain name\username>. Click OK. The User Rights Policy
	  dialog box is displayed with the new user name added to the list. Click OK.
	
	5. Log off and back on. At the Welcome dialog box, select the domain and log on.
	  You now have local logon access rights.
	
	NOTE: If you cannot access the computer locally, you can use the Ntrights.exe
	utility to remotely add the user right.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q279664 How to Set Logon User Rights with the Ntrights.exe Utility
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
