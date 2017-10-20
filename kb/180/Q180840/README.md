---
layout: page
title: "Q180840: FIX: Access Violation with SQLConfigDatasource &amp; Oracle Driver"
permalink: /kb/180/Q180840/
---

## Q180840: FIX: Access Violation with SQLConfigDatasource &amp; Oracle Driver

{% raw %}

	Article: Q180840
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:1.0,2.5
	Operating System(s): 
	Keyword(s): kbcode kberrmsg kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Oracle (Build 2.06325), version 1.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create an ODBC data source with the SQLConfigDatasource API
	and the Microsoft ODBC Driver for Oracle version 1.0 (Msorcl10.dll), you get one
	of error messages listed below.
	
	On Windows 95:
	
	  <APPLICATION.EXE> has caused an invalid page fault in module
	  MSORCL10.DLL at 0137:61016bae.
	
	On Windows NT 4.0:
	
	  The instruction at "0x61016bae" referenced memory at "0x00000000". The memory
	  could not be "read".
	
	CAUSE
	=====
	
	This is a known bug in the Microsoft ODBC Driver for Oracle, version 1.0.
	SQLConfigDatasource fails when provided with any invalid attribute string
	name/value pair.
	
	RESOLUTION
	==========
	
	Use only the proper ODBC data source attribute string values found in the
	Microsoft Knowledge Base article listed in the REFERENCES section or get the
	updated Oracle ODBC driver version 2.0 that ignores invalid attribute strings.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the Microsoft ODBC for
	Oracle driver, version 2.0.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following sample code to reproduce the error:
	
	     // START OF SAMPLE CODE
	     #include <windows.h>
	     #include <odbcinst.h>
	     #include <stdio.h>
	
	     void main()
	     {
	        SQLConfigDataSource( NULL,
	                             ODBC_ADD_DSN,
	                             "Microsoft ODBC Driver for Oracle",
	                             "DSN=MSORCL10_DSN\0"     // This is valid.
	                             "BOGUS=Yada-Yada-Yada\0" // This is invalid.
	                            );
	     }
	     // END OF SAMPLE CODE
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q179236 INFO: Using SQLConfigDatasource with MS Oracle ODBC Driver
	
	  Q179236 INFO: Understanding Microsoft's Oracle ODBC Driver Versions
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kberrmsg kbDatabase kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC250 kberror 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC250 kbODBCOracle206325
	Version           : WINDOWS:1.0,2.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
