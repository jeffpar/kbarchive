---
layout: page
title: "Q165320: Shared Folder Gateway Hangs Getting Directory Listing"
permalink: /kb/165/Q165320/
---

## Q165320: Shared Folder Gateway Hangs Getting Directory Listing

	Article: Q165320
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you attempt to get a directory list from a shared folder, the computer may
	stop responding (hang) after you issue the "dir" command.
	
	CAUSE
	=====
	
	If GetDirectoryInformation is called with a file index larger than the actual
	number of files in the directory, the FindNthFile() function goes into an
	infinite loop.
	
	RESOLUTION
	==========
	
	The FindNthFile() function has been modified to prevent the infinite loop.
	
	The following modules have been updated:
	
	  <Snaroot>\System\Sfgw.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
