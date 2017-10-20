---
layout: page
title: "Q193873: INFO: Determining What Oracle Components Are Installed"
permalink: /kb/193/Q193873/
---

## Q193873: INFO: Determining What Oracle Components Are Installed

{% raw %}

	Article: Q193873
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbOracle kbDSupport kbMDAC250
	Last Modified: 12-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine what Oracle components are installed on your system (and the
	version of these components) open either the NT.rgs or WIN95.rgs file. These
	files are located in the \ORINST directory off the Oracle home directory.
	
	MORE INFORMATION
	================
	
	If you need to know what Oracle software components are installed on your system
	you can open either the NT.rgs or WIN95.rgs file (depending on which version of
	Windows you are using). The .rgs file is a text file that contains information
	about what Oracle components are installed on the system. The file looks similar
	to the following:
	
	   0 ntinstall     all      "orainst"    "3.3.1.0.0C" "Oracle Installer"
	  20 w32tcp80      adp80    "tcp80"      "8.0.5.0.0"  "Oracle TCP/IP Pro
	  23 w32nmp80      adp80    "nmp80"      "8.0.5.0.0"  "Oracle Named Pipe
	  26 w32util80     all      "util80"     "8.0.5.0.0"  "Oracle8 Utilities
	  34 w32rsf80      all      "rsf80"      "8.0.5.0.0"  "Required Support
	  47 w32netclt80   net80    "netc80"     "8.0.5.0.0"  "Oracle Net8 Client
	  69 w32plus80     all      "plus80"     "8.0.5.0.0"  "SQL*Plus"
	
	There is a lot more information than what you see in the preceding display. The
	additional information includes when the installation of the components took
	place and a detailed description of the component.
	
	The .rgs files (both NT.rgs and WIN95.rgs) are found in the \ORAINST directory
	off the Oracle home directory. The location of the Oracle home directory is
	dependent on which drive you install Oracle on and what operating system you
	use. For example, the Oracle home directory for a Windows NT installation on
	drive C:\ would be as follows:
	
	  C:\ORANT
	
	Therefore, the path for your .rgs file on this installation would be:
	
	  C:\ORANT\ORAINST\NT.RGS
	
	Additional query words: install version
	
	======================================================================
	Keywords          : kbOracle kbDSupport kbMDAC250 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle25732927 kbODBCOracle250Search
	Version           : :2.5,Build 2.573.2927
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
