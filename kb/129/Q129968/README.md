---
layout: page
title: "Q129968: RAS: 20066 Error: General named pipe failure occurred in..."
permalink: /kb/129/Q129968/
---

## Q129968: RAS: 20066 Error: General named pipe failure occurred in...

{% raw %}

	Article: Q129968
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur in the event log when you attempt to authenticate
	with a third party PPP server using MD5 authentication:
	
	  Event ID 20066
	  General named pipe failure occurred in the Point to Point Protocol engine.
	
	  Data is 6 Hex.
	
	CAUSE
	=====
	
	Code specific to Microsoft CHAP (MD4) is being executed regardless of the
	authentication type. This code verifies that password length does not exceed the
	14 character password length allowed in Microsoft networking. The password
	length for MD5 authentication may exceed 14 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	NOTE: Microsoft Windows NT U.S. Service Pack 2 must be installed before you
	install this fix. If it is not, RASPHONE will fail.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	

{% endraw %}
