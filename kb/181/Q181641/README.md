---
layout: page
title: "Q181641: WD97: How to Create an Exclude Dictionary"
permalink: /kb/181/Q181641/
---

## Q181641: WD97: How to Create an Exclude Dictionary

	Article: Q181641
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta word97
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, make sure you understand how to restore it if
	a problem occurs. For information about how to do this, click Help in
	Registry Editor, click the Contents tab, and click to view the "Restoring
	the Registry" topic.
	
	SUMMARY
	=======
	
	This article describes how to create an exclude dictionary. An exclude
	dictionary contains words that the main dictionary recognizes as being spelled
	correctly, but that you want questioned during a spelling check. Using an
	exclude dictionary allows you to specify preferred spellings for certain words.
	
	MORE INFORMATION
	================
	
	Creating an Exclude Dictionary
	------------------------------
	
	To create an exclude dictionary, follow these steps:
	
	1. In a new, blank document, type the words that you want to put in the exclude
	  dictionary. After typing each word, press ENTER to make each word a separate
	  paragraph, for example:
	
	  center
	  theater
	
	2. On the File menu, click Save As. Make sure that you save the exclude
	  dictionary in the same folder that contains the main dictionary.
	
	  NOTE: The main dictionary is usually located in the following folder:
	
	  c:\Program Files\Common Files\Microsoft Shared\Proof
	
	  NOTE: If you cannot find the main dictionary, see the "Determining the Name
	  and Path of the Main Dictionary" section later in this article.
	
	3. In the Save File As Type box, select Text Only.
	
	4. In the File Name box, type a name for the exclude dictionary.
	
	  The exclude dictionary must have the same name as the main language dictionary
	  (the American English dictionary is Mssp2_en.lex) with which it is
	  associated. However, it must have the file name extension of .exc. The
	  exclude dictionary file name for the American English dictionary must be
	  named Mssp2_en.exc.
	
	5. Click OK.
	
	  If Word prompts you to confirm that you want to save the file with formatting
	  that will not be saved in text format, click Yes, and then click Text Only.
	
	Determining the Name and Path of the Main Dictionary
	----------------------------------------------------
	
	Use the RegOptions macro:
	
	The name and path of the main dictionary can be found using the RegOptions macro
	that is contained in the Support8.dot template.
	
	1. If Support8.dot is already loaded globally, skip to step 2. Otherwise, follow
	  these steps:
	
	  a. On the Tools menu, click Templates And Add-Ins.
	
	  b. Click Add to add a global template.
	
	  c. Locate the Support8.dot file (usually located in the \Program
	     Files\Microsoft Office\Office\Macros folder).
	
	     NOTE: If the Macros folder does not exist on your computer, the macros may
	     not have been installed when you set up Word. If so, you need to run Word
	     Setup again and select the Macros option.
	
	  d. Select the template and click OK twice.
	
	2. On the Tools menu, point to Macros and then click Macro.
	
	3. Verify that Support8.dot is selected in the Macros In list.
	
	4. In the Macros list, select the RegOptions macro and then click Run.
	
	5. Select the Word 8.0 Options tab, select Tools-Path in the Option box, and
	  look at the path in the Setting box.
	
	-or-
	
	Look in the Windows Registry:
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	For information about how to edit the registry, view the Changing Keys And Values
	online Help topic in Registry Editor (Regedit.exe). Note that you should
	understand how to restore the registry if a problem occurs after you edit it.
	For information about how to do this, click Help in Registry Editor, click the
	Contents tab, and click to view the "Restoring the Registry" topic.
	
	1. To open the registry, click Run on the Start menu, and type "REGEDIT"
	  (without the quotation marks).
	
	2. Locate and view the following registry key:
	
	    HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing
	    Tools\Spelling\1033\Normal
	
	3. The Normal key contains the value names and value data to the Dictionary and
	  Engine files.
	
	  NOTE: The Dictionary has a .lex file extension.
	
	4. Close the registry without making any changes.
	
	Additional query words: spell check dictionary exclude custom proof tools exception howto
	
	======================================================================
	Keywords          : kbdta word97 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbhowto
	
	=============================================================================
	
