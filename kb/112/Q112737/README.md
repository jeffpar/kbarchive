---
layout: page
title: "Q112737: NET START SERVER Err Msg: Cannot Share (Error 2119)"
permalink: kb/112/Q112737/
---

## Q112737: NET START SERVER Err Msg: Cannot Share (Error 2119)

	Article: Q112737
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you type "net start server" (without the quotation marks) at the MS-DOS
	command prompt, you may receive the following messages if you have created four
	or more shares:
	
	- Cannot Share (ERROR 2119)
	
	- Insufficient Memory to perform this operation
	
	CAUSE
	=====
	
	The maximum number of shares the MS-DOS peer server can support by default is
	three.
	
	WORKAROUND
	==========
	
	To work around this problem, add the MaxShares= entry to the [network] section
	of the SYSTEM.INI file to increase the maximum number of supported shares.
	
	For example:
	
	     [network]
	     MaxShares=10
	
	Additional query words: wgao 3.11 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
