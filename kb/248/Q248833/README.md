---
layout: page
title: "Q248833: PRB: Data Control Only Displays Updated Data When Single-Step"
permalink: /kb/248/Q248833/
---

## Q248833: PRB: Data Control Only Displays Updated Data When Single-Step

	Article: Q248833
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run an application, updates made to an .mdb file are not visible when
	you refresh the intrinsic Visual Basic DAO Data Control. When you single-step
	through the code, the changes show up in the Data Control.
	
	CAUSE
	=====
	
	Your code and the data control are instantiating two different versions of the
	Microsoft Jet database engine and you experience symptoms similar to those
	described in the following Knowledge Base article: For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q216925 PRB: Single-User Concurrency Problems With ADO and Jet
	
	With DAO and the DAO data control, this is caused by having the Microsoft DAO 3.5
	(or 3.51 or 2.5/3.5 Compatibility) library lower in the list of type library
	references than another type library that defines a Database and recordset
	object for a different version of Microsoft Jet database engine. The effect of
	this is to cause two different versions of Microsoft Jet database engine to be
	loaded.
	
	RESOLUTION
	==========
	
	Move the Microsoft DAO 3.51 type library up in priority to just under the Visual
	Basic type libraries.
	
	You should also be able to work around the problem by declaring an unambiguous
	variable type, such as DAO.Database and DAO.Recordset instead of database and
	recordset:
	
	  Dim db As DAO.Database, rs As DAO.Recordset
	
	
	STATUS
	======
	
	This behavior is by design.
	
	Starting with Microsoft Data Access Components (MDAC) version 2.6, MDAC no longer
	contains the following Jet components:
	
	- Microsoft Jet
	- Microsoft Jet OLE DB Provider
	- ODBC Desktop Database Drivers
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q239114 ACC2000: Updated Version of Microsoft Jet 4.0 Available in Download
	  Center
	
	The "MDAC 2.5 Stack and Windows File Protection" white paper contains a full list
	of the components that are shipped with MDAC 2.5, along with a discussion of
	Windows File Protection. Refer to this white paper for more information about
	the Jet dynamic-link libraries (DLLs) that are included in MDAC 2.5, which are
	no longer a part of MDAC 2.6.
	
	For more information about MDAC 2.5 and Windows File Protection, see the
	following Microsoft Web site:
	
	  http://www.microsoft.com/data/mdacwfp.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbJET kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Component         : dao JET
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
