---
layout: page
title: "Q148612: BUG: Scaling Metafiles in World Sample Fails Under Windows 95"
permalink: kb/148/Q148612/
---

## Q148612: BUG: Scaling Metafiles in World Sample Fails Under Windows 95

	Article: Q148612
	Product(s): Microsoft Fortran Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbFortranPS kbLangFortrankbbuglist
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Fortran PowerStation for Windows 95 and Windows NT, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the Win32 API "World" programming sample included with Fortran
	PowerStation version 4.0 under Windows 95 and change the program's horizontal or
	vertical scaling factors, the displayed metafile isn't redrawn to reflect the
	new scale factors. The World sample program is located under the topic "Win32:
	Win32 API Programming with Fortran" in the Samples/Advanced Programming section
	of Books Online.
	
	CAUSE
	=====
	
	The Windows API function SetWorldTransform() used to scale the metafile is not
	supported under Windows 95. This does not apply to Windows NT version 3.51 or
	later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Using the Infoviewer, select "FPS 4.0 Books Online."
	
	2. Open the topic "Win32: Win32 API Programming with Fortran." This is located
	  in the Samples/Advanced Programming section of Books Online.
	
	3. Go to the "World" sample and copy all of its files to your computer's hard
	  disk. To do this, click the World button, and then choose Copy All from the
	  Application Sample dialog box.
	
	4. Run the World.exe program, and load a metafile into the application client
	  area. From the World Coordinate Transforms main menu, choose Open from the
	  Metafile menu, and then choose the file Sample.emf.
	
	5. Next, change the graphic scaling factors. From the World Coordinate
	  Transforms main menu, select Scale, and in the Scale Image dialog box, select
	  a new horizontal or veritcal scaling factor. Then click the OK button.
	
	In Windows 95 changing the scaling factors has no effect. However, in Windows NT
	version 3.51 or higher, the metafile is redrawn to reflect the new scaling
	factors.
	
	Additional query words: 4.00
	
	======================================================================
	Keywords          : kbFortranPS kbLangFortran kbbuglist
	Technology        : kbAudDeveloper kbPTProdChange kbFortranSearch kbFORTRANPower400NT
	Version           : :4.0
	
	=============================================================================
	
