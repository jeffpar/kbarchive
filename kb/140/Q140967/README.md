---
layout: page
title: "Q140967: Changing Password in User Manager Does Not Permit Logon"
permalink: /kb/140/Q140967/
---

## Q140967: Changing Password in User Manager Does Not Permit Logon

{% raw %}

	Article: Q140967
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you change a user's password in User Manager, logon attempts by this user
	using the new password may fail with the following error dialog being
	displayed:
	
	  The system could not log you on. Make sure your user name and domain are
	  correct, then type your password again. Letters in passwords must be typed
	  using the correct case. Make sure that Caps Lock is not accidentally on.
	
	If the old password is known, you can still log on using the old password.
	
	This condition persists for a period of time, then corrects itself. After a
	while, logon attempts succeed if the new password is used, and fail if the old
	password is used, as expected.
	
	CAUSE
	=====
	
	This error occurs when the following conditions apply:
	
	- "User Must Change Password At Next Logon" was checked when the password was
	  changed in User Manager (this option becomes checked by default when changing
	  the passwords of users who are not Administrators.)
	
	- The workstation authenticates with a Backup Domain Controller (rather than
	  the Primary Domain Controller) before the new password has been replicated
	  from the PDC to the authenticating BDC.
	
	  In this situation the BDC does not recognize the new password and refers the
	  logon request to the PDC. The PDC recognizes the new password, but returns a
	  status of 0xC0000224 (STATUS_PASSWORD_MUST_CHANGE).
	
	  This indicates a valid logon, but the BDC was incorrectly treating this as a
	  failed logon and erroneously returning a status of 0xC000006A
	  (STATUS_BAD_PASSWORD) back to the workstation.
	
	
	MORE INFORMATION
	================
	
	During startup, a workstation establishes a secure channel with a Domain
	Controller for the purposes of logon validation. The secure channel may be
	established with any Domain Controller (the PDC or any BDC.) Once the secure
	channel is established with a domain controller, it stays connected to the same
	domain controller until the workstation is shut down and restarted. If there are
	many BDCs, the secure channel will most likely be with a BDC rather than the
	PDC.
	
	When a user's password is changed via User Manager, the password change is
	recorded on the PDC only. The change is not replicated immediately to the BDCs.
	The change is only replicated at the next scheduled replication time, or when an
	administrator manually requests synchronization of one or more BDCs, or the
	entire domain, from Server Manager.
	
	Prior to replication, the BDC is unaware of the new password so if a logon is
	attempted with the new password the BDC treats it as a bad password. The BDC
	does not reject the bad password immediately. Instead it passes the logon
	request to the PDC, on the assumption that the password is a new password known
	to the PDC but not yet been replicated to the BDC.
	
	When "User Must Change Password At Next Logon" is in effect, the PDC returns a
	status of 0xC0000224 (STATUS_PASSWORD_MUST_CHANGE) to the BDC. This indicates a
	successful logon. However, in response to this status, the BDC was erroneously
	returning a status of 0xC000006A (STATUS_BAD_PASSWORD) back to the workstation.
	
	
	If the logon with the new password succeeds and the logon with the old password
	fails, this is most likely due to SAM database synchronization occurring
	automatically while trying to reproduce the problem. Check the System event log
	on the BDC for recent NETLOGON events number 5715. This indicates successful
	partial synchronization of the SAM database, including the new password, which
	masks the problem. If this is the case, run the sequence again before the next
	automatic synchronization occurs.
	
	RESOLUTION
	==========
	
	Use one of the following to resolve this problem:
	
	- Synchronize the entire domain using Server Manager.
	
	- Synchronize the appropriate BDC with the PDC using Server Manager.
	
	- Wait for the password change to be replicated automatically.
	
	- Apply the Hotfix described below to all Domain Controllers.
	
	The Hotfix modifies the BDC's status handling code to pass a PDC status of
	0xC0000224 (STATUS_PASSWORD_MUST_CHANGE) through to the workstation that
	submitted the logon request. The workstation then recognizes a successful logon
	and prompts the user to change their password.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A
	supported fix is now available, but is not fully regression-tested and should be
	applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	Additional query words: prodnt 3.51 4.00
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	
	=============================================================================
	

{% endraw %}
