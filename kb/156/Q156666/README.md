---
layout: page
title: "Q156666: HOWTO: Obtain User Permissions from Oracle Server"
permalink: /kb/156/Q156666/
---

## Q156666: HOWTO: Obtain User Permissions from Oracle Server

	Article: Q156666
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbDatabase kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes one method of determining what privileges a user has on
	an Oracle server.
	
	MORE INFORMATION
	================
	
	The following code example demonstrates how to obtain user permissions from an
	Oracle server. Before attempting to run this code, be sure to replace the
	<datasource>, <user>, and <password> in the SQLStringConnect
	command with the appropriate values for your system.
	
	Begin Code Example
	------------------
	
	     handle = SQLStringConnect("dsn=<datasource>;uid=<user>;pwd=<password>")
	     status = SQLExec(handle, "Select * from SESSION_PRIVS", "SqlResult")
	     IF (status < 1)
	       ? "Unable to retrieve permissions"
	     ELSE
	       SCAN
	         ? SqlResult.Privilege
	       ENDSCAN
	     ENDIF
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop kbDatabase kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
