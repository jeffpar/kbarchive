---
layout: page
title: "Q93248: WFWG Err Msg: Error 2184: The Service Has Not Been Started"
permalink: /kb/093/Q93248/
---

## Q93248: WFWG Err Msg: Error 2184: The Service Has Not Been Started

	Article: Q93248
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The NET STOP command is designed to disable the Windows for Workgroups real mode
	redirector, which is started by typing the following at the MS-DOS command
	prompt:
	
	  net start workstation/full/basic
	
	If you use NET STOP from the Windows for Workgroups MS-DOS command prompt and
	have not previously loaded the real mode redirector, the following error message
	is displayed:
	
	  Error 2184: The service has not been started.
	
	NET STOP logs you off of the network but does not disable the protect mode
	redirector (VREDIR.386). All network options remain available, but you are
	prompted to log on if you attempt to use them.
	
	WORKAROUND
	==========
	
	If you want to disable the protected mode redirector, exit Windows for
	Workgroups.
	
	Microsoft has confirmed this to be a problem in Windows for Workgroups version
	3.1.
	
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
