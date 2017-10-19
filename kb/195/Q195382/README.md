---
layout: page
title: "Q195382: BUG: MsDev Caused an Invalid Page Fault in Devedit.pkg"
permalink: /kb/195/Q195382/
---

## Q195382: BUG: MsDev Caused an Invalid Page Fault in Devedit.pkg

	Article: Q195382
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbsetup kbVC600 kbVC600bug kbDSupport kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0, used with:
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Visual C++ 6.0, you get the following error message soon after
	the splash screen is displayed:
	
	  MsDev caused an invalid page fault C0000005 in devedit.pkg at 0171:50809e6d
	
	CAUSE
	=====
	
	This error is caused by a corrupted PKG file that is being accessed by
	Devedit.pkg. The Devedit.pkg module is using the corrupted PKG file to look up
	information about how to display text.
	
	This problem happens only under very rare circumstances; however, on some
	systems, one of these PKG files gets corrupted during installation.
	
	
	RESOLUTION
	==========
	
	Manually copy the PKG files from directory \Common\Msdev98\Bin\Ide on CD-1, to
	the ...\Common\Msdev98\Bin\Ide on your hard drive--replacing the ones that the
	setup program put onto your system. Copy these PKG files (depending on the
	product edition, you may not have all of the following files):
	
	  devodl.pkg
	  devdtg.pkg
	  devhtmx.pkg
	  devent.pkg
	  devcpp.pkg
	  devaut1.pkg
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbVC600 kbVC600bug kbDSupport kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
