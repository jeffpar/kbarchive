---
layout: page
title: "Q183859: Integrity Checking on Secure Channels with Domain Controllers"
permalink: /kb/183/Q183859/
---

## Q183859: Integrity Checking on Secure Channels with Domain Controllers

	Article: Q183859
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information on how to do this, view the "Restoring
	the Registry" online Help topic in Regedit.exe or the "Restoring a Registry
	Key" online Help topic in Regedt32.exe.
	
	SYMPTOMS
	========
	
	When a Windows NT system joins a domain, a machine account is created.
	Thereafter, when the system boots, it uses the password for that account to
	create a secure channel with the domain controller for its domain. Requests sent
	on the secure channel are authenticated, and sensitive information (such as
	passwords) is encrypted, but the channel is not integrity checked.
	
	Lack of integrity checking means that it is possible for an attacker who can
	intercept and modify requests to modify information in requests or responses
	undetected.
	
	Use of such an attack to modify group membership information could allow an
	attacker who has interactive logon access to a workstation to become
	administrator on that workstation.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	MORE INFORMATION
	================
	
	A fix to Windows NT 4.0 Netlogon service has been designed that will allow for
	integrity checking. After applying this fix, the following Registry values can
	be used to modify the behavior of the secure channel between the client and
	domain controller. All of the following values can be found in the registry
	under the following key:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\netlogon\parameters
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall your operating system. Microsoft cannot guarantee that
	problems resulting from the incorrect use of Registry Editor can be solved. Use
	Registry Editor at your own risk.
	
	For information about how to edit the registry, view the "Changing Keys And
	Values" online Help topic in Registry Editor (Regedit.exe) or the "Add and
	Delete Information in the Registry" and "Edit Registry Data" online Help topics
	in Regedt32.exe. Note that you should back up the registry before you edit it.
	
	  SignSecureChannel
	
	     Value Type: REG_DWORD - Boolean
	     Valid Range: 0 (FALSE) or 1 (TRUE)
	     Default: TRUE
	     Description: This parameter specifies that all outgoing secure
	                  channel traffic should be signed. If SealSecureChannel
	                  is also TRUE, it will override any setting for this
	                  parameter and force it to TRUE.
	
	  SealSecureChannel
	
	     Value Type: REG_DWORD - Boolean
	     Valid Range: 0 (FALSE) or 1 (TRUE)
	     Default: TRUE
	     Description: This parameter specifies that all outgoing secure
	                  channel traffic should be encrypted.
	
	  RequireSignOrSeal
	
	     Value Type: REG_DWORD - Boolean
	     Valid Range: 0 (FALSE) or 1 (TRUE)
	     Default: FALSE
	     Description: This parameter specifies that all outgoing secure
	                  channel traffic must be either signed or sealed. Without
	                  this parameter, this is negotiated with the Domain
	                  Controller. This flag should only be set if ALL of the
	                  domain controllers in ALL the trusted domains support
	                  signing and sealing. If this parameter is TRUE,
	                  SignSecureChannel is implied to be TRUE.
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0. This problem was first corrected in
	Windows NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server
	Edition Service Pack 4.
	
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
