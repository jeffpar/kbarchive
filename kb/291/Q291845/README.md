---
layout: page
title: "Q291845: Malformed WebDAV Request Can Cause IIS to Exhaust CPU Resources"
permalink: /kb/291/Q291845/
---

## Q291845: Malformed WebDAV Request Can Cause IIS to Exhaust CPU Resources

{% raw %}

	Article: Q291845
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbWin2000PreSP2Fix kbWin2000SP2Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	World Wide Web Distributed Authoring and Versioning (WebDAV) is an extension to
	the HTTP protocol that allows remote authoring and management of Web content. In
	the Windows 2000 implementation of the protocol, Microsoft Internet Information
	Services (IIS) 5.0 performs the initial processing of all WebDAV requests, and
	then forwards the appropriate commands to the WebDAV process. However, a flaw
	exists in the way WebDAV handles a particular type of malformed request. If a
	stream of such malformed requests is directed at an affected server, it consumes
	all CPU availability on the server.
	
	Mitigating Factors:
	
	- The effect of an attack through this vulnerability is temporary. The server
	  automatically resumes normal service as soon as the malformed requests stop
	  arriving.
	
	- This vulnerability does not provide an attacker with any capability to carry
	  out WebDAV requests.
	
	- This vulnerability does not provide any capability to compromise data on the
	  server or gain administrative control over the server.
	
	Microsoft recommends that customers apply the patch described in this article to
	any servers running IIS 5.0. Although this includes Web servers, other services
	may also require that IIS 5.0 be enabled. For example, Exchange 2000 Server uses
	IIS 5.0 to provide Outlook Web Access (OWA) services. Therefore, computers
	running Exchange 2000 Server that provide OWA services should implement the
	patch to protect their IIS 5.0 services from this vulnerability.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time    Version      Size     File name
	  -----------------------------------------------------
	  03/12/2001  10:57a  0.9.3940.20  439,056  Httpext.dll
	
	IMPORTANT: If you previously performed the workaround described in article
	Q241520, the following dialog box may be displayed when you install this fix:
	
	  Copy Error Setup cannot copy the file httpext.dll. Ensure that the location
	  specified below is correct, or change it and insert 'Windows 2000 System
	  Files' in the drive you specify. Copy files from: (drop down box below)
	  c:\%windir%\system32\inetsrv
	
	To bypass this dialog box, follow these steps to re-enable WebDAV:
	
	1. Open Windows Explorer.
	
	2. Go to your %SystemRoot%\System32\Inetsrv folder.
	
	3. Right-click your Httpext.dll file, and then click Properties.
	
	4. Click the Security tab.
	
	5. Select Everyone, and then click Remove.
	
	6. Select the Allow inheritable permissions from parent to propagate to this
	  object check box, and then click Apply.
	
	7. Click OK to exit the Properties dialog box.
	
	
	WORKAROUND
	==========
	
	For additional information about how to work around this problem, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q241520 How to Disable WebDAV for IIS 5.0
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 2000. This
	problem was first corrected in Windows 2000 Service Pack 2.
	
	MORE INFORMATION
	================
	
	For more information on this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/technet/security/bulletin/ms01-016.asp
	
	For additional information about how to install Windows 2000 and Windows 2000
	hotfixes at the same time, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q249149 Installing Microsoft Windows 2000 and Windows 2000 Hotfixes
	
	Additional query words: DoS denial of service security_patch DAV distributed authoring and versioning
	
	======================================================================
	Keywords          : kbWin2000PreSP2Fix kbWin2000SP2Fix 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
