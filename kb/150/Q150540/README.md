---
layout: page
title: "Q150540: FPNW on Domain Must be Installed on PDC"
permalink: /kb/150/Q150540/
---

## Q150540: FPNW on Domain Must be Installed on PDC

{% raw %}

	Article: Q150540
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you load File and Print Service for NetWare (FPNW) on a domain controller, it
	must be loaded on the primary domain controller (PDC) to have full
	functionality.
	
	MORE INFORMATION
	================
	
	When FPNW is loaded on a backup domain controller (BDC), but not on the PDC,
	FPNW will not be able to create the directories which hold the NetWare
	compatible login scripts.
	
	When you create a user account and set it to maintain a NetWare compatible login,
	the object ID is assigned, but the default directory SysVol\Mail\[objectID] is
	not created. Also, the Edit Login Script button is grayed out.
	
	Once FPNW is loaded on the PDC, the functionality will be there for future users
	created on the BDC. The SysVol\Mail\[objectID] directory is created on the PDC.
	
	Users may want to set up directory replication to ensure the login scripts are
	updated from the PDC to the BDC(s). If the FPNW service is stopped on the PDC,
	the functionality (creating the directory) on the BDC will again be lost.
	
	This situation is by design. When using FPNW on a domain controller, User Manager
	points to the domain, not a single server. FPNW is emulating a single server
	configuration, but when loaded on a domain controller it is actually in a
	multiserver environment.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	
	=============================================================================
	

{% endraw %}
