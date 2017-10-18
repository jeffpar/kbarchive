---
layout: page
title: "Q167395: RIP Routes May Expire Early When Running Windows NT 4.0 RIP"
permalink: kb/167/Q167395/
---

## Q167395: RIP Routes May Expire Early When Running Windows NT 4.0 RIP

	Article: Q167395
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, view the "Restoring
	the Registry" Help topic in Regedit.exe or the "Restoring a Registry Key"
	Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	Routes may appear in the route table as having a metric of 16. A Routing
	Information Protocol (RIP) route with a metric of 16 is defined as
	"unreachable." This can cause difficulties with connectivity to remote resources
	or can cause connections to use another router.
	
	CAUSE
	=====
	
	There is a problem in Iprip.dll that causes route entries to expire, thus
	causing routes to time out early. Additionally, for very low values of
	RouteTimeOut, it may still be necessary to make a registry change to prevent
	early route expiration, as described here.
	
	For more information on RouteTimeOut, please see the following article in the
	Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q169161
	  TITLE : Registry Parameters for RIP for IP version 1
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	After applying the hotfix, if you have modified the RouteTimeOut registry value
	to time out routes in less than the default value of 180 seconds, it may be
	necessary to adjust the granularity of the timeout routine. This can be
	accomplished with the new MaxTimedOpsInterval registry parameter, as follows:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" Help topic in Registry Editor (Regedit.exe) or the "Add and Delete
	Information in the Registry" and "Edit Registry Data" Help topics in
	Regedt32.exe. Note that you should back up the registry before you edit it.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Go to the following subkey in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Iprip
	  \Parameters\MaxTimedOpsInterval
	
	  NOTE: The above registry key is one path; it has been wrapped for readability.
	
	3. Click Edit, click Add Value and then enter the following information:
	
	     Parameter Type: REG_DWORD
	     Default:        10 (seconds)
	     Range:          1-0xffffffff
	     Description:    This registry value sets the maximum amount of time
	                     allowed between invocations of the routine that
	                     performs route maintenance. In effect, it controls
	                     the granularity of the amount of time that can be
	                     decremented from each route's expiration time. It
	                     should be set to a value less than the difference
	                     between RouteTimeOut and the RIP announcement
	                     interval. Microsoft does not recommend setting the
	                     parameter to any value greater than the default of 10
	                     seconds.
	
	4. Exit Registry Editor.
	
	For example, if you set the RouteTimeOut value to its minimum of 20 seconds and
	your router(s) sends RIP announcements every 15 seconds, this value should be
	set to 4 seconds or less.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	
	Additional query words: poison route timeout sixteen
	
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
