---
layout: page
title: "Q162000: BUG: Visual FoxPro/Mac Setup Wizard Cannot Copy Source Files"
permalink: /kb/162/Q162000/
---

## Q162000: BUG: Visual FoxPro/Mac Setup Wizard Cannot Copy Source Files

	Article: Q162000
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b
	Operating System(s): 
	Keyword(s): kbHWMAC kbvfp
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click the Finish button in the Visual FoxPro for Macintosh Setup
	Wizard, a WAIT WINDOW appears with the message "Copying the source code files .
	. ." followed by the following error message:
	
	  The Setup Wizard was unable to make a copy of your source files.
	  Setup terminated.
	
	But the source files are indeed copied and a new folder is created with the
	original name of the source folder plus the word "copy." But the Setup Wizard is
	terminated.
	
	CAUSE
	=====
	
	This is known to happen if there are too many files in the source folder and
	subfolders (called the Distribution Tree Folder in Step 1 of the Setup Wizard).
	This problem is usually encountered when there is about 300 files in the source
	folder or subfolders. The exact number has not been determined. This problem has
	been seen when there were as few as 125 files in the source folder. It appears
	that it is a combination of the number and size of the files.
	
	RESOLUTION
	==========
	
	There can be a number of solutions to this problem, depending on the needs of
	the application and the developer. Some possible solutions follow:
	
	1. Reduce the number of files that the application uses.
	
	  Sometimes developers distribute empty tables or report files as separate
	  files. These can be marked as included files in the project and built into
	  the executable file. If the table structure is needed, it can be copied out
	  of the executable with the COPY TO command. The same is true with reports.
	  The .frx file can be USEd (it is just a table) and the COPY TO command used
	  to copy it out to a report file that is external to the executable so it can
	  be modified. The implementation of this and the interface in the application
	  is left to the developer.
	
	2. Create two sets of installation disks. One set would have the executable and
	  other supporting files included by selecting the various check boxes in Step
	  #2 of the Setup Wizard. The other set of distribution disks would contain the
	  numerous supporting files the developer needs for the application. They would
	  be compressed by running the Setup Wizard but not choosing a platform nor any
	  of the other options in Step #2 of the Setup Wizard. Both sets of
	  distribution disks would be installed into the same folder.
	
	3. Use one of the other commercially available setup programs. Two that
	  Microsoft is aware of are InstallerMaker from Aladdin Systems Inc. and
	  Installer VISE from Mind Vision Software. There should be others also. The
	  Web site addresses for each are below:
	
	  http://www.aladdinsys.com
	  http://www.mindvision.com
	
	  Aladdin Systems, Inc. and MindVision Software are vendors independent of
	  Microsoft; we make no warranty, implied or otherwise, regarding their
	  products' performance or reliability.
	
	4. Make sure that neither of the Visual FoxPro Support Library files are in the
	  Distribution Tree folder (the source folder). They are automatically included
	  when the platform is specified in step #2 of the Setup Wizard. Including one
	  or both of those files has been known to cause this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	If this error message is received but the copy of the source folder is not
	created, see the following article in the Microsoft Knowledge Base:
	
	  Q155890 PRB: FoxPro for Mac's Setup Wizard Can't Copy Source Files
	
	
	One sign that there are too many files is to run the Setup Wizard, specifying the
	source folder that is suspected to contain the excess files, but do not specify
	a platform in Step #2 of the Setup Wizard. When a platform is not check, the
	Setup Wizard should run to completion when it had failed previously with a
	platform selected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the Setup Wizard, specifying a source folder that contains more than 300
	files.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbHWMAC kbvfp 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac
	Version           : MACINTOSH:3.0b
	Issue type        : kbbug
	
	=============================================================================
	
