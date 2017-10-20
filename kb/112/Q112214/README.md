---
layout: page
title: "Q112214: Trusting Domain Shows Trust Failure or &quot;Account Unknown&quot;"
permalink: /kb/112/Q112214/
---

## Q112214: Trusting Domain Shows Trust Failure or &quot;Account Unknown&quot;

{% raw %}

	Article: Q112214
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A trusting domain shows event log entries indicating trust failure. Or, a
	trusting domain doesn't grant appropriate access to accounts on the trusted
	domain, or displays accounts on the trusted account as "Account unknown."
	
	NOTE: It is possible to add accounts from a trusted domain to ACLs or local
	groups even when a trust relationship is incomplete or broken because User
	Browser can obtain account lists that may work even though the trust
	relationship doesn't work.
	
	CAUSE
	=====
	
	Trust failure occurs when internal passwords are out of sync. This happens
	when:
	
	One side of the trust relationship is deleted and then recreated after the trust
	relationship has gone through one or more automatic password changes.
	
	  -or-
	
	The "permit to trust" and "trust" sides of the relationship were initially set up
	with different passwords. User Manager for Domains can detect if this is the
	case if the "B permits A to trust" side was set up first, but not if the "A
	trusts B" side was set up first. (This is why the "B permits A to trust" side
	should be set up first, and one reason why User Manager for Domains sometimes
	warns that "the trust relationship could not be verified at this time" when the
	"A trusts B" side is set up.)
	
	WORKAROUND
	==========
	
	To work around this problem, check to see that both halves of the trust
	relationship exist (A must trust B, and B must permit A to trust). If both
	halves of the trust relationship exist, their internal passwords may be out of
	sync. If the internal passwords are out of sync, remove both halves, and then
	replace them. For information on doing this, see the chapter titled "User
	Manager for Domains" of the Windows NT "System Guide." It is recommended to add
	the "B permits A to trust" side of the trust relationship before the "A trusts
	B" side.
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
