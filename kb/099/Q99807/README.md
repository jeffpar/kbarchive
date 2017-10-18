---
layout: page
title: "Q99807: Shell DDE Using DDEML"
permalink: kb/099/Q99807/
---

## Q99807: Shell DDE Using DDEML

	Article: Q99807
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbDDE kbGrpDSUser kbUser
	Last Modified: 08-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows Program Manager supports a dynamic data exchange (DDE) command-
	string interface that allows other applications to create, display, delete, and
	reload groups; add, replace, and delete items from groups; and to close Program
	Manager.
	
	PMDDEML is a file in the Microsoft Software library that demonstrates how to use
	this Program Manager DDE command-string interface using the Dynamic Data
	Exchange Management Library (DDEML) introduced in Microsoft Windows version 3.1.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Pmddeml.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	PMDDEML demonstrates only a small subset of the command-strings supported by
	Program Manager. The commands demonstrated by PMDDEML include:
	
	  CreateGroup
	  ShowGroup (both minimize and restore)
	  DeleteGroup
	
	The other command-strings supported by Program Manager can be easily implemented
	in a manner similar to those commands demonstrated by PMDDEML.
	
	The DDEML functions demonstrated by PMDDEML include:
	
	  DdeInitialize
	  DdeUninitialize
	  DdeConnect
	  DdeDisconnect
	  DdeCreateStringHandle
	  DdeFreeStringHandle
	  DdeClientTransaction
	
	To use PMDDEML, run it and select the Shell Commands menu. Choose the Create
	"Sample Group" menu item. This will create a new program group (if one does not
	already exist) in Program Manager. Once the sample group is created, the group
	can be minimized, restored, or deleted by selecting the appropriate menu item in
	PMDDEML.
	
	Additional query words: softlib PMDDEML.EXE
	
	======================================================================
	Keywords          : kbfile kbDDE kbGrpDSUser kbUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
