---
layout: page
title: "Q305359: Incorrect Content Length May Cause Web Services to Fail"
permalink: kb/305/Q305359/
---

## Q305359: Incorrect Content Length May Cause Web Services to Fail

	Article: Q305359
	Product(s): Internet Information Server
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Internet Information Server (IIS) 4.0 may shut down and generate a Dr. Watson
	report when the Web service receives a request with an incorrect Content Length
	in the HTTP Request.
	
	This vulnerability is being actively exploited by the Code Red worm virus. This
	vulnerability has been widely, although incorrectly, reported as being due to a
	flaw in the patch provided in Microsoft Security Bulletin MS01-033
	(http://www.microsoft.com/technet/treeview/default.asp?url=/technet/security/bulletin/MS01-033.asp).
	In fact, this is a completely different and previously unknown vulnerability.
	
	CAUSE
	=====
	
	This problem most often occurs when the Web server is configured to perform Web
	site redirections or when the Web server is configured to respond with an HTTP
	301 redirect or HTTP 302 redirect. It is important to note that this is not the
	default configuration of an IIS 4.0 installation.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems that are determined to be at risk of attack. Please evaluate your
	computer's physical accessibility, network and Internet connectivity, and other
	factors to determine the degree of risk to your computer. Please see the
	associated Microsoft Security Bulletin
	(http://www.microsoft.com/technet/security/bulletin/ms01-044.asp) to help make
	this determination. This fix may receive additional testing at a later time, to
	further ensure product quality. If your computer is sufficiently at risk,
	Microsoft recommends that you apply this fix now.
	
	To resolve this problem immediately, download the fix as instructed below or
	contact Microsoft Product Support Services to obtain the fix. For a complete
	list of Microsoft Product Support Services phone numbers and information on
	support costs, please go to the following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Q301625i.exe now
	  (http://www.microsoft.com/Downloads/Release.asp?ReleaseID=32061)
	
	  NOTE: Q301625is.exe contains the Symbols files.
	
	NOTE: This patch can be installed on systems running Windows NT 4.0 Service Pack
	5 or Windows NT 4.0 Service Pack 6a.
	
	Release Date: August 15, 2001
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Version    Size     File name
	  ------------------------------------------
	  10-Aug-2001  4.2.769.1  229,536  W3svc.dll
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this problem could result in some degree of
	security vulnerability in Internet Information Server 4.0.
	
	MORE INFORMATION
	================
	
	This patch also contains fixes for the problems described in the following
	Microsoft Knowledge Base article:
	
	  Q297860 IIS 5.0 Security and Post-Windows NT 4.0 SP5 IIS 4.0 Patch Rollup
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-044.asp
	
	Installing MS01-033 does not prevent the possibility of this vulnerability
	occurring. You must install the latest IIS 4.0 Security Rollup Package to
	eliminate this vulnerability. The vulnerability discussed in this Knowledge Base
	article is a problem that is simply exposed by the Code Red worm virus; it is
	not the intended results of the virus.
	
	When a request sends data to an IIS 4.0 Web server and the Content Length is set
	to a value lower than the amount of data being sent, an access violation in IIS
	4.0 occurs. When a Web site is set up for Web site redirection or the response
	to the client is a 301 or a 302, the IIS 4.0 system will more than likely fail
	with an access violation. The Code Red worm generates these types of requests
	when it tries to infect new computers. The patch provided in MS01-033 causes the
	requests to be treated as invalid, which prevents the infection. However, if URL
	redirection is enabled, the Web server may fail with an access violation
	followed by a Dr. Watson report.
	
	IIS 5.0 systems are not affected by this newly discovered vulnerability. IIS 4.0
	systems are only affected if they are configured to perform URL redirection,
	which is not the default configuration. Installing this patch resolves this
	vulnerability.
	
	Additional query words: security_patch dos
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbiisSearch kbiis400
	Version           : :4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
