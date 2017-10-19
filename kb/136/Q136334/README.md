---
layout: page
title: "Q136334: Access Violation in LSASS.EXE During User Password Change"
permalink: /kb/136/Q136334/
---

## Q136334: Access Violation in LSASS.EXE During User Password Change

	Article: Q136334
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 05-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When your domain password expires and you are prompted to change your password,
	an access violation in LSASS.EXE occurs on your domain controller. As a result,
	you cannot change your password and log on until the domain controller is back
	online again.
	
	This problem occurs intermittently.
	
	CAUSE
	=====
	
	This failure occurs because of a problem during the calculation of the session
	id used for the password change operation.
	
	RESOLUTION
	==========
	
	To correct this problem, install the latest U.S. Service Pack for Windows NT
	version 3.51 or upgrade to Windows NT 4.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
