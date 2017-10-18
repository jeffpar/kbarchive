---
layout: page
title: "Q288406: Red Stop Sign in IIS MMC When Connecting to Virtual Directory"
permalink: kb/288/Q288406/
---

## Q288406: Red Stop Sign in IIS MMC When Connecting to Virtual Directory

	Article: Q288406
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you add a virtual directory to a remote share, a red stop sign with the
	word "Error" inside may appear in the left (scope) pane of the IIS Microsoft
	Management Console (MMC).
	
	CAUSE
	=====
	
	This warning appears because IIS does not support a virtual directory connection
	to a computer in a domain that does not have a trust relationship with the IIS
	domain. You can still use this virtual directory and view its contents.
	
	Additional query words: iis 5 stop sign red vdir virtual directory
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
