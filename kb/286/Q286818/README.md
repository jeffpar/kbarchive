---
layout: page
title: "Q286818: IIS: Malformed URL Cause Service Failure in IIS 5.0 &amp; Exch 2000"
permalink: kb/286/Q286818/
---

## Q286818: IIS: Malformed URL Cause Service Failure in IIS 5.0 &amp; Exch 2000

	Article: Q286818
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Internet Information Services (IIS) 5.0 contains a flaw that affects
	the way that a URL is handled if it has a specific construction and its length
	is within a very narrow range of values. If such a URL were repeatedly sent to
	an affected system, a confluence of events could cause a memory allocation error
	that would result in the failure of the IIS service.
	
	IIS 5.0 is affected by the same vulnerability as the Microsoft Exchange 2000
	Server vulnerability that is described in the following article in the Microsoft
	Knowledge Base:
	
	  Q287678 XWEB: Malformed URL Can Cause Service Failure in IIS 5.0 and Exchange
	  2000 Server
	
	Mitigating factors:
	
	- The vulnerability would not enable the attacker to gain any administrative
	  control over the server or to alter any data on it.
	
	- The affected services automatically restart in the event of a failure;
	  therefore, an affected system would resume service almost immediately.
	
	- A successful attack against an Exchange server would only disrupt Web-based
	  mail clients' use of the server. The server would continue to be available
	  for MAPI-based clients such as Microsoft Outlook.
	
	- The ISAPI involved in this vulnerability authenticates the user before
	  servicing the request; therefore, a properly configured Exchange server would
	  be at less risk than an IIS server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	IMPORTANT: Because the flaw occurs in two different code modules, one of which is
	installed as part of IIS 5.0 and both of which are installed as part of Exchange
	2000, it is important for Exchange 2000 administrators to install both the IIS
	and Exchange patches below.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  IIS 5.0:
	  DownloadDownload Q286818_W2K_SP3_x86_en.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=28155)
	
	  Exchange 2000 Server:
	  DownloadDownload Q287678engi386.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=28369)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version      Size     File name
	  -----------------------------------------------------
	  02/01/2001  07:21p  0.9.3940.16  428,816  Httpext.dll
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Internet Information
	Services 5.0. This problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For additional information about how to obtain a hotfix for Windows 2000
	Datacenter Server, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q265173 The Datacenter Program and Windows 2000 Datacenter Server Product
	
	For additional information about how to install multiple hotfixes with only one
	reboot, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q296861 Use QChain.exe to Install Multiple Hotfixes with One Reboot
	
	For more information about this issue, see the following Microsoft Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-014.asp
	
	For additional information about how to install Microsoft Windows 2000 and
	Microsoft Windows 2000 hotfixes at the same time, click the article number below
	to view the article in the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: dos denial of service security_patch
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix kbWin2000SP2Fix kbgraphxlinkcritical 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
