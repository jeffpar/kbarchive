---
layout: page
title: "Q271288: Domain Trusts May Not Work with Password Sync Service"
permalink: /kb/271/Q271288/
---

## Q271288: Domain Trusts May Not Work with Password Sync Service

	Article: Q271288
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kb3rdparty kbenv kbnetwork
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Domain trust relationships may be periodically unsuccessful, often at one week
	intervals, and must be continually re-established.
	
	The System event log may also record the following error message:
	
	  Event ID: 3210
	  Source: Netlogon
	  Type: Error
	  Description: Failed to authenticate with <computer name>, a Windows NT
	  domain controller for domain <domain name>.
	  Data word: c0000022
	
	CAUSE
	=====
	
	This behavior may occur if third-party programs are used for password
	synchronization.
	
	MORE INFORMATION
	================
	
	Third-party products can be used to synchronize passwords for accounts that use
	different platforms. Some of these products run as a service on the domain's
	primary domain controller (PDC).
	
	When a trust is established between two domains, an interdomain trust account is
	created. This account is configured with an initial password when the trust is
	created. This password is changed at certain intervals during the life of the
	trust. The default interval is seven days.
	
	When you make a password change to an interdomain trust account, the password
	synchronization service may mistakenly detect the change and replicate it to
	other domain controllers that run the service and with whom there is a trust
	relationship with the same domain.
	
	Here is an example to illustrate the preceding information:
	
	  DOMA (Domain A) ----TRUSTS---> DOMB (Domain B)
	
	The interdomain trust account DOMA$ resides in DOMB.
	
	NOTE: The type of account is interdomain trust account, not a normal user
	account.
	
	By default, every seven days, the PDC in DOMA generates a new password for the
	DOMA$ interdomain trust account which resides in DOMB and attempts to set a new
	secure channel password for that account.
	
	If successful, the PDC in DOMA stores the new password and uses it the next time
	it wants to set up a secure channel. If, for any reason, the password change is
	unsuccessful, the PDC in DOMA retains the password it has been using, and
	discards the new password.
	
	If the password for the DOMA$ account residing in DOMB is changed by a
	third-party process, then the password stored by the PDC in DOMA that uses this
	account goes out of synchronization.
	
	The next time the PDC in DOMA attempts to set up a secure channel with DOMB using
	the password it has stored, it is unsuccessful in establishing a secure channel.
	At this point the trust relationship is broken. If NetLogon debugging is
	enabled, the NetLogon.log file can record the following message:
	
	07/12 20:30:03 [CRITICAL] NlSessionSetup: DOMA Session setup: cannot I_NetServerAuthenticate 0xc0000022										
	07/12 20:30:03 [CRITICAL] NlSessionSetup: DOMA new password is bad. Old password is same as new password.
	
	Additional query words: Blockade Trust
	
	======================================================================
	Keywords          : kb3rdparty kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP4,4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
