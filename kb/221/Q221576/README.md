---
layout: page
title: "Q221576: INFO: How the Fast Get Operation Works in Visual SourceSafe"
permalink: /kb/221/Q221576/
---

## Q221576: INFO: How the Fast Get Operation Works in Visual SourceSafe

{% raw %}

	Article: Q221576
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbSSafe600 kbFAQ kbDSupport kbGrpDSSSafe kbSsafe600FAQ
	Last Modified: 18-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	One of the major enhancements made to Visual SourceSafe version 6.0 is its
	ability to retrieve files from its database more quickly than previous version
	of Visual SourceSafe could. This enhancement is called a Fast Get.
	
	This article describes the changes made to the Visual SourceSafe 6.0 database
	architecture that allows it to accomplish the Fast Get operation.
	
	MORE INFORMATION
	================
	
	Before users can take advantage of the Fast Get enhancement they need to be
	using the version 6.0 database format.
	
	The updated version 6.0 database format has the following elements, which allow
	it to perform faster Get operations:
	
	- Crcs.dat: This item can be found in the DATA directory. It contains CRC
	  information for items in the database.
	
	- Vssver.scc: These files can be found on the client computer. They contain the
	  names, CRCs, version numbers, and timestamps of the files on the local
	  computer.
	
	When a Get, Check Out, or other operation is performed that requires Visual
	SourceSafe to put a copy of a file into the working folder of the client
	computer, a Vssver.scc file is created and placed in the working folder as well
	(or updated if it already exists).
	
	When Visual SourceSafe performs one of the actions listed above, it compares the
	time stamp of the local file against the time stamp for the file in the
	Vssver.scc file. If they match, then it compares the CRC in the Vssver.scc file
	against the CRC in the Crcs.dat file.
	
	Previous versions of SourceSafe did not have the benefit of the Crcs.dat and
	Vssver.scc files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbFAQ kbDSupport kbGrpDSSSafe kbSsafe600FAQ 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : WINDOWS:6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
