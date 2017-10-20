---
layout: page
title: "Q316683: Cache Expiration Does Not Free All Associated Memory"
permalink: /kb/316/Q316683/
---

## Q316683: Cache Expiration Does Not Free All Associated Memory

{% raw %}

	Article: Q316683
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 10-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programs that use cryptographic functions that are provided by Schannel.dll may
	show a memory leak. A function that is typically used at the beginning of the
	sequence might be the AcquireCredentialsHandle function. Programs that make many
	Secure Sockets Layer (SSL) connections rapidly may experience this leak. For
	example, Microsoft Exchange 5.5 Service Pack 4 (SP4) experiences this leak.
	
	CAUSE
	=====
	
	The problem is caused by the caching mechanism in Schannel.dll. Typically,
	credentials are cached for a while in case a client wants to try a reconnection.
	Reconnections are effectively a mini-SSL handshake, during which the client uses
	the session keys from a previous session.
	
	This behavior occurs when you access Exchange over IMAP4 SSL port 993. Using
	IMAP4 port 143, which is not an SSL port, does not show the leak.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to systems
	that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date         Time   Version         Size     File name
	  --------------------------------------------------------
	  09-Jul-2002  20:29  4.87.1964.1878  112,912  Sch128c.dll
	  09-Jul-2002  20:29  4.86.1964.1878  143,632  Schnlc.dll
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	
	Additional query words: 2655.68
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
