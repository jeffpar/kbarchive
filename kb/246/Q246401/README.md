---
layout: page
title: "Q246401: MS99-061: IIS May Improperly Parse Specific Escape Characters"
permalink: /kb/246/Q246401/
---

## Q246401: MS99-061: IIS May Improperly Parse Specific Escape Characters

{% raw %}

	Article: Q246401
	Product(s): Internet Information Server
	Version(s): 3.0,4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbSecurity kbOSWinNT400sp4 kbiis400 kbOSWinNT400sp6 kbWinNT400PreSP7Fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Site Server version 3.0 
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RFC 1738 specifies that Web Servers should allow hexadecimal digits to be input
	in URLs by preceding them with the so-called "escape" character, a percent
	sign.
	
	Microsoft Internet Information Server (IIS) complies with the RFC 1738
	specification, but also accepts characters after the percent sign that are not
	hexadecimal digits. Some of these translate to printable ASCII characters, and
	this could provide an alternate means of specifying files in URLs.
	
	It is possible when using the Internet Database Connector (IDC) to create links,
	or you are using the return value arguments passed to other documents. When this
	happens you may be unable to pass arguments that contain spaces.
	
	IIS 4.0 may improperly translate non-hexadecimal characters preceded by a percent
	sign. For example %3p is translated into an \\\"I\\\".
	
	The vulnerability does not affect IIS; even specifying a file name through this
	alternate method does not bypass IIS access controls. However, third-party
	software that runs atop IIS but does not perform canonicalization, is affected
	by it.
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  US English:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16357)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16358)
	
	  Dutch:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18985)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18984)
	
	  French:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18983)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18982)
	
	  German:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16359)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16360)
	
	  Japanese:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16361)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16362)
	
	  Korean:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16363)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16364)
	
	  Portuguese (Brazilian)
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18979)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18978)
	
	  Simplified Chinese:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16351)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16354)
	
	  Spanish:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18981)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18980)
	
	  Traditional Chinese:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16355)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=16356)
	
	  Swedish:
	
	  x86: DownloadDownload Unschx4i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18987)
	  Alpha: DownloadDownload Unschx4a.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=18986)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	For related information about this problem, please visit the following Microsoft
	Web site:
	
	  http://www.microsoft.com/security/bulletins/MS99-061.asp
	
	For additional security-related information about Microsoft products, please
	visit the following Microsoft Web site:
	
	  http://www.microsoft.com/security/
	
	Additional query words: iisscript asp iiswww iisvirtual security_patch tsesrp
	
	======================================================================
	Keywords          : kbSecurity kbOSWinNT400sp4 kbiis400 kbOSWinNT400sp6 kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbSiteServ300
	Version           : :3.0,4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
