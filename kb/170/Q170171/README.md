---
layout: page
title: "Q170171: PRB: DUMPBIN Displays Cumulative Data for Multiple Arguments"
permalink: /kb/170/Q170171/
---

## Q170171: PRB: DUMPBIN Displays Cumulative Data for Multiple Arguments

	Article: Q170171
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	DUMPBIN.EXE combines output data when more than one file is passed in as command
	line arguments. For example:
	
	  dumpbin myfile.exe myfile.dll
	
	will show summary data for both files, rather than for each individual file.
	
	RESOLUTION
	==========
	
	To prevent the combination of data, execute DUMPBIN on one file at a time.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	To illustrate this problem, we're using two of the Source Profiler binaries,
	PREP.EXE and PROFILE.DLL.
	
	The output from "dumpbin prep.exe" (without the quotes):
	
	Dump of file prep.exe
	
	  File Type: EXECUTABLE IMAGE
	
	     Summary
	
	       6000 .data
	       1000 .idata
	       1000 .rdata
	       4000 .rsrc
	       D000 .text
	
	Now, the output from "dumpbin profile.dll":
	
	Dump of file profile.dll
	
	  File Type: DLL
	
	     Summary
	
	       B000 .data
	       1000 .idata
	       2000 .rdata
	       2000 .reloc
	       3000 .rsrc
	      10000 .text
	
	And finally, the output from "dumpbin prep.exe profile.dll":
	
	Dump of file prep.exe
	
	  File Type: EXECUTABLE IMAGE
	  ?
	  Dump of file profile.dll
	
	  File Type: DLL
	
	     Summary
	
	      11000 .data
	       2000 .idata
	       3000 .rdata
	       2000 .reloc
	       7000 .rsrc
	      1D000 .text
	
	Notice that each of the segment categories listed in the DUMPBIN output for both
	files is the sum of each individual file.
	
	Additional query words: kbVC400bug kbDSupport
	
	======================================================================
	Keywords          : kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC400a kbVC420b kbVCNET kbVC500Search
	Version           : :2.0,2.1,2.2,4.0,4.0a,4.1,4.2,4.2b,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
