---
layout: page
title: "Q133017: PRB: Branching Files in SourceSafe Causes Lost Disk Space"
permalink: /kb/133/Q133017/
---

## Q133017: PRB: Branching Files in SourceSafe Causes Lost Disk Space

{% raw %}

	Article: Q133017
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft SourceSafe for Windows, versions 3.04, 3.1 
	- Microsoft SourceSafe for Windows NT, versions 3.04, 3.1 
	- Microsoft SourceSafe for MS-DOS, versions 3.04, 3.1 
	- Microsoft SourceSafe for Macintosh, versions 3.04, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Destroying projects and/or files from SourceSafe does not free disk space in
	SS\DATA subdirectories.
	
	CAUSE
	=====
	
	Once a file is branched in SourceSafe, there are four associated files that are
	not deleted from the disk at this point. The reason this occurs is so the
	reference between the branch and original file is maintained. There is no way to
	undo this behavior after the branching has occurred.
	
	RESOLUTION
	==========
	
	Use the branching sparingly.
	
	One common practice is to use share and branch to perform a file copy. A better
	alternative is to share the file or project and destroy the old copy. This
	preserves the history and allow disk space to be recovered at a later time.
	
	When the history is not needed, get the desired version to a disk location and
	add the files to the desired project. This gets a clean copy and preserves the
	ability to recover the disk space at a later time.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 kbSSafe310 kbSSafe304 
	Technology        : kbHWMAC kbOSMAC kbSSafeSearch kbAudDeveloper kbZNotKeyword2 kbZNotKeyword3 kbSSafe304 kbSSafe304DOS kbSSafe310 kbSSafe310DOS kbSSafe304Mac kbSSafe310Mac kbSSafe600 kbSSafe400 kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch kbSSafe304NT kbSSafe310NT
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
