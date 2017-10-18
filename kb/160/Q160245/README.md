---
layout: page
title: "Q160245: PRB: Apple Guide Help Files Need Type of HELP"
permalink: kb/160/Q160245/
---

## Q160245: PRB: Apple Guide Help Files Need Type of HELP

	Article: Q160245
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you set Help to an Apple Guide Help file in Visual FoxPro for Macintosh,
	you receive the following error when you call Help:
	
	  Microsoft Help - This file is not a Microsoft Help file.
	
	CAUSE
	=====
	
	The Apple Guide does not have a type of "help."
	
	RESOLUTION
	==========
	
	Change the "Type of the Apple Guide" to "help" using ResEdit or some other
	resource editor that can change the type of a file.
	
	Use the following code in Visual FoxPro to check and then set the "Type of an
	Apple Guide" to "help":
	
	     CLEAR
	     SET HELP TO    && set HELP back to the default help file
	     SET LIBRARY TO SYS(2004)+"Foxtools.cfm"
	     cType=""
	     cCreator=""
	
	     * The next command only displays Apple Guides that have a type
	     * of "poco." See Help for GETFILE() for information about
	     * changing what files are displayed.
	
	     cFileName=SYS(2027,GETFILE("", ;
	      "Check 'All Files' if the file you want doesn't appear","OK",0,"poco"))
	
	     =FxFileType(cFileName,@cType,@cCreator)
	
	     ? "The File Type was "+'"'+cType+'"'
	     ? "The File Creator was "+'"'+cCreator+'"'
	
	     nCool=FxSetType(cFileName,"help","reno")
	
	     IF nCool=0
	         =FxFileType(cFileName,@cType,@cCreator)
	         ? "The File Type is now "+'"'+cType+'"'
	         ? "The File Creator is now "+'"'+cCreator+'"'
	     ELSE
	         ? "There was an error"
	         ? "The operating system error number is "+STR(nCool)
	     ENDIF
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Page 184 of the Visual FoxPro for Macintosh "Professional Features Guide" states
	that "Apple Guides developed for use with the Apple Guide Macintosh system
	extensions" can be used when integrating context-sensitive Help into an
	application.
	
	These Apple Guides need to have a type of "help" and a Creator of "reno." "poco"
	is another common "Type for Apple Guides."
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. From the Visual FoxPro Command window, type the following command:
	
	  " SET HELP TO GETFILE() " (without the quotation marks)
	
	  When the open dialog box appears, check the All Files check box and find an
	  Apple Guide. If you have not developed a specific Apple Guide for use with
	  Visual FoxPro, many Macintoshes have the AppleCD Audio Player that installs
	  the AppleCD Audio Player Guide in the "Apple Extras:AppleCD Audio Player"
	  folder. This Apple Guide has a Type of "poco" so you should receive the error
	  message when you call Help if Help is set to this file.
	
	2. Call Help in Visual FoxPro.
	
	Additional query words: vfoxmac kbdsd
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	
	=============================================================================
	
