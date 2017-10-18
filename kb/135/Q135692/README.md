---
layout: page
title: "Q135692: &quot;List Name From&quot; List Box Shows Only 20 Trusted Domains"
permalink: kb/135/Q135692/
---

## Q135692: &quot;List Name From&quot; List Box Shows Only 20 Trusted Domains

	Article: Q135692
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After establishing more than twenty trust relationships, User Manager and File
	Manager do not list all the trusted domains. The Add Users and Groups dialog box
	List Name From list box lists only twenty domains plus the current domain name.
	Permissions can be successfully assigned by manually typing in the appropriate
	user account or group from an unlisted trusted domain.
	
	CAUSE
	=====
	
	When there are many trusted domains in a network, attempts to enumerate trusted
	domain names require multiple calls to the LSA API. The LSA API indicates this
	by returning ERROR_MORE_DATA as a status code to the calling routine. In this
	case, the calling routine overwrites the returned status code of ERROR_MORE_DATA
	before it checks the status again to see if additional calls to the LSA API are
	necessary.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already done
	so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in Windows NT Workstation or Server version 4.0.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
