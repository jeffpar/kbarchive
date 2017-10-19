---
layout: page
title: "Q125450: Error Running RASPHONE.EXE and RASADMIN.EXE in Windows NT"
permalink: /kb/125/Q125450/
---

## Q125450: Error Running RASPHONE.EXE and RASADMIN.EXE in Windows NT

	Article: Q125450
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.1,3.5; :3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5 
	- Microsoft Windows NT Workstation versions 3.1, 3.5 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run RASPHONE.EXE (Remote Access Phone Book) and start the Remote Access
	Service in RASADMIN.EXE (Remote Access Administrator's utility), the following
	error messages may appear (in the respective versions of Windows NT):
	
	Windows NT version 3.1
	----------------------
	
	RASPHONE.EXE:
	
	  The dynamic link library RASAPI32.DLL could not be found in the specified
	  path <system and user defined path list>
	
	RASADMIN.EXE:
	
	  Error starting Remote Access Server Service on <computername> Check the
	  Event log on <computername> for details.
	
	  Error 2185: The Service name is invalid.
	
	Windows NT version 3.5
	----------------------
	
	RASPHONE.EXE:
	
	  An application error log is being generated
	
	RASPHONE.EXE
	
	  Exception: access violation (0xc0000005), Address: 0x00000000
	
	The error message for RASADMIN.EXE is the same as for Windows NT version 3.1.
	
	CAUSE
	=====
	
	This problem occurs if Remote Access Service (RAS) is not installed. When you
	install Windows NT, RASPHONE.EXE and RASADMIN.EXE are installed and placed in
	the %systemroot%\SYSTEM32 subdirectory. The program items are not present, but
	you can run these programs from File Manager.
	
	
	RESOLUTION
	==========
	
	To correct this problem, install the Remote Access Service. To install this
	service, do the following:
	
	1. In the Control Panel window, choose the Network icon.
	
	2. In the Network Settings dialog box, choose the Add Software button.
	
	3. In the Add Network Software dialog box, select Remote Access Service, and
	  then choose the Continue button.
	
	4. Specify the location of the source files.
	
	5. After the Remote Access Service is installed, restart Windows NT.
	
	Additional query words: RASPHONE EXE RASADMIN RASAPI32 DLL
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : winnt:3.1,3.5; :3.1
	
	=============================================================================
	
