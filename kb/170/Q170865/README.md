---
layout: page
title: "Q170865: ErrMsg: Reentrant Call to Interupt Window on Netscape 2.0 (UNIX)"
permalink: kb/170/Q170865/
---

## Q170865: ErrMsg: Reentrant Call to Interupt Window on Netscape 2.0 (UNIX)

	Article: Q170865
	Product(s): Internet Information Server
	Version(s): winnt:2.0,3.0
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg kbinterop
	Last Modified: 02-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 2.0, 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Netscape Navigator version 2.0 on UNIX, you may see the following
	error message when you browse a site that has been created by Microsoft
	FrontPage.
	
	  Reentrant Call to Interupt Window.
	
	
	CAUSE
	=====
	
	The FrontPage editor inserts the following META tag into all new documents:
	
	  <META HTTP-EQUIV="Content-Type" CONTENT="text/html;
	     charset=iso-8859-1">
	
	WORKAROUND
	==========
	
	Remove the META tag or upgrade your UNIX browser to Netscape version 3.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg kbinterop 
	Technology        : kbiisSearch kbiis300 kbiis200
	Version           : winnt:2.0,3.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
