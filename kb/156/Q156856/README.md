---
layout: page
title: "Q156856: XFOR: MSMail and HMail 3.5 PO Migration to Exchange Server"
permalink: /kb/156/Q156856/
---

## Q156856: XFOR: MSMail and HMail 3.5 PO Migration to Exchange Server

{% raw %}

	Article: Q156856
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.5; winnt:4.0,5.5
	Operating System(s): 
	Keyword(s): kbinterop kbsetup exc4 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0 
	- Microsoft Mail for Windows, version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Mail and Hangul Mail, the Korean version of Microsoft Mail and also
	known as Hmail, 3.5 Postoffices (POs) can contain Korean characters in MMFs and
	Shared Folders. When these POs are migrated to a Microsoft Exchange Server
	running on Korean Windows NT 3.51, the correct Msfs32.dll should be placed in
	the \%SystemRoot%\System32 directory. Otherwise, the Korean characters in the
	Public Folders that have been migrated from the PO's Shared Folders will be
	corrupted. The selection of the correct Msfs32.dll is documented in the release
	notes, Read_cl2.wri, on the Korean Microsoft Exchange Client CD-ROM and this
	article covers that process in more detail.
	
	MORE INFORMATION
	================
	
	There are two Msfs32.dll files; U.S. and Korean. The U.S. version is shipped on
	the Microsoft Exchange Server CD-ROM in the \Setup\I386 directory and is copied
	to the Windows NT System32 directory when the Microsoft Exchange Server is
	installed. The Korean version is shipped on the Korean Microsoft Exchange Client
	CD-ROM and is included in one of the cabinet files (Exchng5.cab in Microsoft
	Exchange version 4.0) in the \Kor\Winnt\I386 or \Kor\Win95 directories. In order
	to extract this file, use the Extract utility that is shipped with Windows 95.
	
	Both versions should be copied to the \%SystemRoot%\System32 directory when you
	migrate to Microsoft Exchange Server. The U.S. version when you migrate from
	Microsoft Mail and the Korean version when you migrate from Hangul Mail.
	
	Additional query words: HMail DBCS KOR
	
	======================================================================
	Keywords          : kbinterop kbsetup exc4 exc55 
	Technology        : kbExchangeSearch kbExchange550 kbExchange400 kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbMail350
	Version           : WINDOWS:3.5; winnt:4.0,5.5
	
	=============================================================================
	

{% endraw %}
