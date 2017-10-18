---
layout: page
title: "Q168926: BUG: &quot;Error copying sample files&quot; When Copying Samples to Drive"
permalink: kb/168/Q168926/
---

## Q168926: BUG: &quot;Error copying sample files&quot; When Copying Samples to Drive

	Article: Q168926
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbtool kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may be reported when you copy sample files to a hard drive
	with low space available:
	
	  Error copying sample files.
	
	CAUSE
	=====
	
	There is not enough disk space to complete copying all of the sample files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a low space situation on a hard drive. (Making a huge pagefile.sys is
	  easy).
	
	2. Open a topic with samples, and select the Click to open or copy samples....
	  link.
	
	3. When the Sample Application opens, click Copy All.
	
	4. Choose a location on the low-space drive to copy the samples to and click OK.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbtool kbide kbVC kbVC500bug kbVC600bug kbGrpDSTools kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
