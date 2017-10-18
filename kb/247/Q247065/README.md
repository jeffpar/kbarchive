---
layout: page
title: "Q247065: Err Msg: System Process Lost Delayed-Write Data"
permalink: kb/247/Q247065/
---

## Q247065: Err Msg: System Process Lost Delayed-Write Data

	Article: Q247065
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kberrmsg kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server, Enterprise Edition versions 4.0, 4.0 SP6, 4.0 SP6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you take a cluster disk offline, or move the group to the other node, you
	may receive the following error message:
	
	  "System Process - Lost Delayed-Write Data"
	
	  "The system was attempting to transfer file data from buffers to
	  \Device\Harddisk#\Partition#\. The write operation failed, and only some of
	  the data may have been written to the file.
	
	CAUSE
	=====
	
	With certain disk layouts, e.g. additional RAW partitions, the partition is not
	properly unmounted before the disk is taken offline.
	
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
	
	  Date      Time    Size    File name     Platform
	  ------------------------------------------------
	  12/02/99  11:35a  29,712  clusdisk.sys  i386
	  12/02/99  11:33a  49,744  clusdisk.sys  Alpha
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: MSCS Event ID: 26
	
	======================================================================
	Keywords          : kberrmsg kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp6 kbWinNTSEnt400 kbWinNTS400search kbWinNTSEnt400SP6a
	Version           : :4.0,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
