---
layout: page
title: "Q262956: &quot;Stop 0x50&quot; in Win32k.sys with Windows NT Terminal Server"
permalink: kb/262/Q262956/
---

## Q262956: &quot;Stop 0x50&quot; in Win32k.sys with Windows NT Terminal Server

	Article: Q262956
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Windows NT Server 4.0, Terminal Server Edition, on
	high-capacity servers, you may receive a "Stop 0x50" error message in Win32k.sys
	sporadically.
	
	
	CAUSE
	=====
	
	While it is walking through the buffer backwards, the code accesses memory
	beyond the end of the area allocated. This occurs only when the font that is
	currently being rendered is very small.
	
	Another cause for the "Stop 0x50" error message is that for each desktop there is
	a buffer that is used to convert raw keyboard input to a format that can be sent
	to a window in a message. When there are many keystrokes in the queue, writing
	may occur past the end of the buffer.
	
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
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time    Size       File name   Platform
	  -------------------------------------------------
	  07/11/00  03:45p    170,256  Gdi32.dll   Intel
	  07/11/00  03:44p    331,536  User32.dll  Intel
	  08/31/00  02:42p  1,276,688  Win32k.sys  Intel
	  08/17/00  05:16p    195,856  Winsrv.dll  Intel
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	These issues do not occur in Microsoft Windows 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
