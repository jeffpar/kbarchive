---
layout: page
title: "Q168424: FIX: Localize Sample Can Not Be Built"
permalink: kb/168/Q168424/
---

## Q168424: FIX: Localize Sample Can Not Be Built

	Article: Q168424
	Product(s): Microsoft C Compiler
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kberrmsg kbVC500bug kbvfp600fixkbbuglist
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Building the Localize sample from a command prompt using NMAKE generates the
	following errors:
	
	  "Localize.mak(26) : fatal error U1050:
	
	  An invalid configuration is specified. Stop"
	
	  "NMAKE : fatal error U1077:
	
	  '"C:\Program Files\DevStudio\VC\BIN\NMAKE.EXE"' : return code '0x2'"
	
	Building the Localize sample from within Developer Studio causes the warning:
	
	  The following environment variables were not found $(OUTDIR)
	
	CAUSE
	=====
	
	The first error occurs because the default makefile is missing the
	configurations for the Locresde.mak and Locresfr.mak files.
	
	The second problem is caused by an undefined macro called $(OUTDIR) listed in the
	Additional resource include directories.
	
	RESOLUTION
	==========
	
	If you need to build from the command line, then invoke NMAKE separately on each
	of the project makefiles. For example:
	
	      nmake /f localize.mak
	      nmake /f locresde.mak
	      nmake /f locresfr.mak
	
	To eliminate the warning about $(OUTDIR), from the Project menu, click Settings,
	and then highlight Localize Project and click the Resources tab. Remove
	$(OUTDIR) from the Additional resource include directories.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbVC500bug kbvfp600fix kbbuglist
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC32bitSearch kbVC500Search
	Version           : winnt:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
