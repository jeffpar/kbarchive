---
layout: page
title: "Q222483: SBS: Services Do Not Work After Installing Service Pack 3"
permalink: /kb/222/Q222483/
---

## Q222483: SBS: Services Do Not Work After Installing Service Pack 3

	Article: Q222483
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0,4.0a
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbui
	Last Modified: 28-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft BackOffice Small Business Server versions 4.0, 4.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 3 (SP3) to a Small Business Server
	(SBS) version 4.0-based or 4.0a-based computer, you may experience performance
	problems and the following services may no longer function properly:
	
	- Remote Access service
	
	- Modem Sharing
	
	- Fax Server
	
	- Microsoft Internet Information Server 3.0 and 4.0
	
	- Microsoft Proxy Server 1.0 and 2.0
	
	- The Manage Server Console
	
	Small Business Server-specific RAS files are overwritten by the Service Pack 3
	for Windows NT 4.0 installation. Because RAS is directly affected, the services
	listed above may no longer function properly depending on how the server is set
	up.
	
	CAUSE
	=====
	
	This problem can occur after you manually apply Windows NT 4.0 Service Pack 3 to
	your SBS version 4.0 or 4.0a-based computer. When you do so, some SBS files are
	overwritten with incorrect versions.
	
	RESOLUTION
	==========
	
	To work around this problem, use any of the following methods:
	
	- If Service Pack 3 has only been applied once and the "Create uninstall
	  directory" option was selected during the installation, run Service Pack 3
	  Setup again and choose the "Uninstall a previously installed Service Pack" to
	  roll back Small Business Server to the SBS-specific version of Service Pack
	  3.
	
	- Restore a backup of your SBS computer made before you applied Windows NT 4.0
	  Service Pack 3.
	
	- Reinstall SBS version 4.0 or 4.0a.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional related information, please see the following articles in the
	Microsoft Knowledge Base:
	
	  Q194343 Small Business Server 4.0: Differences and Limitations
	
	  Q190152 Requirements to Install Updated SPs and Add-ons on SBS
	
	Additional query words: smallbiz bof bos 4.00 sp3
	
	======================================================================
	Keywords          : kbnetwork kbtool kbui 
	Technology        : kbAudDeveloper kbSBServSearch kbSBServ400 kbSBServ400a
	Version           : winnt:4.0,4.0a
	Issue type        : kbprb
	
	=============================================================================
	
