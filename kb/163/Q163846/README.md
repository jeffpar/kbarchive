---
layout: page
title: "Q163846: SID Values For Default Windows NT Installations"
permalink: kb/163/Q163846/
---

## Q163846: SID Values For Default Windows NT Installations

	Article: Q163846
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many User Accounts, Local Groups, and Global Groups have a default Security
	Identifier (SID) or Relative Identifier (RID) value across all installations of
	Windows NT. These values can be displayed by using the utility Getsid.exe from
	the Windows NT Resource Kit.
	
	MORE INFORMATION
	================
	
	The following information was taken from a Domain Controller named DomainName.
	The default groups differ on a Windows NT Workstation or Server installation,
	and if they are not a member of a domain, then the computer name would be
	considered the authority.
	
	The values below that have a full SID value will differ on all installations, but
	the RID value at the end of the SID is the same across all installations.
	
	NOTE: The values in parentheses is the hexadecimal values of the RID.
	
	Built-In Users
	--------------
	
	DOMAINNAME\ADMINISTRATOR
	S-1-5-21-917267712-1342860078-1792151419-500     (=0x1F4)
	
	DOMAINNAME\GUEST
	S-1-5-21-917267712-1342860078-1792151419-501     (=0x1F5)
	
	Built-In Global Groups
	----------------------
	
	DOMAINNAME\DOMAIN ADMINS
	S-1-5-21-917267712-1342860078-1792151419-512     (=0x200)
	
	DOMAINNAME\DOMAIN USERS
	S-1-5-21-917267712-1342860078-1792151419-513     (=0x201)
	
	DOMAINNAME\DOMAIN GUESTS
	S-1-5-21-917267712-1342860078-1792151419-514     (=0x202)
	
	Built-In Local Groups
	---------------------
	
	BUILTIN\ADMINISTRATORS     S-1-5-32-544          (=0x220)
	BUILTIN\USERS              S-1-5-32-545          (=0x221)
	BUILTIN\GUESTS             S-1-5-32-546          (=0x222)
	BUILTIN\ACCOUNT OPERATORS  S-1-5-32-548          (=0x224)
	BUILTIN\SERVER OPERATORS   S-1-5-32-549          (=0x225)
	BUILTIN\PRINT OPERATORS    S-1-5-32-550          (=0x226)
	BUILTIN\BACKUP OPERATORS   S-1-5-32-551          (=0x227)
	BUILTIN\REPLICATOR         S-1-5-32-552          (=0x228)
	
	Special Groups
	--------------
	
	\CREATOR OWNER             S-1-3-0
	\EVERYONE                  S-1-1-0
	NT AUTHORITY\NETWORK       S-1-5-2
	NT AUTHORITY\INTERACTIVE   S-1-5-4
	NT AUTHORITY\SYSTEM        S-1-5-18
	NT AUTHORITY\authenticated users   S-1-5-11 *
	
	* For Windows NT 4.0 Service Pack 3 and later only
	
	Additional query words: credentials trust
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
