---
layout: page
title: "Q167869: List of Doc Errors in Services for NetWare Administrator's Guide"
permalink: kb/167/Q167869/
---

## Q167869: List of Doc Errors in Services for NetWare Administrator's Guide

	Article: Q167869
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Services for NetWare 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists known documentation errors in the Microsoft Services for
	NetWare Administrator's Guide.
	
	The following known documentation errors are described in this article:
	
	- Page 20, Chapter 1: Version 3.51
	
	- Page 141, Appendix A: Parameters Available but Not Installed
	
	- Page 144, Appendix A: Parameters Available but Not Installed
	
	MORE INFORMATION
	================
	
	Page 20, Chapter 1: Version 3.51
	--------------------------------
	
	Step 5 incorrectly states the folder for the administrative tools for File and
	Print Services for NetWare 3.51:
	
	  5. Type the appropriate path, and click OK.
	
	     The path is <drive>:\FPNW\NT40\<processor>, where <drive> is the
	     drive letter of the CD-ROM and <processor> is the server's processor
	     type.
	
	Step 5 should read:
	
	  5. Type the appropriate path, and click OK.
	
	     The path is <drive>:\FPNW\NT351\<processor>, where <drive> is the
	     drive letter of the CD-ROM and <processor> is the server's processor
	     type.
	
	Page 141, Appendix A: Parameters Available but Not Installed
	------------------------------------------------------------
	
	This section includes a description for the EmulateNtfsShareable parameter.
	
	This parameter should read EnableNtfsShareable.
	
	Page 144, Appendix A: Parameters Available but Not Installed
	------------------------------------------------------------
	
	This section includes a description for the NTQueueDirectory parameter. If you
	enable this parameter, you receive the following error message:
	
	  Event ID: 2506
	  Value named "NTQueueDirectory" is not valid or does not exist
	
	This parameter should read QueueDirectory.
	
	Additional query words: fpnw docerr doc err doc error print queue
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbServicesNetwareSearch
	Version           : WinNT:4.0
	
	=============================================================================
	
