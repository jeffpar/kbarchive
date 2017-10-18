---
layout: page
title: "Q282060: Resources for Securing Internet Information Services"
permalink: kb/282/Q282060/
---

## Q282060: Resources for Securing Internet Information Services

	Article: Q282060
	Product(s): Internet Information Server
	Version(s): 4.0,5.0
	Operating System(s): 
	Keyword(s): kbDSupport kbiis400 kbiis500
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Internet Information Services to host Web sites, it is important to
	protect the server from unknown, and potentially malicious, users. This article
	provides references to use in this vital task.
	
	MORE INFORMATION
	================
	
	The most comprehensive information on securing Web applications is available
	in:
	
	  Designing Secure Web-Based Applications for Microsoft<AE> Windows 2000
	  http://mspress.microsoft.com/books/4293.htm
	  ISBN: 0-735-60995-0
	  Authors: Michael Howard, Richard Waymire, Marc Levy
	  Publisher: Microsoft Press, July 2000
	
	The following references are available online from the Microsoft TechNet Web
	site:
	
	As a best practice, Microsoft recommends installing the latest service pack and
	security updates for IIS, as well as any other components running on the web
	server. Although many customers utilize the online Security Bulletin Search as a
	reference for what hotfixes to apply for a given Product and Service Pack
	choice, the information provided by that tool does not take into account
	cumulative rollups (it shows all updates released after the specified Service
	Pack). For that reason, Microsoft recommends that customers using IIS determine
	the required updates using the HFNetChk tool, which is available in the
	following article:
	
	  Q303215 Microsoft Network Security Hotfix Checker (Hfnetchk.exe) Tool Is
	  Available
	
	Once the latest Service Pack and all of the latest product updates (hotfixes)
	have been applied, system level security should be applied to the web server.
	
	
	The IIS Lockdown Wizard provides a "wizard" interface to configure many of the
	security recommendations that are published in the Secure Internet Information
	Services 5 Checklist and the Microsoft Internet Information Server 4.0 Security
	Checklist. Both the IIS Lockdown Wizard and UrlScan (Q307608), an ISAPI filter
	that can be used to block malicious web requests, are part of the Microsoft
	Security Toolkit which can be obtained from the following location:
	
	  http://www.microsoft.com/technet/security/tools/stkintro.asp
	
	Microsoft is committed to providing applications that can be used to keep our
	customers' information secure, and maintains an Internet site dedicated to
	security-related topics for Microsoft products. The Microsoft Security web site
	is available at:
	
	  http://www.microsoft.com/security/
	
	In addition to visiting the Microsoft Security web site on a regular basis,
	Microsoft recommends that customers stay up to date with the latest Security
	Bulletins, by subscribing to the Microsoft Security Notification Service at the
	Web site listed below:
	
	  http://www.microsoft.com/technet/security/bulletin/notify.asp
	
	Microsoft provides free online services for determining when updates are
	required, such the Critical Update Notification which is available from the
	Windows Update (WU) Web site, as well as the Microsoft Personal Security Advisor
	(MPSA) which can be used to determine vulnerabilities on the system running the
	utility, but it is not recommended that the WU and MPSA utilities be used as the
	only guidance for the latest updates. HFNetChk is the only tool which provides
	comprehensive updates for service-level applications such as IIS.
	
	REFERENCES
	==========
	
	When securing Web servers, it is possible to set permissions too restrictively,
	which can prevent proper serving of content. The following Microsoft Knowledge
	Base article describes the minimal permissions necessary for Internet
	Information Services to serve content properly:
	
	  Q187506 List of NTFS Permissions Required for IIS Site to Work
	
	
	Additional query words: iis 5 hack crack hacking cracking break broke delete vulnerability vulnerable
	
	======================================================================
	Keywords          : kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbiis500 kbiis400
	Version           : :4.0,5.0
	Issue type        : kbinfo
	
	=============================================================================
	
