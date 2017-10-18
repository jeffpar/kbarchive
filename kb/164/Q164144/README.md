---
layout: page
title: "Q164144: Perl Engine Does Not Allow Spaces in Directory or Script Name"
permalink: kb/164/Q164144/
---

## Q164144: Perl Engine Does Not Allow Spaces in Directory or Script Name

	Article: Q164144
	Product(s): Internet Information Server
	Version(s): 2.00
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your browser may return the following error message:
	
	  CGI Error
	
	  The specified CGI application misbehaved by not returning a complete
	  set of HTTP headers. The headers it did return are:
	
	  Can't open Perl script "D:\InetPub\wwwroot\": No such file or directory
	
	CAUSE
	=====
	
	The directory name within the Perl script has a space in it, or the script name
	has a space in it.
	
	When you try to run the script, the Perl engine only sees the first half of the
	script name.
	
	WORKAROUND
	==========
	
	Remove any spaces in the directory path names or any spaces in the script name.
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbiisSearch kbiis200
	Version           : 2.00
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
