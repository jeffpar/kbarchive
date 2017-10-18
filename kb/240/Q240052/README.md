---
layout: page
title: "Q240052: HOWTO: Specifying a VSS Database Using the Command Line"
permalink: kb/240/Q240052/
---

## Q240052: HOWTO: Specifying a VSS Database Using the Command Line

	Article: Q240052
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,4.0a,5.0,6.0
	Operating System(s): 
	Keyword(s): _IK kbSSafe400 kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 4.0a, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have multiple Microsoft Visual SourceSafe (VSS) databases, and are using
	the VSS command line, you can use the SSDIR environment variable to point to the
	required database.
	
	MORE INFORMATION
	================
	
	Each VSS database has its own Srcsafe.ini file. The VSS command line (SS.exe)
	needs to locate a Srcsafe.ini file in order to determine which database it uses.
	In most cases Ss.exe is in the VSS\Win32 directory and by default will find a
	Srcsafe.ini file in the VSS directory. If you want Ss.exe to use a different
	Srcsafe.ini, use the following command:
	
	SET SSDIR=<path to srcsafe.ini>\ 
	
	For example:
	
	SET SSDIR=C:\Program Files\Microsoft Visual Studio\Common\VSS
	
	or
	
	SET SSDIR=\\vss_server\vss_share
	
	NOTE: There must not be spaces around the "=" character. Also note that if you
	use the SET SSDIR command in a Command Prompt (DOS) window, the SSDIR setting is
	not maintained after the window is closed.
	
	REFERENCES
	==========
	
	For additional information, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q100843 Environment Variables in Windows NT
	
	Additional query words: environment ssdir
	
	======================================================================
	Keywords          : _IK kbSSafe400 kbSSafe500 kbSSafe600 _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500
	Version           : WINDOWS:4.0,4.0a,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
