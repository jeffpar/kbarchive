---
layout: page
title: "Q192886: PRB: Alpha MS Oracle ODBC Driver Does Not Work with Oracle8"
permalink: /kb/192/Q192886/
---

## Q192886: PRB: Alpha MS Oracle ODBC Driver Does Not Work with Oracle8

{% raw %}

	Article: Q192886
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,Build 2.573.2927
	Operating System(s): 
	Keyword(s): kbDatabase kbHWDecAlpha kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbMDAC210 kbMD
	Last Modified: 11-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5 Build 2.573.2927 
	- Microsoft Data Access Components version 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to create a Data Source Name (DSN) for the Alpha version of the
	Microsoft Oracle ODBC Driver (v2.573.2927) for use with the Oracle8 client
	components, you receive the following error:
	
	  The Oracle(tm) client and networking components were not found. These
	  components are supplied by Oracle Corporation and are part of the Oracle
	  Version 7.3 (or greater) client software installation.
	
	  You will be unable to use this driver until these components have been
	  installed.
	
	CAUSE
	=====
	
	The Alpha version of the Microsoft Oracle ODBC Driver is looking for specific
	Oracle 7.3 dynamic-link libraries (DLLs) which are not part of the Oracle8
	client component install.
	
	RESOLUTION
	==========
	
	This problem is corrected in MS Oracle ODBC Driver for Alpha found in MDAC 2.1.
	(not SP2).
	
	STATUS
	======
	
	Microsoft Data Access Components version 2.1 contains an updated Alpha Microsoft
	Oracle ODBC Driver that is compatible with the Oracle8 client components.
	
	REFERENCES
	==========
	
	For more information about the Microsoft Oracle ODBC Driver or the Microsoft
	Data Access Components (MDAC), please see the following World Wide URL:
	
	  http://www.microsoft.com/data/
	
	NOTE: You can also download the latest MDAC stack from this site as well.
	
	Additional query words: oracle mdac odbc alpha
	
	======================================================================
	Keywords          : kbDatabase kbHWDecAlpha kbDriver kbODBC kbOracle kbGrpDSVCDB kbGrpDSMDAC kbMDAC210 kbMDACNoSweep 
	Technology        : kbAudDeveloper kbODBCSearch
	Version           : :2.1,Build 2.573.2927
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
