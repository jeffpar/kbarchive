---
layout: page
title: "Q195907: PRB: Cannot Update VFP Free Table Using FoxPro ODBC ISAM Drive"
permalink: /kb/195/Q195907/
---

## Q195907: PRB: Cannot Update VFP Free Table Using FoxPro ODBC ISAM Drive

{% raw %}

	Article: Q195907
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.1 SP2,5.0,6.0; winnt:6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbDatabase kbDriver kbIISAM kbJET kbODBC kbVBp600 kbVC600 kbvfp600 kbGrpDSFox
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components version 2.1 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In systems that do not have MDAC 2.1 installed on them, when you use the FoxPro
	ODBC ISAM Driver (named "Microsoft FoxPro Driver(*.dbf)" in the ODBC
	Administrator) for 2.5 or 2.6 tables, it allows you to view the contents of a
	table created in Visual FoxPro. However, when you try to update or add new
	records, the following error message might appear:
	
	  Operation must use an Updateable Query.
	
	CAUSE
	=====
	
	The older ISAM driver is not able to accurately read the table header of the
	Visual FoxPro table. Visual FoxPro supplies additional information in the header
	of the table for links to a database container, which the older ISAM ODBC driver
	does not accommodate. Snapshot recordsets are updateable as long as the table is
	in 2.5 or 2.6 format.
	
	RESOLUTION
	==========
	
	Microsoft ships a separate Visual FoxPro ODBC driver that enables you to perform
	updates on all versions of Visual FoxPro tables, whether they are part of a
	database container (.dbc) or free tables (.dbf). You can get the Visual FoxPro
	ODBC Driver, as part of the Microsoft Data Access Components (MDAC), by going to
	the following Web site:
	
	  http://microsoft.com/data/download.htm
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Microsoft Data Access Components version 2.1 replaces the ISAM driver with a
	stub that informs the user that "The Microsoft FoxPro driver is no longer
	supported, and has been replaced with the Microsoft Visual FoxPro driver". If an
	existing ODBC connection is used, the message "Could not find installable ISAM."
	appears.
	
	You should only use the 2.5 or 2.6 FoxPro ODBC ISAM Driver with tables that were
	created with earlier versions of FoxPro (that is, before Visual FoxPro 3.0). It
	is preferable to use the Visual FoxPro driver.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbDatabase kbDriver kbIISAM kbJET kbODBC kbVBp600 kbVC600 kbvfp600 kbGrpDSFox kbGrpDSMDAC kbDSupport kbADO210sp2 
	Technology        : kbVCsearch kbVFPsearch kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC210SP2 kbVC600 kbVC32bitSearch kbVFP500
	Version           : WINDOWS:2.1 SP2,5.0,6.0; winnt:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
