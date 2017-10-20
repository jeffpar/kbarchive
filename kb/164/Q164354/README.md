---
layout: page
title: "Q164354: Removing FPNW from a PDC Causes Loss of Netware Compatible Login"
permalink: /kb/164/Q164354/
---

## Q164354: Removing FPNW from a PDC Causes Loss of Netware Compatible Login

{% raw %}

	Article: Q164354
	Product(s): Microsoft Windows NT
	Version(s): WINNT:3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Services for NetWare versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If File and Print Services for NetWare (FPNW) is installed on a primary domain
	controller (PDC) and must be removed and reinstalled, the NetWare Compatible
	Login properties of all such domain users will be lost unless a backup domain
	controller (BDC) is present in the domain.
	
	MORE INFORMATION
	================
	
	To avoid losing those properties, perform the following steps:
	
	1. Verify that a BDC exists in the domain, and that it has FPNW installed.
	
	2. Before removing FPNW from the PDC, temporarily promote the BDC to a PDC to
	  retain the user properties.
	
	3. After FPNW has been successfully removed and reinstalled on the BDC (the
	  former PDC), promote it back to PDC.
	
	For more information, see the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q150540
	  TITLE : FPNW on Domain Must Be Installed on PDC
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetware400 kbServicesNetwareSearch
	Version           : WINNT:3.51 4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
