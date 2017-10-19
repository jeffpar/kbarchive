---
layout: page
title: "Q136153: Using an Answer File for an Unattended Installation"
permalink: /kb/136/Q136153/
---

## Q136153: Using an Answer File for an Unattended Installation

	Article: Q136153
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 26-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An answer file is a text file that is used in conjunction with Setup to bypass
	normal Setup prompts. An unattended installation is run by specifying the /U
	switch with Winnt.exe or Winnt32.exe. For example:
	
	  WINNT /U:{Answer File} /S:{Source Files}
	
	Windows can use the answer files:
	
	  Product                             Default Answer File
	  -------------------------------------------------------
	  Windows NT Resource Kit 3.5         Unattend.txt
	  Windows NT Resource Kit 3.51        Unattend.txt
	  Windows 2000 Resource Kit           Unattend.txt
	
	MORE INFORMATION
	================
	
	The answer file can be modified with any text editor or by using Setup Manager,
	included in the Windows NT and Windows 2000 Resource Kit.
	
	An answer file can also be created by using Uplodprf.exe.
	
	Note: This answer file is included with the Resource Kit for versions of Windows
	NT 3.5, and 3.51.
	
	Uplodprf.exe must be run from the system you intend to profile. UPLODPRF uses the
	following command line syntax:
	
	  uplodprf -p:{AnswerFile} -b- -u- -n- -r- -x -i:{inffile}
	
	  -p:AnswerFile  Output an answer file for use with unattended setup.
	
	  -b-            The boot sector will not be copied (all other processing
	                 is still performed.)
	
	  -u-            Do not generate a user account definition file.
	
	  -n-            Do not dump ACLs of files in the profile
	
	  -r-            Do not dump the registry key ACLs
	
	  -x             Do not copy files to sharedir.
	
	  -i:inffile     INFFILE is the file containing the instructions for
	                 processing the Windows NT computer for redistribution.
	
	The following informational messages may result after running the above command.
	They can be ignored.
	
	  (5) Access is denied.
	
	  Unable to delete key HiveUpdateRoot from registry.
	
	  Timeout value in Boot.ini file has been set to 0.
	
	  Boot Sector was not copied from local drive.
	
	  No User account information dumped.
	
	For a more complete explanation of uplodprf switches, type "UPLODPRF /?" (without
	the quotation marks) at the Windows command prompt.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinNTS351search kbWinXPHome kbWinXPPro kbWinAdvServSearch kbWinDataServSearch kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
