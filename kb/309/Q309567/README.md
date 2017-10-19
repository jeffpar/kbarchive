---
layout: page
title: "Q309567: Query Returns Empty Results with IS NULL Test Condition"
permalink: /kb/309/Q309567/
---

## Q309567: Query Returns Empty Results with IS NULL Test Condition

	Article: Q309567
	Product(s): Internet Information Server
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbCOMIS kbWin2000sp3fix
	Last Modified: 15-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a query contains a test condition with an IS NULL predicate for a particular
	property, the query may not return any results.
	
	CAUSE
	=====
	
	The query optimizer builds a range of empty to empty for IS NULL predicates. The
	restriction is sent to the engine, which returns a null cursor, and the query
	fails.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size       File name     
	  -------------------------------------------------------
	  10-Nov-2001  00:19  5.0.2195.4620  1,422,608  Query.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	Windows 2000 Service Pack 3.
	
	
	Additional query words: kbIISCom
	
	======================================================================
	Keywords          : kbCOMIS kbWin2000sp3fix 
	Technology        : kbIdxServSearch kbAudDeveloper
	Version           : :3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
