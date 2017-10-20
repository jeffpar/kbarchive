---
layout: page
title: "Q249841: INFO: How Win9x DS Client Uses AD Site Information"
permalink: /kb/249/Q249841/
---

## Q249841: INFO: How Win9x DS Client Uses AD Site Information

{% raw %}

	Article: Q249841
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbOSWin95 kbOSWin98 kbDSupport
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Windows 2000 Server, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	- Microsoft Windows 2000 Advanced Server, on platform(s):
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Site awareness is a key feature in Directory Services (DS) Client. The following
	article describes new Microsoft Windows 95 and Microsoft Windows 98 behavior in
	locating Domain Controllers (DCs) when the DS Client is installed and the user
	is logged into a Microsoft Windows 2000 domain.
	
	NOTE: The Directory Services Client is included on the Windows 2000 CD-ROM in the
	Clients\Win9x\Dsclient.exe file. You must install the Windows 95 or Windows 98
	DS Client package in order to make use of the functionality described in this
	article.
	
	MORE INFORMATION
	================
	
	Windows 95 and Windows 98 DS Client Logon Behavior
	--------------------------------------------------
	
	The DS Client attempts to find a DC that is in a site closest to the client. When
	a user logs on from Windows 95 or Windows 98 with the DS Client installed, the
	system sends a datagram to all domain controllers in the user's domain. The
	domain controllers may be Windows 2000 domain controllers or pre-Windows 2000
	domain controllers (that is, Microsoft Windows NT version 3.5, 3.51, or 4.0).
	For brevity, we refer to all pre-Windows 2000 domain controllers as Windows NT
	4.0 DCs.
	
	Windows 2000 domain controllers respond to the datagram with information that
	includes the domain controller's Domain Name System (DNS) domain name, the DC's
	site, the client's site, and a flag. Windows NT 4.0 DCs respond as they normally
	do without site information.
	
	If the response from the Windows 2000 DC indicates that client is not in the same
	site as the DC, the client will retry the discovery, by using the DC's DNS
	domain name and client's site name, until either:
	
	1. An appropriate DC (one in the client's site) responds.
	
	2. If no appropriate Windows 2000 DC responds, the client will randomly select a
	  Windows 2000 DC.
	
	3. If no Windows 2000 DC responds, then a Windows NT 4.0 DC will be selected.
	
	The Windows 95 or Windows 98 DS Client prefers to communicate with Windows 2000
	domain controllers over Windows NT 4.0 domain controllers. The Windows 2000
	domain controllers understand site concepts and can refer to other Windows 2000
	domain controllers based on the client's site.
	
	This functionality requires that the only protocol running on the Windows 95- or
	Windows 98-based computer is NetBIOS over TCP (NetBT). NetBEUI and NwLnkNb are
	not allowed.
	
	Windows 95 and Windows 98 DS Client Password Change Behavior
	------------------------------------------------------------
	
	In a pre-Windows 2000 domain password, changes occur only on a primary domain
	controller. In a Windows 2000 domain, any Windows 2000 domain controller can
	make the change. The Windows 95 or Windows 98 DS Client takes advantage of this
	architecture by using the same mechanism to find the DC as is used for logon.
	
	Windows 95 and Windows 98 DS Client Distributed File System (Dfs) Location Behavior
	-----------------------------------------------------------------------------------
	
	The Windows 95 or Windows 98 DS client selects the domain controller based on the
	process described for logon. This domain controller is used for obtaining the
	Dfs information.
	
	Preferred Server Registry Entry
	-------------------------------
	
	You may specify the preferred server to logon. If you specify this entry, the DS
	Client will honor this request for logon. The Dfs and Change Password will still
	behave as described in this article, regardless of whether or not the registry
	is present.
	
	Windows 95 Policy Load Balancing
	--------------------------------
	
	By default, Windows 95- and Windows 98-based computers query the Netlogon share
	of the primary domain controller (PDC) for the Config.pol file unless you set
	the registry manually. The Windows 9x DS Client does not change this behavior.
	
	REFERENCES
	==========
	
	For additional information on Preferred Server Registry Entry, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q185969 Domain Controller on Slow Link May Be Used for Domain Validation
	
	For additional information on Windows 95 Policy Load Balancing, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q197986 How to Configure Windows 95 Policies with Load Balancing
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOSWin95 kbOSWin98 kbDSupport 
	Technology        : kbwin2000Search kbwin2000ProSearch
	Version           : WINDOWS:
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
