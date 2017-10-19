---
layout: page
title: "Q219027: STOP 0x00000024 in Ntfs.sys with Service Pack 4"
permalink: /kb/219/Q219027/
---

## Q219027: STOP 0x00000024 in Ntfs.sys with Service Pack 4

	Article: Q219027
	Product(s): Microsoft Windows NT
	Version(s): 4.0 SP4
	Operating System(s): 
	Keyword(s): kbWinNT400sp5fixkbfixlist
	Last Modified: 16-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Windows NT 4.0 Service Pack 4, the following STOP error message
	may be displayed:
	
	  Stop 0x00000024 ( 0x00190201, 0xf24a3988, 0xf24a37c4, 0x803d38cf )
	
	NOTE: Not all STOP 0x00000024 errors will be this problem. The parameters may
	vary depending on the system configurations.
	
	This problem may cause the following STOP error message as well:
	
	  STOP 0x0000000a (01041305 00000002 00000001 80103f0c)
	
	All of the parameters in the error message may vary depending on the system
	configuration.
	
	CAUSE
	=====
	
	This problem is caused by a timing problem in NTFS, which creates two entries in
	the open attributes table for a stream control block (SCB). When the SCB was
	freed, only one of these entries would be freed. The next time NTFS needs a
	clean checkpoint on the volume, NTFS crashes as it tries to reference the freed
	SCB.
	
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
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was first corrected in Windows NT 4.0 Service Pack 5.
	
	
	Additional query words: 0x24 ntfs
	
	======================================================================
	Keywords          : kbWinNT400sp5fix kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp4 kbWinNTS400search
	Version           : :4.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
