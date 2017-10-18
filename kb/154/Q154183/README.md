---
layout: page
title: "Q154183: CreateFile API with Delete-on-Close Option May Fail"
permalink: kb/154/Q154183/
---

## Q154183: CreateFile API with Delete-on-Close Option May Fail

	Article: Q154183
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Failure may occur when you use Lotus Approach 4.0 (or 3.0) and try to save a
	database file in Paradox or dBase file formats to an OS/2 LanServer or Windows
	95 or Windows for Workgroups configured as the server. Lotus Approach returns
	the following error message:
	
	  Could not open filename because it is damaged.
	
	
	CAUSE
	=====
	
	When an application opens a file on remote downlevel server message block (SMB)
	servers using the Createfile API with FILE_FLAG_DELETE_ON_CLOSE flag set, the
	Windows NT redirector does not send a Delete File request to the server when the
	application closes the file.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
