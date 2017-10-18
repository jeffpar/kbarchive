---
layout: page
title: "Q155913: INFO: Visual Foxpro and ODBC Server-Side Cursors"
permalink: kb/155/Q155913/
---

## Q155913: INFO: Visual Foxpro and ODBC Server-Side Cursors

	Article: Q155913
	Product(s): Microsoft FoxPro
	Version(s): 2.5,5.0,6.0
	Operating System(s): 
	Keyword(s): kbinterop kbODBC kbMDAC250
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Via ODBC, some applications make use of a technology called server-side cursors.
	Server-side cursors allow users to manipulate data on the server without
	bringing all of the information to the local workstation.
	
	Visual FoxPro does not implement server-side cursors. If you need this
	functionality, technologies such as Remote Data Objects (RDO) that ship with
	Visual Basic might give you the desired behavior.
	
	MORE INFORMATION
	================
	
	ODBC exposes several different cursor models that consist of different ways to
	manage the results of a query against a DataSource.
	
	Visual FoxPro does not use any of the extended cursor models supported by ODBC,
	instead it uses one model where the local engine to manage results from the
	server. By doing this Visual FoxPro provides powerful features, including table
	buffering, creating indexes on results, and generally allowing the data from
	remote servers to behave similar to local data.
	
	Another popular model is the server-side cursor model. Server-side cursors,
	instead of returning all of the results of a query to the client workstation,
	keep the data on the server and allow the user to look at only those records
	they are interested in.
	
	Both models have benefits; however, Visual FoxPro implements only the first. To
	use server-side cursors from Visual FoxPro, you need to use an external tool for
	the client/server access. An example of one of these tools is the RDO component
	of Visual Basic 4.0.
	
	RDO is an OLE Automation Server that provides client/server data access. You can
	call RDO from within Visual FoxPro just like any other automation server.
	
	RDO is a component of Microsoft Visual Basic, and certain licensing restrictions
	regarding distribution of applications may apply. See your Visual Basic license
	agreement for details.
	
	REFERENCES
	==========
	
	See the Visual FoxPro documentation for more information about "automation
	servers."
	
	Additional query words: RDO Visual Basic
	
	======================================================================
	Keywords          : kbinterop kbODBC kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600
	Version           : :2.5,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
