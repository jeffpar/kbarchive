---
layout: page
title: "Q130140: FIX: SourceSafe Might Not Get Long Filenames on Windows NT"
permalink: /kb/130/Q130140/
---

## Q130140: FIX: SourceSafe Might Not Get Long Filenames on Windows NT

{% raw %}

	Article: Q130140
	Product(s): Microsoft SourceSafe
	Version(s): 3.10
	Operating System(s): 
	Keyword(s): kbSSafe400fix kbSSafe300bugkbbuglist
	Last Modified: 22-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SourceSafe for Windows NT, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SourceSafe might not retrieve long filenames correctly on a computer running
	Windows NT even if the long filenames option is checked from the GUI and the
	LONG_FILENAMES variable is added to one of the .INI files.
	
	CAUSE
	=====
	
	SourceSafe for Windows NT supports long filenames only if the drive is a mounted
	NTFS drive. Even though Windows NT FAT drives support long filenames, SourceSafe
	for Windows NT writes the file as an 8.3 filename.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	This bug was corrected in Visual SourceSafe version 4.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400fix kbSSafe300bug kbbuglist
	Technology        : kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe310NT
	Version           : 3.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
