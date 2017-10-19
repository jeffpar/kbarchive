---
layout: page
title: "Q235985: INFO: Error Codes for VFPCOM Utility"
permalink: /kb/235/Q235985/
---

## Q235985: INFO: Error Codes for VFPCOM Utility

	Article: Q235985
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCOMt kbMiscTools kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a listing of all the error codes returned by the
	VFPCOM.DLL utility.
	
	MORE INFORMATION
	================
	
	These are the error codes and descriptions that might appear with the CursorToRS
	method:
	
	  Error Code   Description
	  ----------   -------------------
	
	    -4         Invalid workspace specified
	    -5         Invalid Fox cursor or cursor operation error
	    -7         Cannot get field information from the current Fox cursor
	    -8         Recordset already defined
	    -9         Failed to open a memo field
	  -182         Memory error
	
	These are the error codes and descriptions that might appear with the RSToCursor
	method:
	
	  Error Code   Description
	  ----------   -----------------
	
	    -3         Bad alias name
	    -6         Failed to open recordset
	   -10         Failed to create Fox cursor
	
	These are the error codes and descriptions that might appear with the
	ExportEvents method:
	
	  Error Code   Description
	  ----------   ------------------
	
	     -1        File creation error
	     -2        Failed to get type info
	     -3        Failed to get dispatch interface
	  -1000        Failed to get outgoing interface
	
	REFERENCES
	==========
	
	For more information on how to download the Vfpcom.dll files, please refer to
	the following Web site:
	
	  http://msdn.microsoft.com/vfoxpro/downloads/readme_VFPCOM.asp
	
	For additional information about COM in Visual FoxPro, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q188709 SAMPLE: Vfpcom.exe Using COM Language Enhancements in VFP 6.0
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbMiscTools kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	
