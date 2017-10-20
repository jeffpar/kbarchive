---
layout: page
title: "Q122389: Updated Network Files for Windows For Workgroups 3.11"
permalink: /kb/122/Q122389/
---

## Q122389: Updated Network Files for Windows For Workgroups 3.11

{% raw %}

	Article: Q122389
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:; winnt:3.5,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 4.0 
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	The Windows NT Server version 3.5 CD contains updated modules for Windows
	for Workgroups version 3.11. The files are located in the
	\CLIENTS\WFW\UPDATE directory. These updated modules address specific
	problems related to the NWLink/NWBLink protocol and provide the following:
	
	- Support for named pipes over direct host IPX
	
	- Performance enhancements to direct host IPX
	
	- A fix to prevent browsers from synchronizing and announcing all at once
	
	- Changes to allow browsing of Windows NT workgroups beyond a single subnet
	
	- Changes to allow Windows NT Server to screen out older Windows for Workgroups
	  clients trying to connect through direct host IPX
	
	The following lists files in the \CLIENTS\WFW\UPDATE directory on the
	Windows NT Server version 3.5 CD:
	
	   Name           Size            Date
	  -------------------------------------
	  NDIS.386        27,846 Bytes   9/4/94
	  NET.EXE        450,262 Bytes   9/4/94
	  NETAPI.DLL     109,120 Bytes   9/4/94
	  NWNBLINK.386    37,964 Bytes   9/4/94
	  VNETSUP.386     14,647 Bytes   9/4/94
	  VREDIR.386      85,746 Bytes   9/4/94
	
	To apply these updated modules, use the following procedure:
	
	1. Use the RENAME command from Command Prompt or the Rename option from the File
	  menu in File Manager to rename all the files that will be replaced.
	
	2. Copy NET.EXE and NET.MSG to the root Windows for Workgroups directory
	  (usually WINDOWS). The remaining files should be copied to the SYSTEM
	  sub-directory.
	
	3. Restart the workstation.
	
	NOTE: The Windows NT Server version 4.0 CD also includes the following
	files and they are located in the Clients\Update.WFW directory:
	
	  Name           Size            Date
	  -------------------------------------
	  NET.MSG         76,245 Bytes   8/9/96
	  VDHCP.386       24,785 Bytes   8/9/96
	  VNBT.386        89,545 Bytes   8/9/96
	  VSERVER.386    101,566 Bytes   8/9/96
	
	Additional query words: prodnt 3.11 wfwg
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:; winnt:3.5,4.0
	
	=============================================================================
	

{% endraw %}
