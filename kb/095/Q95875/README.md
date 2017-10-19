---
layout: page
title: "Q95875: WFWG Err Msg: &quot;No Response from File Server&quot; with ROUTE.COM"
permalink: /kb/095/Q95875/
---

## Q95875: WFWG Err Msg: &quot;No Response from File Server&quot; with ROUTE.COM

	Article: Q95875
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Microsoft Windows for Workgroups version 3.10 with Novell
	NetWare connectivity installed, you may receive one of the following error
	messages when you attempt to connect to a NetWare server:
	
	  No Response From File Server
	
	  -or-
	
	  File Server Not Found
	
	CAUSE
	=====
	
	This error message is caused by using a token ring network with a driver on the
	Novell NetWare server that does not support source routing (for example, IBM
	token ring drivers prior to version 2.4).
	
	WORKAROUND
	==========
	
	Remove the ROUTE.COM statement from the AUTOEXEC.BAT file.
	
	Additional query words: 3.10 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
