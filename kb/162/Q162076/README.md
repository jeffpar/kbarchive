---
layout: page
title: "Q162076: HOWTO: Converting VFP Files from Version 3.0 to 5.0 and Back"
permalink: /kb/162/Q162076/
---

## Q162076: HOWTO: Converting VFP Files from Version 3.0 to 5.0 and Back

	Article: Q162076
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b 5.00
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbprogramming kbtool kbvfp
	Last Modified: 09-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Running or modifying Visual FoxPro 3.0 forms, class libraries, database
	containers, report/label files, programs, or menu files in Visual FoxPro 5.0
	causes any program code to be recompiled under Visual FoxPro 5.0. This may
	render some of these items no longer able to be run or modified under Visual
	FoxPro 3.0. Attempting to run or modify forms, classes, database containers, or
	report/label files in Visual FoxPro 3.0 after they have been recompiled under
	Visual FoxPro 5.0 yields an error similar to the following:
	
	  Error loading file - Methods - record number <n>. Object file <drive
	  and directory>\<filename> was compiled in a previous version of
	  FoxPro.
	
	  -or-
	
	  Object file <drive and directory>\<filename> was compiled in a
	  previous version of FoxPro.
	
	You can take steps to allow the running or modifying of files containing Visual
	FoxPro 5.0-compiled code under Visual FoxPro 3.0. This article explains the
	basics of conversion, and the steps you can take to "go back," if desired.
	
	MORE INFORMATION
	================
	
	Converting with a Project
	-------------------------
	
	1. Opening a Visual FoxPro 3.0 project in Visual FoxPro 5.0 invokes the
	  Converter and converts the project. Because the structure of the project file
	  itself is different in Visual FoxPro 5.0, the project file cannot be reopened
	  in Visual FoxPro 3.0 after conversion. It is highly recommended to accept the
	  "Backup files" option to allow the Converter to create backup files for all
	  converted files--the "Backup files" check box in the Converter dialog box is
	  selected by default. Unless you specify a different directory, these backup
	  files, including the project's .pjx and .pjt files, are placed in a
	  subdirectory of the project's home directory called \Old.
	
	2. It is important to note that some default property values have changed from
	  Visual FoxPro 3.0 to Visual FoxPro 5.0. These include the FontBold and
	  FontSize properties of the Label control, for example. These changes were
	  made for compatibility with Windows interface standards. Upon conversion,
	  these properties continue to have default values, but these default values
	  are different under Visual FoxPro 5.0.
	
	  If you wish to retain the Visual FoxPro 3.0 defaults for these properties, you
	  must do the following:
	
	  a. Forms or class libraries containing these controls must be converted by
	     converting a project that contains them.
	
	  b. The "Retain Visual FoxPro 3.0 default property values" check box must be
	     selected in the Converter dialog box.
	
	3. Upon conversion, any Visual FoxPro 3.0 .dbc, .vcx, .scx, .frx, or .lbx files
	  (database containers, class libraries, forms, reports, and labels,
	  respectively) within the project that contains procedure or method code are
	  automatically recompiled. If .dbc files contain no stored procedures, or
	  .vcx, .scx, .frx, or .lbx files contain no method code, recompiling is
	  unnecessary and does not occur.
	
	4. Upon conversion, all .prg and .mpr files (programs and menu programs) are
	  automatically recompiled.
	
	Converting Individual Components (.vcx, .scx, .dbc, .frx, or .lbx Files)
	------------------------------------------------------------------------
	
	1. If a Visual FoxPro 3.0 .dbc, .vcx, .scx, .frx, or .lbx file (database
	  container, class library, form, report, or label, respectively) is opened,
	  modified, or run in Visual FoxPro 5.0, the file is automatically recompiled
	  under Visual FoxPro 5.0 if it contains any method or procedure code. No
	  changes other than recompiling should occur. If a .dbc file contains no
	  stored procedures, or if .vcx, .scx, .frx, or .lbx files contain no method
	  code, recompiling is unnecessary and does not occur.
	
	  The .dbc file is an exception under one specific circumstance: If the .dbc is
	  first opened shared under Visual FoxPro 3.0, the compiled stored procedure
	  code within the .dbc will not be overwritten if subsequently opened shared
	  from Visual FoxPro 5.0. In this case, the stored procedures are compile and
	  stored locally in a temp file on the 5.0 machine. Note that opening a .dbc
	  shared within Visual FoxPro 5.0 that has not been opened in Visual FoxPro 3.0
	  will still result in a recompile.
	
	2. Menus need no conversion; the .mpx file is re-created transparently when the
	  .mpr file is run. Program (.prg) files also behave like this--they are
	  transparently recompiled and an .fxp file created for the appropriate Visual
	  FoxPro version. If the .mpr or .prg does not exist, and the .mpx or .fxp is
	  run, the following error occurs:
	
	  Object file <path\filename> was compiled in a previous version of
	  FoxPro
	
	  For more information about the Converter, view the Visual FoxPro 5.0 Help
	  File's Converter Help topic.
	
	3. Individual files may be explicitly recompiled under Visual FoxPro 5.0
	  (without opening, modifying, or running) by executing the following commands
	  from within a program file or from the Command window:
	
	  Programs:
	
	        COMPILE <.prg or .mpr filename>
	
	  Database containers:
	
	        COMPILE DATABASE <Database container (.dbc) name>
	
	  Forms:
	
	        COMPILE FORM <form (.scx) name>
	
	  Class Libraries (this command is new to Visual FoxPro 5.0):
	
	        COMPILE CLASSLIB <Class library (.vcx) name>
	
	  Reports or labels (these commands are new to Visual FoxPro 5.0):
	
	        COMPILE REPORT <report (.frx) name>
	        COMPILE LABEL <label (.lbx) name>
	
	  For more information, view the Visual FoxPro 5.0 Help File for the above
	  commands.
	
	Going Back to Visual FoxPro 3.0 from Visual FoxPro 5.0
	------------------------------------------------------
	
	1. There is no conversion for Visual FoxPro 5.0 project files back to Visual
	  FoxPro 3.0. However, the converter places, unless the Converter dialog box
	  "Backup files" check box is unselected, a copy of the project files
	  (.pjx/.pjt files, along with all other converted files) in a subdirectory of
	  the project's home directory called \Old. Original, unconverted versions of
	  all converted files may be found there.
	
	2. Databases (.dbc files) containing stored procedure code may be recompiled
	  back to Visual FoxPro 3.0 format by running the COMPILE DATABASE <database
	  name> command within Visual FoxPro 3.0. Attempting to open or modify
	  within Visual FoxPro 3.0 a .dbc file that was compiled in Visual FoxPro 5.0
	  gives an error like the following:
	
	  Object file <drive and directory>\<filename>.DBC was compiled in a
	  previous version of FoxPro.
	
	3. Forms (.scx files) containing method code may be recompiled back to
	
	Visual FoxPro 3.0 format by running the COMPILE FORM <form name> command
	within Visual FoxPro 3.0. Attempting to run or modify within Visual FoxPro 3.0
	an .scx file, which was compiled in Visual FoxPro 5.0 gives an error such as the
	following:
	
	  Error loading file - Methods - record number 3. Object file <drive and
	  directory>\<filename>.scx was compiled in a previous version of
	  FoxPro.
	
	4. Class libraries (.vcx files) containing method code may be recompiled back to
	  Visual FoxPro 3.0 format by running the COMPILE FORM <classlib name
	  including .vcx extension> command within Visual FoxPro 3.0. The COMPILE
	  CLASSLIB command is not available in Visual FoxPro 3.0, so COMPILE FORM must
	  be used, with the .vcx extension explicitly included with the file name.
	  Attempting to instantiate or modify within Visual FoxPro 3.0 a class
	  contained in a .vcx file that was compiled in Visual FoxPro 5.0 gives an
	  error such as the following:
	
	  Object file <drive and directory>\<filename>.vcx was compiled in a
	  previous version of FoxPro.
	
	5. Program and generated menu files (.prg and .mpr files) are automatically
	  recompiled into their respective .fxp and .mpx files. If the .mpr or .prg
	  does not exist, and the .mpx or .fxp is run, the following error occurs:
	
	  Object file <path\filename> was compiled in a previous version of
	  FoxPro
	
	6. There is no COMPILE REPORT command under Visual FoxPro 3.0. Report and label
	  files containing compiled code can be recompiled to Visual FoxPro 3.0 format
	  with the following program. Copy the code below into a .prg file and run the
	  .prg from the Command window, passing the report or label file to be
	  converted as a parameter (see Usage and Example below in the comment section
	  in the program header).
	
	  ******************************************************************
	  *                           CONVREPO.PRG
	  *
	  * Program to compile Visual FoxPro 5.0 .frx or .lbx file to run under
	  * Visual FoxPro 3.
	  * This is necessary only if the report or label contains code in
	  * any of its DataEnvironment methods.
	  *
	  * Usage: DO CONVREPO WITH <.frx or .lbx file including extension>
	  *
	  * Example:  DO CONVREPO WITH "myreport.frx"
	  *
	  ******************************************************************
	
	  LPARAMETER lcFrxName
	  LOCAL lcAlias, lcTmpFile
	  IF (TYPE('lcFrxName') = "C" AND UPPER('frx')$UPPER(lcFrxName)) OR ;
	        (TYPE('lcFrxName') = "C" AND UPPER('lbx')$UPPER(lcFrxName))
	
	     IF NOT FILE(lcFrxName)
	        =MESSAGEBOX('The file '+ UPPER(lcFrxName) + ' does not ' + ;
	           'exist in the default directory. '+ CHR(13)+ ;
	           'Please pass a valid report '+ ;
	           'or label filename, including extension, to this program!' ;
	           ,48, "Report/Label Code Compiler")
	        RETURN
	     ENDIF
	
	     USE (lcFrxName)
	     lcAlias = ALIAS()
	     * Look for any Data Environment object's records
	     SCAN FOR NAME='dataenvironment' ;
	           OR NAME='cursor' ;
	           OR NAME='relation'
	        IF !EMPTY(TAG)                          && Is there any code?
	           lcTmpFile = SYS(3)
	           COPY MEMO TAG TO (lcTmpFile+'.PRG')  && Copy to temp .prg
	           COMPILE (lcTmpFile)                  && Compile it
	           APPEND MEMO tag2 ;
	              FROM (lcTmpFile+".FXP") OVERWRITE && Write it back to .frx/.lbx
	           ERASE (lcTmpFile+".PRG")             && Delete temp files
	           ERASE (lcTmpFile+".FXP")
	        ENDIF
	     ENDSCAN
	     USE IN (lcAlias)
	     SET MESSAGE TO "Recompile completed"
	     WAIT "" TIMEOUT 2
	     SET MESSAGE TO
	  ELSE
	     =MESSAGEBOX('Please pass a report or label filename, '+ ;
	        'including extension, to this program!' ,48, ;
	        "Report/Label Code Compiler")
	     RETURN
	  ENDIF
	  RETURN
	  *
	  * End of CONVREPO.PRG
	  *
	  **************************************************************
	
	Attempting to run or modify within Visual FoxPro 3.0 a report or label file that
	was compiled in Visual FoxPro 5.0 gives an error such as the following:
	
	  Error loading file - Methods - record number 8. Object file <drive and
	  directory>\<filename>.FRX was compiled in a previous version of
	  FoxPro.
	
	REFERENCES
	==========
	
	Visual FoxPro 5.0 Help
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jim
	Saunders, Microsoft Corporation
	
	
	Additional query words: compatibility backward screens
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbprogramming kbtool kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : 3.00 3.00b 5.00
	Issue type        : kbhowto
	
	=============================================================================
	
