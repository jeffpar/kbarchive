---
layout: page
title: "Q231453: Internet Explorer 5.0 Fails to Pass Session Variables to IIS"
permalink: /kb/231/Q231453/
---

## Q231453: Internet Explorer 5.0 Fails to Pass Session Variables to IIS

{% raw %}

	Article: Q231453
	Product(s): Internet Information Server
	Version(s): 4.0,5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Explorer version 5 for Windows NT 4.0 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to post a form through ASP to a Microsoft IIS 4.0 computer with
	Internet Explorer 5.0 and session variables used in the POST to the server, the
	session variables may not display in the browser, as in previous versions of
	Internet Explorer .
	
	CAUSE
	=====
	
	Internet Explorer 5.0 has added a feature called NTLM pre-authorization. When an
	Internet Explorer 5.0 browser connects to an IIS 4.0 Web site that uses NTLM
	security, Internet Explorer 5.0 negotiates security. If an NTLM challenge is
	received, these credentials are used for any subsequent request for that Web
	site. In this case, when an Internet Explorer 5.0 browser connects, it receives
	an NTLM challenge, but when a sub folder on the same Web site does not use NTLM,
	no challenge is received by Internet Explorer 5.0, which causes the browser to
	not send the POST data to the server.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Windows\CurrentVersion\InternetSettings
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: DisableNTLMPreAuth
	  Data Type: REG_DWORD
	  Value: 1
	
	4. Quit Registry Editor.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem only occurs when you use Internet Explorer to connect to an IIS 4.0
	computer where NTLM security is placed on the parent virtual directory and
	anonymous security is placed on any sub directory below the parent directory.
	
	Additional query words: preauth
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbIEsearch kbiis400 kbZNotKeyword2 kbIENT400Search kbIE500Search kbZNotKeyword3 kbIE500WinNT400
	Version           : :4.0,5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
