---
layout: page
title: "Q249863: SGC Connections May Fail from Domestic Clients"
permalink: /kb/249/Q249863/
---

## Q249863: SGC Connections May Fail from Domestic Clients

{% raw %}

	Article: Q249863
	Product(s): Microsoft Windows NT
	Version(s): 2000,4.0,5,5.01
	Operating System(s): 
	Keyword(s): kbSecurity kbWin2000PreSP1Fix kbWinNT400PreSP7Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Internet Explorer versions 5, 5.01 for Windows NT 4.0 
	- Microsoft Internet Explorer version 5.01 for Windows 98 Second Edition 
	- Microsoft Internet Explorer versions 5, 5.01 for Windows 98 
	- Microsoft Windows 98 Second Edition 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Web clients may fail to connect to Web sites that use Server Gated Cryptography
	(SGC) for strong encryption when a secure connection is required. If either the
	Internet server or Web client is running Microsoft products, then the connection
	may fail. If the Internet server and Web client are both running Microsoft
	products, then no problem occurs.
	
	CAUSE
	=====
	
	This problem occurs in the security provider Schannel.dll file, which is used in
	Microsoft Internet Information Server (IIS) and Microsoft Internet Explorer,
	when you connect to a site that uses SGC to do high encryption, and the export
	cipher suite uses one hash algorithm and the domestic cipher suite uses another.
	In this situation, the Schannel.dll file occasionally selects the wrong
	algorithm, which results in a failed connection.
	
	RESOLUTION
	==========
	
	Windows 2000
	------------
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	Windows NT 4.0
	--------------
	
	To resolve this problem, obtain the Windows NT 4.0 Security Rollup Package. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q299444 Post-Windows NT 4.0 Service Pack 6a Security Rollup Package (SRP)
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Date      Time                 Size    File name     Platform
	
	  -------------------------------------------------------------
	  01/26/2000  06:15p             154,384 Schannel.dll  NT x86 40bit
	  01/26/2000  07:40p             267,536 Schannel.dll  NT Alpha 40bit
	  01/26/2000  07:40p             123,664 Schannel.dll  NT x86 128bit
	  01/26/2000  07:40p             226,576 Schannel.dll  NT Alpha 28bit
	
	This hotfix has been posted to the following Internet locations:
	
	  http://www.microsoft.com/ntserver/nts/downloads/critical/schannel/default.asp
	
	
	
	Microsoft Windows NT Server version 4.0, Terminal Server Edition
	----------------------------------------------------------------
	
	To resolve this problem, obtain the Windows NT Server 4.0, Terminal Server
	Edition, Security Rollup Package (SRP). For additional information about the
	SRP, click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q317636 Windows NT Server 4.0, Terminal Server Edition, Security Rollup
	  Package
	
	Windows 9x
	----------
	
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
	
	  Date      Time      Size     File name     Platform
	  -------------------------------------------------------
	  01/26/2000  03:15p  154,384  Schannel.dll  Win95 40bit
	  01/26/2000  04:40p  123,664  Schannel.dll  Win95 128bit
	  01/26/2000  03:15p  154,384  Schannel.dll  Win98 40bit
	  01/26/2000  04:40p  123,664  Schannel.dll  Win98 128bit
	
	This hotfix has been posted to the following Internet locations:
	
	  http://www.microsoft.com/windows98/downloads/contents/WUCritical/schannel/Default.asp
	  http://www.microsoft.com/windows95/downloads/contents/WUCritical/Schannel/
	
	
	
	STATUS
	======
	
	Windows 2000
	------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows 2000. This problem was first corrected in Windows 2000
	Service Pack 1.
	
	Windows NT 4.0
	--------------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows NT 4.0.
	
	Windows 9x
	----------
	
	Microsoft has confirmed that this problem could result in some degree of security
	vulnerability in Windows 95, Windows 98, and Windows 98 Second Edition.
	
	MORE INFORMATION
	================
	
	This fix should be applied based on the following scenarios:
	
	- If the server is running IIS and the clients are not running Microsoft
	  Internet Explorer, then apply the Microsoft Windows NT patch on the server.
	
	- If the server is running Microsoft Personal Web Server (PWS) for Windows 95
	  or 98 and the clients are not running Microsoft Internet Explorer, then apply
	  the appropriate Microsoft Windows 95 or 98 patch on the PWS computer.
	
	- If the server is not running IIS or PWS and the client is running Microsoft
	  Internet Explorer, then apply the appropriate Microsoft Windows NT, Microsoft
	  Windows 95, or Microsoft Windows 98 patch on the client.
	
	Note: If the Internet server and Web client are Microsoft products, then there is
	no issue. In most Windows 95 and Windows 98 cases, Windows is used as a client,
	and the fix should be applied on the client side.
	
	Additional query words: security_patch tsesrp kbfaqw2knet
	
	======================================================================
	Keywords          : kbSecurity kbWin2000PreSP1Fix kbWinNT400PreSP7Fix 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbIEsearch kbWin95search kbWin98search kbWin98SEsearch kbiis400 kbZNotKeyword2 kbIENT400Search kbIE500Search kbWinAdvServSearch kbZNotKeyword3 kbIE98Search kbWin98 kbIE500Win98 kbIE501Win98 kbIE501Win98SE kbIE500WinNT400 kbIE501WinNT400 kbWin98SE kbIE98SESearch
	Version           : :2000,4.0,5,5.01
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
