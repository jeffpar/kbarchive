---
layout: page
title: "Q305661: Retried COM Function Calls Using IMessageFilter May Cause a Leak"
permalink: /kb/305/Q305661/
---

## Q305661: Retried COM Function Calls Using IMessageFilter May Cause a Leak

	Article: Q305661
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An event handle leak and a memory leak may occur when you are using
	IMessageFilter to handle incoming COM calls. Use the hotfix that is described in
	this article only if all of the following conditions exist:
	
	- The client implements IMessageFilter and SERVERCALL_RETRYLATER is returned in
	  the implemented IMessageFilter::HandleInComingCall function.
	
	- The IMessageFilter::HandleInComing call in the client is called as a result
	  of the COM layer synchronizing calls because of cross-apartment
	  communication. An example of this is a single-threaded apartment (STA) client
	  process calling out a multiple-threaded apartment (MTA) COM server process
	  and the MTA COM server process calling back into the STA client process
	
	- The client that implements IMessageFilter is running on Windows NT 4.0. If
	  the client is running on Microsoft Windows 2000, the leak does not occur.
	
	- The client process has a visible handle leak that you can observe by using a
	  process-monitoring tool such as Windows Task Manager.
	
	- The client process has a visible memory leak that you can observe by using a
	  process-monitoring tool such as Windows Task Manager.
	
	CAUSE
	=====
	
	This issue is caused by a problem in the COM run-time in Windows NT 4.0.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version        Size       File name  Platform
	  -----------------------------------------------------------------
	  29-Aug-2001  20:44  4.0.1381.7102    701,200  Ole32.dll  i386
	  29-Aug-2001  20:44  4.0.1381.7102    107,280  Rpcss.exe  i386
	  24-Aug-2001  03:26  4.0.1381.7102  1,239,824  Ole32.dll  Alpha
	  24-Aug-2001  03:26  4.0.1381.7102    183,568  Rpcss.exe  Alpha
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
