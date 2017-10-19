---
layout: page
title: "Q99201: PC Forms: Installing Forms Designer on Shared Windows or Mail"
permalink: /kb/099/Q99201/
---

## Q99201: PC Forms: Installing Forms Designer on Shared Windows or Mail

	Article: Q99201
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0,3.0,3.2,3.2a,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	- Microsoft Mail for PC Networks, versions 3.0, 3.2, 3.2a, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The licensing agreement for version 1.0 of Microsoft Electronic Forms Designer
	precludes installing the Designer files in a shared location on a network;
	however, the form run-time files can be shared with no per-user fee required.
	
	MORE INFORMATION
	================
	
	The network administrator can install the form run-time files for shared use by
	following these steps:
	
	1. Follow the instructions in the "Developer's Guide" to run Setup. Choose the
	  Server setup option and complete Server Setup by following the prompts.
	
	2. Make sure you have write access to the shared Windows directories and that
	  shared Windows or Mail users are not currently running any of the following
	  products:
	
	   - Microsoft Visual Basic version 2.0 for Windows
	
	   - Applications created using Visual Basic 2.0
	
	   - Version 3.0 or 3.2 of Microsoft Mail for PC Networks
	
	   - Version 1.0 of Microsoft Schedule+ for Windows
	
	   - Microsoft Word version 2.0 for Windows
	
	   - Microsoft Excel version 4.0 for Windows
	
	  It may be easier to simply require all shared Windows users to exit Windows.
	
	3. In the Windows File Manager, run the SETUP.EXE program that was created by
	  Server Setup in the location you specified. This is the User Setup, which
	  will upgrade shared files in the shared Windows directories and will also
	  create entries in your MSMAIL.INI file.
	
	4. Copy the following entries from your MSMAIL.INI file into each user's
	  personal MSMAIL.INI file. Each entry is described in more detail in the
	  "Developer's Guide."
	
	  [Microsoft Mail]
	  SharedExtensionsDir=<The path to the directory created by Server
	  setup>
	
	  [Custom commands]
	  E-Form Cache=3.0;;;;MEFLIB.DLL; ;1100000000000000;;;;
	  Browser=3.0;Mail;&Select
	  EForm...;1;MEFLIB.DLL;C:\WINDOWS\mefbrows.exe;0000000000000000;
	  Microsoft E-Form Browser;;;
	
	  [E-Form Cache]
	  Maximum=3
	
	5. If Microsoft Excel users do not share an XLSTART directory for add-ons, copy
	  MEFROUTE.XLA into each user's personal XLSTART directory. This will install a
	  Route command into Excel.
	
	6. If Microsoft Word users do not share NORMAL.DOT, run MEFRAUTO.DOC on each
	  user's machine to install a Route command into Word.
	
	Additional query words: 1.00 3.00 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms kbMailPCN320 kbMailPCN320a kbMailPCN300 kbMailPCN350
	Version           : WINDOWS:1.0,3.0,3.2,3.2a,3.5
	
	=============================================================================
	
