---
layout: page
title: "Q312163: DBCS TrueType Characters Are Garbled"
permalink: /kb/312/Q312163/
---

## Q312163: DBCS TrueType Characters Are Garbled

{% raw %}

	Article: Q312163
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6,4.0 SP6a
	Operating System(s): 
	Keyword(s): kbenv kbprintkbbuglist kbfixlist
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6a 
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send your print job that contains one or more TrueType font characters
	to your non-PostScript printer, the TrueType characters may be garbled.
	
	NOTE: As of March 2002, this symptom has only been reported to occur with a
	double-byte character set (DBCS) TrueType font.
	
	
	CAUSE
	=====
	
	An internal font glyph to Device Independent Bitmap (DIB) rendering subroutine
	may lose track of the left edge of the character during foreground color
	bit-block operations.
	
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
	
	  Date         Time   Version        Size       File name   Platform
	  ------------------------------------------------------------------
	  05-Dec-2001  17:15  4.0.1381.7103    169,744  Gdi32.dll   Intel
	  05-Dec-2001  17:16  4.0.1381.7109    327,440  User32.dll  Intel
	  05-Dec-2001  17:13  4.0.1381.7114  1,254,640  Win32k.sys  Intel
	  05-Dec-2001  17:16  4.0.1381.7102    175,888  Winsrv.dll  Intel
	  05-Dec-2001  17:12  4.0.1381.7103    305,424  Gdi32.dll   Alpha
	  05-Dec-2001  17:12  4.0.1381.7109    575,760  User32.dll  Alpha
	  05-Dec-2001  17:09  4.0.1381.7114  2,053,712  Win32k.sys  Alpha
	  05-Dec-2001  17:12  4.0.1381.7097    314,128  Winsrv.dll  Alpha
	
	NOTE: Due to file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Service Pack 6a.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Windows 2000.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbprint kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6,4.0 SP6a
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
