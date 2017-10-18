---
layout: page
title: "Q102786: HOWTO: Optimize FoxPro Performance on a Network"
permalink: kb/102/Q102786/
---

## Q102786: HOWTO: Optimize FoxPro Performance on a Network

	Article: Q102786
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Here are a few steps you may use to optimize network performance:
	
	1. Install local copies of FoxPro on the workstations and only have data that
	  needs to be shared on the network.
	
	2. Create a local Config.fpw for each node or workstation. Force FoxPro (or
	  EXE's written in FoxPro) to find and use the specified local configuration
	  file. The proper syntax to specify a configuration file is shown below:
	  -C<path> For example, to ensure that FoxPro uses a specific Config.fpw
	  file modify the command line of the startup icon or program to look like the
	  following: c:\apps\customer.exe -cc:\temp\config.fpw Note: Ensure that there
	  is no space following the -c parameter. Also if the subdirectory name
	  includes a space you must enclose the entire -c parameter within double
	  quotes.
	
	3. Make sure all temporary files and work files are located on the local drive.
	  For example, the Config.fp file (or, in the Windows product, the Config.fpw
	  file) would contain the following entries: tmpfiles = c:\foxtemp sortwork =
	  c:\foxtemp progwork = c:\foxtemp editwork = c:\foxtemp Note: Ensure it is a
	  valid, existing subdirectory on local drive.
	
	4. Within the configuration file, specify a local resource file. By default the
	  name of the resource file is Foxuser.dbf and there is an assocated
	  Foxuser.fpt file. It is a normal FoxPro table. For example, the Config.fpw
	  file would contain the following entry: resource=c:\apps\myuser.dbf
	
	5. If there are files that need to be shared but are rarely updated (an example
	  would be States.dbf, which has state abbreviations and full names), mark
	  those files with the Read-Only attribute at the network level. For example,
	  to mark States.dbf as read-only on a Novell network, you would type: FLAG
	  states.dbf +RO States.dbf will now open faster.
	
	REFERENCES
	==========
	
	"Developer's Guide," version 2.5, "FoxPro in a Multiuser Environment" Chapter 19
	in FoxPro for Windows Developer's Guide; Chapter 16 in FoxPro for MS-Dos
	Developer's Guide.
	
	"Developer's Guide", Professional Edition, Visual FoxPro version 3.0,
	"Programming for Shared Access".
	
	Additional query words: Network Optimize novel
	
	======================================================================
	Keywords          : kbnetwork kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
