---
layout: page
title: "Q94837: PWB Extension Converts Selected Text to Uppercase Letters"
permalink: /kb/094/Q94837/
---

## Q94837: PWB Extension Converts Selected Text to Uppercase Letters

{% raw %}

	Article: Q94837
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1,2.0; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1, 2.0 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The text below demonstrates the process to create a Programmer's WorkBench (PWB)
	extension to convert one selected line of text to uppercase. Note that nothing
	appears to happen if the cursor is on a different line than the selected line.
	
	MORE INFORMATION
	================
	
	To load and use the extension, perform the following five steps:
	
	1. Copy REVERSE.MXT into the same directory as PWB. By default on an MS-DOS
	  system, this is the BIN subdirectory. By default on an OS/2 system, this is
	  the BINP subdirectory.
	
	2. Modify the TOOLS.INI file to place a load command in the [PWB] section. For
	  example,
	
	  [pwb]
	  load:[path\]reverse
	
	3. Start the PWB editor.
	
	4. Select the text to convert to uppercase letters. The selection must be on one
	  line.
	
	5. From the Case menu, select Lower to Upper.
	
	The source code for this PWB extension is as follows.
	
	Sample Code
	-----------
	
	  /*
	   * Compile options needed:  cl /c /Gs /ACw reverse.c
	   *                          link exthdr test, reverse.mxt;
	   */ 
	
	  #define  BUF_LEN  250
	  #define  TRUE     1
	  #define  FALSE    0
	
	  #include <ext.h>
	  #include <string.h>
	  #include <ctype.h>
	
	  PWBFUNC ToUpper(unsigned argData, ARG _far *pArg, flagType fMeta);
	  struct swiDesc swiTable[] =
	  {
	     {"ToUpper", toPIF(ToUpper), SWI_BOOLEAN},
	     { NULL, NULL, 0}
	  };
	
	  struct cmdDesc cmdTable[] =
	  {
	     {"ToUpper", ToUpper, 0, STREAMARG},
	     {NULL, NULL, 0, 0}
	  };
	
	  void EXTERNAL WhenLoaded(void)
	  {
	     int hmatch;
	     hmatch = AddMenu("~Case", "xxxx", "", TRUE);
	     AddMenuItem(hmatch, "~Lower to Upper", "Case switch", NULL, "ToUpper");
	  }
	
	  PWBFUNC ToUpper(unsigned argData, ARG _far *pArg, flagType fMeta)
	  {
	     LINE    ycurr, ystart, yend;
	     COL     xcurr, xstart, xend;
	     char    buf[BUF_LEN + 1];
	     PFILE   pfile;
	     int     i;
	     int     maxlines;
	
	     switch (pArg->argType)
	        {
	     case STREAMARG:
	        // The following code retrieves the corners
	        // of the stream for future use
	        ystart = pArg->arg.streamarg.yStart;
	        yend = pArg->arg.streamarg.yEnd;
	        xstart = pArg->arg.streamarg.xStart;
	        xend = pArg->arg.streamarg.xEnd;
	        pfile = FileNameToHandle("", "");
	        maxlines = FileLength(pfile);
	        ycurr = ystart;
	        xcurr = xstart;
	
	        // Read the argument
	        pfile = FileNameToHandle("","");
	        GetLine(ystart, buf, pfile);
	
	        // Convert to uppercase letters
	        for ( ; xcurr < xend ; xcurr++)
	           buf[xcurr] = toupper(buf[xcurr]);
	
	        // Output converted argument
	        PutLine(ystart, buf, pfile);
	        break;
	
	     default:
	        DoMessageBox("Default", buf, NULL, MBOX_OK, 0);
	        break;
	        }
	  }
	
	Additional query words: kbinf 1.00 1.10 2.00 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB200DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1,2.0; OS/2:1.0,1.1
	
	=============================================================================
	

{% endraw %}
