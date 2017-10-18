---
layout: page
title: "Q154953: Setup Unable to Create IUSR_computername Account"
permalink: kb/154/Q154953/
---

## Q154953: Setup Unable to Create IUSR_computername Account

	Article: Q154953
	Product(s): Internet Information Server
	Version(s): winnt:1.0,3.51
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Normally, when you set up Internet Information Server (IIS), Setup creates the
	account IUSR_computername for anonymous logon. However, if the minimum password
	length is set higher than eight characters, Setup fails to create the account.
	
	Also, during Setup, if a password shorter than the minimum length is specified
	the account is not created.
	
	RESOLUTION
	==========
	
	Obtain the fix referenced below, or upgrade to Windows NT Server 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodiis prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbiisSearch kbiis100
	Version           : winnt:1.0,3.51
	
	=============================================================================
	
