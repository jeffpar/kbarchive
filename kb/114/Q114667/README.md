---
layout: page
title: "Q114667: PRB: &quot;Error Initializing OLE&quot; When Running GENGRAPH"
permalink: kb/114/Q114667/
---

## Q114667: PRB: &quot;Error Initializing OLE&quot; When Running GENGRAPH

	Article: Q114667
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a,3.0b
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running a graph-dependent application that has been distributed
	using the FoxPro for Macintosh Distribution Kit, the following FoxPro Graph
	Wizard error message appears:
	
	  Error Initializing OLE
	  Press any key to Continue...
	
	CAUSE
	=====
	
	Either MS Graph is not installed on the workstation, MS Graph has not been
	initialized, or the Shared Code Manager, OLE Registration, Client, and Server
	DLLs are not properly installed.
	
	MORE INFORMATION
	================
	
	A FoxPro application can take advantage of graphing capabilities by making calls
	through GENGRAPH.APP to communicate with MS Graph. GENGRAPH is a FoxPro
	application provided with both FoxPro for Windows and FoxPro for Macintosh. Ms
	Graph is an application included with Microsoft Word 5.x for the Macintosh,
	Microsoft PowerPoint 3.x for the Macintosh, and Microsoft FoxPro for the
	Macintosh.
	
	While MS Graph is available in a run-time, distributable form on the Windows
	platform, this is not the case on the Macintosh platform. In order for customers
	of a FoxPro for Macintosh developer to successfully run a graph-dependent
	application, those customers must already own a license for a product that
	includes MS Graph for the Macintosh. These applications include Microsoft Word
	5.0 for the Macintosh, Microsoft PowerPoint 3.0 for the Macintosh, and Microsoft
	FoxPro for the Macintosh.
	
	PowerPoint and FoxPro both install MS Graph in the System
	Folder:Extensions:Microsoft:MSGraph subfolder.
	
	Microsoft Word installs the MS Graph in the Word Commands:Microsoft Graph
	subfolder that is contained in the folder where Word is installed. Word also
	puts an alias pointing to this location in the System
	Folder:Extensions:Microsoft:MSGraph subfolder. If the Word Setup program finds
	MS Graph in the System Folder:Extensions:Microsoft:MSGraph subfolder, it does
	not install MS Graph again in either location.
	
	Although Microsoft Excel 4.0 for Macintosh does include graphing capabilities,
	they are built into Microsoft Excel and not stored as a separate application.
	Accessing the graphing capabilities of Microsoft Excel using FoxPro for
	Macintosh involves the use of AppleScript. For more information about
	AppleScript, see the "Installation and Macintosh Features Guide" included with
	FoxPro. For information about scripting Microsoft Excel, see the Microsoft Excel
	Software Development Kit (SDK).
	
	RESOLUTION
	==========
	
	Once it has been established that the recipient of the FoxPro application has a
	licensed copy of MS Graph installed on his or her Macintosh, the recipient may
	need to run MS Graph once in order to register the application as an OLE
	server.
	
	To register MS Graph, double-click the MS Graph application, and then choose Yes
	in the dialog box that states that MS Graph can be run only from within another
	program. The Embedding Preferences file stored in the System Folder:Preferences
	subfolder maintains this registration information.
	
	In order for GENGRAPH to communicate with MS Graph, the Shared Code Manager
	extension and the OLE Registration, Client, and Server documents must be
	properly installed in the System Folder:Extensions subfolder. If the Setup
	Wizard included with the FoxPro Distribution Kit was used and the Shared Code
	option was selected during this process, these files are automatically installed
	on the client workstation.
	
	
	REFERENCES
	==========
	
	FoxPro Distribution Kit for Macintosh "User's Guide," version 2.5, page 8 FoxPro
	for Macintosh "Installation and Macintosh Features Guide," version 2.5, page 7
	
	Additional query words: VFoxMac FoxMac 2.50b MSGRAPH RUNSCRIPT errmsg err msg dk
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.5x,2.6a,3.0b
	
	=============================================================================
	
