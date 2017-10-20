---
layout: page
title: "Q262474: Kerberos Security with SNA Server/Host Integration Server 2000"
permalink: /kb/262/Q262474/
---

## Q262474: Kerberos Security with SNA Server/Host Integration Server 2000

{% raw %}

	Article: Q262474
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2000,3.0,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Operating System(s): 
	Keyword(s): kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp
	Last Modified: 17-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 3.0 SP4, 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Host Integration Server 2000 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SNA Server and Host Integration Server 2000 do not provide native Kerberos
	support, and therefore, do not leverage the use of the Kerberos authentication
	protocol, which is provided with Windows 2000.
	
	SNA Server (and clients) and Host Integration Server 2000 (and end-user clients),
	continue to use Windows NT LanManager (NTLM) authentication for authentication
	protocol even if they are installed on Windows 2000 Server or Windows 2000
	Professional).
	
	SNA Server 4.0 Service Pack 3 (SP3) and later are supported on Windows 2000. For
	additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q251320 Installing SNA Server on Windows 2000
	
	MORE INFORMATION
	================
	
	Although Windows 2000 uses Kerberos as the default authentication protocol,
	support for NTLM is still available for non-Kerberos clients for backwards
	compatibly.
	
	For additional information on Kerberos, click the article numbers below to view
	the articles in the Microsoft Knowledge Base:
	
	  Q231789 Basic Overview of Kerberos Authentication in Windows 2000
	
	  Q231789 Local Logon Process for Windows 2000
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna300sp1 kbsna300sp2 kbsna300sp3 kbsna300sp4 sna4 kbsna400sp1 kbsna400sp2 kbsna400sp3 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbAudDeveloper kbSNAServSearch kbWinAdvServSearch kbHostIntegServ2000 kbSNAServ300 kbSNAServ400 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbSNAServ300SP2 kbSNAServ300SP4
	Version           : WINDOWS:2000,3.0,3.0 (all SP),4.0,4.0 SP1,4.0 SP2,4.0 SP3; :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
