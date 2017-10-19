---
layout: page
title: "Q111930: Unable to Access Machines Other Than the RAS Server"
permalink: /kb/111/Q111930/
---

## Q111930: Unable to Access Machines Other Than the RAS Server

	Article: Q111930
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you connect to a Remote Access Services (RAS) server under Windows for
	Workgroups 3.11, connections to other machines on the remote network are not
	possible.
	
	MORE INFORMATION
	================
	
	Windows 3.11 RAS Server
	-----------------------
	
	The Windows for Workgroups 3.11 RAS server allows a point-to-point connection
	only. Therefore, the RAS client can use only resources local to the RAS
	server--no other network access is provided. This is a product security feature
	implemented because Windows for Workgroups 3.11 provides share-level, not
	user-level, security.
	
	Windows NT, Windows NT Advanced Server, or LAN Manager RAS Server
	-----------------------------------------------------------------
	
	Connecting to a Windows NT, Windows NT Advanced Server, or LAN Manager RAS server
	allows access to the entire network provided that user rights have been granted
	to those network resources and that the RAS Gateway has been configured
	correctly.
	
	Windows NT, Windows NT Advanced Server, and LAN Manager, unlike Windows for
	Workgroups 3.11, provide user-level security; therefore, the user must be
	granted specific rights to network resources before the user can use or view
	them. For information on configuring user rights, consult your Windows NT,
	Windows NT Advanced Server, or LAN Manager documentation; your system
	administrator; or Microsoft Product Support for Windows NT, Windows NT Advanced
	Server, or LAN Manager.
	
	Additional query words: 3.11 NT AS
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
