---
layout: page
title: "Q214840: MSV1_0 Allows Network Connections for Specific Accounts"
permalink: /kb/214/Q214840/
---

## Q214840: MSV1_0 Allows Network Connections for Specific Accounts

	Article: Q214840
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A problem occurs in Windows NT 4.0 Service Pack 4 when a user has changed the
	password for his or her Windows NT domain account from a LanManager client (such
	as a Windows for Workgroups or the Macintosh desktop). After the user's password
	is changed from the LanManager client, that account may be used to log on
	interactively and to make network connections from other systems using a blank
	password.
	
	The security problem does not affect user accounts where the password change is
	initiated from Windows 95, Windows 98, or Windows NT systems. Furthermore, user
	account password changes can only be initiated by the user who knows the current
	password for the account. There is no opportunity for an unauthorized user to
	change the password of another user account.
	
	CAUSE
	=====
	
	LanManager remote file access clients on Windows for Workgroups, Macintosh, or
	OS/2 use a different change password protocol than Windows NT, Windows 95, or
	Windows 98 systems. The older password change protocol for these clients uses
	only the "LM hash" form of the password for authentication. The Windows NT
	domain controller stores only the LM hash form of the password credentials for
	that user in the security account manager (SAM) database. The "NT hash" form of
	the password for the user account is set to a NULL value.
	
	The problem introduced in Windows NT 4.0 Service Pack 4 is a logic error in
	validating network authentication for users with the NULL value for the NT hash
	of the password. The result is that a network connection to a server can be made
	from Windows 95, Windows 98, or Windows NT systems for those accounts using a
	blank password.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	This hotfix has been posted to the following Internet location:
	
	ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP4/Msv1-fix/
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this problem could result in some degree of security
	vulnerability in Windows NT version 4.0 Service Pack 4. This problem was first
	corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00 sp4 lanman
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : winnt:4.0 SP4
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
