---
layout: page
title: "Q172334: SNA 3.0 Windows 95 Client Floppy Installation Step Incorrect"
permalink: /kb/172/Q172334/
---

## Q172334: SNA 3.0 Windows 95 Client Floppy Installation Step Incorrect

	Article: Q172334
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbother kbsetup
	Last Modified: 01-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In the SNA Server 3.0 "Getting Started" booklet, Chapter 3, "Installing SNA
	Server Client Software," page 31, the steps for creating installation disks for
	the Windows 95 Client are as follows:
	
	  To create floppy disks to install Windows 95 client software for SNA Server,
	  run
	
	  Clients\Win95\MK95Disk.cmd
	
	This is a documentation error. The correct path name is:
	
	  Clients\Win95\MKDisks.cmd
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Create the client installation floppy disk by running:
	
	  "Clients\Win95\MKDisks.cmd" (without the quotation marks)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbother kbsetup 
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
