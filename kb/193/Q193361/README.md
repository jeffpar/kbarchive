---
layout: page
title: "Q193361: MSGINA.DLL does not Reset WINLOGON Structure"
permalink: kb/193/Q193361/
---

## Q193361: MSGINA.DLL does not Reset WINLOGON Structure

	Article: Q193361
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A previous user's old password is visible to a third-party Gina.dll file because
	the Microsoft Msgina.dll file does not reset the old password flag and the old
	password string.
	
	CAUSE
	=====
	
	When a user changes his or her password because of the "Password Expiration" or
	"User Must Change Password During Next Logon" policy during the logon process,
	MSGINA keeps a flag indicating that the password has changed and stores the old
	password. When the next user logs on, this flag is not reset and the previous
	user's old password is stored, even though the new logged on user did not change
	his or her password.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition or the individual software
	update. For information on obtaining the latest service pack, please go to:
	
	- http://www.microsoft.com/windows/servicepacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT 4.0 Service Pack 5 and Windows NT Server 4.0,
	Terminal Server Edition Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
