---
layout: page
title: "Q215383: How to Ensure Windows Integrated Logons in IIS 5.0"
permalink: /kb/215/Q215383/
---

## Q215383: How to Ensure Windows Integrated Logons in IIS 5.0

{% raw %}

	Article: Q215383
	Product(s): Internet Information Server
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet Information Services (IIS) 5.0 handles user logons differently than
	previous versions of IIS. With the new Windows 2000 security, IIS now supports
	Kerberos authentication using Negotiate headers.
	
	MORE INFORMATION
	================
	
	When a user logs on, if Integrated Windows Authentication has been selected in
	the Internet Service Manager, a browser will be passed a Negotiate header from
	the server. allowing a decision to be made on whether to use Kerberos
	authentication or Windows Integrated authentication (formerly called NTLM, or NT
	Challenge/Response).
	
	NOTE: At the time of this writing, only Internet Explorer 5.0 supports this
	process.
	
	You may decide to skip the negotiation process and use only Windows Integrated
	authentication. To do this, perform following steps (you must have the Windows
	Script Host installed for this to work properly):
	
	1. Open a command prompt and navigate to the Inetpub\AdminScripts directory.
	
	2. Type the following command:
	
	  "adsutil get w3svc/NTAuthenticationProviders" (without the quotation marks)
	
	  If you receive an error message, try:
	
	  "cscript adsutil.vbs get w3svc/NTAuthenticationProviders" (without the
	  quotation marks)
	
	3. The value of this property should be: Negotiate,NTLM. This means that a
	  Negotiate packet will be sent to the browser first and if it fails, Windows
	  Integrated authentication (NTLM) is used.
	
	4. To ensure that only Windows Integrated authentication is used, type one of
	  the following commands:
	
	  NOTE: Be sure to use the quotation marks around the word NTLM.
	
	  "adsutil set w3svc/NTAuthenticationProviders "NTLM"" (without the quotation
	  marks)
	
	  -OR-
	
	  "cscript adsutil.vbs set w3svc/NTAuthenticationProviders "NTLM"" (without the
	  quotation marks)
	
	NOTE: NTLM in the above command is all upper-case and must be or any number of
	systems utilizing NTLM authentication will be adversely affected. For example,
	The Exchange System Manager MMC snap-in for Exchange 2000 will be unable to
	display public folders if NTLM is entered in lower-case ("ntlm"). Additionally,
	Internet Explorer 5.5 users may be unable to log on to Outlook Web Access
	servers using Windows Integrated Authentication.
	If everything works correctly, you should see a confirmation that the value has
	been changed. If you receive any errors, try repeating the steps again.
	
	Additional query words: adsutil Kerberos
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis500
	Version           : :5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
