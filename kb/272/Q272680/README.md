---
layout: page
title: "Q272680: SNMP Service Does Not Start or Hangs on Shutdown"
permalink: /kb/272/Q272680/
---

## Q272680: SNMP Service Does Not Start or Hangs on Shutdown

{% raw %}

	Article: Q272680
	Product(s): Microsoft Windows NT
	Version(s): winnt:1.2,4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Systems Management Server version 1.2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SNMP service may not start, or may stop responding (hang) on shutdown or
	when you manually stop the service by using the Services tool or the net stop
	snmp command. Also, you may receive the following error message:
	
	  An application error has occurred and a application log is being generated.
	  SNMP.EXE Exception: access violation(0xc0000005), Address: address
	
	CAUSE
	=====
	
	This problem can occur if you previously uninstalled the Systems Management
	Server (SMS) version 1.2 client from your Windows NT Server-based computer. By
	default, SMS 1.2 client Setup installs the Snmpelea.dll file, even if the SNMP
	service is running on the server. Note that this does not occur with SMS 2.0.
	When you uninstall the SMS 1.2 client, the Snmpelea.dll file and its associated
	references in the registry are not removed, and this may cause problems with the
	SNMP service that is still running on the server.
	
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, delete the Snmpelea.dll file after you uninstall the
	client, and then delete its associated registry keys:
	
	1. Delete the %systemroot%\system32\Snmpelea.dll file.
	
	2. Delete the following registry keys, where <REG_SZ:> is the numerical
	  listing of the extension agent:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SNMP_EVENTS
	
	  HKEY_LOCAL_MACHINE\system\CurrentControlSet\Services\SNMP\Parameters\ExtensionAgents\<REG_SZ:>SOFTWARE\Microsoft\SNMP_EVENTS\EventLog
	
	3. Restart the server. Note that if you do not restart the server, event ID 1105
	  ("The SNMP service is ignoring extension agent key
	  SOFTWARE\MICROSOFT\SNMP_EVENTS\EVENTLOG because it is missing or
	  misconfigured") is logged in Event Viewer.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Additional query words: snmpelea dll
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbSMSSearch kbSMS120
	Version           : winnt:1.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
