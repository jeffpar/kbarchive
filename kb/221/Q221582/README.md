---
layout: page
title: "Q221582: STOP 0x0000000a Running Citrix MetaFrame on Terminal Server"
permalink: kb/221/Q221582/
---

## Q221582: STOP 0x0000000a Running Citrix MetaFrame on Terminal Server

	Article: Q221582
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
	
	Windows NT Server 4.0, Terminal Server Edition servers with Citrix MetaFrame
	software installed may display the following blue screen error message:
	
	  STOP 0x0000000a (0x0000008 0x0000001c 0x00000000 0x80117f9c)
	
	NOTE: The parameters in the parenthesis may vary depending on the system
	configurations.
	
	CAUSE
	=====
	
	The crash is caused by the deallocation of a file structure before completion of
	an NtRead request.
	
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT Server 4.0, Terminal Server Edition service pack that
	contains this fix.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Version      Size    File name     Platform
	  -------------------------------------------------------------
	  03/02/99   10:35p   12,600 Tdasync.sys   x86
	  03/02/99   10:35p   18,488 Tdipx.sys     x86
	  03/02/99   10:35p   16,984 Tdnetb.sys    x86
	  03/02/99   10:35p   10,232 Tdpipe.sys    x86
	  03/02/99   10:35p   16,152 Tdspx.sys     x86
	  03/02/99   10:35p   18,392 Tdtcp.sys     x86
	
	  03/02/99   10:49p   20,056 Tdasync.sys   Alpha
	  03/02/99   10:49p   31,736 Tdipx.sys     Alpha
	  03/02/99   10:48p   27,736 Tdnetb.sys    Alpha
	  03/02/99   10:49p   15,640 Tdpipe.sys    Alpha
	  03/02/99   10:49p   27,288 Tdspx.sys     Alpha
	  03/02/99   10:49p   30,872 Tdtcp.sys     Alpha
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server 4.0, Terminal
	Server Edition. This problem was first corrected in Windows NT Server 4.0,
	Terminal Server Edition Service Pack 5.
	
	Additional query words: 4.00 wts tse stop 0xa
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
