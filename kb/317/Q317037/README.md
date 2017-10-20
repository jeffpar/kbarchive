---
layout: page
title: "Q317037: &quot;Error 1703&quot; Err Msg When You Install Windows NT 4.0 Option Pack"
permalink: /kb/317/Q317037/
---

## Q317037: &quot;Error 1703&quot; Err Msg When You Install Windows NT 4.0 Option Pack

{% raw %}

	Article: Q317037
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. 
	Before you modify the registry, make sure that you understand how to restore 
	the registry if a problem occurs.
	
	SYMPTOMS
	========
	
	When you install the Windows NT 4.0 Option Pack on a Windows NT Workstation
	4.0-based computer, Peer Web Server does not work and the World Wide Web
	Publishing Service does not start (even though the Microsoft Internet
	Information Services [IIS] Admin service does start). When you attempt to start
	the World Wide Web Publishing Service, you receive the following error message:
	
	  Error 1703: the RPC protocol sequence is not supported.
	
	In the Event Viewer, you may receive the following details:
	
	  Source: Service Control Mar
	  Event ID: 7023
	  Description: The WWW publishing server service terminated with the following
	  error: the RPC protocol sequence is not supported.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove and then reinstall TCP/IP. To do this, follow
	these steps.
	
	NOTE: You must be logged on as a user with Administrator rights to complete these
	steps.
	
	1. Open Control Panel, double-click Network, and then click the Protocols tab.
	
	2. Select TCP/IP Protocol, click Remove, and then click Yes.
	
	3. Click Close, and then click Yes to restart the computer.
	
	4. Log on as a user with Administrator rights.
	
	5. In Control Panel, double-click Network, and then click the Protocols tab.
	
	6. Click Add, select TCP/IP Protocol, and then click OK.
	
	7. If you want to use Dynamic Host Configuration Protocol (DHCP), click Yes when
	  prompted. If you do not want to use DHCP, click No.
	
	8. When prompted, type the path for the Windows NT source files, click Continue,
	  and then click Close.
	
	9. If you are not using DHCP, you are prompted for your TCP/IP configuration
	  information. Enter the appropriate values, and then click OK. If you are not
	  sure what the appropriate values are, contact your network administrator.
	
	10. Click No when you are prompted to restart your computer. If you have
	  installed a Windows NT service pack, you need to reinstall the service pack
	  before you restart your computer.
	
	11. Restart your computer.
	
	If you receive an error message while you remove and reinstall TCP/IP, you may
	need to manually remove TCP/IP from the Windows NT registry.
	
	WARNING: If you modify the registry incorrectly, serious problems may occur that
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems can be solved. Modify the registry at your own risk.
	
	Microsoft recommends that you back up the registry before you modify it. If you
	are running Microsoft Windows NT or Microsoft Windows 2000, also update your
	Emergency Repair Disk (ERD).
	
	For additional information about how to manually remove TCP/IP from the Windows
	NT registry, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q151237 Error Message When Installing TCP/IP or Adding TCP/IP Service
	
	For additional information about how to troubleshoot TCP/IP problems, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q169790 How to Troubleshoot Basic TCP/IP Problems
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
