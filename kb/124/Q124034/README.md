---
layout: page
title: "Q124034: OpenGL Interface in Windows NT 3.5"
permalink: /kb/124/Q124034/
---

## Q124034: OpenGL Interface in Windows NT 3.5

{% raw %}

	Article: Q124034
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article defines and explains the OpenGL interface that is available and can
	be implemented in Windows NT version 3.5. The following topics are covered in
	this article:
	
	- Definition of OpenGL
	
	- Standards Organization
	
	- Architectural Overview
	
	- New API Functions
	
	- Platform Compatibility
	
	MORE INFORMATION
	================
	
	Definition of OpenGL
	--------------------
	
	OpenGL is a software interface that allows graphics programmers to create
	high-quality three-dimensional color images with graphic effects such as
	shading, lighting, texture mapping and matrix transformations. OpenGL branched
	from the powerful IRIS GL graphics interface that runs on Silicon Graphics' IRIS
	GL workstations. While IRIS GL is platform- specific, OpenGL is an open standard
	designed to run on a variety of computers and a variety of operating systems.
	
	Standards Organization
	----------------------
	
	The OpenGL standard is maintained by an independent group called the
	Architectural Review Board (ARB), which meets on a quarterly basis and includes
	representatives from DEC, IBM, Intel, Silicon Graphics and Microsoft. The ARB
	governs both the features and conformance testing of OpenGL.
	
	Architectural Overview
	----------------------
	
	In Windows NT, GDI functions initiated from a graphics application are processed
	by the dynamic link library (DLL) GDI32.DLL on the client side. The GDI request
	is then transmitted to WINSRV.DLL on the server side. This in turn dispatches
	the requests to the video display driver through the device driver interface
	(DDI) layer called Win32 DDI.
	
	OpenGL functions are processed the same way as GDI functions with a few
	additions. The functions are sent to OPENGL32.DLL on the client side for
	graphics processing. OpenGL requests are packaged and transmitted to WINSRV.DLL
	on the server side. The OpenGL requests are then dispatched to the video display
	driver through the hardware- specific DDI layer. The hardware-specific DDI
	resides alongside the Win32 DDI and can be obtained through a vendor that
	manufactures an OpenGL accelerator. If the accelerator is obtained, an
	additional software module known as the OpenGL Installable Client Driver is
	provided, which resides between OPENGL32.DLL and WINSRV.DLL.
	
	New API Functions
	-----------------
	
	OpenGL is basically a library of API functions for performing three- dimensional
	drawing and rendering. OpenGL adds five new categories of API functions to
	Windows NT. They are as follows:
	
	- 115 OpenGL functions (prefixed with the letters GL)
	
	- 43 utility functions (OpenGL utility library prefixed with GLU)
	
	- 31 auxiliary functions (OpenGL auxiliary library prefixed with AUX)
	
	- 6 WGL functions (prefixed with the letters WGL)
	
	- 5 new Win32 API functions (no prefix)
	
	Platform Compatibility
	----------------------
	
	OpenGL functions are completely portable from one platform to another. However,
	porting an OpenGL application from one implementation to another involves some
	rewriting to accommodate differences in each platform running Windows NT version
	3.5. In other words, OpenGL programs are not compatible at the binary level but
	are compatible at the source code level. Therefore these programs written and
	tested in one platform must be recompiled in others for it to run properly.
	Currently, OpenGL for Windows NT runs on Intel, Alpha, and MIPS platforms.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
