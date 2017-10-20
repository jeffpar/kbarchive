---
layout: page
title: "Q131037: How to Compile MediaView Example Player Using Visual C++"
permalink: /kb/131/Q131037/
---

## Q131037: How to Compile MediaView Example Player Using Visual C++

{% raw %}

	Article: Q131037
	Product(s): Miscellaneous Software Development Kits
	Version(s): 1.3,2.0,2.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MediaView Software and Title Development Kit, version 1.3 
	- The Compiler included with Microsoft Visual C++, 32-bit Edition, versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to compile a MediaView version 1.3 title (MV13
	title) by using Visual C++.
	
	You can obtain the Microsoft MediaView Software and Title Development Kit from
	any one of the following three CDs:
	
	- The Multimedia Jumpstart CD that contains Microsoft's collection of over 500
	  megabytes of multimedia software. For information on how to obtain it, please
	  see the following article in the Microsoft Knowledge Base:
	
	  Q124824 How to Obtain the Multimedia Jumpstart CD
	
	- Microsoft Developer Network (MSDN) Development Platform CD.
	
	- Microsoft Developer Network (MSDN) Development Library CD.
	
	MORE INFORMATION
	================
	
	However you install MediaView version 1.3, the makefile given for the player is
	path-specific. Here is the general format for the MediaView tree structure:
	
	\MV13KIT
	|
	|_EXAMPLE
	|  |_PLAYER
	|  |_TITLE
	|
	|__MV
	|    |__BIN
	|    |    |__NT
	|    |    |__WIN
	|    |
	|    | __ILIB
	|    |    |__NT
	|    |    |__WIN
	|    |
	|    |__INC
	|    |    |__INTLRC
	|    |    |__MVMCIRES
	|    |
	|    |__SLIB
	|         |__NT
	|         |__WIN
	|
	|__Tutorial
	|    |...
	|
	|__VBX
	
	Use this basic path structure to build your MV13 title.
	
	Compiling the MediaView Title
	-----------------------------
	
	When you load the makefile from \MV13KIT\MV\EXAMPLE\PLAYER\NT\PLAYER.MAK, you
	need to make some modifications for this project to compile properly.
	
	1. In Visual C++ version 2.x, open the Makefile.
	
	2. From the Project menu, choose Settings. When the Project Settings dialog box
	  appears, select the C\C++ tab.
	
	3. From the Category combo box, select Preprocessor.
	
	4. In the Additional Include Directories edit box, type:
	
	  \MV13KIT\MV\INC
	
	5. Select the Resources tab.
	
	6. In the Additional Include Directories edit box, type:
	
	  \MV13KIT\MV\INC;\MV13KIT\MV\INC\MVMCIRES
	
	7. Select the Link tab.
	
	8. In the Object/Library Modules edit box, look for the MVCL13N.LIB file. Add
	  the following path to the front of the file:
	
	  \MV13KIT\MV\ILIB\NT
	
	  (NOTE: for Visual C++ version 1.5x, use \MV13KIT\MV\ILIB\WIN)
	
	  If while linking Visual C++ can't find the MVCL13N file, add the drive letter.
	  That is, type the following path in the edit box:
	
	  C:\MV13KIT\MV\ILIB\NT\MVCL13N.LIB
	
	NOTE: If you are using Visual C++ version 1.5x, you can alter your project
	settings. From the Options Menu, choose Project. Use the three buttons on the
	left to customize the build options. Remember to create a successful build, you
	need to tell the compiler where to find the necessary files.
	
	Compiling Using Static Libraries
	--------------------------------
	
	If you want to create a Static version of MediaView for the example player,
	follow the previous steps until you get to step 8.
	
	For your eighth step, remove the \MV\ILIB\NT\MVCL13N.LIB or any reference to the
	MVCL13N.LIB file. Type in WINMM.LIB if it's not already in the Object/Library
	Modules edit box.
	
	From the Projects Menu, choose Files. When the dialog box appears, include these
	files from your SLIB directory (\MV\SLIB\NT Visual C++ versions 2.x or
	\MV\SLIB\WIN for Visual C++ versions 1.5x):
	
	MVCL13N.LIB
	MVTL13N.LIB
	MVFS13N.LIB
	MVBK13N.LIB
	MVSR13N.LIB
	
	Add all of these files to the Source files group, and build a static version of
	MediaView Example Player.
	
	Depending on the performance of your computer, a static build of MediaView
	Projects reduces the overhead of loading MediaView dynamic link libraries. The
	only catch to a static build is that your executable size is significantly
	larger than it is with a dynamic build.
	
	Additional query words: 2.00 2.10 9.00 9.10 9.0 9.1 1.30
	
	======================================================================
	Keywords          :  
	Technology        : kbVCsearch kbAudDeveloper kbSDKSearch kbVC200 kbVC210 kbSDKMediaView130
	Version           : :1.3,2.0,2.1
	
	=============================================================================
	

{% endraw %}
