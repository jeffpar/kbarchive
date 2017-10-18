---
layout: page
title: "Q238914: Err Msg: Enc99 Caused An Invalid Page Fault in Regsvr32.exe"
permalink: kb/238/Q238914/
---

## Q238914: Err Msg: Enc99 Caused An Invalid Page Fault in Regsvr32.exe

	Article: Q238914
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbimu
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta Encyclopedia 99 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Microsoft Encarta Encyclopedia 99, you may receive the
	following error message:
	
	  Enc99 caused an invalid page fault in module Regsvr32.exe.
	
	CAUSE
	=====
	
	This behavior can occur if Encarta Setup does not register the following files:
	
	- Atcomp.ocx
	- Atcont.dll
	- Atmap.ocx
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Reinstall Macromedia Shockwave from the Encarta CD-ROM
	------------------------------------------------------
	
	To do this:
	
	1. Insert the Encarta Encyclopedia 99 Installation and Resources CD-ROM into
	  your CD-ROM or DVD-ROM drive. Press and hold down the SHIFT key when you
	  insert the CD-ROM to prevent Encarta 99 Encyclopedia from starting
	  automatically.
	
	2. Click Start, and then click Run.
	
	3. In the Open box, type the following line, and then click OK
	
	  "<drive>:\Support\Shkwave\Sw61inst.exe" (without the quotation marks)
	
	  where <drive> is the drive letter of the CD-ROM or DVD-ROM drive.
	
	If the issue continues to occur, proceed to the next method.
	
	Download and Install the Latest Version of Macromedia Shockwave
	---------------------------------------------------------------
	
	Download and install the latest version of Macromedia Shockwave from the
	following Macromedia Web site:
	
	  http://www.macromedia.com/shockwave/download/
	
	Additional query words: multi multi-media media mm enc99 installs gpf ipf
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1999
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
