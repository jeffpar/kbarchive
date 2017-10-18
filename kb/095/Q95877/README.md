---
layout: page
title: "Q95877: WFWG: MS-DOS Applications May Return FCB UNAVAILABLE Error"
permalink: kb/095/Q95877/
---

## Q95877: WFWG: MS-DOS Applications May Return FCB UNAVAILABLE Error

	Article: Q95877
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running some earlier MS-DOS-based applications with Windows for Workgroups
	running in enhanced mode and from a remote network drive, you may receive the
	following error message:
	
	  FCB UNAVAILABLE
	  Abort, Fail?
	
	WORKAROUND
	==========
	
	To work around this error message, do either of the following:
	
	- Run the MS-DOS-based application from a local drive.
	
	  -or-
	
	- Start the Real Mode Redirector by typing "net start workstation" (without the
	  quotation marks) at an MS-DOS command prompt. Run the application with
	  Windows for Workgroups running in standard mode.
	
	  -or-
	
	- Start the Full Redirector by typing "net start full" (without the quotation
	  marks) at an MS-DOS command prompt.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1. This problem does not occur in later versions of the product.
	
	Additional query words: 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
