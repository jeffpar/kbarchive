---
layout: page
title: "Q255685: Error Message Discovering &quot;Microsoft DMD&quot; and &quot;Configuration&quot;"
permalink: kb/255/Q255685/
---

## Q255685: Error Message Discovering &quot;Microsoft DMD&quot; and &quot;Configuration&quot;

	Article: Q255685
	Product(s): Microsoft Windows NT
	Version(s): 2.1
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 08-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Metadirectory Services, version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Metadirectory Services (MMS) version 2.1 (build 261), the following
	error message is reported by the Exchange LDAP Management Agent (MA) when you
	are discovering the "Microsoft DMD" and "Configuration" schema containers :
	
	  Unknown LDAP search error - Microsoft DMD
	
	  Unknown LDAP search error - Configuration
	
	CAUSE
	=====
	
	This behavior occurs when you are performing a full discovery on a Microsoft
	Exchange site, beginning at the root. MMS 2.1 does not require that the schema
	be explicitly discovered. In addition, it appears as though these two low-level
	containers on the Exchange site are also invisible to the Exchange
	Administration tool.
	
	RESOLUTION
	==========
	
	In the MA configuration, hard-code the container names that should be excluded
	during the discovery process. Do this by modifying the contents of
	zcLdapExcludedHierarchy:
	
	1. Click the Exchange LDAP Management Agent.
	
	2. In the Actions panel, click Configure MA.
	
	3. Click the Connected Directory Specifics tab.
	
	4. Click the Advanced tab.
	
	5. Click in the "DNs to Exclude during the Discovery" box.
	
	6. Type the distinguished names of the "Microsoft DMD" and "Configuration"
	  objects as they appear in the Exchange site.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: Zoomit Via MA zscript genlogs
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbMMSSearch kbMMS210
	Version           : :2.1
	Issue type        : kbprb
	
	=============================================================================
	
