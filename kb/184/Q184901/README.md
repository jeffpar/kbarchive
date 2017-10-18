---
layout: page
title: "Q184901: ASP Searches Return Documents from Non-indexed Directories"
permalink: kb/184/Q184901/
---

## Q184901: ASP Searches Return Documents from Non-indexed Directories

	Article: Q184901
	Product(s): Internet Information Server
	Version(s): WINNT:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Index Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform searches using the sample Active Server Pages (ASP) query page,
	the search results may contain documents from directories marked as unindexed.
	The links returned for these hits will be non-functional.
	
	CAUSE
	=====
	
	This is caused by an error in the sample Query.asp code shipped with Index
	Server.
	
	WORKAROUND
	==========
	
	To work around this problem, you must modify the Query.asp code so that the
	formscope is correctly set.
	
	In the sample Query.asp file, the following code needs to be modified:
	
	     if FormScope <> "/" then
	        util.AddScopeToQuery Q, FormScope, "deep"
	     end if
	
	The "/" on the first line must be changed to "\". After this has been done, the
	queries should work correctly.
	
	This problem only occurs when you are using the ASP index object. If you are
	using the ADO ODBC provider for Index Server, or .htm, .idq, or .htx files, you
	should not have this problem.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbIdxServSearch kbAudDeveloper kbIdxServ200
	Version           : WINNT:2.0
	Issue type        : kbprb
	
	=============================================================================
	
