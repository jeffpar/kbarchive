---
layout: page
title: "Q229309: Query May Fail for Meta Tags with Values Containing Digits"
permalink: kb/229/Q229309/
---

## Q229309: Query May Fail for Meta Tags with Values Containing Digits

	Article: Q229309
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	- Microsoft Site Server version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Index Server queries and Site Server Search may fail to return all values when
	querying for a meta tag that contains multiple values with digits in the first
	value.
	
	Example:
	
	  META NAME="DESCRIPTION" CONTENT="word1 word2 word3"
	
	In this example, a query for @META_DESCRIPTION does not return "word1."
	
	CAUSE
	=====
	
	The Intelliscope word breaker is tokenizing the first value correctly; however,
	the first value is discarded from the results (token queue). The first value is
	discarded because it's recognized as a noise word and the Intelliscope word
	breaker is initialized with an option to clear out the token queue, thus it
	eliminates the noise word.
	
	RESOLUTION
	==========
	
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  02/09/99 07:42p   5.00.1975.1  205,584 Infosoft.dll  i386
	  02/09/99 07:42p   5.00.1975.1  429,328 Infosoft.dll  alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Index Server version 2.0.This
	problem has been corrected in Windows 2000 Indexing Service.
	
	MORE INFORMATION
	================
	
	Infosoft.dll has been modified to initialize the Intelliscope word breaker
	without requesting it to clear out items in the token queue. This modification
	is scheduled to be included in Windows NT 4.0 Service Pack 6.
	
	NOTE: This hotfix should be removed before installing Windows NT 4.0 Service Pack
	6 due to a version mismatch that may prevent the tested Infosoft.dll
	modifications in Service Pack 6 from begin installed.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbSiteServSearch kbIdxServSearch kbAudDeveloper kbIdxServ200 kbSiteServ300
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
