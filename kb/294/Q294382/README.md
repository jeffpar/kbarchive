---
layout: page
title: "Q294382: Error 401.3 If &quot;Host Header&quot; Differs from Server's NetBIOS Name"
permalink: kb/294/Q294382/
---

## Q294382: Error 401.3 If &quot;Host Header&quot; Differs from Server's NetBIOS Name

	Article: Q294382
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbDSupport kbIIS kbiis500
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Internet Explorer on a Windows 2000 client and browsing to a
	Web site where the host header name is different from the NetBIOS name of the
	computer, Integrated Authentication may fail with error 401.3.
	
	Note that Internet Explorer clients that are using Windows NT 4 or Windows 95 or
	Windows 98 will not fail. Also, other authentication schemes will work.
	
	CAUSE
	=====
	
	During Kerberos authentication, a Windows 2000 domain controller grants tickets
	based on the Internet Information Services 5.0 computer's Server Principle Name
	(SPN). If the host header (Web site name) being requested differs from the
	NetBIOS name of the Internet Information Services 5.0 computer, Kerberos
	authentication will fail, causing 401.3 errors on the client.
	
	Clients using Windows NT 4 or Windows 95 or Windows 98 succeed because they do
	not natively support Kerberos and thus use Windows NT Challenge/Response (NTLM)
	authentication.
	
	WORKAROUND
	==========
	
	- If you are using Kerberos:
	
	  Use the SetSPN.exe utility, from the Windows 2000 Resource Kit, to register
	  any host header names of Web sites that are configured to use "Integrated"
	  authentication and will be accessed from Windows 2000 clients. For example:
	
	  Server name: webserver1.development.exair.com
	  Host header: www.exair.com
	
	  Use the SetSPN command to register the www.exair.com SPN:
	
	  "SetSPN -A HTTP/www.exair.com webserver1" (without the quotation marks)
	
	- If you are not using Kerberos:
	
	  Remove Kerberos from the list of authentication providers in Internet
	  Information Services 5.0 by using the following command:
	
	  "cscript adsutil.vbs set w3svc/NTAuthenticationProviders "NTLM"" (without the
	  quotation marks)
	
	NOTE: Adsutil.vbs must be run by a member of the local Admins group on the
	Internet Information Services computer.
	
	MORE INFORMATION
	================
	
	A fresh install of Internet Information Services 5.0 with Integrated
	Authentication enabled will attempt to authenticate clients with Kerberos first.
	If a client does not support Kerberos, IIS will send that client an
	"Authenticate: NTLM" header, forcing it to authenticate using Windows NT
	Challenge/Response.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q217098 Basic Overview of Kerberos Authentication in Windows 2000
	
	  Q266080 Answers to Frequently Asked Kerberos Questions
	
	  Q215383 How to Ensure Windows Integrated Logons in IIS 5.0
	
	  Q248350 Kerberos Authentication Fails after Upgrading from IIS 4.0 to IIS 5.0
	
	Additional query words: iis 5
	
	======================================================================
	Keywords          : kbOSWin2000 kbDSupport kbIIS kbiis500 
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
