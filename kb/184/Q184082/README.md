---
layout: page
title: "Q184082: How to Use the Assoc Command to Change File Associations"
permalink: kb/184/Q184082/
---

## Q184082: How to Use the Assoc Command to Change File Associations

	Article: Q184082
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to use the Assoc command to display or change file
	extensions and their associations.
	
	MORE INFORMATION
	================
	
	The Assoc command can be run only from a command prompt.
	
	NOTE: When you use the Assoc command, the changes you make are immediately
	written to the Software registry file.
	
	- To display a list of file extensions and their associations, type "assoc"
	  (without the quotation marks) at a command prompt, and then press ENTER.
	
	- To display the association for a specific file extension, type "assoc
	  .<xxx>" (without the quotation marks) at a command prompt, and then
	  press ENTER, where <xxx> is the file extension whose association you
	  want to view.
	
	- To change the association for a specific file extension, type "assoc
	  .<xxx>=<file type>" (without the quotation marks) at a command
	  prompt, and then press ENTER, where <xxx> is the file extension whose
	  association you want to change, and <file type> is the program, dynamic
	  data exchange (DDE), or OLE object you want to associate with the file
	  extension.
	
	- To delete the association for a specific file extension, type "assoc
	  .<xxx>= " (without the quotation marks) at a command prompt, and then
	  press ENTER, where <xxx> is the file extension you want to delete.
	
	  NOTE: You must type the trailing space after the equal sign (=). If you do
	  not, the association is not deleted and you receive the following error
	  message:
	
	  File association not found for extension .<xxx>
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WINNT:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
