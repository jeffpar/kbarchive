---
layout: page
title: "Q137395: Transferring Login Scripts Requires MAIL Directory Migration"
permalink: /kb/137/Q137395/
---

## Q137395: Transferring Login Scripts Requires MAIL Directory Migration

{% raw %}

	Article: Q137395
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	- Microsoft File and Print Services for NetWare version 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows NT Server Migration Tool for NetWare version 1.1 included with File
	and Print Services for NetWare version 3.51 does not transfer NetWare Login
	Scripts to a Windows NT Server unless the MAIL directory on the NetWare server
	has been selected to be transferred.
	
	MORE INFORMATION
	================
	
	To transfer login scripts from the NetWare server:
	
	1. Choose File Options in Migration Tool for NetWare.
	
	2. Select the SYS volume in the Source Files and Destination dialog box.
	
	3. Choose Files.
	
	4. In the Files to Transfer dialog box, ensure that the MAIL directory on the
	  SYS volume is selected. All Login Scripts will be migrated. Individual Login
	  Scripts can be chosen for migration by selecting only certain subdirectories
	  of the MAIL directory.
	
	Additional query words: prodnt nwconv nwconvert fpnw
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	
	=============================================================================
	

{% endraw %}
