---
layout: page
title: "Q278857: Description of Updates to Internet Authentication Service"
permalink: /kb/278/Q278857/
---

## Q278857: Description of Updates to Internet Authentication Service

{% raw %}

	Article: Q278857
	Product(s): Microsoft Windows NT
	Version(s): 1.0,4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbtool
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT version 4.0 Option Pack 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article discusses Microsoft Internet Authentication Service (IAS) and its
	updates. Specifically, this article discusses the changes made to the Challenge
	Handshake Authentication Protocol (CHAP) hotfix that is discussed in the
	following Microsoft Knowledge Base article:
	
	  Q197506 CHAP Update for IAS (Windows NT 4.0 Radius Server) Authentication to
	  Windows NT 4.0 Domain Controllers
	
	MORE INFORMATION
	================
	
	IAS may send unwanted validation requests to the primary domain controller (PDC)
	in the dial-in user's domain. These requests may result in unnecessary wide area
	network (WAN) traffic, depending upon your computer's domain configuration.
	
	Article Q197506 refers to previous changes that were made to IAS. Because these
	changes were made, IAS validates whether or not a user account has remote access
	server dial-in permissions. The basic Option Pack version of IAS does not make
	this check. However, these checks are made only against the PDC in the user's
	domain. This behavior is caused by limitations of the remote access functions
	that are used.
	
	Dial-in Permission Check
	------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The new dial-in permission check is implemented as a radius authentication
	extension. You can completely disable this validation, however, by following
	these steps:
	
	1. Locate the ExtensionDLLs value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\AuthSrv\Parameters
	
	2. Rename the ExtensionDLLs value to ExtensionDLLs.save.
	
	3. Quit and restart IAS for the preceding change to take effect. This procedure
	  bypasses the extension functions contained within the Authsam.dll
	  dynamic-link library (DLL).
	
	Worse-Case Scenario for IAS
	---------------------------
	
	The worst-case scenario for IAS is illustrated in this example:
	
	IAS runs on a backup domain controller (BDC) in the <domain1> domain. This
	BDC is on the same subnet as a BDC for the <domain2> domain. The client
	dials into the system with the account name "<domain2>\User". In this
	situation, the PDC for the <domain2> domain is at another site across a
	WAN. The IAS server queries the remote <domain2> PDC to check the user's
	dial-in permission settings. Ideally, the IAS server would have checked the
	local BDC for the <domain2> domain.
	
	For additional information about Windows NT Option Pack, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words: Radius Browser SP5 SP6
	
	======================================================================
	Keywords          : kbenv kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNT400OptionPack
	Version           : :1.0,4.0,4.0 SP6a
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
