---
layout: page
title: "Q189110: PRB: &quot;File Already Open&quot; Error w/VSS DB on Unix Server"
permalink: /kb/189/Q189110/
---

## Q189110: PRB: &quot;File Already Open&quot; Error w/VSS DB on Unix Server

	Article: Q189110
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbSSafe kbSSExplorer
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running under Windows NT, when you perform a checkin\checkout operation or
	when you run Analyze.exe, on a database that resides in a UNIX computer, the
	following error may occur:
	
	  File <filepath> is already open.
	
	CAUSE
	=====
	
	While mapping a network drive from a Windows NT computer to a UNIX computer
	using HummingBird NFS Maestro software, you may have selected "Sharing" mode as
	the default link.
	
	RESOLUTION
	==========
	
	When mapping to Unix, choose only "Compat." mode as your default link.
	
	MORE INFORMATION
	================
	
	You can access a UNIX computer from a Windows computer using HummingBird NFS
	Maestro software. This is accomplished by mapping a network drive using the NFS
	Network Access (Hclnet.exe) utility found in the HummingBird install directory.
	Under the Connect tab, you have the option to choose a combination of the three
	following modes:
	
	- Sharing
	
	- Compatibility (Compat.)
	
	- CD-ROM
	
	Sharing mode indicates that DOS-style sharing will be done over the network.
	Thus, you can use this mode to connect Windows 95 computers and UNIX computers
	without experiencing the problem described in the SYMPTOMS section.
	
	Compatibility mode indicates that linking and sharing operations are directly
	sent to rpc.lockd(the UNIX lock manager). Select CD-ROM mode when connecting to
	a CD-ROM.
	
	Before mapping a network drive from a Windows NT computer, make sure that you
	select the "Compat. mode as the default link.
	
	REFERENCES
	==========
	
	NFS Maestro is manufactured by HUMMINGBIRD, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	HummingBird Communications LTD
	1 Sparks Avenue,
	North York,
	Ontario,
	Canada, M2H 2W1
	E-Mail: support@hummingbird.com
	Web site: www.hummingbird.com
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSSafe kbSSExplorer 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe500
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
