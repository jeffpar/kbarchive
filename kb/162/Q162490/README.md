---
layout: page
title: "Q162490: WD97: How to Access Sample Macros for Word 97"
permalink: kb/162/Q162490/
---

## Q162490: WD97: How to Access Sample Macros for Word 97

	Article: Q162490
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbualink97 kbusage kbdta
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Word 97 for Windows includes three templates that contain sample macros that are
	not immediately available after you install Word. After you run a Complete
	installation of Word 97 for Windows, the following files are copied to a Macros
	folder in the default directory, C:\Program Files\Microsoft
	Office\Office\Macros:
	
	  Convert8.wiz
	  Macros8.dot
	  Support8.dot
	
	This article discusses information about these templates and macros as well as
	how to access these macros.
	
	MORE INFORMATION
	================
	
	To access the Word sample macros, follow these steps:
	
	1. Make sure the macros were installed by Setup.
	
	  The macros are installed if you performed a Custom installation and explicitly
	  chose to install the macros or if you chose the Select All button to install
	  all of the Office or Word program. In the Office Setup program, the macros
	  can be found under Microsoft Word, Wizards and Templates, and then Macro
	  Templates. For additional information, please see the following article in
	  the Microsoft Knowledge Base:
	
	  
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	
	2. Decide how often you will use the macros. If you will only be using the
	  macros occasionally, or if you want to see what the macros do before you
	  decide whether you want to make them easily accessible, use Method 1. If you
	  will be using the macros often, use either of the options discussed in Method
	  2.
	
	Method 1: If You Will Be Using the Macros Occasionally
	------------------------------------------------------
	
	If you will be using the macros occasionally (or if you want to see what they do
	before you decide to make them easily accessible), add the macro templates as
	global templates.
	
	NOTE: When you load a template or add-in, it remains loaded for the current Word
	session. If you quit and then restart Word, the template or add-in is not
	automatically reloaded.
	
	To add one of the files listed in the "Summary" section as a global template,
	follow these steps:
	
	1. On the Tools menu, click Templates and Add-Ins.
	
	2. Under Global Templates and Add-ins, click Add.
	
	3. In the Look in box, change the folder to C:\Program Files\Microsoft
	  Office\Office\Macros, and in the Files of type box, select All Files(*.*).
	
	4. Click Convert8.wiz, and then click OK.
	
	5. Repeat steps 3-4 for the Macros8.dot and Support8.dot files.
	
	6. After all files appear in the Templates and Add-ins dialog box, make sure you
	  select the check box for the ones you want to load, and then click OK.
	
	Method 2: If You Will Be Using the Macros Often
	-----------------------------------------------
	
	Option 1: Move the Templates into the Startup Folder:
	
	Word automatically has access to any macros in templates that are placed in the
	Microsoft Office\Office\Startup folder. Using Windows Explorer, place copies of
	the Convert8.wiz, Macros8.dot, or Support8.dot files into the Startup folder.
	
	When you restart Word, these templates become global templates, and the macros
	are visible in the Macro dialog box. A disadvantage of this method is that Word
	takes a bit longer to start (each time it starts, it loads these templates
	globally).
	
	Option 2: Copy the Macros into the Normal Template:
	
	Follow these steps to copy the macros into the Normal template (Normal.dot):
	
	1. Open Convert8.wiz.
	
	2. On the Tools menu, click Templates and Add-Ins, click Organizer, and then
	  select the Macro Project Items tab.
	
	3. The macros in the Convert8.wiz template should be listed on one side of the
	  dialog box. Normal.dot should be open on the other side.
	
	4. Select the macros in Convert8.wiz, and then click the Copy button. Click OK
	  to close the Organizer.
	
	5. Repeat steps 1-4 for Macros8.dot and Support8.dot.
	
	The Convert8.wiz is a wizard that contains the following useful macros to
	simplify converting and changing conversion options:
	
	 Macro                     Explanation and Notes
	 -----------------------------------------------------------------------
	 AutoNew.Main              When opening a new document based on
	                           Convert8.wiz, it presents a dialog box
	                           and asks whether you want to perform a batch
	                           conversion of files. Selecting this starts the
	                           macro StartConversionWizard. It also asks 
	                           whether you want to edit converter or filter
	                           options. Selecting this option starts the macro
	                           EditConversionOptions.
	
	 AutoOpen.Options          This macro runs when you open the 
	                           Convert8.wiz file and asks the same questions
	                           as listed in the explanation and notes to the
	                           AutoNew.Main macro.
	
	 EditConversionOptions     This macro allows you to set text and graphics
	                           converter filter options from within Word.
	
	 StartConversionWizard     This macro allows you to convert multiple
	                           files of the same file format at the same
	                           time.
	
	The Macros8.dot template contains the following macros you can use in your
	general work with Word for Windows. When this template is loaded, a Sample Macro
	toolbar appears. These macros are designed to be run using the Sample Macro
	toolbar. It lists the following macros:
	
	  ANSI Value
	  AutoCorrectUtility
	  FindSymbol
	  InsertFootnote
	  TableCellHelper
	  SuperDocStatistics
	  NormalViewHeaderFooter
	  CopySpike
	
	        Add Selection to Spike
	        Insert Spike Contents
	        Clear Spike Contents
	        Preview Spike
	
	When you click Tools, point to Macro, and click on Macros, you see the following
	listed macros:
	
	  Macro                     Explanation and Notes
	  ---------------------------------------------------------------------
	  AddSelectionToSpike       Component of CopySpike (found on the Sample
	                            macro toolbar).
	
	  AddToStd
	
	  ANSIValue                 Displays the ANSI value of the selected
	                            character.
	
	  AutoCorrectUtil           Creates a backup copy of all AutoCorrect
	                            entries.
	
	  ClearSpikeEnties          Component of CopySpike.
	
	  FindSymbol                Finds and replaces symbol characters.
	
	  InsertFootnote            Inserts footnotes formatted for the Chicago
	                            Manual of style or MLA specifications.
	
	  InsertSpikeContents       Component of CopySpike.
	
	  NormalViewHeaderFooter    View a document Header/Footer pane while in
	                            Normal view.
	
	  previewspike              Component of CopySpike.
	
	  SuperDocStatistics        Displays formatting and section information
	                            for the current document.
	
	  SuperDocStatStart         Component of the SuperDocStatistics
	
	  TableCellHelper           Displays the row and column reference in the
	                            current table cell.
	
	The Support8.dot template contains the following useful macros for setting
	printer driver options and for changing registry settings for Word for Windows:
	
	  Macro                     Explanation and Notes
	  --------------------------------------------------------------------
	  PrintFlags                Set advanced printer flags
	
	  RegOptions                Lets you modify registration settings that
	                            affect Word.
	
	Additional query words: word8 word97 8.0 vb vba vbe shipped included
	
	======================================================================
	Keywords          : kbualink97 kbusage kbdta 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
