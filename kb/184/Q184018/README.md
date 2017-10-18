---
layout: page
title: "Q184018: Novell NDS for WinNT Doesn't Support Restrict Anonymous Security"
permalink: kb/184/Q184018/
---

## Q184018: Novell NDS for WinNT Doesn't Support Restrict Anonymous Security

	Article: Q184018
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running both Windows NT Server and Novell's NDS for Windows NT cannot
	be configured to restrict anonymous connections.
	
	CAUSE
	=====
	
	Windows NT 4.0 Service Pack 3 and a hotfix for Windows NT 3.51 provide a
	mechanism for administrators to restrict the ability for anonymous logon users
	from obtaining system information. These are also known as NULL session
	connections. During the installation of Novell NDS, SamSrv.dll is replaced and
	support for this feature is not included.
	
	STATUS
	======
	
	Novell NDS for Windows NT currently does not include support for restricting
	anonymous connections
	
	For more information regarding Windows NT and anonymous user security, please see
	the following article in the Microsoft Knowledge Base:
	
	  ARTICLE-ID: Q143474
	  TITLE : Restricting Information Available to Anonymous Logon Users
	
	  ARTICLE-ID: Q129457
	  TITLE : Anonymous Connections May Be Able to Obtain the Password Policy
	
	  ARTICLE-ID: Q178640
	  TITLE : Could Not Find Domain Controller When Establishing a Trust
	
	
	Additional query words: nds4nt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
