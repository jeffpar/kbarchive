---
layout: page
title: "Q83902: Windows 3.1 Cannot Run on a Novell Nondedicated File Server"
permalink: /kb/083/Q83902/
---

## Q83902: Windows 3.1 Cannot Run on a Novell Nondedicated File Server

	Article: Q83902
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Microsoft Windows operating system version 3.1 cannot be run on a Novell
	nondedicated server. A nondedicated server is a computer that operates as both a
	server and a workstation at the same time.
	
	The following are two possible workarounds:
	
	- Run Windows 3.1 on all workstations, and run Windows 3.0 in real mode on the
	  nondedicated server.
	
	- Purchase another computer to be a dedicated server.
	
	MORE INFORMATION
	================
	
	Novell NetWare allows a server machine to double as a workstation. In this case,
	the server is called a nondedicated file server. However, no extended or
	expanded memory is available to the workstation, and Windows 3.0 can run in real
	mode only. Windows 3.1 does not have a real mode and therefore cannot be run on
	a nondedicated file server. For more information, query on the following words
	in the Microsoft Knowledge Base:
	
	  win31 real stable
	
	Nondedicated servers are available with the following Novell products:
	
	  ELS Level I           (4 users)
	  ELS Level II          (8 users)
	  Advanced NetWare 286  (100 users)
	
	A dedicated file server functions as a file server only. A dedicated file server
	is preferable because the processor time is not split between the workstation
	functions and the requirements of the file server.
	
	REFERENCES
	==========
	
	"NetWare Buyer's Guide," Winter 1990
	
	Additional query words: 3.10 3.11 non-dedicated novell net ware 3rdparty
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
