---
layout: page
title: "Q154384: INF: Jet 3.0 Dynamic Memory Usage and Access ODBC Driver"
permalink: kb/154/Q154384/
---

## Q154384: INF: Jet 3.0 Dynamic Memory Usage and Access ODBC Driver

	Article: Q154384
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.0,3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 3.0, 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Many enhancements have been made to Microsoft Jet 3.0 over the Jet 2.x versions
	to improve performance. Dynamic Memory Usage is one of them and it is a
	configurable performance setting.
	
	Microsoft Jet 2.x pre-allocated a default of 512 KB for its buffer size with an
	upper limit (MaxBufferSize) of 4 MB RAM. The behavior of MaxBufferSize has been
	changed in Jet 3.0, which allocates memory on an "as- needed" basis up to an
	internally calculated high water mark. The idea is to efficiently use the memory
	in large RAM systems without the need to adjust Registry Settings.
	
	The high water mark (MaxBufferSize) for Jet 3.0 is calculated by the following
	formula:
	
	  ( (((Total Ram in MB - 12)/4 ) * 1024) + 512 ) KB
	
	For example, for a system with 32 MB RAM, Jet 3.0 uses a calculated MaxBufferSize
	of 5,632 KB. You can override this value by setting the MaxBufferSize value in
	the following HKEY_LOCAL_MACHINE subtree:
	
	  \SOFTWARE\Microsoft\Jet\3.0\Engines\Jet
	
	For Jet 3.5, the registry location for MaxBufferSize is:
	
	  \SOFTWARE\Microsoft\Jet\3.5\Engines\Jet 3.5
	
	In addition, Jet 3.5 settings may be modified at the ODBC data source level. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q168686 PRB: Performance Loss When Upgrading Jet ODBC Driver
	
	
	For MaxBufferSize (DWORD), enter a value in KB. You may have to add the keys, if
	you do not have them already in the registry.
	
	The minimum value that Microsoft Jet 3.0 can use by default is 512 KB.
	However,the minimum value the the user can set is 128 KB. Unlike Jet 2.x, Jet
	3.0 can exceed the MaxBufferSize. When this occurs, the engine starts up a
	background thread to start flushing pages to bring the buffer pool down to the
	designated MaxBufferSize.
	
	For more information on Jet 3.0, refer to the "Microsoft Jet Database Engine
	Programmer's Guide" published by Microsoft Press.
	
	Question:
	How does MaxBufferSize setting affect ODBC applications using the Access Driver?
	
	Answer:
	Microsoft Access ODBC Driver v3.x is based on Jet 3.0 Engine. If you do not set
	the MaxBufferSize in the Registry and try to insert records continuously into a
	table, you will notice a huge growth in the memory consumed by the application
	(process) using the driver. If your application, running on Windows NT, is
	inserting records without ever closing the database connection, the system may
	run out of virtual memory.
	
	The memory growth will eventually reach a peak value that is equal to the high
	water mark computed by Jet 3.0 and can be easily mistaken for a memory leak in
	the driver. However, it is important to note that it is not a memory leak as the
	memory growth stabilizes after reaching the peak value. This behavior is by
	design.
	
	If you don't want the driver/Jet to allocate dynamic memory based on the formula
	discussed above, it is recommended that you set the MaxBufferSize to a value
	like 512 KB. You can set it to a higher value to gain better performance.
	
	Additional query words: MFC Database Classes RDO Visual Basic C++
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbODBCSearch kbODBC350 kbODBC300
	Version           : WINDOWS:3.0,3.5
	
	=============================================================================
	
