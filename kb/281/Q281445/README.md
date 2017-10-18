---
layout: page
title: "Q281445: WINS PersonaNonGrata Key Doesn't Restrict IPs During Replication"
permalink: kb/281/Q281445/
---

## Q281445: WINS PersonaNonGrata Key Doesn't Restrict IPs During Replication

	Article: Q281445
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbtool w2000wins kbWinNT400PreSP7Fix kbWINS
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3, 4.0 SP4, 4.0 SP5, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The PersonaNonGrata registry key for Windows Internet Name Service (WINS) may
	not restrict certain Internet protocol (IP) addresses during replication.
	
	CAUSE
	=====
	
	This problem can occur if the algorithm that sorts the list of IP addresses does
	not work.
	
	RESOLUTION
	==========
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date        Time    Size     File name  Platform
	  ------------------------------------------------
	  12/19/2000  11:58a  349,968  Wins.exe   Alpha
	  12/19/2000  12:00p  195,856  Wins.exe   Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	Additional query words: persona non grata, WINS
	
	======================================================================
	Keywords          : kbtool w2000wins kbWinNT400PreSP7Fix kbWINS 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400sp4 kbWinNTS400sp3 kbWinNTS400sp2 kbWinNTS400sp1 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP1,4.0 SP2,4.0 SP3,4.0 SP4,4.0 SP5,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
