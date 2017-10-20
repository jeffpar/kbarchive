---
layout: page
title: "Q279355: Removing MSDE Does Not Remove Registry Key MS_HI_Server_DB"
permalink: /kb/279/Q279355/
---

## Q279355: Removing MSDE Does Not Remove Registry Key MS_HI_Server_DB

{% raw %}

	Article: Q279355
	Product(s): Microsoft SNA Server
	Version(s): 
	Operating System(s): 
	Keyword(s): kbDSupport kbhis2000
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you install Host Integration Server (HIS) 2000, the User Credential
	Database, which is located under the Security Integration option, may not be
	displayed as an installable feature.
	
	CAUSE
	=====
	
	If HIS 2000 and Microsoft Database Engine (MSDE) (which is required for Host
	Security) were previously installed, but later both products were removed, the
	next time you re-install HIS 2000, the User Credential Database is not listed as
	a feature to install. Because this feature is not listed, the Setup program
	assumes that MSDE was already installed on this system, when in fact, it was
	not.
	
	During the process of removing MSDE, the MS_HI_Server_DB registry key was not
	deleted.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem:
	
	1. Delete the MS_HI_Server_DB registry key, which is located as follows:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MicrosoftSQLServer\MS_HI_Server_DB
	
	2. Re-run the HIS 2000 installation.
	
	The User Credential Database now should be listed as an installable feature.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbhis2000 
	Technology        : kbAudDeveloper kbHostIntegServ2000
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
