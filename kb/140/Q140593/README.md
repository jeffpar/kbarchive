---
layout: page
title: "Q140593: PRB: Error &quot;File Names.dat may be corrupt&quot; Appears"
permalink: /kb/140/Q140593/
---

## Q140593: PRB: Error &quot;File Names.dat may be corrupt&quot; Appears

{% raw %}

	Article: Q140593
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbSSafe400 kbSSafe500 kbSSafe600 _IK
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The error "File Names.dat maybe corrupt" occurs when starting Visual SourceSafe,
	when trying to gain access to a file or project, or when running ANALYZE on the
	Database.
	
	CAUSE
	=====
	
	The Names.dat file in the database contains information on the 8.3 names that
	correspond to files that have long file names in Visual SourceSafe. When this
	error occurs, Visual SourceSafe cannot find the correct information in the
	Names.dat file for the file or project that it is trying to retrieve information
	on.
	
	RESOLUTION
	==========
	
	If you know the name of the file or project where the error occurs, rename the
	file to an 8.3 name, and then name it back from the Visual SourceSafe Explorer
	or Command Line.
	
	If the Visual SourceSafe database is on a Novell server, do both of the
	following:
	
	1. Make the names.dat sharable (use Novell's FLAG command, which is similar to
	  DOS's ATTRIB command).
	
	2. Change the Client on the Win95 computers to use the NetWare Client 32 client
	  rather than the Microsoft Client for NetWare. The NetWare Client 32 client is
	  a free download from Novell. Please see their site at
	  http://support.novell.com for more information on that client.
	
	The new Analyze.exe rebuilds the Names.dat file. Run Analyze with the -F switch
	to make changes to the database. Make sure no one attempts to gain access to
	SourceSafe's database while ANALYZE -F is running.
	
	NOTE: When you are modifying the SourceSafe database, it is always a good idea to
	back up the Data directory and all subdirectories first should you need to
	recover.
	
	Additionally, if the Visual SourceSafe database is on a Novell server, the error
	message will be returned if the Names.dat is not marked as sharable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem with the products listed at the
	beginning of this article
	
	REFERENCES
	==========
	
	For additional information on Analyze, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q190881 SAMPLE: Analyze6.exe Utility for Visual SourceSafe
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbSSafe400 kbSSafe500 kbSSafe600 _IK 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe500
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
