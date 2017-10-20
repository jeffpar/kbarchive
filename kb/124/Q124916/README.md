---
layout: page
title: "Q124916: Some Client Applications Fail When Writing to Windows NT"
permalink: /kb/124/Q124916/
---

## Q124916: Some Client Applications Fail When Writing to Windows NT

{% raw %}

	Article: Q124916
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some applications running from a Windows for Workgroups or LAN Manager client
	fail when they attempt to write to a file located on a Windows NT version 3.5
	server (whether it is a Windows NT Server version 3.5 or a Windows NT
	Workstation version 3.5 machine acting as the server). The application may
	report this error in various ways, such as reporting a sharing violation,
	reporting that they cannot write the file, and so forth. These same
	applications, however, do not fail in this manner when they write a file to a
	Windows NT version 3.1 server.
	
	
	CAUSE
	=====
	
	There is an optimization in Windows NT version 3.5 which controls whether or not
	a file is actually closed on the server when requested to do so by the client.
	This optimization is controlled by the Registry parameter, CachedOpenLimit. If
	the server owns an oplock on a file when the client closes it, although the
	server will return the Close Server Message Block (SMB) response indicating that
	the file has been closed, it will keep the file open locally (that is, it
	removes the RFCB, but maintains the LFCB and does not issue the local NtClose()
	request), on the assumption that the client may soon reopen the file. If the
	client does reopen the file, this greatly reduces the time required to respond
	to the request.
	
	
	This optimization may fail to work correctly depending on how the file has been
	opened by the application. In many cases this can only be determined correctly
	by analyzing a trace of the network traffic between the client and the server
	while running the application. However, a quick test can be performed by
	disabling this optimization and not caching open files. To disable caching open
	files on the server as a test, follow these steps:
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	1. Start the Registry Editor (REGEDT32.EXE)
	
	2. Find the following key:
	
	  \HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	  \LanmanServer\Parameters
	
	3. Add the following entry:
	
	  Value Name: CachedOpenLimit
	  Data Type: REG_DWORD
	  Data: 0
	
	  NOTE: The default value for CachedOpenLimit is 5 remote file control blocks
	  (RFCBs) per connection.
	
	4. Exit the Registry.
	
	5. Shutdown and restart Windows NT.
	
	
	WORKAROUND
	==========
	
	You can work around this problem by using the above directions to disable the
	CachedOpenLimit optimization.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: wfw wfwg prodnt access denied share locked foxpro fox pro setup wizard oplocks oplock
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	

{% endraw %}
