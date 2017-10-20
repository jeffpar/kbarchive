---
layout: page
title: "Q185706: FTP-AFTP Gateway Does Not Work with IIS 4.0"
permalink: /kb/185/Q185706/
---

## Q185706: FTP-AFTP Gateway Does Not Work with IIS 4.0

{% raw %}

	Article: Q185706
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 19-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy Ftpsvc2.dll from the Sna\System folder to the
	Windows\System32\Inetsrv folder and then starting the FTP service, the following
	errors will be reported.
	
	  A system error has occurred.
	
	  System error 127 has occurred.
	
	  The specific procedure could not be found.
	
	CAUSE
	=====
	
	There are two different Ftpsvc2.dll files, one for Internet Information Server
	(IIS) 2.0 and IIS 3.0, and the other for IIS 4.0. Using the IIS 2.0/3.0
	Ftsvc2.dll with IIS 4.0 results in the error described above.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem has been corrected in the latest U.S. Service Pack for SNA Server
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	In order to use the FTP-AFTP Gateway with IIS 4.0, the IIS 4.0 version of
	ftpsvc2.dll has to be copied into the Windows\System32\Inetsrv directory. SNA
	Server 4.0 SP1 includes the correct ftpsvc2.dll for use with IIS 4.0 in the
	following directory:
	
	\Server\i386\System\Gateway\IIS40
	
	However, after applying the IIS 4.0 version of Ftpsvc2.dll, System Error 127 may
	continue to occur. If this occurs, the following files also need to be updated:
	
	  Infocomm.dll
	  W3svc.dll
	
	The Ftpsvc2.dll included with SNA Server 4.0 SP1 has a version number of
	4.02.0638. The other files listed should be at the same version as Ftpsvc2.dll.
	
	These particular updates to IIS 4.0 are discussed in the following Knowledge Base
	article:
	
	  Q183283 Title: IE Through Proxy Server to IIS May Stop on Page with Scripts
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
