---
layout: page
title: "Q192510: XIMS: Where to Enable NT Challenge Response for POP3"
permalink: /kb/192/Q192510/
---

## Q192510: XIMS: Where to Enable NT Challenge Response for POP3

{% raw %}

	Article: Q192510
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows how and where to enable Windows NT Challenge Response (NTLM)
	for Exchange Server. NT Challenge Response security is intended to work with the
	Secure Password Authentication offered by Microsoft e-mail clients, such as
	Outlook Express. This offers a higher degree of security than Basic Clear Text,
	which is more vulnerable to being discovered and used.
	
	MORE INFORMATION
	================
	
	To use Secure Sockets Layer security (SSL), which is equivalent to TLS,
	Transport Layer Security, you need to have Internet Information Server (IIS)
	installed along with the Private/Public Key Pair that has been certified by a
	Certificate Authority (CA).
	
	To enable NTLM security, there are two locations in Exchange Server that need to
	be explained. POP3 can be implemented and controlled at the server level and/or
	at the site level. Enabling POP3 at the server level means that the protocol and
	settings are specific to that server. Enabling POP3 at the site level means any
	server in the site can use site default settings. Using site level settings
	frees an administrator from having to configure each server individually when
	there is a site-wide change.
	
	Enabling NTLM and POP3 Protocol at the Server Level
	---------------------------------------------------
	
	1. Start the Exchange Server Administrator program.
	
	2. Expand on Organization\Site\Configuration\Servers\<your
	  server>\Protocols to the Server Protocols object.
	
	3. Select the Protocols object. On the right pane, you will see the POP3 (Mail)
	  Settings object. Double-click it, and the properties for the POP3 protocol on
	  this server will be displayed.
	
	4. On the General tab, clear the "Use Site defaults for all properties" check
	  box. The server will now be using server-specific POP3 settings.
	
	5. Click the "Enable Protocol" check box. The POP3 protocol is now enabled at
	  this server. You do not have to restart.
	
	6. Click the Authentication tab. There are two options for enabling NT Challenge
	  Response--with and without SSL security. If you do not require SSL, click
	  only the "NT Challenge Response" check box. If you require SSL, then click
	  only the "NT Challenge Response Using SSL" check box.
	
	Enabling NTLM and POP3 Protocol at the Site Level.
	--------------------------------------------------
	
	1. Follow steps 1 through 3 above, then on the General tab, click the "Use Site
	  Defaults for All Properties" check box. The server will now be using the site
	  POP3 default Settings.
	
	2. Expand on Organization\Site\Configuration\Protocols to the Site Protocols
	  object.
	
	3. Select the Protocols object. On the right pane, you will see the POP3 (Mail)
	  Site Defaults object. Double-click it, and the properties for the POP3
	  protocol for the site will be displayed.
	
	4. On the General tab, click the Enable Protocol check box. The POP3 protocol is
	  now enabled for the Site. You do not have to restart.
	
	5. Click the Authentication tab. There are two options for enabling NT Challenge
	  Response--with and without SSL security. If you do not require SSL, click
	  only the "NT Challenge Response" check box. If you require SSL, then click
	  only the "NT Challenge Response Using SSL" check box.
	
	Additional query words: Enabled NTLM Security POP3 Howto kbinfo
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
