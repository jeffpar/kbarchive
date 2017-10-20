---
layout: page
title: "Q153140: How to Reset License Manager Information"
permalink: /kb/153/Q153140/
---

## Q153140: How to Reset License Manager Information

{% raw %}

	Article: Q153140
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you want to reset the information license manager displays, you can delete or
	rename three files.
	
	MORE INFORMATION
	================
	
	To reset the license manager information:
	
	1. Stop the License Logging service.
	
	2. Delete or rename the following files on the primary domain controller or the
	  enterprise server:
	
	  Cpl.cfg, which contains all of your purchase history and is located in
	  %Systemroot%\System32.
	
	  Llsuser.lls, which contains the user information on number of connections and
	  is located in %Systemroot%\System32\Lls.
	
	  Llsmap.lls, which contains License group information and is also located in
	  %Systemroot%\System32\Lls.
	
	3. Restart the License Logging service.
	
	4. Re-add the appropriate license information.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q194065 How to Reset License Manager Throughout an Enterprise
	
	Additional query words: prodnt llssrv llsmgr event 201 202
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search kbWinAdvServSearch kbWinDataServSearch
	Version           : :2000,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
