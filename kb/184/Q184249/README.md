---
layout: page
title: "Q184249: XCLN: Setup Fails Installing from ODK Over Old Installation"
permalink: /kb/184/Q184249/
---

## Q184249: XCLN: Setup Fails Installing from ODK Over Old Installation

{% raw %}

	Article: Q184249
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
	
	If you use the Microsoft Outlook 98 Deployment Kit (ODK) on the April 1998
	Select compact disc (Odkwiz.exe, version 8.5.5104.7) and do a customized
	installation of Microsoft Outlook 98 over a previous installation of Outlook 98,
	setup fails. The setup failure message may indicate that Schedule+ and any other
	custom components are not installed.
	
	RESOLUTION
	==========
	
	Remove Outlook 98 and rerun your customized setup.
	
	1. Click the Start button, point to Settings, and then click Control Panel.
	
	2. Double-click the Add/Remove Programs icon.
	
	3. Select Microsoft Outlook 98 in the Install/Uninstall list, and click
	  Add/Remove.
	
	4. Click Remove Outlook 98.
	
	5. After Outlook 98 is removed, run setup again from your customized Outlook 98
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
