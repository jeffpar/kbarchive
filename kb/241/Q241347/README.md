---
layout: page
title: "Q241347: FIX: Inserting/Updating Dates Before &quot;01-01-1900&quot; Into SQL"
permalink: /kb/241/Q241347/
---

## Q241347: FIX: Inserting/Updating Dates Before &quot;01-01-1900&quot; Into SQL

{% raw %}

	Article: Q241347
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,2.5,2.6,2.7
	Operating System(s): 
	Keyword(s): kbJDBC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250bug kbMDAC260bug kbmdac270 kb
	Last Modified: 27-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for JDBC (Build 5.00.3591) 
	- Microsoft Data Access Components versions 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Java Database Connectivity (JDBC) - Open Database Connectivity
	(ODBC) bridge to insert or update dates prior to "01-01-1900" into SQL server
	(version 6.5 and 7.0), the following error occurs consistently:
	
	  22008 [Microsoft][ODBC SQL Server Driver]Datetime field overflow.
	
	For those inserts or updates that are successful (for dates after 01-01-1900),
	truncation (of the datetime columns) occurs. So, when displaying the row in the
	database, the seconds and milliseconds portion of the datetime columns are
	always 0 (zero) even though the date/time fields that are bound have non-zero
	values for seconds and milliseconds.
	
	CAUSE
	=====
	
	The JDBC-ODBC bridge (msjdbc10.dll) is binding the datetime column incorrectly.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a bug in the JDBC-ODBC bridge (Msjdbc10.dll,
	version 5.00.3155). This bug has been fixed in Microsoft VM for Java, builds
	3234 (which shipped with Microsoft Internet Explorer version 5.01 and Windows
	2000) and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This problem happens when you use the latest JDBC-ODBC bridge (Msjdbc10.dll
	version 5.00.3155) and Microsoft Data Access Components (MDAC) 2.1 GA and later.
	Uninstalling MDAC 2.1 and re-installing MDAC 2.0 SP2 seems to fix the problem.
	
	You can use Microsoft Component Checker to uninstall any version of MDAC in a
	computer running Windows 95, Windows 98, or Windows NT.
	
	For detailed information on Component Checker see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/data
	
	Additional query words: msjdbc10.dll, datetime binding
	
	======================================================================
	Keywords          : kbJDBC kbODBC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250bug kbMDAC260bug kbmdac270 kbmdac270bug 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbMDAC250 kbMDAC260
	Version           : :2.1,2.5,2.6,2.7
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
