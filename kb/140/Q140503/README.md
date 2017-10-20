---
layout: page
title: "Q140503: DOC: Port I/O Functions Not Included in DLL Version of CRT"
permalink: /kb/140/Q140503/
---

## Q140503: DOC: Port I/O Functions Not Included in DLL Version of CRT

{% raw %}

	Article: Q140503
	Product(s): Microsoft C Compiler
	Version(s): WINNT:4.0;
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbCRT kbVC kbGrpDSTools
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	The Run-Time Library Reference descriptions for the _inp, _inpw, _inpd, _outp,
	_outpw, and _outpd functions incorrectly indicate that they are included in
	Msvcrt.lib (or Msvcrtx0.dll). These functions were never intended for export
	from the DLL version of the C run-time library (CRT), and do not exist in that
	version of the CRT.
	
	A build of a project that uses the DLL version of the CRT may fail at link time
	with LNK2001 errors and one or more of the following functions reported as
	unresolved externals:
	
	  _inp, _inpw, _inpd, _outp, _outpw, _outpd
	
	To use these functions, you need to link with one of the static versions of the
	CRT -- Libc.lib or LIBCMT.lib.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbCRT kbVC kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper
	Version           : WINNT:4.0;
	
	=============================================================================
	

{% endraw %}
