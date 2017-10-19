---
layout: page
title: "Q142825: BUG: Can't Change Dir or Run EXE Files on FPNW-shared CD-ROM"
permalink: /kb/142/Q142825/
---

## Q142825: BUG: Can't Change Dir or Run EXE Files on FPNW-shared CD-ROM

	Article: Q142825
	Product(s): Microsoft Programming Utilities
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft File and Print Services for NetWare version 3.51 
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a CD-ROM drive is shared via FPNW and the medium is changed on the server,
	clients using the NCP protocol (for example, computers running Microsoft Windows
	NT that are accessing the server using a NetWare redirector such as GSNW) will
	not be able to change directories on, or execute files from the shared CD.
	
	This was tested with the final version of FPNW and SP 3 installed.
	
	WORKAROUND
	==========
	
	Disconnect the shared volume and reconnect again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	You will need two machines -- one running FPNW, the other running a NetWare
	client or GSNW. There must be a valid account on the FPNW server for the user on
	the client side.
	
	1. Configure the FPNW server to share the CD-ROM drive as a NW-volume.
	
	2. Connect to the shared CD-ROM drive from the client machine. You will have
	  full access to the CD-ROM drive.
	
	3. Replace the compact disc on the server machine with another one.
	
	4. Refresh the view on the connected drive in the client's winfile. You can view
	  the changes to the directory structure but can't change directories.
	  Double-clicking an .exe file results in a "File not found" error message.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search kbServicesNetwareSearch kbFPNW351
	Version           : :3.51
	Issue type        : kbbug
	
	=============================================================================
	
