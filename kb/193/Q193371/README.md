---
layout: page
title: "Q193371: WINS/DHCP Admin Show Expiration Dates 2000 - 2009 with One Digit"
permalink: /kb/193/Q193371/
---

## Q193371: WINS/DHCP Admin Show Expiration Dates 2000 - 2009 with One Digit

{% raw %}

	Article: Q193371
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51, 4.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbWinNT400sp4fix
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows Internet Name Service (WINS) Admin and Dynamic Host Configuration
	Protocol (DCHP) Service Admin display the expiration dates 2000 through 2009
	with only one digit (for example, 1/1/2000 is displayed as 1/1/0 instead of
	1/1/00).
	
	RESOLUTION
	==========
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0 or
	Windows NT Server 4.0, Terminal Server Edition. For additional information,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Windows NT 3.51
	---------------
	
	A supported fix that corrects this problem is now available from Microsoft, but
	has not been fully regression tested and should be applied only to systems
	experiencing this specific problem.
	
	To resolve this problem immediately, download the fix as described below. For a
	complete list of Microsoft Product Support Services phone numbers and
	information on support costs, please go to the following address on the World
	Wide Web:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File Name     Platform
	  -------------------------------------------------------------
	  09/11/98  07:08p               174,592 Dhcpadmn.exe  (x86)
	  09/11/98  07:08p               183,840 Winsadmn.exe  (x86)
	
	  09/11/98  07:16p               246,032 Dhcpadmn.exe  (Alpha)
	  09/11/98  07:16p               254,224 Winsadmn.exe  (Alpha)
	
	NOTE: Y2k351-i.exe and Y2k351-a.exe were updated on November 5, 1998.
	
	This hotfix has been posted to the following Internet location as Y2k351-i.exe
	(x86) and Y2k351-a.exe (Alpha):
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT351/hotfixes-postSP5/y2k-fix/
	
	
	STATUS
	======
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed this to be a problem in Windows NT 4.0 and Windows NT
	Server 4.0, Terminal Server Edition. This problem was first corrected in Windows
	NT 4.0 Service Pack 4.0 and Windows NT Server 4.0, Terminal Server Edition
	Service Pack 4.
	
	Windows NT 3.51
	---------------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51.
	
	======================================================================
	Keywords          : kbYear2000 kbWinNT400sp4fix 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbNTTermServ400 kbNTTermServSearch kbWinNTS351search
	Version           : WinNT:3.51, 4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
