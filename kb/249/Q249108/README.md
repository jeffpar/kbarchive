---
layout: page
title: "Q249108: Registry Data Is Viewable By All Users During Rdisk Repair Updat"
permalink: /kb/249/Q249108/
---

## Q249108: Registry Data Is Viewable By All Users During Rdisk Repair Updat

{% raw %}

	Article: Q249108
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbtool kbWinNT400PreSP7Fix kbgraphxlinkcritical
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Rdisk tool to update the repair information on a computer that
	is running Windows NT 4.0, a temporary file is created that enumerates all of
	the registry hives and their current settings. The permissions on this file do
	not prevent anyone from reading or changing the temporary file's contents while
	Rdisk is running.
	
	When the Rdisk tool completes the update procedure, the temporary file is
	deleted. However, if the Rdisk tool is interrupted or ends abnormally (requiring
	a restart), the file may still be accessed after the computer is rebooted. The
	file can also be read while the Rdisk tool is running.
	
	RESOLUTION
	==========
	
	Windows NT 4.0 and Windows NT 4.0, Enterprise Edition
	-----------------------------------------------------
	
	To resolve this problem, obtain the individual package referenced below or obtain
	the Windows NT 4.0 Security Rollup Package. For additional information on the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  x86: DownloadDownload Q249108i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=17745)
	
	  Alpha: DownloadDownload Q249108a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=17747)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time     Size      File name   Platform
	  ----------------------------------------------------
	  01/02/2000   03:35p    68,368   Rdisk.exe   x86
	  01/02/2000   03:34p   137,488   Rdisk.exe   Alpha
	
	
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	The following file is available for download from the Microsoft Download Center:
	
	  x86: DownloadDownload Q249108i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=17384)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	STATUS
	======
	
	Windows NT 4.0 and Windows NT 4.0, Enterprise Edition
	-----------------------------------------------------
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT Server 4.0, Terminal Server Edition. This problem
	was first corrected in Windows NT Server version 4.0, Terminal Server Edition
	Service Pack 6.
	
	MORE INFORMATION
	================
	
	For related information on this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms00-004.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbWinNT400PreSP7Fix kbgraphxlinkcritical 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
