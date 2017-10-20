---
layout: page
title: "Q149054: INFO: Choosing an rdoResultset Cursortype"
permalink: /kb/149/Q149054/
---

## Q149054: INFO: Choosing an rdoResultset Cursortype

{% raw %}

	Article: Q149054
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the types of rdoResultset cursors in RDO and when to use
	them.
	
	NOTE: The following text comes directly from the Visual Basic online Help.
	Because there are no hot-links to the online Help, you must search for
	information explicitly. Go into Help, click on the Search button, click on the
	Find tab, type in Cursors, and then select Choosing a cursor type.
	
	MORE INFORMATION
	================
	
	Choosing the right cursor for an application impacts performance and resource
	management. Your choice of cursor depends on how many rows you intend to access,
	how you need to navigate through the result set, how membership is determined,
	and how you intend to update the data.
	
	In many cases, use of the forward-only type result set is the best choice as it
	exposes only one row of the result set at a time and is far easier for RDO to
	create. However, it is not a cursor and does not permit access to more than one
	row at a time.
	
	1. Server-Side Cursor Support
	
	  An important aspect of keyset or dynamic cursors is where the keyset is
	  created. If the server supports server-side cursors, as with Microsoft SQL
	  Server 6.0 and above, you can specify that the cursor keyset is created and
	  maintained on the server.
	
	2. Selecting a Cursor Type
	
	  To select a specific type of rdoResultset cursor, set the RemoteData control's
	  ResultsetType property or the type argument of the OpenResultset method to:
	
	  Resultset type  Constant
	  -------------------------------------------
	  Forward-only    (Default) rdOpenForwardOnly
	  Static          rdOpenStatic
	  Keyset          rdOpenKeyset
	  Dynamic         rdOpenDynamic
	
	3. Available Cursor Types
	
	  The following table summarizes the four types of rdoResultset cursors:
	
	  Attribute          Forward-only  Static     Keyset    Dynamic
	  -------------------------------------------------------------
	  Updatable          Yes (SS)      No (SS)    Yes       Yes
	                     No (CL)       Yes (CL)
	  Membership         Fixed         Fixed      Fixed     Dynamic
	  Visibility         One row       Cursor     Cursor    Cursor
	  Move current row   Forward       Anywhere   Anywhere  Anywhere
	  Result of a join   Yes           Yes        Yes       Yes
	
	  NOTE: CL indicates that support for this cursor is provided by the ODBC cursor
	  library. SS indicates support by Microsoft SQL Server.
	
	  Choose the type of rdoResultset object to create by using the type argument of
	  the OpenResultset method or the ResultsetType property of the RemoteData
	  control. If a type is not specified, the RemoteData control creates a
	  keyset-type rdoResultset. When using RDO to create rdoResultset objects, the
	  default type is forward-only.
	
	4. Supported Cursor Types
	
	  Not all data sources support every type of cursor. The following table
	  summarizes which type of cursor is supported on several typical data sources
	  and on the RemoteData control:
	
	  Data source          Forward-only   Static   Keyset  Dynamic
	  ------------------  ------------   -------  ------  -------
	  SQL Server 4.2      Yes            Yes/CL    No       No
	  SQL Server 6.0
	  and above           Yes            Yes       Yes      Yes
	  Oracle 7.1          Yes            Yes/CL    No       No
	  RemoteData control  No             es        Yes/DD   No
	
	  NOTE: CL indicates that support for this cursor is provided by the ODBC cursor
	  library. DD indicates support is provided subject to support by the ODBC
	  driver.
	
	5. Cursors and the RemoteData Control
	
	  Creating an rdoResultset and setting the Resultset property with this new
	  object sets the ResultsetType property of the RemoteData control to the Type
	  property of the new rdoResultset.
	
	NOTE: When using forward-only, read-only result sets, the rdoConnection is held
	open until the last row of data is accessed. While this can provide performance
	improvements over other cursors, it can also tie up connection resources.
	
	REFERENCES
	==========
	
	Visual Basic online Help
	Building Client/Server Applications with Visual Basic
	
	Hitchhiker's Guide to Visual Basic and SQL Server, Microsoft Press.
	ISBN: 1-55615-906-4.
	
	Additional query words: kbVBp400 kbVBp500 kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0
	Issue type        : kbhowto kbinfo
	
	=============================================================================
	

{% endraw %}
