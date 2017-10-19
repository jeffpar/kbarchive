---
layout: page
title: "Q242551: Err Msg: Setup Has Determined That Your Original Install Path..."
permalink: /kb/242/Q242551/
---

## Q242551: Err Msg: Setup Has Determined That Your Original Install Path...

	Article: Q242551
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to run the SNA Server Setup program (Setup.exe) from the Microsoft
	SNA Server Programs folder, or you attempt to uninstall SNA Server using
	Add/Remove Programs in Control Panel, the following error message may occur:
	
	  Install Path
	
	  Setup has determined that your original install path no longer exists. If you
	  are planning on adding additional components to your installation, please
	  enter a path to a valid installation.
	
	CAUSE
	=====
	
	SNA Server 4.0 requires that the SNA Server 4.0 installation media be available
	for the setup or uninstall to continue.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure to do the following (depending on your type of
	installation):
	
	- Insert the SNA Server 4.0 compact disc into the CD-ROM drive before you run
	  Setup.exe or attempt to an uninstall.
	
	- When the SNA Server 4.0 compact disc is in the CD-ROM drive, type the
	  original source installation path to the compact disc.
	
	- Type the path to the network share or local directory that contains the SNA
	  Server Setup files.
	
	In some cases, the error message will still appear even after the compact disc
	has been inserted or the installation path has been entered. If this happens,
	click the Ignore button for Setup to continue.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	
	=============================================================================
	
