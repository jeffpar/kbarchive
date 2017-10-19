---
layout: page
title: "Q172930: Removing Bypass Traverse Checking Causes Copy to Drop Streams"
permalink: /kb/172/Q172930/
---

## Q172930: Removing Bypass Traverse Checking Causes Copy to Drop Streams

	Article: Q172930
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork kbWinNT400sp4fix
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Files contained in Macintosh volumes contain streams (special data content) that
	include data fork information. Files that do not contain stream information
	appear to Macintosh clients as text-only files. The reported problem occurs
	after copying a file from one directory to another. The copy operation could be
	performed from the computer running Windows NT Server or by a Macintosh client;
	it made no difference. After the copy operation, the target file stream was lost
	and the file appeared to Macintosh clients as a text-only file.
	
	This copy problem occurs on PDC or BDC servers, but not on a member server. It
	also occurs when the Domain User Rights for "Bypass Traverse Checking" (the
	default is Everyone) has been modified so no users are granted this right for
	the Domain.
	
	CAUSE
	=====
	
	NTFS was making a check that precluded the copying of the streams in the case
	where "Bypass Traverse Checking" was removed from user rights.
	
	RESOLUTION
	==========
	
	To work around this problem, restore the Domain User Right: Bypass Traverse
	Checking to Everyone.
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	
	Additional query words: Mac Services SFM macfile Mac client
	======================================================================
	Keywords          : kbenv kbnetwork kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
