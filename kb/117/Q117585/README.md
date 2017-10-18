---
layout: page
title: "Q117585: Using Supra Fax Modem V.32bis 144i with Windows NT RAS"
permalink: kb/117/Q117585/
---

## Q117585: Using Supra Fax Modem V.32bis 144i with Windows NT RAS

	Article: Q117585
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use your Supra Fax Modem V.32bis 144i to run Windows NT or
	Windows for Workgroups remote access services (RAS), the modem fails to
	initialize.
	
	CAUSE
	=====
	
	This happens because the RAS MODEM.INF file contains commands that are not
	compatible with the Supra Fax Modem V32bis 144i.
	
	RESOLUTION
	==========
	
	To get your modem to work with RAS, use the following procedure:
	
	1. Open the MODEM.INF file in the SYSTEM32\RAS sub-directory in a text editor
	  such as Notepad.
	
	2. In the [Supra Fax Modem V32bis] and [Supra Fax Modem V32] sections of the
	  MODEM.INF file, make the following changes:
	
	  1. Change "<protocol_on>=\\N3" to "<protocol_on>=\\N".
	
	  2. Change "<compression_on>=%C1" and "<compression_off>=%C0" to
	     "<compression_on>=%E" and "<compression_off>=%E1".
	
	  3. If you are using auto-answer mode, change
	     "COMMAND_INIT=AT&F2&C1&D2 S7=55 <cr>" to
	     "COMMAND_INIT=AT&F2&C1&D0 S7=55 <cr>".
	
	     NOTE: If you are using Windows for Workgroups RAS, after this step, the
	     modem may not relenquish control of the telephone line after disconnecting
	     the remote server. (This may be a problem when the modem is used on a line
	     that is also used for voice.)
	
	Additional query words: wfw wfwg prodnt 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbAudDeveloper kbWinNT310Search kbWinNTW310Search kbWFWSearch kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
