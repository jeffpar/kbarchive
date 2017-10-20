---
layout: page
title: "Q102650: Reestablishing a Lost Trust Relationship"
permalink: /kb/102/Q102650/
---

## Q102650: Reestablishing a Lost Trust Relationship

{% raw %}

	Article: Q102650
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	When a trust relationship is broken at one end, whether it is due to a
	server going down or someone removing the relationship from User
	Manager, it is not enough to add the trust relationship back into the
	domain that the relationship was broken from. Administrators from the
	domains involved must remove the trust relationship and recreate the
	trusts again.
	
	MORE INFORMATION
	================
	
	When a trust relationship is established between two domains, the password used
	to create the relationship is immediately changed by the operating system, even
	if there was no initial password. The controllers and servers for both domains
	know the new password. The new password is not visible to the users, however.
	This password change happens regularly to provide extra security. Because of
	this, once the trust relationship is broken, the only way to reestablish the
	trust is to reset it completely on both ends, which serves to reset the
	password.
	
	One side effect of the automatic password change is that the administrator of the
	trusting domain gets only one chance to create the trust relationship once the
	administrator of the trusted domain has set up the other end. If the password is
	typed incorrectly, it will no longer be valid, as the system will have
	automatically changed it. In this situation, the administrator of the trusted
	domain must remove the trusting domain from his or her list of "domains
	permitted to trust" and add it back in again, then the administrator on the
	other end should try again to establish the relationship.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
