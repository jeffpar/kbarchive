---
layout: page
title: "Q102920: FIX: Linker May Cause L5000 with CodeView Information"
permalink: /kb/102/Q102920/
---

## Q102920: FIX: Linker May Cause L5000 with CodeView Information

{% raw %}

	Article: Q102920
	Product(s): Microsoft Programming Utilities
	Version(s): 5.5,5.6
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft LINK for MS-DOS, versions 5.5, 5.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Linking a large number of object modules and libraries with the /CO option for
	CodeView information may generate the following error message:
	
	  LINK : fatal error L5000:
	
	CAUSE
	=====
	
	This problem is typically caused when the linker, LINK.EXE, gets to the CodeView
	information packing stage while generating a large .EXE file.
	
	RESOLUTION
	==========
	
	Use one or more of the following to work around this problem:
	
	- Link without the /CO option if the application doesn't need to be debugged.
	
	- Link with the /CO:NOCVPACK option to create an .EXE file with unpacked
	  CodeView information, and then run CVPACK.EXE separately on the .EXE. The
	  CVPACK.EXE utility in the \MSVC\BIN directory by default. For more
	  information about CVPACK, select the "Tech Notes" icon in your Visual C++
	  Program Manager group. You'll see a help button that reads "Using CVPACK."
	
	- Reduce the amount of CodeView information for the application by compiling
	  only the essential modules with the /Zi option; compile the rest with the /Zd
	  option.
	
	- Avoid linking OLDNAMES.LIB last.
	
	- If using the /LI linker option, remove it.
	
	- Assign the TMP environment variable a valid hard drive and directory with a
	  large amount of disk space (preferably not a RAM drive).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the versions of the linker given
	at the beginning of this article. Some causes of this problem have been fixed in
	Visual C++ 1.52, but in some instances, you may still need to use /CO:NOCVPACK
	and then use cvpack on the exe.
	
	Additional query words: 5.50 5.60 5.60.220 5.60.339 /CO:N visualc no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbZNotKeyword3 kbLINKSearch kbLINK550DOS kbLINK560DOS
	Version           : :5.5,5.6
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
