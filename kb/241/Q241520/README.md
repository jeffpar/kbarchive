---
layout: page
title: "Q241520: How to Disable WebDAV for IIS 5.0"
permalink: /kb/241/Q241520/
---

## Q241520: How to Disable WebDAV for IIS 5.0

{% raw %}

	Article: Q241520
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbiis500
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Internet Information Services (IIS) version 5.0 supports the
	Distributed Authoring and Versioning (DAV) extensions to the HTTP protocol as
	defined in RFC 2518. By default, the entire Web space of IIS is capable of
	responding to WebDAV requests (even though the security settings will not allow
	publishing by default).
	
	This article details the process for disabling WebDAV for an entire IIS 5.0 Web
	server.
	
	MORE INFORMATION
	================
	
	Because WebDAV is an extension to the HTTP protocol, the concept of disabling
	WebDAV verbs is like disabling native HTTP verbs such as GET, POST, and so
	forth. This article describes the process to use to disable WebDAV for those
	extreme cases in which a Web administrator does not want any WevDAV
	functionality at all.
	
	Note: WebDAV functionality on an IIS 5.0 Web server is made possible through the
	Httpext.dll file, which is always installed. Simply renaming Httpext.dll will
	not work because the new Windows File Protection (WFP) functionality in Windows
	2000 prevents the corruption or deletion of certain system files. For more
	information on WFP, search Windows 2000 Help for "Windows File Protection".
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The registry value and necessary file updates were first introduced in the
	Windows 2000 Security Rollup Package 1 (SRP1). For additional information about
	SRP1, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q311401 Windows 2000 Security Rollup Package 1 (SRP1), January 2002
	
	To completely disable WebDAV including the PUT and DELETE requests, make the
	following changes in the registry.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W3SVC\Parameters
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value name: DisableWebDAV
	  Data type: DWORD
	  Value data: 1
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q291845 Malformed WebDAV Request Can Cause IIS to Exhaust CPU Resources
	
	Additional query words: iis webdav dav
	
	======================================================================
	Keywords          : kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
