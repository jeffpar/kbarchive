---
layout: page
title: "Q251399: Visual FoxPro FoxRun.pif Fails with Long File Names in NT/W2K"
permalink: /kb/251/Q251399/
---

## Q251399: Visual FoxPro FoxRun.pif Fails with Long File Names in NT/W2K

	Article: Q251399
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbG
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use the !/Run command in Visual FoxPro on a Windows NT or Windows
	2000 computer and the files are in Long File Name format, the execution fails
	with the following error:
	
	  To many parameters - Files
	
	This also occurs if a batch file contains a Long File Name.
	
	CAUSE
	=====
	
	The FoxRun.pif file points to the wrong file. FoxRun.pif points to Command.com
	on NT or Windows 2000. Command.com is not a DOS 7+ version but rather a DOS 6
	version, which produces errors with Long File Names. FoxRun.pif should point to
	the CMD.exe file.
	
	RESOLUTION
	==========
	
	1. Use the Windows Explorer to navigate to the FoxRun.pif file located in the
	  Visual FoxPro home directory.
	
	2. Right-click and choose Properties.
	
	3. Select the Program tab.
	
	4. Change the Cmd line from:
	
	Command.com
	
	to:
	
	CMD.exe
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a batch file, such as d:\test.bat.
	
	2. Add the following line to the batch file:
	
	  cd "d:\Program Files"
	
	3. You may replace the preceding directory with any valid Long File Name path.
	
	4. Type the following in the FoxPro Command window:
	
	"RUN d:\test.bat" (without the quotation marks)
	
	When you try to run the batch file from Visual FoxPro, you receive the following
	error message because Command.com does not understand the long file name
	d:\Program Files:
	
	  To many parameters - Files
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300b kbvfp300bBUG kbvfp500 kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbXBase kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
