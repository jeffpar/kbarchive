---
layout: page
title: "Q214555: RADIUS Server Fails to Authenticate Users in a Remote Domain"
permalink: /kb/214/Q214555/
---

## Q214555: RADIUS Server Fails to Authenticate Users in a Remote Domain

	Article: Q214555
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Authentication Server (RADIUS) can be used to authenticate
	remote dial-in users from another domain if the Radius server's domain trusts
	the user's domain.
	
	To successfully authenticate users from a domain other than the RADIUS server's
	domain, the user name supplied should be in the form of domain\user and the
	Radius server's domain should trust the user's domain.
	
	However, when you dial into a Routing and Remote Access server that is using a
	Radius server for authentication, cross-domain authentication may fail even when
	you specify the user name in the domain\user format.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Routing and Remote
	Access Service Update for Windows NT Server 4.0. This problem was first
	corrected in Windows NT version 4.0 Service Pack 5.
	
	
	MORE INFORMATION
	================
	
	When installing the hotfix using Service Pack or hotfix.exe or hfx.exe the
	following registry entries are added automatically. But, if applying the fix
	manually then the following registry changes need to be done manually:
	
	1. Start Registry Editor (Regedt32.exe).
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\RAS\Radius
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  
	
	  Value Name: DoNotStripDomainName      
	  Data Type:  REG_DWORD
	  Value:      1
	
	4. Quit Registry Editor.
	
	Additional query words: rras
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
