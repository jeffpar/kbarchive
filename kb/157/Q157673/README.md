---
layout: page
title: "Q157673: Policy Not Updated on Workstation"
permalink: /kb/157/Q157673/
---

## Q157673: Policy Not Updated on Workstation

	Article: Q157673
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbOSWin2000
	Last Modified: 07-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Administrators change user policies; however, these changes are not reflected on
	the user's computer or account. For additional information about group policies
	in Windows 2000, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q274478 Group Policies for Windows 2000 Professional Clients in Windows NT
	  4.0 Domain or Workgroups
	
	MORE INFORMATION
	================
	
	It is necessary for the user to be able to write to the local computer copy of
	Ntconfig.pol to apply and enforce domain policies. If a user does not have
	write-access to this file, the user will not get the updated policy.
	
	1. If a particular account does not have write-access to the Machine copy of
	  Ntconfig.pol, Domain policies will not be applied to this user.
	
	2. If the ACLs on the Machine copy of Ntconfig.pol allow the users to write to
	  this file, then the user has the ability to disallow changes in his or her
	  file, making it read-only:
	
	  attrib +r %SYSTEMROOT%\Profiles\Policy\ntconfig.pol
	
	CAUSE
	=====
	
	The permissions on the Ntconfig.pol have been changed to read-only for the
	current user.
	
	RESOLUTION
	==========
	
	The implementation for applying policies has changed. Instead of downloading the
	file to the %SystemRoot%\Profiles\Policy directory and applying the
	restrictions, you now need to download the Policy file to a Temp file, apply the
	policy, and then delete the Temporary file. The Policy file will be downloaded
	each time you log on, but it gives the highest probability of the policy being
	applied because the end user will never see, or be able to manipulate, the Temp
	file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbOSWin2000 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	
