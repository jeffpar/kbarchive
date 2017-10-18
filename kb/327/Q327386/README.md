---
layout: page
title: "Q327386: A &quot;Stop 0x0000001E&quot; Error May Occur in Win32k.sys with SAP"
permalink: kb/327/Q327386/
---

## Q327386: A &quot;Stop 0x0000001E&quot; Error May Occur in Win32k.sys with SAP

	Article: Q327386
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP6
	Operating System(s): 
	Keyword(s): kbWinNT400nospFix
	Last Modified: 12-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP6, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using SAP R/3 in multiple client sessions, a user may receive the
	following error message and the computer may stop responding (hang) when the
	user closes a dialog box:
	
	  Stop 0x0000001E, C0000005, A304EDE8,00000000, 000002c3
	
	CAUSE
	=====
	
	This problem occurs because a buffer is freed two times.
	
	RESOLUTION
	==========
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem that is described in this article. Apply it only to
	computers that are experiencing this specific problem.
	
	To resolve this problem, contact Microsoft Product Support Services to obtain the
	fix. For a complete list of Microsoft Product Support Services phone numbers and
	information about support costs, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: In special cases, charges that are ordinarily incurred for support calls
	may be canceled if a Microsoft Support Professional determines that a specific
	update will resolve your problem. The usual support costs will apply to
	additional support questions and issues that do not qualify for the specific
	update in question.
	
	The English version of this fix has the file attributes (or later) that are
	listed in the following table. The dates and times for these files are listed in
	coordinated universal time (UTC). When you view the file information, it is
	converted to local time. To find the difference between UTC and local time, use
	the Time Zone tab in the Date and Time tool in Control Panel.
	
	  Date         Time   Version         Size       File name    
	  ---------------------------------------------------------
	  06-Apr-2002  03:38  4.0.1381.33535    170,256  Gdi32.dll
	  06-Apr-2002  03:38  4.0.1381.33535    332,048  User32.dll
	  05-Aug-2002  21:26  4.0.1381.33539  1,279,856  Win32k.sys
	  06-Apr-2002  03:42  4.0.1381.33535    196,368  Winsrv.dll
	
	NOTE: Because of file dependencies, this hotfix requires Microsoft Windows NT 4.0
	Terminal Server Edition Service Pack 6.
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbWinNT400nospFix 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServ400sp6 kbNTTermServSearch
	Version           : :4.0,4.0 SP6
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
