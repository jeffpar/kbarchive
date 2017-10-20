---
layout: page
title: "Q101014: PRB: Error Decompressing &lt;Filename&gt;/File Copy Operation Failed"
permalink: /kb/101/Q101014/
---

## Q101014: PRB: Error Decompressing &lt;Filename&gt;/File Copy Operation Failed

{% raw %}

	Article: Q101014
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnokeyword
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running a Setup program written by the SetupWizard generates the following error
	messages, even though the Setup program reports completion:
	
	  File copy operation failed - incorrect number of bytes written to disk -
	  source file or destination disk may be corrupted - use ChkDsk
	
	  Error decompressing <filename>
	
	CAUSE
	=====
	
	The file reported in the error message has been compressed incorrectly, split
	incorrectly, or the compressing or splitting process was interrupted. These
	errors can be caused by a low-memory (below 640K) situation, too little free
	disk space, and/or interruption during compression.
	
	This problem may also be caused by using the default DKSETUP.INI SplitSize
	setting.
	
	RESOLUTION
	==========
	
	
	In the directory where the disk images were created, there should be a Compress
	subdirectory. Delete all the files in this directory, or free up additional disk
	space, and run the SetupWizard again.
	
	If freeing up additional disk space does nOt correct the problem, increase the
	SplitSize value in the DKSETUP.INI file from the default of 363520 to 524288.
	
	Or, If you are run under Windows NT, run FoxPro for Windows in its own memory
	address space and try running setup wizard again.
	
	MORE INFORMATION
	================
	
	The COMPRESS subdirectory contains all the files that were compressed, split, or
	both during the previous run of the SetupWizard. If a file that is distributed
	needs to be compressed or split and it has not changed from the last time the
	SetupWizard was run, the file is not compressed or split. Instead, the images
	created from the previous run of the SetupWizard are used.
	
	
	Additional query words: expand uncompress setup wizard DK
	
	======================================================================
	Keywords          : kberrmsg kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : :3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
