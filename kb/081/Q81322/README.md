---
layout: page
title: "Q81322: Renaming Compile Results Window with a PWB Extension"
permalink: kb/081/Q81322/
---

## Q81322: Renaming Compile Results Window with a PWB Extension

	Article: Q81322
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1,2.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following article describes how to rename the Compile Results window in the
	Programmer's WorkBench (PWB) versions 1.0 and 1.1.
	
	MORE INFORMATION
	================
	
	This is possible because PWB references only the name of the pseudofile that is
	contained in <>, and whatever comes after that will be displayed as the
	title of the window. This is illustrated by the following sample.
	
	To rename the Compile Results window:
	
	1. First compile and link the sample code.
	
	2. Place the resulting .MXT file in the same directory as PWB. This will
	  normally be the BIN subdirectory.
	
	3. Add the following lines to the TOOLS.INI file under the [pwb] tag to make the
	  function funcname() accessible in PWB by using the ALT+Z keystroke:
	
	  " load:[programname] funcname:alt+z " (without the quotation marks)
	
	4. After starting PWB, invoke the extension by entering ALT+Z.
	
	MORE information about PWB extensions can be found in Chapter 8 of the "Microsoft
	C Advanced Programming Techniques" manual, the online help, and in Chapter 9 of
	the C versions 6.x "Developers Toolkit Reference."
	
	Sample Code
	-----------
	
	  /* Compile and link options needed:
	          cl /c /ACw /Gs [programname].c
	          link exthdr.obj [programname].obj, [programname].mxt;  */ 
	
	  #include "ext.h"
	
	  /* function prototype */ 
	  PWBFUNC funcname(unsigned argData,
	                   ARG _far *pArg,
	                   flagType fMeta);
	
	  /* switch description table (required for an extension) */ 
	  struct swiDesc swiTable[] = { { NULL,NULL,0} };
	
	  /* command description table ( required for a pwb extension) */ 
	  struct cmdDesc cmdTable[] ={ { "funcname", funcname, 0 , NOARG},
	                                  { NULL, NULL, 0, 0} };
	
	  /* function that PWB calls when loading the extension */ 
	  void EXTERNAL WhenLoaded(void)
	  {
	          DoMessage("Loading funcname extension");
	  }
	
	  PWBFUNC funcname(unsigned argData,
	                          ARG _far *pArg,
	                          flagType fMeta)
	  {
	          PFILE pFileCompile;
	          char szNewName[] = "<COMPILE>New Name for Window";
	
	          if((pFileCompile = FileNameToHandle("<COMPILE>",NULL))!=PNULL)
	             SetEditorObject(RQ_FILE_NAME | 0xff, pFileCompile,
	
	     szNewName);
	  }
	
	Additional query words: kbinf 1.00 1.10 2.00 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB200DOS
	Version           : MS-DOS:1.0,1.1,2.0
	
	=============================================================================
	
