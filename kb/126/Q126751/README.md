---
layout: page
title: "Q126751: FIX: Scribble File Extension Conflicts with Screen Savers"
permalink: /kb/126/Q126751/
---

## Q126751: FIX: Scribble File Extension Conflicts with Screen Savers

	Article: Q126751
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0,2.1
	Operating System(s): 
	Keyword(s): kbole kbMFC kbVC kbVC150bug kbVC200bug kbVC400fix kbGrpDSMFCATL kbNoUpdatekbbuglist kbf
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating or activating embedded or linked OLE objects-based files saved with the
	MFC server sample "Scribble" fails in unexpected ways. Two common scenarios
	are:
	
	- When you attempt to insert an object into an OLE container using the Create
	  from File option, instead of creating a new Scribble Document object and
	  inplace activating it, the Packager is invoked and a package is created.
	  Nothing appears to happen when you try to activate the package.
	
	- While a Scribble Document is open in the Scribble application, you copy the
	  contents to the clipboard, and attempt to paste link from an OLE container.
	  The link is created and the container document's image of the link displays
	  correctly. But after the container document is saved and both the container
	  and Scribble applications are shut down, when you reopen the saved document,
	  the container is unable to update or activate the link to the Scribble
	  Document.
	
	CAUSE
	=====
	
	The .SCR file extension used by Scribble is associated with another file type,
	typically screen saver applications.
	
	RESOLUTION
	==========
	
	Change the file extension used by Scribble Documents to something that is not
	already associated with a file type, for example .SCB. After changing the file
	extension, you will need to run Scribble once in standalone mode so it can
	update the system registry.
	
	The file extension can be changed by editing the string resource IDR_SCRIBTYPE in
	the Scribble application. Initially the string value is:
	
	     \nScrib\nScrib\nScrib Files (*.scr)\n.SCR\nScribble.Document.1\n
	        Scrib Document\nSCRI\nscri Files
	
	To change the file extension to .SCB, edit the string value to look like this:
	
	     \nScrib\nScrib\nScrib Files (*.scb)\n.SCB\nScribble.Document.1\n
	        Scrib Document\nSCRI\nscri Files
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Microsoft Visual C++,
	32-bit edition, version 4.0.
	
	MORE INFORMATION
	================
	
	MFC Applications can update the file associations maintained in the system
	registry by calling CWinApp::RegisterShellFileTypes(). However,
	RegisterShellFileTypes() does not replace an existing association. Thus when an
	association already exists for the .SCR file extension, nothing is added to the
	registry to indicate that Scribble should be used to create or edit these
	files.
	
	This situation is most likely to occur on Windows 95, as .SCR files are
	associated with Screen Saver applications when Windows 95 is installed.
	
	Additional query words: 1.50 2.50 1.51 2.51 1.52 2.52 2.00 3.00 2.10 3.10
	
	======================================================================
	Keywords          : kbole kbMFC kbVC kbVC150bug kbVC200bug kbVC400fix kbGrpDSMFCATL kbNoUpdate kbbuglist kbfixlist
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:2.0,2.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
