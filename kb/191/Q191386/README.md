---
layout: page
title: "Q191386: Considerations When Installing Link Services in SNA 4.0"
permalink: kb/191/Q191386/
---

## Q191386: Considerations When Installing Link Services in SNA 4.0

	Article: Q191386
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In a computing environment where disk space utilization, connection speeds, and
	overall efficiency of operations are considerations, it may be helpful to
	consider what link services will be used. Only those link services that will be
	used on the SNA Server computer should be installed.
	
	MORE INFORMATION
	================
	
	During the installation of SNA Server 4.0, the opportunity to install one or
	more link services is presented to the SNA Server administrator. Considerations
	of what link service or services will be used on the SNA Server computer can
	have an impact on server storage, and on the installation process itself.
	
	Installing all of the link services will use approximately 41 MB of disk space.
	The sizes of the individual link services range from 800 KB to 7 MB depending on
	the choices for the computing environment. If the installation is on a computer
	that has constrained storage resources, space can be saved by installing only
	the link services that will be used on that computer. For example, if the 802.2
	link service and a second link service will be the only two link services used
	by the SNA Server computer, a very large percent of the storage space that would
	be used to keep copies of unused link services can be returned to the server
	storage subsystem.
	
	In addition, if the installation is to be performed across a slow link, or even
	across a LAN link, time and bandwidth can be saved by installing only the link
	services that will be used by the SNA Server computer.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
