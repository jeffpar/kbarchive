---
layout: page
title: "Q317466: HOWTO: Remove Buttons from the Print Preview Toolbar"
permalink: /kb/317/Q317466/
---

## Q317466: HOWTO: Remove Buttons from the Print Preview Toolbar

	Article: Q317466
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0,7.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700
	Last Modified: 24-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to remove buttons from the Print Preview toolbar and
	how to use the toolbar in an executable.
	
	MORE INFORMATION
	================
	
	The following steps describe how to remove the Print button from the Print
	Preview toolbar. The Print button is used as an example. However, any of the
	buttons can be removed. You may want to remove the Print button, for example, if
	you want users of your application to be able to preview a report but not to
	print it.
	
	1. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  LOCAL lcResourceFileStem
	  IF '05.'$VERSION()  && 	Foxtools required in VFP5
	  	SET LIBRARY TO HOME()+'foxtools.fll'
	  ENDIF
	  SET SAFETY OFF
	
	  lcResourceFileStem = ADDBS(JUSTPATH(SYS(2005)))+JUSTSTEM(SYS(2005))
	  SET RESOURCE OFF
	  * Copy the current resource file to NoPrint which is
	  * used to store changes to the Print Preview toolbar.
	  COPY FILE (lcResourceFileStem + ".dbf") ;
	  	TO noprint.DBF
	  COPY FILE (lcResourceFileStem + ".fpt") ;
	  	TO noprint.fpt
	
	  * Remove current settings by deleting all records in the table.
	  USE noprint.DBF EXCLUSIVE
	  ZAP
	  USE
	  CLOSE ALL
	
	  * Create a table to use for a simple report and put some data in it.
	  DELETE FILE PrintTest.DBF
	  CREATE TABLE PrintTest (NAME C(30), Address C(20), City C(20), State C(2))
	  INSERT INTO PrintTest VALUES ("Jodie Garber", "1234 Jones St", "Phoenix", "AZ")
	  INSERT INTO PrintTest VALUES ("Holly Johnson", "675 Smith St", "Chicago", "IL")
	  INSERT INTO PrintTest VALUES ("Jack Reacher", "968 Duvall Street", "Key West", "FL")
	  INSERT INTO PrintTest VALUES ("Beau Borken", "1515 Main St", "York", "MT")
	
	  * Create a report and preview it.
	  CREATE REPORT PrintTest FROM PrintTest COLUMN<BR/>
	  USE IN PrintTest
	  SET RESOURCE TO noprint.DBF
	  REPORT FORM PrintTest PREVIEW NOWAIT
	  IF '05.'$VERSION()  && 	Turn off Foxtools in VFP5
	  	SET LIBRARY TO
	  ENDIF
	  RETURN
	
	2. Right-click the Title bar of the Print Preview toolbar, and then click
	  Customize. If the Print Preview toolbar is docked, you can right-click
	  between the buttons of the toolbar.
	
	3. Under Categories, click Print Preview, and then click the Print button and
	  drag it off the toolbar.
	
	4. Click the Close button to close the Customize Toolbar dialog box.
	
	5. Click the Close button on the Print Preview toolbar to close the Print
	  Preview toolbar.
	
	6. Type the following command in the Command window:
	
	  SET RESOURCE OFF
	
	7. Paste the following code in a program (.prg) file, and then run the program
	  from the Command window:
	
	  Note: This step is used to demonstrate that the Print button has been removed
	  from the Print Preview toolbar. The code will run in Visual FoxPro 6.0 and
	  later, but the steps that are described earlier can be used in Visual FoxPro
	  5.0. You can test in Visual FoxPro 5.0 by manually generating a project that
	  has a main program that contains the SET RESOURCE TO NoPrint, and the REPORT
	  FORM command.
	
	  #DEFINE CRLF CHR(13) + CHR(10)
	
	  LOCAL cMain
	
	  CLOSE ALL
	  * Delete any projects with the same name.
	  DELETE FILE PrintTest.PJ?
	  SET SAFETY OFF
	  * Open the table used by the report.
	  cMain = "USE PrintTest " + CRLF 
	
	  * Set the resource file to the one that does not have 
	  * a print button on it.
	  cMain = cMain + "SET RESOURCE TO NoPrint" + CRLF
	  cMain = cMain + "REPORT FORM PrintTest PREVIEW" + CRLF
	
	  * Save the string cMain to main.prg.
	  STRTOFILE(cMain,"Main.Prg")
	
	  * Create a project and add all the files that the project needs.
	  CREATE PROJECT PrintTest NOWAIT
	  _VFP.ActiveProject.Files.Add("Main.Prg")
	  _VFP.ActiveProject.Files.Add("PrintTest.Frx")
	
	  * Add the resource file that the print button was removed
	  * from and include it in the executable. This makes it read only.
	  * If the resource file is read only, changes made to the 
	  * environment at runtime will not be saved. 
	  _VFP.ActiveProject.Files.Add("NoPrint.Dbf")
	  _VFP.ActiveProject.Files.Item(3).Exclude = .F.
	
	  * Compile the project into an executable.
	  _VFP.ActiveProject.Build("PrintTest.Exe",3,.T., .T.)
	
	8. Run PrintTest.exe and note that the toolbar does not have a Print button. You
	  can double-click PrintTest.exe in Windows Explorer to run the program, or you
	  can run the following command from the Command window:
	
	  RUN /N PrintTest.exe
	
	9. Click the Close button on the Print Preview toolbar to close the toolbar.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbReportWriter kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP700 kbVFP500a
	Version           : :5.0,5.0a,6.0,7.0
	Issue type        : kbhowto
	
	=============================================================================
	
