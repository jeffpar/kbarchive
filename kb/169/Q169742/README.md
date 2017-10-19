---
layout: page
title: "Q169742: Semaphore Timeout Error When UseWriteBehind Disabled for Redir"
permalink: /kb/169/Q169742/
---

## Q169742: Semaphore Timeout Error When UseWriteBehind Disabled for Redir

	Article: Q169742
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): kbWinNT400sp4fix _IKkbbuglist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you disable write-behind caching in Windows NT by setting the following
	parameter to 0
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr
	   \Parameters\UseWriteBehind
	
	and you then attempt to copy a file to a remote share, the following message
	appears:
	
	  Too many posts were made to a semaphore.
	
	CAUSE
	=====
	
	This error is caused by a problem in the redirector, which manipulates an
	operating system semaphore.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT 3.51
	---------------
	
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
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  05/29/97  06:20p               259,920 Rdr.sys       (x86)
	  05/29/97  05:19p               470,928 Rdr.sys       (Alpha)
	  05/29/97  05:18p               430,160 Rdr.sys       (MIPS)
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Re-enable write behind caching by setting UseWriteBehind to 1
	
	  -or-
	
	- Apply the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 3.51, 4.0 and Windows
	NT Server 4.0, Terminal Server Edition. This problem was first corrected in
	Windows NT 4.0 Service Pack 4 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Additional query words: 4.00 3.51 wts tse event id 26
	
	======================================================================
	Keywords          : kbWinNT400sp4fix _IK kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : winnt:3.51,4.0
	Hardware          : ALPHA MIPS x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
