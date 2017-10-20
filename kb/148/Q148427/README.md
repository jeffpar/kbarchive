---
layout: page
title: "Q148427: Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products"
permalink: /kb/148/Q148427/
---

## Q148427: Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products

{% raw %}

	Article: Q148427
	Product(s): Microsoft Windows NT
	Version(s): 3.0,4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	- Microsoft Site Server version 3.0, Commerce Edition 
	- Microsoft Site Server, Enterprise Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	On July 17, 1998 Microsoft released an updated version of Schannel.dll. This
	latest version provides the following benefits:
	
	- Resolves the vulnerability in SSL (Secure Sockets Layer) discovered by Daniel
	  Bleichenbacher of Bell Labs.
	
	- Banks outside the U.S. and Canada can now use extremely strong 128-bit
	  encryption.
	
	- Eliminates the need for separate SGC and non-SGC versions of Schannel.dll.
	
	- Corrects the "Bad Password" error message documented in the following article
	  in the Microsoft Knowledge Base:
	
	  Q179550 Installing a Certificate in IIS May Result in Bad Password Error
	
	- Includes an updated version of Sgcinst.exe that corrects the problem where
	  SGCINST appears to execute but SGC does not work. For more information,
	  please see the following article in the Microsoft Knowledge Base:
	
	  Q180018 SGCINST.EXE Appears to Execute but SGC Does Not Work
	
	MORE INFORMATION
	================
	
	Schannel.dll is available at the following Internet location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/winnt-public/fixes/usa/NT40/hotfixes-postSP3/ssl-fix/
	
	Residents of the US and Canada can download the North American (128-bit) version
	of Schannel.dll from:
	
	  http://support.microsoft.com/support/ntserver/128Eula.asp
	
	The updated version of Schannel.dll is also available in Windows NT version 4.0
	Service Pack 4 and later. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	
	Additional query words: sp3 iis international banking win95 ie internet explorer 3.02 4.01 "adaptive chosen cyphertext" cryptoanalysis SSL2 PCT1 SSL3 TLS1 "Error Message Vulnerability"
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400sp3 kbWinNTS400search kbSiteServSearch kbiisSearch kbAudDeveloper kbiis400 kbiis300 kbSiteServ300 kbSiteServ300Search kbSiteServ200Search
	Version           : :3.0,4.0,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
