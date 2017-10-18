---
layout: page
title: "Q183737: Index Server 2.0 Fails to Install from Add/Remove"
permalink: kb/183/Q183737/
---

## Q183737: Index Server 2.0 Fails to Install from Add/Remove

	Article: Q183737
	Product(s): Internet Information Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Index Server version 2.0 after Microsoft Internet
	Information Server (IIS) version 4.0 has been installed, you may receive the
	following error message:
	
	  IS failed to modify the metabase.
	
	CAUSE
	=====
	
	This error message appears when the script map is larger than 2 KB. This is
	usually the result of installing products that create duplicate script map
	entries.
	
	WORKAROUND
	==========
	
	To allow installation of Index Server, you must remove any duplicate or unused
	entries from the script map and from the Web site master properties. To remove
	entries from the script map, follow these steps:
	
	1. In the Microsoft Management Console, go to the Properties dialog box for your
	  Web site.
	
	2. Select the Home Directory tab, and then click the Configuration button.
	
	3. The Application Mappings dialog box should appear. Review the current
	  mappings and remove any duplicates or mappings that you are not using.
	
	To remove entries from the Web site master properties, follow these steps:
	
	1. Open the Microsoft Management Console (MMC) with the Internet Information
	  Server (IIS) snap-in.
	
	2. In the Internet Services Manager, right-click the server name and click
	  Properties.
	
	3. On the Home Directory tab, click Configuration and remove any duplicate
	  entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server version 2.0.
	
	MORE INFORMATION
	================
	
	Certain applications create duplicate script map entries for each Web site in
	IIS. For example, if you have 50 Web sites, then you would end up with 50
	identical mappings. The 2-KB script map limitation is only for installation of
	Index Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : :2.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
