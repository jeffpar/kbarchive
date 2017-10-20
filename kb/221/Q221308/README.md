---
layout: page
title: "Q221308: NumberOfRings=0 Does Not Work for RRAS Auto-Answer in WinNT4.0"
permalink: /kb/221/Q221308/
---

## Q221308: NumberOfRings=0 Does Not Work for RRAS Auto-Answer in WinNT4.0

{% raw %}

	Article: Q221308
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set the number of rings for the auto-answer in Routing and Remote
	Access Server (RRAS) to zero, it does not work. For additional information,
	please see the following article(s) in the Microsoft Knowledge Base:
	
	  Q145879 How to Set Number of Rings for RAS Auto-Answer in WinNT 4.0
	
	CAUSE
	=====
	
	In Windows NT 4.0, RRAS waits for a RINGING message from TAPI, even if the
	number of rings is set to zero.
	
	
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
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0. This problem was
	first corrected in Windows NT version 4.0 Service Pack 5.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbWinNT400sp5fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
