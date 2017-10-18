---
layout: page
title: "Q237599: SNA Server 4.0 SP2 Client for Windows NT Always Installs MMC"
permalink: kb/237/Q237599/
---

## Q237599: SNA Server 4.0 SP2 Client for Windows NT Always Installs MMC

	Article: Q237599
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): kbsna400sp3fix kbsna400sp2
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The SNA Server 4.0 Service Pack 2 (SP2) client for Windows NT always installs
	the Microsoft Management Console (MMC). MMC is installed even if the SNA Server
	Manager component is not selected for installation during the setup or update
	process.
	
	This occurs when you use Setup.exe to do a new installation of the client or when
	you use Update.exe to update an existing SNA Server 4.0 or 4.0 SP1 Windows NT
	client.
	
	CAUSE
	=====
	
	The Setup.exe and Update.exe programs for the SNA Server 4.0 SP2 client for
	Windows NT are designed to always install MMC.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for SNA Server version
	4.0. For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q215838 How to Obtain the Latest SNA Server Version 4.0 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article. This problem was first corrected in
	SNA Server version 4.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	The setup and update processes have been modified so that MMC is not installed
	on a Windows NT client unless MMC-dependent options (such as, SNA Server
	Manager, COMTI) are selected for installation during the setup or update
	process.
	
	The following steps need to be followed if you want to install the SP2 client
	without installing MMC:
	
	1. Copy the SNA Server 4.0 SP2 version of the Windows NT client from the SNA
	  Server 4.0 SP2 Retail or Update CD to a directory on a hard drive such that
	  the following directory structure exists on the hard drive:
	
	   - <root>
	
	   - <root>\Mdac\....
	
	   - <root>\Reg2udl\....
	
	   - <root>\Clients\Winnt\I386
	
	  The SNA Server 4.0 SP2 update version of the Windows NT client is also
	  available for download at the following location:
	
	  ftp://ftp.microsoft.com/bussys/winnt/sna-public/fixes/sna40/ussp2/40sp2ic.exe
	
	  This image can be extracted to a specific directory using the following
	  command:
	
	  40SP2IC -x
	
	  NOTE: The files from the root directory of the SNA Server 4.0 SP2 CD are
	  needed, which is why <root> is listed as part of the necessary
	  directory structure. The downloaded version of the client also includes these
	  files.
	
	2. Replace the existing Snafile.stf in the Clients\Winnt\I386 directory with the
	  updated version of Snafile.stf.
	
	3. Run Setup.exe to install the client or Update.exe to update an existing
	  client.
	
	For additional information on an MMC-related application exception on SNA Server
	Windows NT 4.0 SP2 clients, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q237962 MMC Application Exception After Applying SNA Server 4.0 SP2
	
	For additional information about installing SNA Server 4.0 SP2 on a Windows NT
	server without Internet Explorer 3.02 or later, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q218107 SNA Server 4.0 SP2 Requires Internet Explorer 3.02 or Later
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsna400sp3fix kbsna400sp2 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2
	Version           : WINDOWS:4.0 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
