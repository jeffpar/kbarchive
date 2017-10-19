---
layout: page
title: "Q176522: IIS Server Instance Error Message with Microsoft Cluster Server"
permalink: /kb/176/Q176522/
---

## Q176522: IIS Server Instance Error Message with Microsoft Cluster Server

	Article: Q176522
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install an Internet Information Server (IIS) node in Microsoft
	Cluster Server, you may get the following error message:
	
	  An error occurred attempting to read properties for the
	  'IIS Server Instance' resource type:
	  More data is available.
	  Error ID: 234 (000000ea).
	
	CAUSE
	=====
	
	This can occur if the two IIS installations reside on installations of Microsoft
	Windows NT Server that are in different directories. For example, Computer 1 has
	Windows NT installed in C:\Winnt, and Computer 2 has Windows NT installed in
	C:\Winnt35. As a result, the Dlls files that are in the InetSrv directory are in
	different places and the Cluster Server cannot find them on one of the two
	systems.
	
	WORKAROUND
	==========
	
	Make sure that both systems in the cluster have Windows NT installed into the
	same directory.
	
	Additional query words: mscs
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbiisSearch kbiis400
	Version           : winnt:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
