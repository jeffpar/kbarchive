---
layout: page
title: "Q199501: PRB: LNK1555 Errors, and Near Versus Far Data"
permalink: /kb/199/Q199501/
---

## Q199501: PRB: LNK1555 Errors, and Near Versus Far Data

	Article: Q199501
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:2.0,4.0,4.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbVC400 kbDSupport
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 2.0, 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When linking a 68KB application, a LNK1555 error may occur, as in the
	following:
	
	  obj\M68K\NOSPSANE\strgtold.obj: error LNK1555: Fixup overflow. Data symbol
	  __ctype is > 32k from a5 and was referenced by a 16-bit fixup.
	
	CAUSE
	=====
	
	This problem is due to exceeding the 32KB limit for near data.
	
	Global data for Macintosh 68KB applications is usually referenced using a 16-bit
	offset of the A5 register. This puts a limit of 32KB on the total size of global
	data supported by this mechanism, known as the Near Data Model. The remaining
	32KB accessible from A5 contains the 68KB Macintosh Jump Table, used to dispatch
	inter-segment function calls.
	
	The PowerMac run-time model does not share this limitation.
	
	RESOLUTION
	==========
	
	It is possible to exceed the 32KB global data limit by using the Far Data Model.
	However, the Near Data Model is slightly more efficient. If efficiency is an
	issue, you may want to use the data_seg or __declspec pragma to specify whether
	near or far data is used for specific variables.
	
	When you run out of near data, try one the following:
	
	- Use the Global Threshold (/Gt) switch to force near data to the far heap. The
	  linker option /GT1 will generate the least amount of near data.
	
	- Use the data_seg or __declspec pragma to move specific variables to the far
	  model.
	
	- Use Llibcs.lib and Lsanes.lib instead of Libcs.lib and Sanes.lib. You may
	  have to turn on the Link option Ignore all default libraries in order to
	  prevent the small model Libcs.lib from being linked in.
	
	- When using third-party libraries, check for far model alternative libraries
	  or request far model libraries from the vendor.
	
	- Use the /VERBOSE switch to see linker messages in detail.
	
	- Re-create workspace/project files.
	
	STATUS
	======
	
	This is not a bug. This is the intended behavior of the Macintosh 68KB run-time
	architecture.
	
	MORE INFORMATION
	================
	
	The optimal Global Threshold is one that allows all, or up to 32KB, of global
	data to be near.
	
	After encountering the LNK1555 error, set the Global Threshold to 1 and rebuild
	the application. If the build is successful, try increasing the threshold until
	it fails again. The last successful threshold will provide the optimal amount of
	near data.
	
	Further optimization is possible by using the pragmas previously mentioned to
	move frequently accessed variables into near data.
	
	REFERENCES
	==========
	
	Visual C++ Books: Macintosh Users Guide: Specifying the 680x0 Memory Model
	
	Additional query words: LNK1555 Errors near far data model mpw2lib data_seg __declspec 68K Fixup overflow
	
	======================================================================
	Keywords          : kbHWMAC kbVC400 kbDSupport 
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev200Mac kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:2.0,4.0,4.0b
	Issue type        : kbprb
	
	=============================================================================
	
