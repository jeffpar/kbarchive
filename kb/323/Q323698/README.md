---
layout: page
title: "Q323698: PRB: &quot;There Is a Diff Chain Size Mismatch in File&quot; Error Message"
permalink: kb/323/Q323698/
---

## Q323698: PRB: &quot;There Is a Diff Chain Size Mismatch in File&quot; Error Message

	Article: Q323698
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe 6.0c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you run the Analyze tool against a Visual SourceSafe database, you may
	receive an error message that is similar to the following in the Analyze.log
	output:
	
	  There is a diff chain size mismatch in file "MyFile.txt" (FYIAAAAA) at
	  version 12(versions earlier than that version can no longer be retrieved from
	  the database).
	
	If you try to retrieve an earlier version of the file (that is, versions that are
	earlier than the version that is listed in the error message), you receive the
	following error message:
	
	  Unable to finish writing to the file
	
	CAUSE
	=====
	
	This problem occurs because of an error in a log entry record that causes the
	difference chain (or delta) to be unusable. The delta is calculated each time a
	file is checked in. The delta is used to properly regenerate older versions of
	the file.
	
	This error occurs when the file delta is not properly calculated or when the
	calculation cannot complete. The following conditions can cause this error to
	occur:
	
	- Loss of network connectivity.
	
	- Not enough disk space on the Visual SourceSafe server computer.
	
	- Client ends the check-in operation prematurely.
	
	RESOLUTION
	==========
	
	Use one of the following methods to resolve this problem:
	
	- Restore the file pairs from backup. For example, if you use the information
	  in the error message that is listed in the "Symptoms" section, you must
	  restore the FYIAAAAA file and its matching .a or .b file (FYIAAAAA.A or
	  FYIAAAAA.B).
	
	  NOTE: Any changes that are made to the file since the last backup are lost.
	
	- Archive and delete the history from the file at the version that is listed in
	  the error message. To do this, use the Ssarc.exe command-line utility. For
	  example, if you use the information in the error message that is listed in
	  the "Symptoms" section, run the following command at a command prompt:
	
	  ssarc -d -v12 archive1.ssa $/Apps/Source/MyFile.txt
	
	  After you archive the history from the file, you can safely delete the
	  Archive1.ssa file that is created.
	
	  NOTE: You cannot access any history that is earlier than the version that is
	  archived.
	
	STATUS
	======
	
	This behavior is by design.
	
	REFERENCES
	==========
	
	For additional information about errors that the Analyze tool reports, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q152807 INFO: Error Messages from Analyze Tool of Visual SourceSafe
	
	Additional query words: Diff Chain Analyze utility
	
	======================================================================
	Keywords          :  
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600C
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
