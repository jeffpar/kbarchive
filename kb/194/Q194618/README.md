---
layout: page
title: "Q194618: INFO: Fast Get Only Works When Compare = Checksum"
permalink: /kb/194/Q194618/
---

## Q194618: INFO: Fast Get Only Works When Compare = Checksum

{% raw %}

	Article: Q194618
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe600 kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual SourceSafe version 6.0 database format has a new Fast Get feature,
	but this feature only works when files are compared by Checksum.
	
	MORE INFORMATION
	================
	
	In the Visual SourceSafe Explorer, you can set "Compare files by" (go to the
	Tools menu, click Options, and click the Local Files tab) to Checksum, Contents,
	or Time. If "Compare files By" is set to Checksum, the fast Get uses a mechanism
	that speeds up comparing files by checksum. It stores the checksum for every
	file in a directory in the VssVer.scc file in that directory and compares it
	with the checksum information stored in the Crcs.dat file in the Visual
	SourceSafe data directory. If "Compare files By" is set to Contents or Time, the
	fast Get does not work.
	
	If you are not using the new database format, comparing by Checksum might not be
	the fastest method for comparing files. For more information on comparing files
	with the old 5.0 database format, see the following articles in the Knowledge
	Base:
	
	  Q131773 INFO: Setting Compare to Time Increases Speed of GET Command
	
	  Q131772 INFO: Setting Compare to Checksum Speeds GET Command
	
	  Q123473 HOWTO: Increase Performance in SourceSafe
	
	REFERENCES
	==========
	
	Visual SourceSafe Help: Local Files Options Tab; Compare Initialization Variable
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe600 kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
