---
layout: page
title: "Q246307: BUG: EXE Crashes on Windows NT when Icon has More Than 256 color"
permalink: /kb/246/Q246307/
---

## Q246307: BUG: EXE Crashes on Windows NT when Icon has More Than 256 color

	Article: Q246307
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbAppSetup kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnip
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When building a Microsoft Visual FoxPro (VFP) executable, it is common practice
	to attach a custom icon to it. Usually, the custom icon contains two or more
	resources. This allows the icon to be displayed in various Windows views (small
	icons, large icons, details, and so forth). If the custom icon contains a 16x16
	resource with more than 256 colors, the resulting .exe file does not run on
	Microsoft Windows NT 4. When the .exe file is started, it immediately exits with
	a memory error.
	
	
	RESOLUTION
	==========
	
	Build the 16x16 resource in the custom icon with 256 colors or fewer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Using Microangelo (manufactured by Impact Software:
	  http://www.impactsoft.com/muangelo/muangelo.html) or some other icon editor,
	  create an icon. Include a 32x32 resource with 256 colors, and a 16x16
	  resource with more than 256 colors.
	
	2. Open Visual FoxPro 6.0 and create a new project.
	
	3. Add a new program to the project with one line of code:
	
	  MESSAGEBOX("HELLO!")
	
	4. With the project selected, press the CTRL+J key combination to bring up the
	  Project Information window.
	
	5. Use the Attach Icon checkbox to attach the icon created in step 1 to the
	  project.
	
	6. Build the project into an executable.
	
	7. Run the .exe file on a computer running Microsoft Windows NT 4, and note that
	  one of the following error messages appears:
	
	  APPLICATION ERROR. The instruction at <memory address> referenced
	  memory at <memory address>. The memory could not be "read".
	
	  An application error has occurred and an application error log is being
	  generated. <exe name>
	  Exception: access violation:<memory address>, Address:<memory
	  address>
	
	  Fatal error: Exception code: C0000005
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Trevor
	Hancock, Microsoft Corporation.
	
	
	REFERENCES
	==========
	
	  For additional information about creating icons for use with Visual FoxPro
	  executables, click the article numbers below to view the articles in the
	  Microsoft Knowledge Base:
	
	  Q136044 How to Make ImagEdit Create 16X16 Icons
	
	  
	
	  Q149589 How to Ensure that Custom Icons Show Up in Windows 95 Explorer
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAppSetup kbvfp500a kbvfp500aBUG kbvfp600 kbvfp600bug kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
