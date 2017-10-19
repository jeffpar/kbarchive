---
layout: page
title: "Q257361: Mixed-Case Names Are Registered in WINS"
permalink: /kb/257/Q257361/
---

## Q257361: Mixed-Case Names Are Registered in WINS

	Article: Q257361
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:2000,95; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork kbtool w2000wins kbWINS
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mixed-case NetBIOS names may be present in a WINS database. For example, if a
	computer that registers with WINS is named Server1, you may see entries similar
	to:
	
	  SeRvEr1---- [00h]
	  SeRvEr1---- [02h]
	  SeRvEr1---i [00h]
	  SeRvEr1---i [02h]
	
	In some cases, you may also see entries similar to:
	
	  iNtEl.nBcBaGr. [02h]
	  iNtEl.nBcBaGr. [00h]
	  iNtEl.nBcBaGr. [01h]
	
	CAUSE
	=====
	
	Name registrations as outlined above are made by the Intel Ping Discover Service
	(PDS) software from Intel LanDesk Management Suite. For additional information
	about this service, please contact Intel.
	
	MORE INFORMATION
	================
	
	This behavior is not indicative of WINS database corruption. The NetBIOS name
	space is not case sensitive; registrations such as these should not cause
	problems with Microsoft NetBIOS name resolution.
	
	The third-party products that are discussed in this article are manufactured by
	companies that are independent of Microsoft. Microsoft makes no warranty,
	implied or otherwise, regarding the performance or reliability of these
	products.
	
	
	Additional query words: mixed mix-case strange odd unusual
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork kbtool w2000wins kbWINS 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWin95search kbWin98search kbWin98SEsearch kbWinAdvServSearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:2000,95; winnt:3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
