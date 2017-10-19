---
layout: page
title: "Q274613: Passflt.dll Does Not Enforce 6-Character Minimum Password Length"
permalink: /kb/274/Q274613/
---

## Q274613: Passflt.dll Does Not Enforce 6-Character Minimum Password Length

	Article: Q274613
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): MSGRAPH kbWinNT400PreSP7Fixkbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Passflt.dll is used by administrators to ensure that strong passwords are being
	used on the domain. However, Passflt.dll is used in conjunction with the domain
	policy for password length. If the domain policy allows for a blank password
	(that is, a zero-length password) and a user changes his or her password to, for
	example, "Mm1", the password change succeeds. This occurs because the password
	length is longer than 0 (zero), an uppercase and a lowercase character was used,
	and a non-alphabetical character was used as well.
	
	CAUSE
	=====
	
	Passflt.dll does not check for a minimum length of 6 characters.
	
	
	RESOLUTION
	==========
	
	Passflt.dll has been modified to check the length of the password.
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date        Time     Version         Size   File name
	  -------------------------------------------------------
	  9/27/2000   8:22PM   4.0.1381.7086   8 KB   Passflt.dll
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, change the domain policy not to allow passwords of
	less than 6 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: passflt dll
	
	======================================================================
	Keywords          : MSGRAPH kbWinNT400PreSP7Fix kbfixlist
	Component         : DirectoryServices
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp5 kbWinNTW400sp4 kbWinNTW400sp3 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400sp5 kbWinNTSEnt400sp4 kbWinNTSEnt400 kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400search kbWinNTW400sp6 kbWinNTSEnt400SP6a kbWinNTW400SP6a
	Version           : :4.0,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
