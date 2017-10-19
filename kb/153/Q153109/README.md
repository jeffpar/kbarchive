---
layout: page
title: "Q153109: Error Installing WFW Client from DEC OEM NT Server 3.51 CD"
permalink: /kb/153/Q153109/
---

## Q153109: Error Installing WFW Client from DEC OEM NT Server 3.51 CD

	Article: Q153109
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You want to install the Windows for Workgroups client from a network boot disk.
	You run the Network Client Administration to make a network installation startup
	disk. When you try to run the installation from the Clients\WFW\Netsetup
	directory on the Windows NT Server 3.51 compact disc, the following error
	appears:
	
	  Path Not Found
	
	This occurs when you are using the origianl equipment manufacturer(OEM) version
	of the Windows NT Server 3.51 compact disc from Digital Equipment Corporation
	(DEC).
	
	CAUSE
	=====
	
	The Autoexec.bat file created on the network installation disk contains the
	following entries:
	
	  net use z: \\NTSERVERNAME\Clients
	  echo Running Setup...
	  z:\wfw\netsetup\setup.exe /#
	
	The \Wfw\Netsetup directory located under the share "Clients" is valid on a
	Microsoft Windows NT Server 3.51 compact disc that comes directly from
	Microsoft, but the directory does not exist on the OEM version compact disc from
	DEC.
	
	
	WORKAROUND
	==========
	
	Replace the OEM version of the Windows NT Server V3.51 compact disc on your
	network server with the Microsoft compact disc, which contains the Windows for
	Workgroups clients directory.
	
	Additional query words: WFW Client 3.51 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
