---
layout: page
title: "Q156298: FIX: Error on Disconnecting from ODBC Desktop Drivers"
permalink: kb/156/Q156298/
---

## Q156298: FIX: Error on Disconnecting from ODBC Desktop Drivers

	Article: Q156298
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Desktop Driver version 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you disconnect from an ODBC application that uses Access driver version
	3.40 or other ODBC desktop drivers, you may receive the following error
	message:
	
	  Message Box Title: <appname.exe>
	  The instruction at <addr1> referenced a memory at <addr2>.
	  The memory could not be written.
	
	WORKAROUND
	==========
	
	This problem has been fixed in Msjt3032.dll version 3.00.3213. For information
	on how to obtain this file, see the following article in the Microsoft Knowledge
	Base:
	
	  Q151186 INF: Updated Jet DLLs Available on MSL
	
	
	After you download this file, you can copy Msjt3032.dll to your
	<%winroot%>\system32 directory.
	
	Additional query words: 3.40 JET MFC exception
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBCDDKSearch kbODBCDDK340
	Version           : :3.4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
