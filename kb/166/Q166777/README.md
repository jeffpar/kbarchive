---
layout: page
title: "Q166777: FPNW 4.0 Update May Fail"
permalink: kb/166/Q166777/
---

## Q166777: FPNW 4.0 Update May Fail

	Article: Q166777
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft File and Print Services for NetWare 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a computer running Windows NT Server 3.51 Service Pack 5, to
	Windows NT Server 4.0 and then try to update File and Print Services for NetWare
	(FPNW), the update process appears to be successful, but the files may not
	actually be updated. The FPNW Service does not advertise itself with SAP
	broadcasts and you may not be able to connect to the server through FPNW.
	
	When you attempt to manage the FPNW server through Server Manager, you may see
	the following error:
	
	  Procedure entry point not found SPIN_SLE_NUM@@QAE@PAVOWNER_WINDOW@@IKKH@Z in
	  Netui2.dll.
	
	When you click OK, another error is displayed:
	
	  Cannot load extrension FPNWMGR.CPL. Error 0126. Specific procedure could not
	  be found.
	
	-or-
	
	  Cannot load extrension FPNWMGR.CPL. Error 0127. Specific procedure could not
	  be found.
	
	You may receive similar errors when you click the FPNW icon in Control Panel, if
	it is available.
	
	NOTE: You may also have similar problems updating an FPNW Administrative Tools
	Only installation.
	
	CAUSE
	=====
	
	The FPNW files that are installed by Windows NT Server 3.51 Service Pack 5 do
	not get properly updated due to an error in the Oemsetup.inf file for File and
	Print Services for NetWare version 4.0.
	
	RESOLUTION
	==========
	
	To work around the problem, you will need to copy FPNW from the Services for
	NetWare CD to a directory on your hard disk drive or local area network.
	
	WARNING: Editing Oemsetup.inf incorrectly can cause serious, system wide problems
	that may require you to reinstall Windows NT to correct them. Microsoft cannot
	guarantee that any problems resulting from editing Oemsetup.inf can be solved.
	Do this at your own risk.
	
	1. Copy the FPNW files from the CD to a directory that you have full access to.
	
	2. Open the file OEMSETUP.INF in a text editor such as Notepad or Edit.
	
	3. In the section [Install-Update], locate the following line:
	
	  set STF_OVERWRITE    = "VERIFYSOURCEOLDER"
	
	4. Change "VERIFYSOURCEOLDER" to "ALWAYS", save the file.
	
	5. Perform this same change in the following sections:
	
	  [Install-Exe]
	  [Install-Tools]
	
	After this procedure is complete, you can update FPNW from the new location. You
	will need to restart the server for the change to take effect.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 and File
	and Print Services for NetWare. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: FPNW update upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch
	Version           : :3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
