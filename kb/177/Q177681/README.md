---
layout: page
title: "Q177681: Services Using UNC Names May Fail"
permalink: /kb/177/Q177681/
---

## Q177681: Services Using UNC Names May Fail

{% raw %}

	Article: Q177681
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SUMMARY
	=======
	
	A service uses UNC names to connect to remote resources. The service may fail to
	start when set to automatic.
	
	CAUSE
	=====
	
	The reason for this behavior is that the name of the remote server cannot be
	resolved through DNS because not all network services are initialized when the
	service is started.
	
	MORE INFORMATION
	================
	
	When a connection request comes in and the name would resolve over DNS, the
	"TCP/IP NetBIOS Helper" passes this request to the sockets interface. However,
	this service is one of the last services started in the startup sequence so this
	link may not be available.
	
	For additional information on a related issue regarding the Netlogon service in
	Windows NT 3.51, please see the following article in the Microsoft Knowledge
	Base:
	
	ARTICLE-ID: Q155886
	TITLE : Domain Controller Not Found When Using DNS
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	To resolve this issue, you need to make LAN Manager workstation dependent on
	LMHOSTS. Follow these steps:
	
	1. Start Regedt32.exe.
	
	2. Expand the HKEY_LOCAL_MACHINE registry key to the following subkey:
	
	  SYSTEM\CurrentControlSet\Services\LanManWorkstation
	
	3. In this key, double-click the existing DependOnService entry in the right
	  pane.
	
	4. In the Multi-String Editor, add a line containing the string "LMHOSTS"
	  (without the quotes) and click the OK button.
	
	5. Open the following registry key:
	
	  SYSTEM\CurrentControlSet\Services\LmHosts
	
	6. In the right pane, double-click the existing DependOnGroup value.
	
	7. In the Multi-String Editor, remove the line containing the string
	  NetworkProvider, and then click OK.
	
	8. Restart the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
