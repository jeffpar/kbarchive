---
layout: page
title: "Q163761: ASP Page Not Update Even if File Included in it Has Been Changed"
permalink: kb/163/Q163761/
---

## Q163761: ASP Page Not Update Even if File Included in it Has Been Changed

	Article: Q163761
	Product(s): Internet Information Server
	Version(s): winnt:3.0; :1.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 3.0 
	- Microsoft Active Server Pages, version 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Active Server Page (ASP) page will not update even if the file
	included in it has been changed. No problem exists if the file included in the
	ASP file is in the same virtual root as the ASP file.
	
	WORKAROUND
	==========
	
	Put the included files in the same virtual root as the ASP file. Included files
	and the ASP file can be in different subdirectories as long as they share the
	same virtual root.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Server version 3.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: iis
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis300 kbASP100
	Version           : winnt:3.0; :1.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
