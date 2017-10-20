---
layout: page
title: "Q157516: 3D GRAPHICS PROGRAMMING FOR WIN 95 Corrections and Comments"
permalink: /kb/157/Q157516/
---

## Q157516: 3D GRAPHICS PROGRAMMING FOR WIN 95 Corrections and Comments

{% raw %}

	Article: Q157516
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdocerr kbGrpDSTools
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS 3D Graphics Programming for Windows 95 ISBN 1-57231-345-5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains comments, corrections, and information on known errors
	relating to the Microsoft Press book "3D Graphics Programming for Windows 95."
	
	The following topics are covered:
	
	- Page xvii: E-mail address incorrect
	
	- Page 4: "d3drm40f.lib" should be "d3drm.lib"
	
	- Page 17: Files do not compile with Visual C++ 4.1 or later
	
	MORE INFORMATION
	================
	
	In addition to a description of the book's problems, each entry in this document
	might also include sections labeled "Correction" and "Comments." Please note
	that the "Correction" section is worded for correcting the book and does not
	necessarily address the problem introduced by the book error. The "Comments"
	section contains specific information for working around the problem.
	
	Page xvii:  E-mail address incorrect
	------------------------------------
	
	Page xvii, last paragraph, after "You can e-mail me at:"
	Change "nigel-t@msn.combusy"
	To "nigel-t@msn.com"
	
	Page 4:  "d3drm40f.lib" should be "d3drm.lib"
	---------------------------------------------
	
	Page 4, step 10, sentence 2:
	Change: "d3drm40f.lib"
	To: "d3drm.lib"
	
	Page 17: Files do not compile with Visual C++ 4.1 or later
	----------------------------------------------------------
	
	The sample programs written for "3D Graphics Programming for Windows 95" were
	created using Microsoft Visual C++ 4.0 with DirectX 2. These programs include
	dependencies to files specific to Visual C++ 4.0. Attempting to compile or run
	these programs with Visual C++ 4.1 or later will cause errors.
	
	These errors are caused by the dependencies contained in the 3dPlus library. To
	correct these errors, please use the following procedure:
	
	1. In the Microsoft Development Studio, click Tools, then click Options.
	
	2. Click the Directories tab.
	
	3. Make sure the include and library lists appear as follows. Add to or
	  reorganize your list as necessary:
	
	  C:\DXSDK\SDK\INC
	  C:\3D\3DPLUS\INCLUDE
	  C:\MSDEV\INCLUDE
	  C:\MSDEV\MFC\INCLUDE
	
	  C:\DXSDK\SDK\LIB
	  C:\3D\3DPLUS\LIB
	  C:\MSDEV\LIB
	  C:\MSDEV\MFC\LIB
	
	  NOTE: The order of the above list is very important. The DirectX and 3dPlus
	  libraries must be referenced before the MSDEV and MFC libraries.
	
	4. Click OK to continue.
	
	5. Load the 3dPlus workspace. Click OK to skip the ClassView error message that
	  appears.
	
	6. Click Build, and then click Rebuild All.
	
	The 3dPlus library must be rebuilt in your compiler before any of the sample
	files will function. After rebuilding the 3dPlus library, you should be able to
	load and recompile each sample application without any further problems.
	
	Correction: Page xvii, add line under using companion CD: If you have Visual C++
	4.1 or later, please be sure to check page 14 for extra notes about compiling
	the sample files.
	
	Page 14:
	Change list of filenames to:
	
	  C:\DXSDK\SDK\INC
	  C:\3D\3DPLUS\INCLUDE
	  C:\MSDEV\INCLUDE
	  C:\MSDEV\MFC\INCLUDE
	
	  C:\DXSDK\SDK\LIB
	  C:\3D\3DPLUS\LIB
	  C:\MSDEV\LIB
	  C:\MSDEV\MFC\LIB
	
	Page 14: Add margin note next to filenames:
	Be sure the DXSDK and 3DPLUS files are listed before the MSDEV files. Compile
	errors will otherwise result.
	
	Page 15, middle, after "can find all your header files.":
	Add: "If you are working on Visual C++ 4.1 or later, please be aware that the
	3dPlus library has dependencies set to Visual C++ 4.0 files. You must recompile
	3dPlus.lib before you can recompile any other samples."
	
	Microsoft Press is committed to providing informative and accurate books. All
	comments and corrections listed above are ready for inclusion in future
	printings of this book. If you have a later printing of this book, it may
	already contain most or all of the above corrections.
	
	Additional query words: mspress ms_press press bookbug
	
	======================================================================
	Keywords          : kbdocerr kbGrpDSTools 
	Technology        : kbMSPressSearch kbZNotKeyword2
	Version           : :
	
	=============================================================================
	

{% endraw %}
