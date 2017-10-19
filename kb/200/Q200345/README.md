---
layout: page
title: "Q200345: SMS 2.0 Searches the Entire Drive for Files Collected"
permalink: /kb/200/Q200345/
---

## Q200345: SMS 2.0 Searches the Entire Drive for Files Collected

	Article: Q200345
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When specifying multiple files in the File Collection tab in Software Inventory,
	System Management Server 2.0 searches the entire drive for these files and they
	DO NOT have to be in the same directory, as with Systems Management Server 1.x.
	
	MORE INFORMATION
	================
	
	In Systems Management Server version 1.x, if you create an Inventory Package to
	search for multiple files that exist in the same directory on the client,
	Systems Management Server 1.x only reports the first file that is found. This
	occurs regardless of the search logic and makes no difference whether you use
	the "AND" operator or the "OR" operator. In addition, Software Inventory does
	not continue to search the directory for other files that have been defined. If
	multiple files are present, only the first file defined in the Software
	Inventory package will be displayed in the client's Packages icon in Personal
	Computer Properties.
	
	In Systems Management Server version 2.0, if you click the New icon in the File
	Collection tab from the Software Inventory Client Agent properties screen, you
	can type the exact file names (such as Autoexec.bat) or you can use wildcards
	and collect all files of a certain extension (such as *.ini). Systems Management
	Server 2.0 searches the entire hard disk for these files and collects all
	instances of them.
	
	Systems Management Server generates a resource ID for the collected files by the
	order in which they were added to the database; this is purely sequential. The
	collected files are then placed in a directory on the site server that matches
	the following resource ID:
	
	  SMS\Inboxes\Sinv.box\File.col\\<ResourceID>
	
	Additional query words: prodsms swinv32
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
