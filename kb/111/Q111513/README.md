---
layout: page
title: "Q111513: PRB: Application Tries to Locate Menu"
permalink: /kb/111/Q111513/
---

## Q111513: PRB: Application Tries to Locate Menu

	Article: Q111513
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5,2.5x,2.6,2.6a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5x, 2.6, 2.6a 
	- Microsoft FoxPro for Macintosh, versions 2.5x, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A procedure called from a menu may bring up a "Where is MENUNAME?" dialog box to
	locate the .MPR file.
	
	CAUSE
	=====
	
	A FoxPro application looks for an .MPX or .MPR file in the application when
	running a procedure. Therefore, it is necessary to have a valid .MPX or .MPR
	file. In order for the application to find the .MPX or .MPR file, a LOCFILE
	command is used in the system-generated code to locate the menu program. It
	looks for the menu program files in the following order:
	
	  .MPX
	  .MPR
	  .FXP
	  .PRG
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project called TEST.
	
	2. Create a new menu called TEST that is created using the Quick Menu command on
	  the Menu menu.
	
	3. From the File menu, choose Exit, and change the BAR# to PROCEDURE. Choose the
	  Create button and type:
	
	          CLEAR READ ALL
	          SET SYSMENU TO DEFAULT
	
	4. Create an option on the File menu that has a prompt of 'First wait window'.
	  Change BAR# to COMMAND. Type:
	
	          WAIT WINDOW 'One'
	
	5. Create another option on the File menu that has a prompt of 'Second wait
	  window'. Change BAR# to PROCEDURE. Choose the Create button and type:
	
	          WAIT WINDOW 'Two'
	
	6. Build the .APP.
	
	7. Compile TEST.MPR into TEST.MPX.
	
	8. Go into Filer and rename TEST.MPR to TEST1.MPR. Also rename TEST.MPX to
	  TEST1.MPX.
	
	9. Run the application. Choose the item to run the first WAIT window. Then,
	  choose the second WAIT window.
	
	  In FoxPro for MS-DOS or Foxpro for Windows, the dialog box "Where is TEST"
	  should appear.
	
	  In FoxPro for Macintosh, the system error message "Procedure 'system generated
	  procname' not found." should appear.
	
	10. Press CTRL+F2 to open the Command window, and the issue the following
	  command:
	
	         SET SYSMENU TO DEFAULT
	
	11. Go into Filer and rename TEST1.MPR to TEST.MPR and rename TEST1.MPX to
	  TEST.MPX.
	
	Rerun the application. The "Where is TEST" dialog box should not appear now.
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin 2.50 2.50a 2.50b 2.50c "procedure not found" MBuilder
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro260aMac kbFoxPro200DOS kbFoxPro260DOS kbFoxPro260aDOS kbFoxPro260 kbFoxPro250 kbFoxPro260a kbVFP300
	Version           : MACINTOSH:2.5x,2.6a; MS-DOS:2.0,2.5x,2.6,2.6a; WINDOWS:2.5,2.5x,2.6,2.6a,3.0
	
	=============================================================================
	
