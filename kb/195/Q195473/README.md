---
layout: page
title: "Q195473: FIX: MS Access ODBC Driver Does Not Recognize DSN MaxBufferSize"
permalink: /kb/195/Q195473/
---

## Q195473: FIX: MS Access ODBC Driver Does Not Recognize DSN MaxBufferSize

{% raw %}

	Article: Q195473
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:2.1 SP2,2.5,3.5,3.51
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbJET kbODBC kbSDKDataAc200bug kbGrpDSMDAC kbDSupport kbMDAC250
	Last Modified: 24-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, version 3.51 
	- Microsoft ODBC Driver for Access, version 3.5 
	- Microsoft Data Access Components versions 2.1 SP2, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Although the Microsoft Access ODBC driver (version 3.51.1713) Data Source Name
	(DSN) setup sets the MaxBufferSize value to 512K, the cache size is not capped
	at 512K. For example, if an application spins in a loop and inserts records
	using SQLSetPos, the process private bytes grow to about 13 MBs rather than the
	expected 512K.
	
	Looking at the registry entries for the DSN, you might see something like the
	following:
	
	  HKEY_CURRENT_USER
	    Software
	       ODBC
	          ODBC.INI
	               AccessTest
	                    Engines
	                        Jet
	                           MaxBufferSize = 512
	
	AccessTest is the name of the DSN. The MaxBufferSize setting has no effect for
	the DSN.
	
	CAUSE
	=====
	
	The Microsoft Access ODBC driver is ignoring the DSN MaxBufferSize setting.
	However, the driver is using the MaxBufferSize setting of Jet under the
	HKEY_LOCAL_LACHINE\Jet\3.5\Engines\Jet 3.5\MaxBufferSize setting.
	
	RESOLUTION
	==========
	
	The Microsoft Access ODBC driver uses the MaxBufferSize setting for Jet to
	determine its maximum buffer size.
	
	The Jet MaxBufferSize is a registry entry in the following path:
	
	  HKEY_LOCAL_LACHINE\Jet\3.5\Engines\Jet 3.5
	
	It is normally set to zero (0). The setting of zero indicates that Jet uses a
	default algorithm to determine the maximum cache size. That algorithm is
	"(((Total RAM on computer in MB - 12MB) / 4) + 512K)". This returns a value
	equal to the number of pages that the cache size can increase. Each page is 2048
	bytes, so for a computer with at least 64 MB of RAM, this algorithm returns
	approximately 14 MB. This is the maximum memory that Jet consumes from its
	startup point.
	
	Following is an example of the calculation for a 64 MB computer:
	
	  (64Mb - 12Mb) / 4 + 512K
	  = 52Mb/4 + 512K
	  = 13Mb + 512K
	  = 13.5Mb
	
	Jet will not allow the "Total RAM on computer" calculated earlier to exceed 64
	MB. If the total RAM on the computer is 12 MB or less, then the algorithm
	creates a 512 KB cache buffer.
	
	Jet will use memory for its cache until it reaches this dynamic setting if the
	MaxBufferSize registry setting is zero (0). If the MaxBufferSize registry
	setting is set at 512 KB, for example, the cache size will be limited to 512 KB.
	Once Jet exceeds the setting, it fires off a background thread to reduce the
	memory to the point that it goes below the maximum cache size setting.
	
	You can typically minimize the growth of the Jet cache by dropping a HSTMT()
	statement handle and creating a new one. In this case, the memory at the
	beginning of the Jet cache will be re-used.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	REFERENCES
	==========
	
	For more information about MaxBufferSize, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q187872 HOWTO: Determine Jet Memory Usage with DAO MaxBufferSize
	
	
	Additional query words: memory leak
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbJET kbODBC kbSDKDataAc200bug kbGrpDSMDAC kbDSupport kbMDAC250 
	Technology        : kbAudDeveloper kbAccessSearch kbODBCSearch kbMDACSearch kbMDAC210SP2 kbMDAC250 kbODBCAccess350 kbODBC351
	Version           : WINDOWS:2.1 SP2,2.5,3.5,3.51
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
