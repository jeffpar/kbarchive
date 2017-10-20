---
layout: page
title: "Q185383: How to Remove IIS 4.0 and Reinstall IIS 3.0"
permalink: /kb/185/Q185383/
---

## Q185383: How to Remove IIS 4.0 and Reinstall IIS 3.0

{% raw %}

	Article: Q185383
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CAUTION: Virtual directories and virtual servers are not be preserved when
	Internet Information Server (IIS) is removed.
	
	
	To remove Internet Information Server (IIS) 4.0 and reinstall IIS 3.0, perform
	the following steps:
	
	1. Uninstall Microsoft Proxy Server version 2.0, if it is installed on the
	  computer.
	
	2. Uninstall the Windows NT 4.0 Option Pack (to do this, run Setup and select
	  Remove All).
	
	3. Install IIS 2.0 from the Windows NT Server 4.0 CD.
	
	4. Use the Windows NT Server 4.0 Service Pack 3 Update.exe utility to remove all
	  Service Pack 3 files and restore the original files from the Service Pack 3
	  Uninstall directory.
	
	
	5. Reapply Windows NT Server 4.0 Service Pack 3. This should upgrade IIS to
	  version 3.0.
	
	6. Using Windows NT Server 4.0 Service Pack 3, install Active Server Pages
	  (ASP), Index Server, and Proxy Server.
	
	MORE INFORMATION
	================
	
	For additional information about installing Internet Information Server 2.0 and
	3.0 on Windows NT Server 4.0, see the following article in the Microsoft
	Knowledge Base:
	
	  Q184309 : How to Install IIS Without Rerunning Windows NT Setup
	
	Additional query words: revert return un-install undo re-install uninstall sp sp3 akz
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400 kbiis300
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
