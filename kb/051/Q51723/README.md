---
layout: page
title: "Q51723: Error U1073 When &quot;.&quot; Used for Path in Inference Rule"
permalink: /kb/051/Q51723/
---

## Q51723: Error U1073 When &quot;.&quot; Used for Path in Inference Rule

	Article: Q51723
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3; OS/2:1.01,1.11,1.12,1.13,1.21
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft NMAKE Utility for MS-DOS, versions 1.01, 1.1, 1.11, 1.12, 1.13, 1.2, 1.3 
	- Microsoft NMAKE Utility for OS/2, versions 1.01, 1.11, 1.12, 1.13, 1.21 
	-------------------------------------------------------------------------------
	
	NMAKE does not accept a dot (.) to identify the current directory in
	inference rule paths. When specifying paths for each of the
	extensions, using the following form
	
	  {frompath}.fromextension{topath}.toextension
	
	and using "{.}" (without the quotation marks) to indicate the current
	directory for the "topath", causes the following error:
	
	  NMAKE : fatal error U1073: don't know how to make 'filename.ext'
	
	To work around this, the current directory for topath must be
	specified with "{}" (without the quotation marks). However, both notations are acceptable when
	specifying the "frompath".
	
	Later versions of NMAKE accept the dot in the topath.
	
	Additional query words: kbinf 1.20 1.30
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbVCsearch kbAudDeveloper kbNMAKESearch kbNMAKE101DOS kbNMAKE110DOS kbNMAKE111DOS kbNMAKE112DOS kbNMAKE113DOS kbNMAKE120DOS kbNMAKE130DOS kbNMAKE101OS2 kbNMAKE111OS2 kbNMAKE112OS2 kbNMAKE113OS2 kbNMAKE121OS2
	Version           : MS-DOS:1.01,1.1,1.11,1.12,1.13,1.2,1.3; OS/2:1.01,1.11,1.12,1.13,1.21
	
	=============================================================================
	
