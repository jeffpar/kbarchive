---
layout: page
title: "Q153152: How To Compile a CFM for Visual FoxPro/Mac with CodeWarrior"
permalink: /kb/153/Q153152/
---

## Q153152: How To Compile a CFM for Visual FoxPro/Mac with CodeWarrior

	Article: Q153152
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the procedures for building a CFM library for use with
	Visual FoxPro for Macintosh using the CodeWarrior 8 C compiler. It will assume
	that the C code and LCK functions have been implemented properly in the source
	code file.
	
	MORE INFORMATION
	================
	
	CodeWarrior is manufactured by MetroWerks Inc., a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	The folder paths to the Visual FoxPro API sample files are as follow:
	
	  Microsoft Visual FoxPro:API:Sample Code
	  Microsoft Visual FoxPro:API:CodeWarrior
	  Microsoft Visual FoxPro:API:CodeWarrior:CW CFM Sample
	
	In the steps that follow, this article will only refer to the current folder name
	and not provide the full path.
	
	Visual FoxPro for Macintosh comes with a sample CodeWarrior project called
	Hello.pi (note that the actual file extension is the symbol for the Greek letter
	pi but that character cannot be reproduced in this text). The easiest procedure
	for building a CFM from a new C file is to copy this project and make some
	modifications for the new file.
	
	Step-by-Step Example
	--------------------
	
	1. Make sure that Metrowerks CodeWarrior 8 is installed on the Macintosh. By
	  default is should install in a folder named CW8 Gold. The compiler to use is
	  found in the Metrowerks CodeWarrior folder in the CW8 Gold folder. Use the
	  CodeWarrior IDE 1.4 program.
	
	2. To build the sample CodeWarrior Hello.pi project into a CFM, open the
	  Hello.pi project. It is located in the CW CFM Sample folder. Choose the Make
	  command from the Project menu, press CMD+M or click the Make button on the
	  CodeWarrior toolbar. This library can then be loaded in Visual FoxPro with
	  the SET LIBRARY TO command. More information on calling the library functions
	  will follow.
	
	3. To build a different C file into a library, follow these steps.
	
	  a. Go to Finder and open up the CW CFM Sample folder.
	
	  b. Copy the Reverse.c file from the Sample Code folder to the CW CFM Sample
	     folder.
	
	  c. Duplicate the Hello.pi.exp file in the CW CFM Sample folder. Rename it to
	     Reverse.pi.exp. This file should only contain the text "DispatchAPI"
	     without the quotes. If CodeWarrior is allowed to create this file when
	     Making the CFM, the build will fail.
	
	  d. Duplicate the Hello.pi project file. Rename it to Reverse.pi.
	
	  e. Double-click Reverse.pi to launch CodeWarrior. If you get the message that
	     the project was created by an older version of CodeWarrior, go ahead and
	     update it.
	
	  f. With the Reverse.pi project window active, choose the Add Files... command
	     from the Project menu. Add the Reverse.c file to the project. You will
	     probably have to navigate to the CW CFM Sample folder to find it. It
	     should show up under the Sources portion of the project. If not, drag it
	     there.
	
	  g. Remove the Hello.c file from the project. Select Hello.c and choose the
	     Remove Files command from the Project menu.
	
	  h. To have the correct name and icon for the new CFM file you are about to
	     build, a couple of preferences need to be set. From the Edit menu, choose
	     the Preferences... command. Choose the PPC Project icon from the list of
	     icons on the left side of the Preferences dialog. Scroll down to find it.
	     The Project Type should be Shared Library. The File Name can be any legal
	     name. Use Reverse.cfm for this example. The Creator can be changed to
	     "cfmg" ,without quotes, to provide the CFM with the library bookshelf
	     icon. Leave the Type as "shlb."
	
	  i. While still in the Edit...Preferences dialog, choose the Access Paths icon
	     on the left side. Under the Additional Access Paths section, check the
	     Treat #include <..> as #include "..." checkbox. Alternately, you can
	     modify the Reverse.c file and change the #include <pro_ext.h> line
	     to #include "pro_ext.h." Checking the checkbox is preferable however.
	
	  j. Make the project. Choose the Make command from the Project menu, press
	     CMD+M, or click on the Make button on the toolbar. Reverse.cfm should show
	     up in the CW CFM Sample folder with a bookshelf icon.
	
	4. To load the Hello or Reverse.cfm libraries in Visual FoxPro, use one of the
	  following commands from the Visual FoxPro Command window or within a
	  program:
	
	        SET LIBRARY TO GETFILE() ADDITIVE
	
	  Click the All Files checkbox, and navigate to the folder with the library.
	
	  If the full path to the library is known, type that in the command:
	
	       SET LIBRARY TO HOME()+"API:CodeWarrior:CW CFM Sample:Reverse.cfm"
	       SET LIBRARY TO HOME()+"API:CodeWarrior:CW CFM Sample:Hello" ADDITIVE
	
	  Note that the complete library file name must be specified, including any file
	  name extension(.CFM). This was not the case in FoxPro 2.6 for Macintosh.
	
	REFERENCES
	==========
	
	For more information on the SET LIBRARY TO command, see Online Help.
	
	Additional query words: VFoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
