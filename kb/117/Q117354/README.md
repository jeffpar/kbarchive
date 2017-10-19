---
layout: page
title: "Q117354: Distributing Help Files for FoxPro for the Macintosh"
permalink: /kb/117/Q117354/
---

## Q117354: Distributing Help Files for FoxPro for the Macintosh

	Article: Q117354
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; :2.5b,2.5c
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro Distribution Kit for Macintosh, versions 2.5b, 2.5c 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your application includes a graphical Help file, you can also distribute the
	Microsoft Help engine by adding the "FoxPro Help" and "Microsoft Help" files to
	your application folder. These two files are located in the System
	Folder:Extensions:Microsoft:Help folder. These files were omitted from the list
	of distributable files on page 8 of the "User's Guide" for the FoxPro for
	Macintosh Distribution Kit. However, they are listed as distributable files in
	the "DK ReadMe" file.
	
	With Visual FoxPro for Macintosh, you can include graphical help in a distributed
	application by selecting this option in the Setup Wizard.
	
	NOTE: As listed on page 8 of the Distribution Kit "User's Guide," the
	FOXHELP.DBF, FOXHELP.FPT, and FOXHELP.HLP files in the FoxPro folder CANNOT be
	distributed.
	
	MORE INFORMATION
	================
	
	Help files are created using Microsoft Word for Windows or Microsoft Word for
	the Macintosh. The rich-text format (RTF) files created by Word must be compiled
	with the Windows Help compiler.
	
	A floppy disk titled "Disk 1 MS-DOS Series" is included with the FoxPro for
	Macintosh Distribution Kit. This disk contains the files you need to compile the
	RTF files under Windows. It is an MS-DOS-formatted disk, not a
	Macintosh-formatted disk. This disk contains the following files:
	
	  HC35.EXE
	  HC35.ERR
	  SHED.EXE
	  SHED.HLP
	  MRBC.EXE
	
	REFERENCES
	==========
	
	Distribution Kit "User's Guide," page 8
	Distribution Kit "DK ReadMe" file, "Part 2: Other Additional Information," "#7,
	Distributable Files"
	
	Additional query words: vFoxMac 3.00b FoxMac 2.50b 2.50c dk docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbAudDeveloper kbFoxproSearch kbFoxProDK250bMac kbFoxProDK250cMac
	Version           : MACINTOSH:3.0b; :2.5b,2.5c
	
	=============================================================================
	
