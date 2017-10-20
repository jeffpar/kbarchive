---
layout: page
title: "Q184250: XCLN: Rerun Outlook 98 Setup Fails on Customized Install"
permalink: /kb/184/Q184250/
---

## Q184250: XCLN: Rerun Outlook 98 Setup Fails on Customized Install

{% raw %}

	Article: Q184250
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 98 Deployment Kit 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Microsoft Outlook 98 Deployment Kit (ODK) on the April 1998
	Select compact disc (Odkwiz.exe, version 8.5.5104.7) and attempt to "Rerun
	Outlook 98" Setup on an ODK-customized installation, setup fails and there is no
	indication that it failed.
	
	RESOLUTION
	==========
	
	Remove Outlook 98 and rerun your customized setup.
	
	1. Click Start, point to Settings, and click Control Panel.
	
	2. Double-click the Add/Remove Programs icon.
	
	3. Select Microsoft Outlook 98 in the Install/Uninstall list, and click
	  Add/Remove.
	
	4. Click Remove Outlook 98.
	
	5. After Outlook 98 is removed, run Setup again from your customized Outlook 98
	  directory.
	
	STATUS
	======
	
	This issue only occurs on the April 1998 Select compact disc distribution of the
	Microsoft Outlook 98 Deployment Kit. Other distributions of the ODK do not
	require the steps in this article.
	
	This issue has been resolved in a newer version of the Outlook 98 Deployment Kit,
	which is available in the May 1998 Select CD Kit.
	
	Additional query words: wizard
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbOutlookDeployKitSearch kbOutlook98DeployKit
	Version           : WINDOWS:98
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
