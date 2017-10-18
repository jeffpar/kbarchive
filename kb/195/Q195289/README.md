---
layout: page
title: "Q195289: Page Footers Do Not Work on ASP Pages"
permalink: kb/195/Q195289/
---

## Q195289: Page Footers Do Not Work on ASP Pages

	Article: Q195289
	Product(s): Internet Information Server
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You can append page footers in HTML documents; however, this does not work in
	Active Server Pages (ASP) documents.
	
	WORKAROUND
	==========
	
	Although footers cannot be appended automatically, it is possible to manually
	apply the footer to an ASP page using code similar to the following:
	
	     <!--#include virtual="/includepath/footer.inc"-->
	
	MORE INFORMATION
	================
	
	ASP pages are processed before content is displayed to the browser. Appending
	footers increases the amount of processing time, and therefore degrades overall
	Internet Information Server (IIS) performance.
	
	For more information on how to append footers, see the following page in the IIS
	documentation:
	
	  http://localhost/iishelp/iis/htm/core/iicodirf.htm
	
	NOTE: The IIS documentation needs to be installed in order to view this page.
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : WINNT:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
