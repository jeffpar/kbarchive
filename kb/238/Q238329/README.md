---
layout: page
title: "Q238329: Malformed IGMP Packets May Promote &quot;Denial of Service&quot; Attack"
permalink: /kb/238/Q238329/
---

## Q238329: Malformed IGMP Packets May Promote &quot;Denial of Service&quot; Attack

{% raw %}

	Article: Q238329
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork osr2 win95 win98 win98se
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows CE Platform Builder, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a computer running Windows 95 or Windows 98 receives a fragmented Internet
	Group Management Protocol (IGMP) packet, the computer's performance may degrade
	or the computer may stop responding (hang) and require a reboot to restore
	functionality.
	Computers running Windows NT 4.0 are also affected by this issue, but other
	system components prevent any performance degradation.
	
	CAUSE
	=====
	
	A fragmented IGMP packet may cause the TCP/IP stack to improperly gain access to
	invalid segments of the computer's memory.
	
	RESOLUTION
	==========
	
	This patch is now available on the Windows Update Web site.
	
	NOTE: If Dial-Up Networking Update version 1.3 for Windows 95 is not installed,
	you will not be able to view this fix.
	
	Windows NT
	----------
	
	Windows NT Workstation 4.0; Windows NT Server 4.0; Windows NT Server, Enterprise
	Edition: A supported fix is now available from Microsoft, but it is only
	intended to correct the problem described in this article and should be applied
	only to systems experiencing this specific problem. This fix may receive
	additional testing at a later time, to further ensure product quality.
	Therefore, if you are not severely affected by this problem, Microsoft
	recommends that you wait for the next Windows NT 4.0 service pack that contains
	this fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size      File name   Platform
	  --------------------------------------------------
	  08/14/99   03:54p   150,800   Tcpip.sys   x86
	  08/14/99   03:53p   274,032   Tcpip.sys   Alpha
	
	This hotfix has been posted to the following Internet location as Igmpfixi.exe
	and Igmpfixa.exe.exe:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP5/IGMP-fix/
	
	
	
	Terminal Server
	---------------
	
	Windows NT Server 4.0, Terminal Server Edition:
	
	A supported fix is now available from Microsoft, but it is only intended to
	correct the problem described in this article and should be applied only to
	systems experiencing this specific problem. This fix may receive additional
	testing at a later time, to further ensure product quality. Therefore, if you
	are not severely affected by this problem, Microsoft recommends that you wait
	for the next Windows NT 4.0, Terminal Server Edition, service pack that contains
	this fix.
	
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
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size      File name   Platform
	  --------------------------------------------------
	  09/01/99   03:28p   147,920   Tcpip.sys   x86
	  09/01/99   03:34p   269,648   Tcpip.sys   Alpha
	
	This hotfix has been posted to the following Internet location as Igmpfixi and
	Igmpfixa.exe:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40TSE/hotfixes-postSP4/IGMP-fix/
	
	
	
	Windows 98
	----------
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time      Size       File name  Version    Platform
	  ----------------------------------------------------------------
	  08/12/99   05:20p    75,769     Vip.386    4.10.1999  Windows 98
	  08/03/99   02:50p    80,409     Vip.386    4.10.2223  Windows 98
	                                                        Second Edition
	
	This hotfix has been posted to the following Internet location as 3304up98.exe
	(Windows 98) and 3304upse.exe (Windows 98 Second Edition):
	
	  http://www.microsoft.com/windows98/downloads/corporate.asp
	
	Windows CE Platform Builder
	---------------------------
	
	A supported fix is now available from Microsoft as Windows CE 3.0 Core OS QFE 72.
	To resolve this problem immediately, access the Microsoft.com Download Center at
	the following Web site:
	
	  http://www.microsoft.com/downloads/search.asp?
	
	After you connect to this Web page, click All Products for the product name.
	Click Windows CE for the operating system. Click All Downloads for Show Results
	For, and then click Date for Sort By. Click Find It to show a list of all
	released QFEs for the products.
	
	The English version of this package should have the following file attributes or
	later:
	
	  Size        File name
	  --------------------------
	  7,010,648   Wce30qfe72.exe
	
	The English version of this fix should contain the following files, with the
	listed file attributes or later:
	
	  Date      Time   Size     File Name  Platform
	  ----------------------------------------------------
	  28/08/01  16:57  752,398  Ip.lib     ARM720 (Debug)
	  28/08/01  16:52  602,798  Ip.lib     ARM720 (Retail)
	  28/08/01  17:07  751,138  Ip.lib     SA1100 (Debug)
	  28/08/01  17:02  601,594  Ip.lib     SA1100 (Retail)
	  28/08/01  15:58  853,168  Ip.lib     R3000  (Debug)
	  28/08/01  15:53  723,524  Ip.lib     R3000  (Retail)
	  28/08/01  16:09  853,744  Ip.lib     R4100  (Debug)
	  28/08/01  16:04  722,718  Ip.lib     R4100  (Retail)
	  28/08/01  16:18  853,744  Ip.lib     R4111  (Debug)
	  28/08/01  16:14  660,436  Ip.lib     R4111  (Retail)
	  28/08/01  16:28  853,168  Ip.lib     R4300  (Debug)
	  28/08/01  16:24  722,788  Ip.lib     R4300  (Retail)
	  28/08/01  16:38  834,326  Ip.lib     PPC403 (Debug)
	  28/08/01  16:33  637,792  Ip.lib     PPC403 (Retail)
	  28/08/01  16:48  834,326  Ip.lib     PPC821 (Debug)
	  28/08/01  16:43  637,792  Ip.lib     PPC821 (Retail)
	  28/08/01  15:37  767,984  Ip.lib     SH3    (Debug)
	  28/08/01  15:32  643,336  Ip.lib     SH3    (Retail)
	  28/08/01  15:48  767,752  Ip.lib     SH4    (Debug)
	  28/08/01  15:43  643,118  Ip.lib     SH4    (Retail)
	  28/08/01  17:17  756,116  Ip.lib     ARM720 (Debug)
	  28/08/01  17:12  632,204  Ip.lib     ARM720 (Retail)
	  28/08/01  15:28  689,554  Ip.lib     i486   (Debug)
	  28/08/01  15:23  532,528  Ip.lib     i486   (Retail)
	
	Windows 95
	----------
	
	The English-language version of this fix should have the following file
	attributes or later:
	
	  Date       Time     Size      File name   Version     Platform
	  ----------------------------------------------------------------
	  08/14/99   04:12p   75,873    Vip.386     4.10.1657   Windows 95
	                                                        (all versions)
	
	This hotfix has been posted to the following Internet location as 3304up95.exe
	(Windows 95, all versions):
	
	  http://www.microsoft.com/windows95/downloads/
	
	NOTE: For Windows 95, this update requires the Dial-Up Networking 1.3 Performance
	and Security Update. To download the Dial-Up Networking 1.3 Performance and
	Security Update (Msdun13.exe), please go to the following Microsoft Web site:
	
	  http://www.microsoft.com/windows95/downloads/contents/WURecommended/S_WUNetworking/dun13win95/Default.asp
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	For more information about this vulnerability, see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/security/bulletins/ms99-034faq.asp
	
	For additional information about Windows 95 hotfixes, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q161020 Implementing Windows 95 Updates
	
	For additional information about Windows 98 and Windows 98 Second Edition
	hotfixes, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q206071 General Information on Windows 98 and SE Hotfixes
	
	
	Additional query words: MS99-034
	
	======================================================================
	Keywords          : kbnetwork osr2 win95 win98 win98se 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch kbAudDeveloper kbWin95search kbWin98search kbWin98SEsearch kbSDKSearch kbWinCESDKSearch kbWinCESearch kbZNotKeyword3 kbWinCESDK300 kbWin98 kbWin98SE
	Version           : :3.0,4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
