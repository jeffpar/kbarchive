---
layout: page
title: "Q220835: HOWTO: Change the Code Page of Project Files"
permalink: /kb/220/Q220835/
---

## Q220835: HOWTO: Change the Code Page of Project Files

	Article: Q220835
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbProjManager kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 20-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can change the code page settings of forms,
	reports, labels, class libraries, database containers, and text files in a
	project.
	
	MORE INFORMATION
	================
	
	To change the code page of forms, reports, labels, database containers, and
	class libraries in a project, do the following:
	
	1. Open the project in which you want to change the code page.
	
	2. If the project is under source code control, right-click the form, report,
	  label, or class library whose code page you want to change. From the Shortcut
	  menu, select Check Out, and then click OK.
	
	3. Use Cpzero.prg to change the code page of the file. To change the code page
	  of c:\MyProj\Forms\MyForm.SCX to 1252, run Cpzero.prg as follows:
	
	   DO cpzero WITH "c:\MyProj\Forms\MyForm.scx",1252
	
	  NOTE: For a database container (.dbc) file you need to close the project and
	  the .dbc file before running Cpzero.prg.
	
	4. If the project is under source code control, in the Project Manager,
	  right-click on the file that was checked out in step 2. From the Shortcut
	  menu, select Check In, and then click OK in the Check In Files dialog box.
	
	5. From the Project menu, select Project Info, and then select the Files tab in
	  the Project Information dialog box. Note that the code page for the file does
	  not appear to have changed.
	
	6. To display the latest code page, click the Update Native Code Pages button.
	
	7. Click OK to close the Project Information dialog box.
	
	8. If the project is under source code control, do the following in order for
	  other users to see the new code page:
	
	   - From the Project->Source Control menu, select the Update Project List
	     option to update the original project.
	
	   - For other users to view the new code page, they must choose Update Project
	     List, and then select the Update Native Code Pages from the Files tab of
	     the Project Information dialog box.
	
	To change the code page of text files, such as program (*.prg) files, in a
	project under source code control, do the following:
	
	1. Open the project in which you want to change the code page. From the project
	  menu, select Project Information.
	
	2. Select the Files tab. Right-click on the text file, for example MyProg.prg,
	  and, from the Shortcut menu, select the Code Page option.
	
	3. From the Code Page dialog box, select the code page that you want, and then
	  click the Select button.
	
	4. If the project is under source code control, then do the following to make
	  the changes visible to other users:
	
	   - In the Project Information dialog box, click on Update Native Code Pages,
	     and then close the dialog box.
	
	   - From the Project->Source Control menu, select the Update Project List
	     option to update the main project. For other users to view the new code
	     page, each user needs to select the Update Project List option.
	
	The code page of a project can be updated programmatically by using the project
	object. You can run the following sample code to do this.
	
	WARNING: While you can programmatically change the project using the following
	code, Microsoft does not recommend or support changes to the project in this
	manner. Please make sure to back up your files before attempting to modify your
	project.
	
	  * Start of Code
	  PARAMETERS ProjName, NewCdPg, FleExt
	     fCnt=0	&&File Count
	     **Open The Project
	     MODIFY PROJECT (ProjName+".PJX") NOSHOW NOWAIT
	     ** Get Project information
	     oCurProj=_VFP.ACTIVEPROJECT
	     ProjName = oCurProj.NAME
	     **Place File Names of Requested Type in an array
	     DIMENSION FleNmAry(oCurProj.FILES.COUNT)
	     FOR i = 1 TO oCurProj.FILES.COUNT
	        IF UPPER(RIGHT(oCurProj.FILES(i).NAME, 3)) = FleExt
	           fCnt=fCnt+1
	           FleNmAry(fCnt)= oCurProj.FILES(i).NAME
	        ENDIF
	     ENDFOR
	     **Close Project
	     oCurProj.CLOSE 
	     **Open Project as a Table and UpDate Code Pages
	     CLOSE ALL
	     USE (ProjName+".PJX") EXCLUSIVE IN 0
	     SELECT (ProjName)
	     FOR i = 1 TO fCnt
	     	UPDATE (ProjName) SET Cpid = NewCdPg;
	     		WHERE UPPER(JUSTFNAME(FleNmAry(i))) = UPPER(JUSTFNAME(NAME))
	     ENDFOR
	     **Close Project, opened as a Table
	     USE IN (ProjName)
	     MODI PROJ (ProjName) NOWAIT
	  * End of Code
	
	The preceding program sample can be called by using the following syntax:
	
	   Do CpProj WITH "ProjectName", Code Page, "FileExtension"
	
	To change the code page of all the forms (SCX) to 1252 in a project named MyProj,
	use the following command:
	
	   DO CpProj WITH "MyProj", 1252, "SCX"
	
	NOTE: The preceding program sample does not contain any error checking and
	assumes the following:
	
	- Project is not open and not empty.
	- Project exists in the current directory/path.
	- All three parameters are passed.
	- Correct code page is specified.
	- ProjName and FleExt passed as character strings.
	- Code Page passed as numeric.
	
	REFERENCES
	==========
	
	For additional information on how to set up source code control, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q157636 HOWTO: Set Up Source Code Control with Visual SourceSafe
	
	For additional information about code pages of tables in a project, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q133288 PRB: Code page Does Not Show in Project Information Screen
	
	Additional query words:
	
	======================================================================
	Keywords          : kbProjManager kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
