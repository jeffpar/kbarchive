---
layout: page
title: "Q195123: AV in DNS Server When Enumerating a Zone w/ WK Resource Records"
permalink: kb/195/Q195123/
---

## Q195123: AV in DNS Server When Enumerating a Zone w/ WK Resource Records

	Article: Q195123
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view Microsoft DNS Server zone information using DNS Manager, if the
	zone information contains well known service (WKS) resource records (RR), you
	may receive an access violation in Dns.exe.
	
	CAUSE
	=====
	
	When you view Microsoft DNS Server zone information using DNS Manager, if the
	zone information contains well known service (WKS) resource records (RR), an
	access violation (AV) can occur in Dns.exe. The service can be restarted but
	enumeration of the zone data through DNS Manager will cause it to have another
	AV again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	the individual software update. For information on obtaining the latest service
	pack, please go to:
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	Additional query words: 4.00
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
