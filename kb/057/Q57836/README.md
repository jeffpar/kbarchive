---
layout: page
title: "Q57836: Setting up OS/2 LAN Manager to Use Replicator Service"
permalink: kb/057/Q57836/
---

## Q57836: Setting up OS/2 LAN Manager to Use Replicator Service

	Article: Q57836
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The Replicator service is a new feature included in OS/2 LAN Manager versions
	2.0 and later. The documentation for the Replicator service is fairly complete,
	and documents the two points discussed below; however, these two points can be
	somewhat confusing.
	
	In the example listed below, assume the export server is named EXPORT1, and the
	import server is named IMPORT1. When starting the Replicator, you should do the
	following:
	
	1. Make sure the IMPORT1 account on EXPORT1 (the export server) has "RA"
	  authority on the entire C:\LANMAN\REPL\EXPORT tree.
	
	  The easiest way to do this is with the NET ADMIN command. First, authorize
	  IMPORT1 (the import server) to just C:\LANMAN\REPL\EXPORT, then after
	  clicking Permit you will be returned to a menu where you just click Permit
	  tree.
	
	2. On IMPORT1, the import server, do the following
	
	     md c:\lanman\repl\import\subdir1
	     md c:\lanman\repl\import\subdir2
	
	  so that the subdirectories IMPORT1 is supposed to import (in this example,
	  subdir1, and subdir2) will already exist. The Replicator will not create
	  these subdirectories for you, so you must do this yourself. The reason the
	  Replicator does not create these subdirectories for you is because this is
	  one way to control which, of the potentially many subdirectories an export
	  server might export, are actually imported to by a given import server.
	
	Additional query words: 2.00 2.10 2.10a 2.20 replication ripl
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
