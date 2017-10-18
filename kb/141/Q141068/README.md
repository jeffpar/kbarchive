---
layout: page
title: "Q141068: PC Forms: Err Msg: Error Could Not Execute..."
permalink: kb/141/Q141068/
---

## Q141068: PC Forms: Err Msg: Error Could Not Execute...

	Article: Q141068
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to install Electronic Forms Designer (E-form) on a Microsoft
	Windows 95 computer, you may get the following error message after you run
	SETUP.EXE:
	
	  Error could not execute C:\WINDOWS\CMDKINST.EXE 2
	
	CAUSE
	=====
	
	This error can occur if the E-forms Setup disk has been updated to a newer
	version and the CMDKINST.EXE file is not present in the Windows directory.
	
	RESOLUTION
	==========
	
	NOTE: The file sizes and dates for Electronic Forms Designer Setup files on Disk
	1 are:
	
	SETUP.EXE         15,360       9/20/93      12:59pm
	USERINST.EX_      37,205      10/13/93       5:58pm
	
	You can use one of the following workarounds when you get the above error
	message:
	
	1. Get the newest version of the updated Setup files, version 1.03 from Product
	  Support Services.
	
	  File sizes and dates for latest updated Setup files:
	
	   SETUP.EXE            15,360        4/24/95        3:24pm
	   VER.DL_               9,696        11/1/93        5:11am
	   CMDKINST.EXE         71,240        4/27/95        8:23pm
	   CMDKINST.EX_         31,231        4/27/95        8:23pm
	
	2. Use the expand command and expand a new version from the E-forms Setup disk
	  that you are using. This can be done because the setup files (version 1.01)
	  does not expand the CMDKINST.EX_ correctly; however, you can correctly
	  manually expand the file yourself. The following syntax is required for a
	  manual expand:
	
	  expand a:\cmdkinst.ex_ c:\<windir>\cmdinst.exe
	
	3. Rename the C:\<WINDIR>\CMDKINST.EX to C\<WINDIR>\CMDKINST.EXE and
	  restart the E-forms Setup program.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 of Microsoft
	Electronic Forms Designer. A fix for this problem is in development, but has not
	been regression-tested and may be destabilizing in production environments.
	Contact Microsoft Product Support Services for more information on the
	availability of this fix.
	
	
	MORE INFORMATION
	================
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q123320 Err Msg: Could Not Copy File...
	
	
	Additional query words: 1.00 error setup eforms cmdkinst.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
