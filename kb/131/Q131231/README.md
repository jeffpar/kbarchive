---
layout: page
title: "Q131231: Macintosh Volume Connections from Trusted Domains"
permalink: kb/131/Q131231/
---

## Q131231: Macintosh Volume Connections from Trusted Domains

	Article: Q131231
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Macintosh users mount Windows NT Services for Macintosh (SFM) volumes using
	a user account that exists in more than one domain, the user may be connected
	with a User ID which does not have the correct permissions for the volume they
	are attempting to access.
	
	
	MORE INFORMATION
	================
	
	When Macintosh users attempt to mount a Services for Macintosh (SFM) volume
	using AppleShare, they must use either the Apple standard User Authentication
	Method (UAM) or the Microsoft UAM. These request a Windows NT user name and
	password from the user before allowing the user access to the SFM volume.
	
	When the Windows NT server receives a request from a Macintosh client, the
	procedure used to process the request depends upon whether the server is a
	domain controller (either primary or backup) or a server that is simply a member
	of a domain or workgroup. If the computer is a workgroup server, it compares the
	user name and password to the local user accounts database. If the server is a
	domain member server or domain controller, it compares the user name and
	password to the domain user accounts database. If this does not result in a
	match, the server looks in the user accounts database of any trusted domains.
	The first match found results in the Macintosh user being assigned the rights
	allowed to that user.
	
	This can lead to confusion when a user has matching accounts in more than one
	domain, but does not have equivalent permissions on the SFM volume that is being
	accessed. Since permissions are granted based on only one of the multiple
	accounts, users can be denied access or granted access depending upon which
	account was found first.
	
	To avoid this problem, use the Microsoft UAM to connect to the Windows NT Server,
	and then enter your <Domain Name>\<User Name> in the user name box
	when providing a user name and password. This allows the Windows NT server to
	validate you in the correct Domain.
	
	Additional query words: prodnt mac macintosh trust trusts username
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
