---
layout: page
title: "Q277776: Services Access Violation Because of Heap Damage"
permalink: /kb/277/Q277776/
---

## Q277776: Services Access Violation Because of Heap Damage

	Article: Q277776
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg tslic_tslic kbWinNT400PreSP7Fixkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a server that hosts RPC server based programs, the Remote Procedure Call
	(RPC) service may stop responding to requests, and you may receive the following
	error message on the server console:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	
	When you receive this error message, the server console may appear to stop
	responding (hang), but the server responds to a TCP/IP ping. Also, network
	connections that are created with the "net use" (without the quotation marks)
	continue to function, but new connections may not succeed.
	
	CAUSE
	=====
	
	This problem can be caused by a heap damage problem in Services.exe that results
	in an access violation error message. The problem causes the RPC service to be
	unable to dispatch work to RPC programs that are running on the server.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0 service pack that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time           Size      File name     Platform
	  ---------------------------------------------------------
	  11/27/00  10:50p         602,384   Rpcrt4.dll    Alpha
	  11/27/00  10:52p         343,312   Rpcrt4.dll    Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg tslic_tslic kbWinNT400PreSP7Fix kbbuglist kbfixlist
	Component         : RPC
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA PPC x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
