---
layout: page
title: "Q164941: INFO: Command Line Equivalent of &quot;Build Tree&quot; Option"
permalink: /kb/164/Q164941/
---

## Q164941: INFO: Command Line Equivalent of &quot;Build Tree&quot; Option

{% raw %}

	Article: Q164941
	Product(s): Microsoft SourceSafe
	Version(s): 
	Operating System(s): 
	Keyword(s): kbSSafe400 kbSSafe500 kbSSafe600
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0 
	- Microsoft Visual SourceSafe, 16-bit, for Windows, version 4.0a 
	- Microsoft Visual SourceSafe, 32-bit, for Windows 4.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a GET or CHECKOUT of a Project from the Visual SourceSafe
	Explorer, and check the Recursive checkbox, there is an option for Build tree.
	The command line equivalent is:
	
	     SS GET *.* -r -gf-
	
	- or -
	
	     SS CHECKOUT *.* -r -gf-
	
	assuming that the current directory is the directory in which you want to build
	the directory tree, and that you have set the current project to the project to
	be got or checked out.
	
	MORE INFORMATION
	================
	
	*.* tells SourceSafe to operate on all the files in the project.
	
	-r specifies that this is a recursive operation. This is the command line
	equivalent of checking the Recursive checkbox.
	
	-gf- turns off the Force_Dir initialization variable for this command. When
	Force_Dir = No, files in subprojects are copied to subdirectories of the current
	directory, which are created programmatically, rather than to their working
	directories.
	
	NOTE: If the initialization variable Force_Prj is set to "Yes" (that is, if
	"Assume project based on working folder" is checked under the Command line
	options menu, under the Options menu, under the Tools menu) and if the current
	subdirectory is the working folder for a different SourceSafe project, you may
	receive the error "No matching files found" or you may get or check out files
	from another project you were not expecting.
	
	Additional query words: folder
	
	======================================================================
	Keywords          : kbSSafe400 kbSSafe500 kbSSafe600 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe400 kbSSafe400a kbSSafe500 kbSSafe16bitSearch kbSSafe32bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
