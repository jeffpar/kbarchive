---
layout: page
title: "Q104595: TSR to Force Creation of Temporary Files in Current Directory"
permalink: /kb/104/Q104595/
---

## Q104595: TSR to Force Creation of Temporary Files in Current Directory

	Article: Q104595
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	PROBLEM DESCRIPTION
	===================
	
	Some programs (such as Clipper '87) create temporary files using a standard
	MS-DOS function (int 21h function 5A).
	
	MS-DOS function 5A by default tries to create temporary files in the root
	directory of the current drive. On LAN Manager 2.x networks, this means that if
	the current drive is redirected to a network share, the user must have Create
	and Delete permissions on that share.
	
	Using the HOOK5A Terminate and Stay Resident (TSR) utility alleviates this
	requirement by forcing Function 5A to create temporary files in the current
	directory.
	
	HOOK5A can be found in the Software/Data Library by searching on the keyword
	HOOK5A, the Q number of this article, or S14343. HOOK5A was archived using the
	PKware file-compression utility.
	
	The entry in the Software/Data Library includes the following files:
	
	  Filename       Description
	  --------       -----------
	  HOOK5A.COM     MS-DOS TSR program
	  README.TXT     Short explanation of the program
	
	USAGE
	
	Load HOOK5A before or after the NET START RDR command in your AUTOEXEC.BAT.
	
	Note: As with any other TSR, if you load HOOK5A after you start the workstation
	(NET START RDR), you will no longer be able to stop the workstation software.
	
	Additional query words: 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
