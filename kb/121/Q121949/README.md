---
layout: page
title: "Q121949: INFO: MFC OLE Classes Do Not Support &quot;Embed in self&quot;"
permalink: /kb/121/Q121949/
---

## Q121949: INFO: MFC OLE Classes Do Not Support &quot;Embed in self&quot;

	Article: Q121949
	Product(s): Microsoft C Compiler
	Version(s): 1.51,2.0,4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbAutomation kbCOMt kbLocalSvr kbMFC kbVC150 kbVC151 kbVC200 kbVC400 kb
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, version 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 4.0, 4.1, 5.0, 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The MFC OLE classes in the versions listed above do not include the ability for
	a container/server to embed items of its own type within an instance of itself.
	
	Users attempting to embed an OLE item from the container/server into itself will
	receive the "Failed to create object. Check system registry" dialog box. Further
	debugging will show that QueryInterface failed to return the IViewObject
	interface for the embedded item.
	
	MORE INFORMATION
	================
	
	While OLE makes "embed in self" possible, it requires the use of the API call
	OleCreateEmbeddingHelper to connect the OLE2 or OLE32 DLL as the default
	in-process handler. The MFC OLE classes do not make use of this, and the
	architecture of an MFC application would make it extremely difficult to
	integrate this support.
	
	MFC applications rely on handle maps and global tracking of such things as the
	toolbar and status bar of the application. An OLE item from this same
	application, if activated for visual editing, would attempt to negotiate space
	for a second toolbar and status bar within the same frame window. The MFC
	framework would also attempt to add these objects to its handle map, even though
	they are already there. Altering this would require substantial unsupported
	changes to the MFC source code. See article Q120682 for information on how to
	exclude the current server object from its COleInsertDialog
	
	Additional query words: OLE embed kbvc150 kbvc151 kbvc200 kbvc400 kbvc410 kbvc500 kbvc600 kbvc600
	
	======================================================================
	Keywords          : kbole kbActiveX kbAutomation kbCOMt kbLocalSvr kbMFC kbVC150 kbVC151 kbVC200 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :1.51,2.0,4.0,4.1,5.0,6.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
