---
layout: page
title: "Q216795: Semaphore Error After Disabling Write Behind Caching"
permalink: kb/216/Q216795/
---

## Q216795: Semaphore Error After Disabling Write Behind Caching

	Article: Q216795
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you change the following registry subkey
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Rdr\Parameters
	
	  Value Name: UseWriteBehind
	  Data Type:  REG_DWORD
	  Data:       0
	
	on a computer running Microsoft Terminal Server and then try to copy a file to a
	remote share over the network, the following error message is displayed:
	
	  To Many Posts Were Made to a Semaphore.
	
	This may occur when you run the Terminal Server console and when a client is
	connected to a Terminal Server Session, because both are copying files from the
	Terminal Server computer to a remote share.
	
	CAUSE
	=====
	
	This problem occurs because of a problem in the redirector, which manipulates an
	operating system semaphore.
	
	
	WORKAROUND
	
	To work around this problem:
	
	- Re-enable write behind caching by setting UseWriteBehind to 1.
	
	-or-
	
	- Apply the hotfix mentioned below.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next that contains this fix.
	
	To resolve this problem immediately, contact Microsoft Product Support Services
	to obtain the fix. For a complete list of Microsoft Product Support Services
	phone numbers and information about support costs, please go to the following
	address on the World Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are normally incurred for support calls may
	be canceled, if a Microsoft Support Professional determines that a specific
	update will resolve your problem. Normal support costs will apply to additional
	support questions and issues that do not qualify for the specific update in
	question.
	
	  Date       Time         Version   Size      File name   Platform
	  ----------------------------------------------------------------
	  02/14/99   11:10:00 PM  4.0       264,848   Rdr.sys     Intel
	  02/14/99   11:09:50 PM  4.0       506,928   Rdr.sys     Alpha
	
	  (http://support.microsoft.com/download/support/mslfiles/)
	
	Install the latest service pack for Windows NT server 4.0, Terminal Server
	Edition. Service pack 4 for Windows Terminal Server contains the fix for this
	bug.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 Terminal Server
	version SP4. This problem has been corrected in the latest U.S. service pack for
	Windows NT 4.0 Terminal Server version SP4. For information on obtaining the
	service pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	  S E R V P A C K
	
	Additional query words: Terminalsvr Semaphore
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
