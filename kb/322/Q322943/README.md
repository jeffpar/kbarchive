---
layout: page
title: "Q322943: Configure Server Extensions Option Is Missing"
permalink: kb/322/Q322943/
---

## Q322943: Configure Server Extensions Option Is Missing

	Article: Q322943
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to configure the FrontPage Server Extensions (FPSE) on the second
	Web site in the Internet Service Manager (ISM), the Configure Server Extensions
	option is missing. The option is available on any site that you create after the
	second Web site.
	
	CAUSE
	=====
	
	This occurs if you have deleted the Administration Web site by using Adsutil or
	MetaEdit 2.1 or 2.2.
	
	RESOLUTION
	==========
	
	To resolve this problem, remove the Administration Web site correctly by using
	the Windows Components Wizard:
	
	1. Click Start, click Settings, and then click Control Panel.
	
	2. Open Add/Remove Programs, and then click Add/Remove Windows Components.
	
	3. In the Components box, click to select Internet Information Services (IIS),
	  and then click Details.
	
	4. In the Subcomponents of Internet Information Services (IIS) box, click to
	  clear the Internet Services Manager (HTML) check box, and then click OK.
	
	  NOTE: Removing the ISM deletes your Web site on instance 2 (W3SVC/2), and you
	  have to re-create this site later manually. Make sure that you really want to
	  do this.
	
	5. Click Next, and then click Finish.
	
	MORE INFORMATION
	================
	
	By default, the Administration Web site does not allow FPSE to be configured, so
	when the site is deleted from the ISM, the next site that is created
	automatically takes its place in the metabase (W3SVC/2). This prevents any site
	that is configured as the second Web site from having FPSE installed.
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
