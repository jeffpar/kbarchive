---
layout: page
title: "Q106545: Windows NT Resource Kit Services for Macintosh Utilities"
permalink: /kb/106/Q106545/
---

## Q106545: Windows NT Resource Kit Services for Macintosh Utilities

{% raw %}

	Article: Q106545
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 15-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Resource Kit, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Services for Macintosh utilities in the Windows NT Resource Kit allow
	administrators to remotely administer their Windows NT Advanced Server from
	their Windows NT workstations. If you already have Windows NT Advanced Server on
	your local machine, it doesn't give you any new functionality.
	
	The utilities also allow developers to write to the Microsoft AppleTalk stack
	with Windows Sockets and have the protocol stack to test on their Windows NT
	workstations without having Windows NT Advanced Server.
	
	MORE INFORMATION
	================
	
	The administrator tool setup adds MacFile entries for your local Server Manager
	and File Manager menus. The Windows NT Resource Kit DOES NOT support MacFile;
	that is, it does not install the MacFile server on your local machine. This is
	contrary to the misleading statement on page 437 in volume 1 of the Resource
	Kit.
	
	The AppleTalk stack is also provided in the Windows NT Resource Kit to allow
	developers who do not purchase Windows NT Advanced Server to develop
	applications using Windows Sockets for AppleTalk. Essentially, the AppleTalk
	component in the Resource Kit is targeted at Windows NT installations only;
	Windows NT Advanced Server includes all the necessary tools to build Windows
	Sockets applications for AppleTalk.
	
	Additional query words: prodnt ntdocerr sfm reskit mac apple
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2
	Version           : :3.1
	
	=============================================================================
	

{% endraw %}
