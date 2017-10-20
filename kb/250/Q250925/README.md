---
layout: page
title: "Q250925: ASP Refresh Problems with IIS and Network Appliance File Server"
permalink: /kb/250/Q250925/
---

## Q250925: ASP Refresh Problems with IIS and Network Appliance File Server

{% raw %}

	Article: Q250925
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.0,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,5.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes possible problems that are related to using a Network
	Appliance file server in a mixed environment with Windows NT Server. This
	article refers to Internet Information Server (IIS) 4.0 as the affected software
	that is running on Microsoft Windows NT, but this information can apply to any
	Win32-based program that connects to a NetApp file server.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When a Windows NT-based client computer connects to a NetApp file server, the
	client may receive the following error message:
	
	  Error 1721: Not enough resources are available to complete this operation.
	
	Note that this is what is returned from the client redirector to the
	Windows-based program. The error message that is displayed by the client may and
	probably will be different.
	
	This is most likely to occur with Directory Change notifications when connecting
	to a UNC address. The problem is that the NetApp file server negotiates low
	LongTermEntries thresholds with the Windows NT-based client; when the client
	reaches this threshold, the Windows NT redirector returns an error to the
	Windows-based program, stating that it is unable to post change notifications to
	the server.
	
	Although this may appear to be a Windows NT issue, the problem is with the file
	server. When this issue occurs, it looks as if the client software (IIS) is not
	updating content, but in reality the server negotiated the limit; the client
	only enforces this limit by returning an error to the Windows-based program.
	
	A fix for this issue is available to Network Appliance customers. The fix is
	contained in patch releases 5.3.4R2P1 and 5.3.4R2P2. The fix will be in all
	subsequent patch releases for 5.3.4 and in subsequent maintenance releases as
	well. The patch releases are available from the Network Appliance Web site.
	
	As a troubleshooting step and/or workaround, disable ASP and static file
	caching.
	
	To disable ASP file caching, perform the following steps:
	
	1. Open the Internet Service Manager (ISM).
	
	2. Right-click the <computer name>, and then click Properties.
	
	3. Click the Edit button to edit the WWW Service Master Properties.
	
	4. On the Home Directory tab, click the Configuration button.
	
	5. On the Process Options tab, click the "Do not cache ASP files" option.
	
	6. Click Apply, click OK to save your changes, and then restart IIS.
	
	To disable static file caching, you must add the following value to the following
	registry key:
	
	  HKLM\System\CurrentControlSet\Services\Inetinfo\Parameters DisableMemoryCache
	
	  REG_DWORD: 1
	
	For additional information on this setting, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q182626 Access Is Denied When Attempting to Put Files on FTP Server
	
	
	REFERENCES
	==========
	
	To obtain the Network Appliance patch that is referred to in this article, visit
	the Network Appliance Web site for more information:
	
	  http://www.netapp.com
	
	Microsoft provides third-party contact information to help you find technical
	support. This contact information may change without notice. Microsoft does not
	guarantee the accuracy of this third-party contact information.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbenv 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbiis400 kbiis300 kbWinNTSEnt400SP6a
	Version           : :2000,3.0,4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a,5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
