---
layout: page
title: "Q157815: Service Control Manager Event 7003 and 7024 (2105)"
permalink: /kb/157/Q157815/
---

## Q157815: Service Control Manager Event 7003 and 7024 (2105)

{% raw %}

	Article: Q157815
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, the following message appears:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	Event Viewer shows a Service Control Manager event number 7003 on Windows NT 3.51
	and 7024 on Windows NT 4.0.
	
	With Windows NT 3.51, this message is explained by the following:
	
	  The Messenger service depends on the following nonexistent service:
	  NetBIOS.
	
	With Windows NT 4.0, this message is explained by the following:
	
	  The Messenger service terminated with service-specific error 2105.
	
	You can obtain further information on Windows NT 4.0 by using the NET HELPMSG
	command. Error message 2105 is explained by the following:
	
	  A network resource shortage occurred.
	  EXPLANATION
	  The network hardware could not access the resources it needed.
	  ACTION
	  Try the command again later.
	
	CAUSE
	=====
	
	This error can occur if the NetBIOS interface is missing from the Software tab
	(in Control Panel, double-click Network) in Windows NT 3.51, or from the
	Services tab (in Control Panel, double-click Network) in Windows NT 4.0, or if
	the NetBIOS interface is not bound.
	
	RESOLUTION
	==========
	
	Windows NT 3.51
	---------------
	
	In Control Panel, double-click the Network icon. On the Software tab, click Add
	and add NetBIOS Interface.
	
	Windows NT 4.0
	--------------
	
	In Control Panel, double-click the Network icon. On the Services tab, click Add
	and add NetBIOS Interface.
	
	If NetBIOS Interface is already installed, confirm that there is a protocol
	binding to the adapter. In both Windows NT 3.51 and 4.0, you can check the
	protocol binding on the Bindings tab (in Control Panel, double-click Network).
	If no protocol is bound to the adapter, remove the current protocols, and add
	them back in.
	
	If this issue continues to occur, follow these steps:
	
	1. Uninstall the NetBIOS Interface, and then restart your computer.
	
	2. Reinstall the NetBIOS Interface, reapply the latest Windows NT Service Pack
	  if applicable, and then restart your computer.
	
	Additional query words: prodnt err msg
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
