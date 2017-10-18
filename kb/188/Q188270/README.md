---
layout: page
title: "Q188270: FP97: Cannot View Global IP Restrictions in FrontPage Explorer"
permalink: kb/188/Q188270/
---

## Q188270: FP97: Cannot View Global IP Restrictions in FrontPage Explorer

	Article: Q188270
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194282.
	
	SYMPTOMS
	========
	
	The global IP restrictions on the server are not listed on the Computers tab in
	the Permissions dialog box (click Permissions on the Tools menu).
	
	NOTE: This behavior only occurs in FrontPage when using Microsoft Internet
	Information Server versions 3.0 and earlier. All the NCSA derivatives accurately
	display IP restrictions.
	
	CAUSE
	=====
	
	The information that appears in the Permissions dialog box is pulled from the
	Svcac1.cnf file. The global IP restrictions of the Web servers are stored in the
	server's configuration file rather than the Svcac1.cnf file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q310931 FPSE2000: Where to Find the FrontPage 2000 Server Extensions Resource
	  Kit (SERK)
	
	Additional query words: 97
	
	======================================================================
	Keywords          :  
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
