---
layout: page
title: "Q164410: CHGPASS and SETPASS Do Not Prompt for Typing Correction"
permalink: /kb/164/Q164410/
---

## Q164410: CHGPASS and SETPASS Do Not Prompt for Typing Correction

	Article: Q164410
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you use Microsoft's Chgpass.exe or Setpass.exe you are not prompted for the
	new password if the new password confirmation is incorrectly typed. Instead, the
	following message appears and the password is not changed:
	
	  New password not retyped correctly.
	
	You must run Chgpass.exe or Setpass.exe again to correct the problem.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in File and Print Services for
	NetWare versions 3.51 and 4.0, and Directory Services Manager for NetWare
	versions 3.51 and 4.0.
	
	This problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 4.00 3.51 prodnt sfnw fpnw dsmn
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351 kbFPNW400
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
