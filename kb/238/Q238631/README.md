---
layout: page
title: "Q238631: NTLM Password Change Fails When Password Contains an Ampersand"
permalink: kb/238/Q238631/
---

## Q238631: NTLM Password Change Fails When Password Contains an Ampersand

	Article: Q238631
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT4sp6fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Internet Information Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to change an expired Windows NT password in Internet
	Information Server (IIS) 4.0 and you use an ampersand (&) in the new
	password, the password does not change, even though you receive the following
	message after completing the password change form:
	
	  The operation completed successfully
	
	"Password changed successfully" is returned when a password change is successful.
	The ampersand is a valid password character in Windows NT.
	
	CAUSE
	=====
	
	The parsing code in Ism.dll assumes the following sequence:
	
	  VARIABLE=VALUE&
	
	When you use an ampersand (&) in the password, a sequence of one or more
	ampersands is created before an equal sign (=). For example, old
	password=password& will work correctly, but new password=m&m& will
	not.
	
	RESOLUTION
	==========
	
	Windows NT Server or Workstation 4.0
	------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or the
	individual software update. For information on obtaining the latest service
	pack, please go to:
	
	- http://www.microsoft.com/Windows/ServicePacks/
	
	-or-
	
	- Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	For information on obtaining the individual software update, contact Microsoft
	Product Support Services. For a complete list of Microsoft Product Support
	Services phone numbers and information on support costs, please go to the
	following address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: The IIS 4.0 Windows NT Workstation and Windows 95/98 fixes will have
	different file properties.
	
	
	Windows NT Server 4.0, Terminal Server Edition
	----------------------------------------------
	
	To resolve this problem, obtain the latest service pack for Windows NT Server
	4.0, Terminal Server Edition. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	4.0.Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows
	NT Server 4.0, Terminal Server Edition.
	
	This problem was first corrected in Windows NT Server 4.0 Service Pack 6 and
	Windows NT Server 4.0, Terminal Server Edition Service Pack 6.
	
	MORE INFORMATION
	================
	
	Another symptom that has been seen is the Inetinfo process spinning at 100
	percent CPU utilization.
	
	Additional query words: percent peg max
	
	======================================================================
	Keywords          : kbWinNT4sp6fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
