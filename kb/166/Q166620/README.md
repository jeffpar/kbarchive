---
layout: page
title: "Q166620: XGEN: Credentials Caching for Internet Protocols"
permalink: kb/166/Q166620/
---

## Q166620: XGEN: Credentials Caching for Internet Protocols

	Article: Q166620
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Exchange Server supports a number of native Internet protocols,
	including SMTP, POP3, NNTP, and LDAP. Of these protocols, POP3, NNTP, and LDAP
	support authentication, in which the user's logon credentials are validated to
	determine their access permissions for the desired mailbox, newsgroup, or
	directory object. Exchange Server supports both the strong Windows NT
	Challenge/Response authentication, which never passes the password across the
	network, as well as Basic (plain-text password) authentication. Basic
	authentication can optionally be combined with SSL network session encryption to
	protect passwords and content against sniffer attacks. All logon processes are
	mapped to a Windows NT security account, regardless of the authentication
	protocol used.
	
	Credentials caching is only performed with Basic authentication, not with Windows
	NT Challenge/Response. With Basic authentication, the user's Internet client
	supplies the user's name and password to the Exchange Server computer over the
	wire in plain text. This is the standard method of operation for Internet
	protocols. The Exchange Server uses these credentials to create a session "as"
	the matching Windows NT user. For performance reasons, the server caches these
	credentials in memory.
	
	The design of the cache is that after a user's credentials have been validated,
	the server saves the credentials (hashed using a secure hash) and their token in
	memory. Subsequent logon processes using the same credentials will use this
	cached token. Each credentials cache entry has a maximum lifetime of 2 hours (by
	default), and an idle lifetime of 15 minutes.
	
	The idle lifetime is the lifetime of the credential if the user never logs on
	again with those credentials, the maximum lifetime is the total time a
	credential will be cached, even if the session is active, before being
	revalidated.
	
	MORE INFORMATION
	================
	
	The credentials cache is controlled by the following registry values:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \MsExchangeIs\ParametersNetIf
	  \Credentials Cache Age Limit
	
	  (Default = 120 minutes)
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \MsExchangeIs\ParametersNetIf
	  \Credentials Cache Idle Limit  
	
	  (Default = 15 minutes)
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services
	  \MsExchangeIs\ParametersNetIf
	  \Credentials Cache Size 
	
	  (Default = 256 buckets; to turn off caching, you should set the size = 0)
	
	The age limit specifies the maximum length of time (in minutes) for entries to
	live in the cache, the Idle limit specifies the amount of idle time after which
	a credential cache element will be considered too old (and thus discarded).
	
	Most users will not be affected by this issue. For some environments this
	behavior represents a relatively minor risk. If a user discovers that their
	password has been compromised and changes their password, there is an additional
	window of time (around 15 minutes if the session is idle) where an attacker
	could still use the compromised password to access mail or newsgroups via POP3
	or NNTP.
	
	Most users will not need to implement any changes to their environment. Users who
	need additional assurances can change the registry parameters indicated above to
	smaller values that are acceptable in their environment. Setting the credentials
	cache size to 0 (zero) will cause a new authentication to be performed for every
	Internet protocol user session. Because of the nature of Internet sessions,
	which are often short and bursty, the tradeoff for disabling credential caching
	is a potential reduction in performance. Performance will be affected depending
	on the number of Internet users on your system, the frequency with which they
	check mail, and the location and load of your Windows NT Domain Controllers.
	Setting the cache to zero is not recommended for most environments.
	
	This behavior is by product design.
	
	For information about how to change the delay before user tokens are updated in
	Microsoft Internet Information Server, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q152526 Changing the Default Interval for User Tokens in IIS
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
