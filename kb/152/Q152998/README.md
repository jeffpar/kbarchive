---
layout: page
title: "Q152998: How to Use gdsset to Change Host Pointer"
permalink: /kb/152/Q152998/
---

## Q152998: How to Use gdsset to Change Host Pointer

	Article: Q152998
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you create tag files for your Gopher server, you may have to change the
	host name that the tag returns to the client. This article explains the correct
	gdsset syntax for creating tag files with different host names.
	
	For additional information on tag files and how to create a generic tag file,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q142559 Creating Tag Files for IIS Gopher Service
	
	MORE INFORMATION
	================
	
	You are connecting to your Gopher server, gopher.server.edu. If you created tag
	files for your server contents without the -h parameter, the tag files were
	created with just your host name; therefore, any attempt to access a tagged item
	will return host name instead of the fully qualified domain name.
	
	In those cases, to correct this problem, the tag file must be changed to return
	"gopher.server.edu". The syntax for gdsset.exe is shown below.
	
	To create a tag file pointing to a different host name
	------------------------------------------------------
	
	For a file:
	"gdsset -l -s \filename -g0 -f "friendly name" -hgopher.server.edu filename".
	Your host name for the tag should then show gopher.server.edu.
	
	For a directory: "gdsset -l -s \directory -g1 -f "friendly name"
	-hgopher.server.edu \directory". Your host name for the tag should then show
	gopher.server.edu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	Issue type        : kbhowto
	
	=============================================================================
	
