---
layout: page
title: "Q226934: How To Create a Setup.log With SNA 4.0 SP2 Update.exe."
permalink: kb/226/Q226934/
---

## Q226934: How To Create a Setup.log With SNA 4.0 SP2 Update.exe.

	Article: Q226934
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0SP2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Update.exe program included with SNA Server 4.0 Service Pack 2 (SP2) can
	still support the creation of a Setup.log file, but it requires different
	command line switches than previous SNA Server service packs. To generate a
	Setup.log file, Update must be invoked with the following command line option:
	
	  [install path:\I386\]update /SETUPPARMS:"/G setup.log"
	
	Where Setup.log will be written to the directory where the TMP environment
	variable is pointing. The Update program doesn't allow a full path to be
	specified for the Setup.log file.
	
	The following batch script can be used to automate the installation of the
	service pack without requiring user intervention. This script modifies the TMP
	environment variable to point to the desired location where Setup.log is
	created:
	
	  net stop snabase /y
	  SET SAVETMPDIR=%TMP%
	  SET TMP=C:\INFO
	  f:\i386\update /SETUPPARMS:"/G setup.log" /quietmode:"yes"
	  SET TMP=%SAVETMPDIR%
	  SET SAVETMPDIR=
	  net stop snabase /y
	
	The script above causes the log file to be written to C:\Info\Setup.log.
	
	MORE INFORMATION
	================
	
	Unlike previous SNA Server service packs, the SNA Server 4.0 SP2 Update program
	spawns the Setup program in the background, and uses the Setup engine to upgrade
	the system to SNA Server 4.0 SP2. Given the different mode of operation, the
	Update program command line options and Setup.log formats are different than
	prior service packs.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:4.0SP2
	Issue type        : kbhowto
	
	=============================================================================
	
