---
layout: page
title: "Q305979: PRB: IIS 4.0 Hotfixes Do Not Appear When Running Hotfix.exe /L"
permalink: /kb/305/Q305979/
---

## Q305979: PRB: IIS 4.0 Hotfixes Do Not Appear When Running Hotfix.exe /L

	Article: Q305979
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install an Internet Information Server (IIS) 4.0 hotfix, the hotfix
	does not appear in the list of installed hotfixes when you run Hotfix.exe /L.
	
	CAUSE
	=====
	
	The Hotfix.inf file did not include a registry entry for the service pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The Hotfix.inf file will be updated, and subsequent IIS 4.0 hotfixes will not
	have this problem.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
