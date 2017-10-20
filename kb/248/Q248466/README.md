---
layout: page
title: "Q248466: INFO: File Checked Out in Working Directory May Not by Replaced"
permalink: /kb/248/Q248466/
---

## Q248466: INFO: File Checked Out in Working Directory May Not by Replaced

{% raw %}

	Article: Q248466
	Product(s): Microsoft SourceSafe
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): _IK kbSSExplorer _IK kbGrpDSSSafe
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A file that is currently checked out from SourceSafe may not be replaced when
	users perform a Get on the file, even if they choose the Replace option that is
	presented by SourceSafe.
	
	MORE INFORMATION
	================
	
	When a file is checked out and edited from SourceSafe and users attempt to
	perform a Get on the file, SourceSafe detects that the file is already checked
	out.
	
	SourceSafe then asks the users whether they want to replace the copy of the file
	in their working directory with the version of the file being retrieved from
	SourceSafe.
	
	If the users choose the Replace button, the expected behavior is for SourceSafe
	to replace the copy of the file in the their working directory with the copy of
	the file that is retrieved from SourceSafe. However, occasionally this does not
	happen.
	
	When users verify that they want to replace one version of the file with another,
	SourceSafe compares the timestamp information for the two versions of the file.
	If the timestamps differ by less than one second, the working directory copy is
	not replaced.
	
	This is a timing issue with SourceSafe. If there is a time period greater than
	one second, the above procedure works as expected.
	
	This issue is by design.
	
	Additional query words: time stamp stamps
	
	======================================================================
	Keywords          : _IK kbSSExplorer _IK kbGrpDSSSafe 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600
	Version           : :6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
