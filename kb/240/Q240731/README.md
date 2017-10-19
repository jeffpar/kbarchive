---
layout: page
title: "Q240731: CREATEPROCESS FAILED Error During Silent Install"
permalink: /kb/240/Q240731/
---

## Q240731: CREATEPROCESS FAILED Error During Silent Install

	Article: Q240731
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0 SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a silent installation of SNA Server or the SNA client software,
	from a network drive, the following error message may occur:
	
	  CREATEPROCESS FAILED
	
	The only information in the dialog box is "Immc.exe." If you click the OK button,
	the error message continues to reappear until the installation is terminated.
	
	CAUSE
	=====
	
	All directories needed for the silent installation are not available on the
	network drive where you are installing from.
	
	RESOLUTION
	==========
	
	Copy all the required directories for a silent installation to the network drive
	where you will be installing from. The required directories are outlined in the
	More Information section below.
	
	MORE INFORMATION
	================
	
	In SNA Server 4.0 SP2 and later, the MDAC and MMC directories from the SNA
	Server compact disc are needed for the silent installation, in addition to the
	client and server installation directories.
	
	The following directories need to be copied to the network drive from which you
	will be performing silent installations for the SNA client:
	
	  \Mmc
	  \Mdac
	  \Clients
	  \Clients\Win9x
	  \Clients\Winnt\I386
	  \Clients\Winnt\Alpha
	
	For the SNA Server installation, the directories below need to be copied to the
	network drive:
	
	  \Mmc
	  \Mdac
	  \I386
	
	The directories below are required for the SP2 installation for SNA Server 4.0 as
	stated in the Readme file that comes with SP2:
	
	  \I386 (SNA Server 4.0 SP2 files)
	  \MMC (MMC installation)
	  \MDAC (MS DAC installation)
	  \REG2UDL (utility used by Setup)
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400SP2 kbSNAServ400SP3
	Version           : WINDOWS:4.0 SP2
	
	=============================================================================
	
