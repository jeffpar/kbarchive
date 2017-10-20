---
layout: page
title: "Q193843: Demand Dial Fails to Connect When Using Two-Way Authentication"
permalink: /kb/193/Q193843/
---

## Q193843: Demand Dial Fails to Connect When Using Two-Way Authentication

{% raw %}

	Article: Q193843
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Demand Dial Interface with "Use two-way authentication" enabled is
	initiated, you fail to connect and receive the following:
	
	  Event ID   : 20111
	  Source     : Router
	  Type       : Error
	  Description: A Demand Dial connection to the remote interface %Name% on
	               port %Name% was successfully initiated but failed to
	               complete successfully because of the following error: The
	               remote computer refused to be authenticated using the
	               configured authentication protocol. The line has been
	               disconnected.
	
	Routing and RAS Administrator displays the following error message:
	
	  An error occurred while connecting the interface...
	  The remote computer refused to be authenticated using the configured
	  authentication protocol. The line has been disconnected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Routing and Remote Access
	Service for Windows NT Server version 4.0.
	
	This problem has been corrected in the RRAS Upgrade for Windows NT Server 4.0
	Hotfix Pack 3.0 or later. You can obtain this update from Microsoft's FTP site
	on the Internet at the following location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/nt40/hotfixes-postSP3/rras30-fix/
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q189594 RRAS Upgrade for WinNT Server 4.0 Hotfix Pack 3.0 Release Notes
	
	Additional query words: ntrouter steel head steelhead rras
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbAudDeveloper kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
