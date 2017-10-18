---
layout: page
title: "Q124529: HOWTO: Access SourceSafe Code From a Central Directory"
permalink: kb/124/Q124529/
---

## Q124529: HOWTO: Access SourceSafe Code From a Central Directory

	Article: Q124529
	Product(s): Microsoft SourceSafe
	Version(s): 3.04
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	-------------------------------------------------------------------------------
	
	SUMMARY
	-------
	
	The Shadow setting allows you to set up a central directory location where
	users can compile access code without entering SourceSafe.
	
	NOTE: Any modifications made to the files in this directory will not be
	reflected in the SourceSafe database.
	
	To set a shadow directory for the project $/test, in the SRCSAFE.INI or
	SS.INI:
	
	          [$/test]
	          Shadow = f:\test
	
	If the project header [$/test] already exists, do not create a new one,
	just add the Shadow setting underneath the other settings. For example:
	
	          [$/test]
	          Dir = c:\test
	          Shadow = f:\test
	
	When files are updated to the $/test project, modifications will be
	reflected in f:\test as well.
	
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131023 How to Set Up a Shadow Directory
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Version           : 3.04
	Issue type        : kbhowto
	
	=============================================================================
	
