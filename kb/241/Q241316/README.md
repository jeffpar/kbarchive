---
layout: page
title: "Q241316: WD97: Word Count Macro Available to Count Words in a Selection"
permalink: /kb/241/Q241316/
---

## Q241316: WD97: Word Count Macro Available to Count Words in a Selection

	Article: Q241316
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97 kbofficeupdate
	Last Modified: 26-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft Word 2000 version of this article, see Q241333.
	
	SUMMARY
	=======
	
	Microsoft has available a Selection Word Count macro that counts the words in
	the selected text. The macro also counts the words contained in footnotes and
	endnotes for the selected text that contains footnote or endnote references.
	
	The following is an example of the dialog box that the Selection Word Count macro
	displays after you run the macro:
	
	  
	
	  Total                            45
	  Number of words in main body     45
	  Number of words in footnotes      0
	  Number of words in endnotes       0
	
	MORE INFORMATION
	================
	
	The Word Count feature currently available on the Tools menu in Word 97 allows
	you to count the number of words and characters in an entire document you are
	working on and gives you the option of including footnotes and endnotes.
	However, if you do a word count on a selection of text, then you cannot include
	footnotes and endnotes that are referenced in that selection.
	
	Installing this macro gives you the option of counting the words in footnotes and
	endnotes for selected text that contains footnote or endnote references.
	
	How to Obtain the Selection Word Count Macro
	--------------------------------------------
	
	The Selection Word Count file, Swcmacro.exe, is available from the following
	Microsoft Web site:
	
	  http://office.microsoft.com/downloads/2000/swcmacro.aspx
	
	How to Install the Selection Word Count Macro
	---------------------------------------------
	
	The Selection Word Count macro can be installed in the Word startup folder, your
	default template (Normal.dot), or any template you prefer. If you run Word from
	a network, you may want to contact your network administrator to determine the
	best way to install this macro in your environment.
	
	1. Download the Swcmacro.exe file by clicking Download Now! at the top left of
	  the Web page, and follow the instructions in the dialog boxes.
	
	  For example, after you click Download Now!, you are prompted with a message
	  similar to the following:
	
	  You have chosen to download a file from this location.
	
	  swcmacro.exe from m.officeupdate.microsoft.com
	
	  What would you like to do with this file?
	
	2. Click to select "Save this program to disk" and click OK.
	
	3. In the Save As dialog box, change the Save in box to the folder where you
	  want to save the Swcmacro.exe file, and then click Save.
	
	4. After the download has completed, click Close to close the download dialog
	  box.
	
	5. Double-click the Swcmacro.exe program file on your hard disk to start the
	  Setup program.
	
	6. Word automatically opens a document that contains instructions on how to
	  install the Selection Word Count macro. Make sure you choose Enable Macros if
	  prompted.
	
	  IMPORTANT: If you have macro virus protection turned on, you will be prompted
	  to disable macros when opening the Selection Word Count.dot template or when
	  you install the Swcmacro.exe file. If you choose to disable macros, you will
	  not be able to install the Word Count macros. Close and then reopen the
	  Selection Word Count.dot template, or reinstall the Swcmacro.exe file,
	  choosing Enable Macros when prompted.
	
	7. Read and follow the instructions carefully.
	
	8. Close the document when you are finished.
	
	How to Use the Selection Word Count Macro
	-----------------------------------------
	
	The Selection Word Count toolbar can be accessed like any other toolbar in Word.
	On the View menu, point to Toolbars, and then click to select Selection Word
	Count to turn the toolbar on. To turn it off, on the View menu, point to
	Toolbars, and then click to clear Selection Word Count.
	
	To run the Selection Word Count macro, click the Selection Word Count button.
	
	NOTE: You must have text selected before you click the Selection Word Count
	button, or the following message will be displayed:
	
	  Please select some text then rerun the Selection Word Count Macro.
	
	There are two check boxes in the dialog box that is displayed when you run the
	Selection Word Count macro, as follows:
	
	- When the "Include footnotes referenced in selection" check box is selected,
	  the number of words contained in the footnotes referenced in the selected
	  text will be included in the total.
	
	- When the "Include endnotes referenced in selection" check box is selected,
	  the number of words contained in the endnotes referenced in the selected text
	  will be included in the total.
	
	NOTE: These check boxes are dynamic. That is, when you click to clear the check
	box, the totals are changed automatically in the dialog box.
	
	How to Uninstall the Selection Word Count Macro
	-----------------------------------------------
	
	If the Selection Word Count macro was installed in the Startup folder, do the
	following to uninstall it:
	
	1. To find your Startup folder in Word, click Options on the Tools menu, and
	  click to select the File locations tab.
	
	  NOTE: If you cannot see the full path to the Startup folder, click to select
	  Startup in the File types list, and click Modify. Write down the full path to
	  the Startup folder, and click Cancel.
	
	  By default, the Startup folder can be found at the following location:
	
	  C:\Program Files\Microsoft Office\Office\Startup
	
	2. Close the Options dialog box by clicking Cancel.
	
	3. On the File menu in Word, click Exit to quit Word.
	
	4. Right-click the Windows Start menu, and click Explore.
	
	5. In Windows Explorer, open the Startup folder you found in step 1 and delete
	  Selection Word Count.dot.
	
	If the Selection Word Count macro was installed in the Normal.dot template, do
	the following to uninstall it:
	
	1. Close all open documents, but leave Word running.
	
	2. On the Tools menu, point to Macro, and then select Macros.
	
	3. Click Organizer.
	
	4. Click to select the Macro Project Items tab.
	
	5. The left box should say "In Normal.dot." If it does not, click Close File,
	  and then click Open File. Select Normal.dot, and click Open.
	
	6. In the list box on the left, select SelectionWordCount and click Delete.
	
	7. Click to select Swcmacro.exe and then click Delete.
	
	8. Click to select the Toolbars tab.
	
	9. Click to select Selection Word Count and then click Delete.
	
	10. Click Close to quit the Organizer.
	
	11. Quit and restart Word.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 word97 kbofficeupdate 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
