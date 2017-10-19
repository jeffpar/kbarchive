---
layout: page
title: "Q175023: Renaming a Windows NT Domain Member"
permalink: /kb/175/Q175023/
---

## Q175023: Renaming a Windows NT Domain Member

	Article: Q175023
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Renaming a domain member (for example, a computer running Windows NT Workstation
	or a stand-alone server) requires you to create a new computer account and also
	to leave the domain, restart, rejoin the domain and restart again.
	
	This operation can be simplified with the use NETDOM utility supplied in the
	Windows NT Resource Kit supplement 2. NETDOM is a powerful command-line utility
	to manage computer accounts.
	
	MORE INFORMATION
	================
	
	CAUTION: The procedure described in this article has not been extensively tested
	in large installations. Microsoft cannot guarantee that modification of domains
	as recommended herein will accomplish the objective described in this article
	under all circumstances and in all configurations.
	
	If you wish to change a domain member name from OldMemberName to NewMemberName,
	perform the following steps:
	
	1. Rename the computer name with the Control Panel Network tool and resart.
	  Click Yes when prompted with the following message:
	
	  "Changing the computer name without the Domain Administrator first changing
	  its name on the domain will result in domain accounts (including your own
	  domain account) not being able to access or log on to this computer.
	
	  Are you sure you want to change the computer name?"
	
	2. Log on to the workstation using the new computer name in the domain list box.
	
	3. Provided that you have administrative rights on the domain, run the following
	  command line (in a single line):
	
	  " NETDOM /Domain:MYDOMAIN /user:adminuser /password:apassword MEMBER
	  NEWMEMBERNAME /JOINDOMAIN " (without the quotation marks)
	
	The command line above may be run wherever you want on the network provided that
	you have administrative access to the computer NewMemberName.
	
	The output looks similar to the following:
	
	  NetDom 1.2b @1997.
	  Searching PDC for domain MYDOMAIN ...
	  Found PDC \\PDC
	  Querying domain information on PDC \\PDC ...
	  Querying domain information on computer \\NEWMEMBERNAME ...
	  Computer \\NEWMEMBERNAME is already a member of domain MYDOMAIN.
	  Verifying secure channel on \\NEWMEMBERNAME ...
	  Verifying the computer account on the PDC \\PDC ...
	  Resetting secure channel ...
	  Changing computer account on PDC \\PDC ...
	  Changing startup of service NETLOGON on \\NEWMEMBERNAME.
	  Stopping service NETLOGON on \\NEWMEMBERNAME .... stopped.
	  Starting service NETLOGON on \\NEWMEMBERNAME .... started.
	  Querying user groups of \\NEWMEMBERNAME ...
	  Adding MYDOMAIN domain groups on \\NEWMEMBERNAME ...
	
	  The computer \\NEWMEMBERNAME joined the domain MYDOMAIN successfully.
	  Logoff/Logon \\NEWMEMBERNAME to take modifications into effect.
	
	For more information, please refer to the following Microsoft Knowledge Base
	articles:
	
	ARTICLE-ID: Q102476
	TITLE : Changing the Name of Windows NT Workstations and Servers
	
	ARTICLE-ID: Q150493
	TITLE : How To Join a Domain From the Command Line
	
	
	WARNING: Renaming a domain member requires to use NETDOM 1.2b or higher. The
	version of NETDOM included in the Windows NT Resource Kit Supplement 2 cannot be
	used to rename a domain member computer name.
	
	Additional query words: reskit resource
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
