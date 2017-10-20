---
layout: page
title: "Q133325: Upgrading from SNA Server 2.0 or 2.1 to 2.11"
permalink: /kb/133/Q133325/
---

## Q133325: Upgrading from SNA Server 2.0 or 2.1 to 2.11

{% raw %}

	Article: Q133325
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article has two main sections:
	
	- General SNA Server 2.11 Upgrade Information
	
	   - Installing the correct Windows NT version for your hardware platform
	
	   - Upgrading SNA servers in a domain to at least version 2.1 (required)
	
	   - Backing up the SNA Server configuration file before upgrading
	
	   - Removing old SNA Server software is required (using old SNA Setup)
	
	   - Upgrading SNA Server 2.1 clients to 2.11 (optional)
	
	   - Installing the SNA Server 2.11 client software
	
	- Step-by-Step Instructions for Upgrading from SNA Server 2.0 or 2.1 to 2.11
	
	NOTE: This article includes some information from the SNA Server 2.11 README.TXT
	file.
	
	General SNA Server 2.11 Upgrade Information
	-------------------------------------------
	
	Installing the Correct Windows NT Version for Your Hardware Platform
	--------------------------------------------------------------------
	
	SNA Server 2.11 requires Windows NT 3.5 or later for computers with Intel,
	MIPS, or Alpha AXP processors, and Windows NT 3.51 or later for computers
	with PowerPC processors.
	
	Upgrading SNA Servers in a Domain to At Least Version 2.1 (Required)
	------------------------------------------------------------------------
	
	SNA Server 2.11 is not supported in a domain with SNA Server 2.0 servers,
	therefore, you must upgrade SNA Server 2.0 servers in a domain to at least
	SNA Server 2.1 before you install SNA Server 2.11 on any of the servers.
	
	If all SNA servers in a domain are running SNA Server 2.1, no special
	considerations apply. You may upgrade any or all of these servers to
	version 2.11 regardless of the SNA configuration server role they play in a
	domain. (This role is configured by running SNA Server Setup and choosing
	Role.) Microsoft recommends that you upgrade the primary configuration
	server first, and then upgrade all SNA servers to version 2.11.
	
	For additional information about upgrading a domain of SNA servers from
	version 2.0 to 2.1, see the Microsoft SNA Server Installation Guide.
	
	Backing Up the SNA Server Configuration File Before Upgrading
	-------------------------------------------------------------
	
	Microsoft recommends that you always save (backup) the SNA Server
	configuration file to a directory outside the SNA Server root directory
	before running SNA Setup 2.0 or 2.1 to remove SNA Server 2.0 or 2.1.
	
	The SNA Server configuration file includes configuration information for
	all SNA servers in a Windows NT domain, including server properties,
	connections (802.2, SDLC, X.25, DFT, Downstream), all LUs a Windows NT
	domain, including server properties, connections (802.2, SDLC, X.25, DFT,
	Downstream), all LUs (3270, APPC, LUA, Downstream), 3270 pools, and
	User/group LU assignments.
	
	NOTE: The SNA Server link services installed during SNA Setup are not saved
	in the configuration file. Before removing SNA Server record the
	configuration information for the link services. This information can be
	obtained through SNA Server Setup-Links, select the Link service and choose
	Configure.
	
	To back up the configuration file:
	
	- Run SNA Server Admin. From the File menu, choose Backup.
	
	To restore the configuration file:
	
	- Run SNA Server Admin. From the File menu, choose Restore.
	
	Removing Old SNA Server Software Is Required (Using the Old SNA Setup)
	----------------------------------------------------------------------
	
	Before installing SNA Server 2.11, you must remove SNA Server 2.0 and 2.1
	by running SNA Server 2.0 or 2.1 Setup.
	
	Do not delete files in the SNA directories by using File Manager or command
	line commands. This leaves registry information behind that prevents a
	successful installation of SNA Server 2.11.
	
	Upgrading SNA Server 2.1 Clients to 2.11 (Optional)
	---------------------------------------------------
	
	SNA Server 2.1 clients are supported through SNA Server 2.11 servers,
	therefore, you do not need to upgrade the client software to the 2.11 level
	unless you want the new 2.11 client features.
	
	To upgrade the SNA Server client to version 2.11:
	
	1. Run SNA Server 2.1 client Setup on the client workstation.
	
	2. Choose Remove to remove the SNA Server 2.1 client.
	
	3. Run SNA Server 2.11 client Setup.
	
	  NOTE: You can find SETUP.EXE on the SNA Server 2.11 compact disc
	  in the \CLIENTS\WIN3X directory.
	
	Step-by-Step Instructions for Upgrading from SNA Server 2.0 or 2.1 to 2.11
	==========================================================================
	
	1. Back up the SNA Server 2.0 or 2.1 configuration file:
	
	  a. Run SNA Server Admin.
	
	  b. From the File menu, choose Backup to back up the file to a local or
	     network drive, or floppy disk.
	
	  c. Type the path to the configuration file name and the file name, for
	     example:
	
	        a:\com.sna
	
	     NOTE: To learn more about what information is saved and not saved in
	     the configuration file, see "Backing Up the SNA Server Configuration
	     File Before Upgrading" above.
	
	2. Be sure the following programs are stopped: SNA Server, APPC or CPIC
	  transaction programs, NVAlert and NVRunCmd services, the Windows NT
	  Event Viewer, and Performance Monitor.
	
	  a. To stop SNA Server, stop the Snabase service by:
	
	      - typing "net stop snabase" (without the quotation marks) at the
	        command prompt.
	
	        -or-
	
	      - running Windows NT Control Panel and choosing Services.
	        Then select SNA Server and choose Stop.
	
	  b. Quit APPC or CPIC transaction programs.
	
	  c. To stop the NVAlert and NVRunCmd Services, run Windows NT Control
	     Panel and choose Services. Select the service that you want to stop
	     and choose Stop.
	
	  d. Quit the Windows NT Event Viewer and Performance Monitor.
	
	3. Remove SNA Server 2.0 or 2.1:
	
	  a. Run SNA Server 2.0 or 2.1 (not 2.11) Setup located in the SNA Server
	     program group.
	
	  b. In the Setup Options dialog box, choose Remove.
	
	     The Confirm Removal dialog box appears.
	
	  c. Read the Confirm Removal dialog box, and if you want to continue,
	     choose Continue.
	
	4. Install SNA Server 2.11 by running Setup from the compact disc:
	
	  a. Insert the SNA Server 2.11 compact disc into a local CD-ROM drive, or
	     shared network CD-ROM drive.
	
	  b. Run SETUP.EXE located in the root directory.
	
	  c. When prompted, choose the appropriate licensing method for the server
	     (either the Per Server or Per Seat method), according to the client
	     licenses that you purchased.
	
	     NOTE: SNA Server 2.1 client licenses carry forward to 2.11. If you
	     are using more than one SNA server in a fault tolerant configuration,
	     Microsoft recommends the Per Seat licensing option.
	
	  d. Install SNA Server link services you had installed in your previous
	     version.
	
	     NOTE: The link service names need to be the same as the previous 2.1
	     installation, or the connections do not point to the correct link
	     services. The default link service names generated by SNA Server
	     Setup are the same in SNA Server versions 2.0, 2.1, and 2.11.
	
	5. Restore and save your previous-version SNA Server configuration file:
	
	  a. Run SNA Server Admin. From the File menu, choose Restore.
	
	  b. Type the path to the configuration file and the file name. For
	     example:
	
	        a:\com.sna
	
	     SNA Server Admin restores all configuration information from the
	     previous configuration file.
	
	  c. From the File menu, choose Save.
	
	You have successfully installed SNA Server 2.11 with the previous-version
	configuration file settings. You may start the SNA Server service and
	activate connections.
	
	Additional query words: prodsna 2.00 2.10 2.11 3.50 3.51 setup upgrade
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
