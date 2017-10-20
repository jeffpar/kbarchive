---
layout: page
title: "Q155857: Windows 95 Multiple Provider Router and Network Call Order"
permalink: /kb/155/Q155857/
---

## Q155857: Windows 95 Multiple Provider Router and Network Call Order

{% raw %}

	Article: Q155857
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	Windows 95 provides seamless access to network services and resources using the
	Multiple Provider Router. This article describes the Multiple Provider Router.
	
	MORE INFORMATION
	================
	
	The Multiple Provider Router (MPR) routes incoming network requests to the
	appropriate network provider. It uses the same interface whether one or multiple
	network providers is installed. It also allows for unlimited protected-mode
	network providers as well as one 16-bit network provider.
	
	When multiple network providers are installed, MPR passes the call to each
	installed network provider one at a time, in a defined order. The installed
	network providers are sorted by this defined order when they are loaded.
	Providers with lower values are called before those with higher values. Once a
	network provider returns a successful resolution of a call, additional network
	providers are not tried.
	
	The only method to change the order in which installed network providers are
	called is to modify the Windows 95 registry.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	Network provider information is stored in the following registry branch:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	
	Under the Services branch, there is a CallOrder key for each installed network
	provider. The default CallOrder value for the Novell NetWare network provider is
	00 00 00 20; the default value for the Microsoft network provider is 00 00 00
	40. In this scenario, the NetWare network provider is called before the
	Microsoft network provider because of its lower CallOrder value. The selection
	of the primary client does not affect these settings.
	
	Mpr.dll uses two other components, Mprserv.dll and Mprexe.exe, to facilitate
	faster loading of network providers and routing of network requests. Programs
	link to Mpr.dll (the smaller component), which copies API parameters to shared
	memory and signals a thread in Mprexe.exe to do the work. Mprserv.dll has the
	code to load net providers, route requests, and so on.
	
	======================================================================
	Keywords          : kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
