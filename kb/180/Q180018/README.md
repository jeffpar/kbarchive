---
layout: page
title: "Q180018: SGCINST.EXE Appears to Execute but SGC Does Not Work"
permalink: /kb/180/Q180018/
---

## Q180018: SGCINST.EXE Appears to Execute but SGC Does Not Work

{% raw %}

	Article: Q180018
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.0,4.0,4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 SP3 
	- Microsoft Internet Information Server versions 3.0, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Sgcinst.exe appears to execute but SGC does not work.
	
	CAUSE
	=====
	
	VeriSign used to include the certificate, the intermediate certificates, and the
	root certificate. They stopped sending the root certificate since it was
	redundant and ignored. Sgcinst.exe fails because it believes the intermediate
	certificate was really the root certificate.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the Server Gated Cryptography (SGC) update. For
	more information on how to obtain the updated version of Schannel.dll, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q148427 : Generic SSL (PCT/TLS) Updates for IIS and MS Internet Products
	
	Additional query words: Schannel.exe Sgcschannel.exe Sgcschnl.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp3 kbWinNTS400search kbiisSearch kbiis400 kbiis300
	Version           : winnt:3.0,4.0,4.0 SP3
	
	=============================================================================
	

{% endraw %}
