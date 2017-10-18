---
layout: page
title: "Q156057: PRB: EXE with Included CONFIG.FPW Does Not Allow -C Option"
permalink: kb/156/Q156057/
---

## Q156057: PRB: EXE with Included CONFIG.FPW Does Not Allow -C Option

	Article: Q156057
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbenv kbvfp500 kbvfp600
	Last Modified: 14-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a CONFIG.FPW configuration file is marked as Included within the Project
	Manager and this project is built into an EXE file, the -C Command line cannot
	be used to override the built-in CONFIG.FPW.
	
	WORKAROUND
	==========
	
	You can work around this problem in one of two ways:
	
	- Do not add the CONFIG.FPW to the project. Or, add it to the project but mark
	  it Excluded. The CONFIG.FPW must be provided as a separate file but it can be
	  overridden with a -c or -c<other config filename>.
	
	-or-
	
	- Give the configuration file a name other than CONFIG.FPW. The configuration
	  file must always be specified on the Command line to be utilized but can be
	  overridden by specifying -c or -c<other config filename>.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project, TEST.PJX.
	
	2. Add a main program, TEST.PRG, with the following contents:
	
	     =Messagebox("Main program!")
	
	3. Create a CONFIG.FPW file with the following contents:
	
	     TITLE=Built in CONFIG was used
	
	4. Add the CONFIG.FPW file to the project as a Text File. It will be marked
	  Included by default.
	
	5. Build an executable, TEST.EXE.
	
	6. Create an alternate config file, OTHER.FPW, with the following contents:
	
	     TITLE=Alternate CONFIG
	
	7. From the Win95 RUN menu, execute:
	
	  C:\<directory with EXE>\TEST.EXE -cOTHER.FPW
	
	Despite the -c to override the built-in CONFIG file, the main Visual FoxPro
	window appears with the title of "Built in CONFIG was used," demonstrating that
	the built-in CONFIG.FPW file was used rather than OTHER.FPW.
	
	There are two methods to work around the problem in the above example.
	
	Method 1:
	---------
	
	Under step 4 above, add the following:
	
	  4a. In the Project Manager, right-click on the Config file and select
	      Exclude.
	
	Method 2:
	---------
	
	Change step 3 above to read:
	
	1. Create a MYCONFIG.FPW file with the following contents:
	
	        TITLE=Built in CONFIG was used
	
	Change step 4 above to read:
	
	1. Add the MYCONFIG.FPW file to the project as a Text File. It will be marked
	  Included by default.
	
	Now the built-in configuration file, MYCONFIG.FPW, can be utilized only by
	specifying the configuration file, such as C:\<directory with
	EXE>\TEST.EXE -cMYCONFIG.FPW. Use of -c will cause no configuration file to
	be used, and -cOTHER.FPW will allow OTHER.FPW to be used.
	
	Additional query words: kbdse VFoxWin
	
	======================================================================
	Keywords          : kbenv kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Version           : WINDOWS:5.0,6.0
	
	=============================================================================
	
