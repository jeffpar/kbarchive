---
layout: page
title: "Q297157: How Bad Password Count Works w/ Account Lockout Policy"
permalink: /kb/297/Q297157/
---

## Q297157: How Bad Password Count Works w/ Account Lockout Policy

{% raw %}

	Article: Q297157
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 05-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The "Account lockout" section of the Account Policy dialog box specifies how
	Windows NT Server handles user accounts after several successive unsuccessful
	logon attempts have occurred. When "Account lockout" is selected, users are
	locked out after the specified number of successive bad attempts is reached.
	Each domain controller (DC) maintains the number of BadPasswordCount for every
	user account. The rest of this article explains how DCs maintain and correlate
	the Account Lockout Policy.
	
	MORE INFORMATION
	================
	
	To demonstrate the relationship between the Account Lockout and
	BadPasswordCount, this article assumes that there is a single domain with one
	backup domain controller (BDC).
	
	Domain : Mydomain
	PDC : PDCserver
	BDC : BDCserver
	Account: test1
	Account lockout: 6 (After six attempts with a bad password, test1 account must be
	locked out).
	
	1. To make sure logon attempt is authenticated by BDC, enter test1 account with
	  an incorrect password from BDC locally once.
	
	2. From the primary domain controller (PDC), type the following to monitor
	  BadPasswordCount:
	
	  Nltest /user:test1 /server:BDCServer
	
	  Nltest /user:test1 /server:PDCServer
	
	  You will see the same BadPasswordCount. In this case, both are 0x1.
	
	3. From the BDC, type the incorrect password six more times. Run the following
	  commands on the PDC:
	
	  Nltest /user:test1 /server:BDCServer
	
	  Nltest /user:test1 /server:PDCServer
	
	  Both output show 0x6 as a BadPasswordCount. The test1 account is locked out.
	
	4. Open User Manager for Domain and unlock test1 account. As soon as this
	  account is unlocked
	
	  Nltest /user:test1 /server:PDCServer
	  BadPasswordCount on PDC is 0x0.
	
	  Nltest /user:test1 /server:BDCServer
	
	  BadPasswordCount on BDC is 0x6.
	
	  After test1 account is unlocked, it resets BadPasswordCount on PDC to 0x0. But
	  Badpaswordcount on BDC is still 0x6 until the domain synchronization happens.
	  Before the domain synchronization happens, if test1 user enters the incorrect
	  password from the BDC(BDCServer), logon attempt increments the
	  BadPasswordCount. But test1 account is not locked out. Because
	  BadPasswordcount was 0x0 on PDC. It has been incremented to 0x1 on the PDC.
	  After domain synchronization happens, BadPasswordCount on BDC is equal to the
	  number on PDC, which will be 0x0.
	
	5. If test1 user enters the correct password from the BDC, it resets
	  BadPasswordCount to 0x0 on the PDC, not on the BDC, until the domain
	  synchronization happens.
	
	6. Account Lockout policy checks the PDC's BadPasswordCount. It does not use the
	  BadPasswordCount value on the BDC. In the above case, even if another bad
	  password attempt happens to BDC after BadPasswordCount exceeds the threshold
	  on the BDC, the BDC does not request an urgent Account Lockout replication to
	  PDC.
	
	REFERENCES
	==========
	
	NLTEST is a part of the Windows NT Server 4.0 Resource Kit utilities.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
