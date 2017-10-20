---
layout: page
title: "Q186371: SP3 &amp; Later Have Limited PPP MD5-CHAP Authenticator Support"
permalink: /kb/186/Q186371/
---

## Q186371: SP3 &amp; Later Have Limited PPP MD5-CHAP Authenticator Support

{% raw %}

	Article: Q186371
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP3,4.0 SP4
	Operating System(s): 
	Keyword(s): kbFEA kbWinNT400sp4fea
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4 
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 4.0 Service Pack 3 and later provide limited PPP MD5- CHAP
	authenticator support to the Remote Access Server (RAS), which may be useful for
	small user-count environments using non-Microsoft PPP dial-in clients. The
	support is local to a given RAS server. The MD5 account information is stored in
	the RAS server registry and is not integrated or synchronized with the User
	Manager account database. Integrated support will appear in a later release, at
	which time this limited support may be removed.
	
	MORE INFORMATION
	================
	
	The local MD5-CHAP authenticator is enabled by creating the MD5 key below and
	adding "account" subkeys of the form [<domain>:]<user>, with
	subvalue "Pw" containing the account password. The ":" notation is used instead
	of "\" due to the syntax rules of registry keys. The 'domain:' is optional and
	typically omitted. MD5-CHAP will not be negotiated (old behavior) when the MD5
	key does not exist (default).
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\RasMan\PPP\CHAP\MD5
	  [<domain>:]<user>(REG_SZ)Pw
	
	NOTE: Even though MD5 support is added in SP3, Windows NT RAS Server will prefer
	MS-CHAP (MD4). When a client connects, the RAS server will offer MS-CHAP (MD4)
	first and then fall back to MD5. Some third-party clients may interpret this to
	mean that the RAS server does not support MD5 because it does not offer it
	first. If the client does ask for MD5 it will work correctly if it is set up on
	the RAS server as described in this article.
	
	This behavior is by design. MS-CHAP(MD4) is implemented in a more secure and
	robust way than MD5 and therefore is the preferred authentication protocol for
	Windows NT Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbFEA kbWinNT400sp4fea 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search
	Version           : :4.0 SP3,4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
