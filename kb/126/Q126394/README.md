---
layout: page
title: "Q126394: SNA Server Doesn't Include Bundled Support for Windows HLLAPI"
permalink: kb/126/Q126394/
---

## Q126394: SNA Server Doesn't Include Bundled Support for Windows HLLAPI

	Article: Q126394
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 2.11 SP1, 3.0, 3.0 SP1, 3.0 SP2, 3.0 SP3, 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	SNA Server is not bundled with an emulator that supports the Windows HLLAPI
	application program interface (API), though the SNA Server 2.0 and 2.1
	compact disc does include the WOSA-compliant Windows HLLAPI specification
	and library/header files necessary to build an HLLAPI application.
	
	However, under SNA Server 2.11 and later, the Windows HLLAPI API
	specification, help file, header and library files have been removed from
	the \SDK directory tree located on the SNA Server product compact disc.
	
	Developers who want to write to the Windows HLLAPI standard are now
	referred to third-party vendors for the SDK and runtime HLLAPI support.
	The vendors who implement the Windows HLLAPI API on top of their 3270
	and 5250 emulation products are indicated in the SNA Server third-party
	companion product guide which is included with SNA Server. A column in
	the guide indicates whether the third-party emulation product includes
	"WinHLLAPI" support.
	
	If you require Windows HLLAPI support for your application, obtain a third-
	party product which supports Windows HLLAPI. Most Windows 3270 and 5250
	vendors include Windows HLLAPI support. Refer to the SNA Server Companion
	Product Catalog (Word for Windows format) for information on emulators that
	support Windows HLLAPI. The Companion Product Catalog can be found in the
	following locations:
	
	- SNA Server CD-ROM in COLLATRL\GENERAL\ISVCATAL.DOC for SNA Server versions
	  2.0 and 2.1 and in COLLATRL\3RDPARTY\ISVCATAL.DOC for SNA Server versions
	  2.11 and 3.0, and in \WEB\ISVCATAL.DOC for SNA Server version 4.0.
	
	- Microsoft FTP Server in ftp.microsoft.com
	
	Additional query words: prodsna winhllapi ehllapi
	
	======================================================================
	Keywords          : kbnetwork kbsna211sp1 kbsna300sp1 kbsna300sp2 kbsna300sp3 sna4 kbsna400sp1 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ200 kbSNAServ211 kbSNAServ400 kbSNAServ210 kbSNAServ211SP1 kbSNAServ300SP3 kbSNAServ300SP1 kbSNAServ400SP1 kbSNAServ300SP2
	Version           : WINDOWS:2.0,2.1,2.11,2.11 SP1,3.0,3.0 SP1,3.0 SP2,3.0 SP3,4.0,4.0 SP1
	
	=============================================================================
	
