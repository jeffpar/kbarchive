---
layout: page
title: "Q168198: WD97: Troubleshooting Invalid Page Faults in Word 97"
permalink: kb/168/Q168198/
---

## Q168198: WD97: Troubleshooting Invalid Page Faults in Word 97

	Article: Q168198
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbenv winword word97kbfaq
	Last Modified: 20-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This document presents a systematic approach to eliminating exception error
	messages in Microsoft Word 97 for Windows running under Microsoft Windows 95.
	
	MORE INFORMATION
	================
	
	WHAT IS AN EXCEPTION ERROR?
	---------------------------
	
	An exception error signifies that something unexpected has happened within the
	Windows environment, typically an improper memory access. For example, an
	application or a Windows component might read or write to a memory location that
	has not been allocated to it (memory that it does not "own"), potentially
	overwriting and corrupting other program code in that area of memory.
	
	Fatal exception errors are typically of the form:
	
	  A fatal exception <XY> has occurred at xxxx:xxxxxxxx
	
	Fatal exception errors are codes returned by a program in the following cases:
	
	- Access to an illegal instruction has been encountered.
	
	- Invalid data or code has been accessed.
	
	- The privilege level of an operation is invalid.
	
	When any of these occur, the processor returns an exception to the operating
	system, which in turn is handled as a fatal exception error. In many cases the
	exception is non-recoverable and the system must either be restarted or shut
	down, depending on the severity of the error.
	
	In the following example of a fatal exception error
	
	  A fatal exception <XY> has occurred at xxxx:xxxxxxxx
	
	the <XY> represents the actual processor exception from 00 to 0F. The
	xxxx:xxxxxxxx represents the enhanced instruction pointer to the code segment
	and the 8-bit address is the actual address where the exception occurred.
	
	When working with Microsoft Word 97, the most common error message you get if the
	program "crashes" is an Invalid Page Fault (IPF). The error message will be
	similar to:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module <module name> at
	  <address>
	
	After you click OK, the program is shut down.
	
	For more in-depth information about exception errors, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q150314 What Are Windows 95 Fatal Exception Errors
	
	GETTING CLUES FROM THE ERROR MESSAGE
	------------------------------------
	
	The first clue as to the cause of an IPF is in the IPF error message that is
	displayed. The error message is similar to:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module <module name> at
	  <address>
	
	After you click OK, the program is shut down.
	
	Note the module name that is listed. If the module name is Winword.exe, then you
	must continue searching for the cause. Sometimes, however, the module name is a
	printer driver file, a video driver file, or some other non-Word component. If
	you can gather clues about the component that is causing the IPF, then you can
	target the specific cause of the problem.
	
	If the module name is something that sounds familiar to you, such as a printer
	driver or a video driver, see the "Troubleshooting IPFs That Occur While
	Printing or Formatting the Document" section of this article and use those
	troubleshooting steps.
	
	If the module name does not sound familiar or if you are unsure of which
	component it is a part of, you can query in the Microsoft Knowledge Base on the
	module name and you may get more information on it. Once you get to the
	Microsoft Knowledge Base Web page, use the following parameters for your query:
	
	  Product: Any Product
	  Type of Search: Search the article text
	  Search Phrase: <type in the module name from the IPF error message>
	
	For more information about searching for information in the Microsoft Knowledge
	Base, please see the following article:
	
	  Q129725 Obtaining Knowledge Base Articles on the World Wide Web
	
	Sometimes, removing and reinstalling the file mentioned in the IPF corrects the
	problem. If this does not correct the problem, or if you aren't sure how to
	remove and reinstall the file, continue troubleshooting.
	
	GETTING CLUES FROM WHEN THE ERROR OCCURS
	----------------------------------------
	
	Sometimes, noting when the error occurs can be very useful in determining the
	cause of the problem. For example, if the error occurs when printing the
	document, you should skip to the "Is the Printer Driver Damaged?" section of
	this article and try those steps first. If the error occurs when you start Word,
	then you should skip to the "Troubleshooting IPFs That Occur During Startup"
	section of this article. Otherwise, continue troubleshooting.
	
	If, after trying those steps, the error is not resolved, continue troubleshooting
	at the beginning of this article and work through the steps systematically. The
	goal is to try to get clues as to the cause of the problem and resolve it
	quickly, by trying the most likely solutions first.
	
	DETERMINING THE SCOPE OF THE PROBLEM
	------------------------------------
	
	A key part of troubleshooting IPFs is to determine how widespread the problem is.
	The following questions must be answered in order to effectively solve the
	problem:
	
	- Is the problem reproducible (can you make it happen whenever you want) or
	  does it occur at random times?
	
	- Does the problem only occur in Word, or does it occur in other applications
	  as well?
	
	- Are there specific, known issues about Word that describe your problem?
	
	- Does the problem only happen with a particular document (or a collection of
	  documents)?
	
	- Does the problem only occur at a particular time, such as when starting Word
	  or printing?
	
	The following sections of this article discuss each question and give information
	about resolving each type of problem.
	
	Is the Problem Reproducible?:
	
	If you were told to sit down at the computer and make the error happen in a
	reasonable amount of time, could you? The process of solving an IPF is to try a
	solution and then attempt to make the IPF occur again. If the error goes away,
	then you can assume you have solved the problem. If the error still occurs, then
	you know you need to continue troubleshooting the problem.
	
	If the error is not easily reproducible, then the best you can do is to try each
	of the solutions one at a time. After you try one solution, go back To Word and
	work with the program for a while until you feel comfortable that the problem
	has been solved.
	
	If the problem has not been solved, try another possible solution. Along the way,
	keep track of the solutions you have tried and their results, so you know which
	solutions have been tried and which have not. Remember, if the IPF occurs when
	you do specific things in Word or the document, you may get some clues about
	which solutions to try first.
	
	Does the Problem Occur in Other Applications?:
	
	If the problem occurs in other applications besides Word, then most likely, the
	problem is not with Word, but rather with Windows, a component of Windows, or a
	piece of software that is running in the background. While some of the
	troubleshooting tips and possible solutions in this article may be of help, the
	focus of this article is to resolve IPFs that are specific to Word. For more
	information about troubleshooting errors that are not specific to Word, please
	see the "Windows 95 Support" section of this article for other resources that
	may be of assistance. If the problem is specific to Word, that is, if it does
	not occur in Other applications, then this article is targeted to resolve the
	problem.
	
	Are There Specific, Known Issues Causing This Problem?:
	
	There are some known issues with Word 97 that may cause IPFs under specific
	circumstances. For more information on specific causes of IPFs in Microsoft Word
	97, query on the following words in the Microsoft Knowledge Base:
	
	  Word 97 IPF
	
	For information about finding articles in the Microsoft Knowledge, please see the
	following article:
	
	  Q129725 Obtaining Knowledge Base Articles on the World Wide Web
	
	If none of the articles in the Microsoft Knowledge Base describe your problem,
	please continue troubleshooting your problem using the information in this
	article.
	
	Does the Problem Only Affect a Certain Document?:
	
	If the IPF is specific to a certain document, the document may be damaged. To
	test this, try creating a brand new, empty document based on Normal.dot and
	reproducing the error in the new document.
	
	If the error also occurs in the new document, then you know the problem is not
	related to a damaged document. Skip this section of the article and move on to
	the next section to continue troubleshooting the problem.
	
	If the error does not occur in a new document, the original document may be
	damaged. The following article in the Microsoft Knowledge Base discusses
	procedures that may be used to correct a damaged document:
	
	  Q87856 WD: Troubleshooting Damaged Documents in Word for Windows
	
	Summary of Steps to Troubleshoot a Damaged Document
	
	1. Save the document as RTF.
	
	2. Copy/Paste everything but the last paragraph mark to a new document.
	
	3. Copy pieces of the document to a new document until you isolate the paragraph
	  or object causing the problem.
	
	4. Insert the Document as a File in a New Document.
	
	5. Open the document in another application, such as Word 6.0 or 7.0 using the
	  Word 97 import converter.
	
	6. Open the document in another application to recover the text.
	
	If the IPF occurs with several documents, but not a new document based on
	Normal.dot, try to see if there is anything in common with the documents that
	are generating the error. For example:
	
	- Is there a common (possibly damaged) template that the documents are all
	  based on?
	
	- Is there a common graphic in all of the documents? Examples could be business
	  logos, signatures, clip art, and so on. It is possible the graphic could be
	  damaged.
	
	- Is there a common font in use that is not the default font in Normal.dot? It
	  is possible the font could be damaged.
	
	- Are there links in the documents? It is possible that the file that the
	  documents are linked to is damaged.
	
	TROUBLESHOOTING IPFS THAT OCCUR DURING STARTUP
	----------------------------------------------
	
	This section discusses methods to resolve IPFs that occur when you start Word.
	
	Start Word with the Defaults:
	
	During startup, two of the events that occur are the loading of the registry Data
	key and the Normal.dot global template. If either of these items is damaged,
	Word may fail to start. You can temporarily bypass these items by starting Word
	with the /a switch. To do this, follow these steps:
	
	1. On the Windows taskbar, click the Start button and click Run.
	
	2. Click the Browse button.
	
	3. Locate the directory where the Winword.exe file is located. The default
	  location is
	
	  C:\Program Files\Microsoft Office\Office
	
	4. Click the Winword.exe file and click Open.
	
	5. Click in the Open box and press the END key on the keyboard to move the
	  insertion point AFTER the closing quotes surrounding the file name.
	
	6. Type a space followed by "/a" (without the quotation marks) so that the
	  command line looks like this:
	
	  "C:\Program Files\Microsoft Office\Office\WinWord.exe" /a
	
	7. Click OK.
	
	Word starts.
	
	If Word starts correctly, you have found that the problem is with a damaged
	Registry Data key or a Normal.dot global template. Follow the steps in the
	following section of this article "Set Word Back to the Default Settings."
	
	If Word fails to start correctly, continue to start Word with the /a switch where
	indicated, skip the next section of this article and continue troubleshooting.
	
	Set Word Back to the Default Settings:
	
	Deleting the Data Key:
	
	Note: Deleting the Data key resets several options back to their default
	settings, including the File menu MRU (most recently used) list, and many
	settings in the Options dialog boxes.
	
	To delete the Data key, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button and click Run.
	
	3. In the Open box, type "regedit" (without the quotation marks), and click OK.
	
	4. Locate the following key by double-clicking the appropriate folders.
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Word\Data
	
	5. With the Data folder on the left selected, press the DEL (Delete) key on the
	  keyboard to delete the registry key.
	
	6. Click Yes when asked to confirm the deletion.
	
	7. Quit the registry editor and restart Windows.
	
	8. Once you have restarted Windows, place your Office 97 or Word 97 CD in the
	  CD-ROM drive.
	
	9. On the Start menu, click Run.
	
	10. In the Open box, type the following line and then click OK:
	
	  D:\Setup.exe /y
	
	  NOTE: D:\ is the drive letter for your CD-ROM drive. Setup will enter
	  Maintenance mode.
	
	11. Click Reinstall, and allow setup to complete. Setup will not copy any files
	  to the system. Running setup with the /y switch only updates the Windows
	  registry settings.
	
	12. After Setup has completed, shutdown and restart Windows. Then try Word
	  again. If Word starts and functions correctly, you have resolved the
	  problem. The problem was a damaged Windows registry key. Note, you may need
	  to change a few settings to restore your favorite options.
	
	  If Word fails to start or function correctly, you may have a damaged global
	  template (Normal.dot). Follow the steps in the following section of this
	  article entitled "Renaming the Normal.dot File."
	
	Renaming the Normal.dot File:
	
	Note: Renaming the Normal.dot template will reset several options back to their
	default settings, including custom styles, custom toolbars, macros, and AutoText
	entries. For this reason, it is strongly recommended that you rename the
	Normal.dot file rather than deleting it.
	
	Certain installations may yield more than one legitimate Normal.dot file. These
	situations include multiple versions of Word running on the same computer or
	several workstation installations on the same computer. In these situations, pay
	special attention so that you rename the correct copy of Normal.dot.
	
	To rename the Normal.dot file, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Find, and click
	  Files Or Folders.
	
	3. In the Named box, type "Normal.dot" (without the quotation marks).
	
	4. Set the Look In box to your local hard disk drive (or to an alternate user
	  template location if you are running Word from a network server).
	
	5. Click the Find Now button to search for the file.
	
	6. For each occurrence of Normal.dot that appears in the Find dialog box,
	  right-click the file. Click Rename on the shortcut menu. Give the file a new
	  name, such as Normal.bak or Normal.xxx.
	
	7. Quit the find dialog and restart Word normally (without using the /a switch).
	
	If Word starts correctly, you have resolved the problem. The problem was a
	damaged Normal.dot template. You may need to change a few settings to restore
	your favorite options. If the Normal.dot file you renamed contained
	customizations such as styles, macros, or AutoText entries that cannot be easily
	recreated, you may be able to copy those customizations from the old Normal.dot
	file to the new Normal.dot file using the organizer.
	
	For more information about using the organizer, click the Office Assistant, type
	"using the organizer," click Search, and then click "Use settings from another
	document or template."
	
	If Word fails to start correctly, continue troubleshooting using the steps in the
	following section of this article.
	
	Clear Out the Startup Group:
	
	Word has the ability to automatically load templates and WLLs (Word libraries) at
	startup. These files give Word added functionality. If one of these files is
	damaged, it could cause an IPF when you start Word. To correct this problem,
	follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. Using the Windows Explorer or My Computer, navigate to the Office Startup
	  folder. The default location for this is:
	
	  ..\Program Files\Microsoft office\Office\Startup
	
	3. Drag the contents of this folder to another location, such as your desktop.
	
	4. Start Word normally (without using the /a switch) and try to reproduce the
	  problem.
	
	If Word starts correctly, you know that one of the files you took out of the
	Startup folder is damaged. Add them back to the Startup folder one at a time
	until you determine which file is damaged.
	
	If Word fails to start correctly, continue troubleshooting using the steps in the
	following section of this article.
	
	Is the AutoCorrect List Damaged?:
	
	The AutoCorrect (ACL) file is used to correct commonly misspelled words as they
	are being typed. A damaged ACL file will generate the following error message
	when Word is started:
	
	  This program has performed an illegal operation and will be shut down. If the
	  problem persists, contact the program vendor.
	
	If you click Details, you receive the following error message:
	
	  WINWORD caused an invalid page fault in module MSO97.DLL at 014f:306c59b9.
	
	To correct this problem, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q160552 OFF97: Errors Caused by Corrupted ACL Files
	
	If Word starts correctly, you have resolved the problem. The problem was a
	damaged AutoCorrect (ACL) file.
	
	If Word fails to start correctly, continue troubleshooting using the steps in the
	following section of this article.
	
	TROUBLESHOOTING IPFS THAT OCCUR WHILE PRINTING OR FORMATTING THE DOCUMENT
	-------------------------------------------------------------------------
	
	Another category of IPFs can occur while you are printing or formatting the
	document. These actions trigger the use of several Windows components, including
	the printer driver and video driver.
	
	Is the Printer Driver Damaged?:
	
	Word frequently queries the printer driver for information it needs when
	formatting and printing the document. A damaged printer driver can cause an
	IPF.
	
	Most non-postscript (PCL) printer drivers use a common core file called the
	Unidrv.dll. This includes Microsoft Fax and Generic/Text Only. For this reason,
	if you are using a PCL printer driver and wish to troubleshoot the printer
	driver, it is necessary to install a non-PCL printer driver. Almost all
	postscript printer drivers use a common core file called Pscript.drv. For this
	reason if you are using a postscript printer driver and wish to troubleshoot the
	printer driver, it is necessary to install a non- postscript printer driver.
	
	To correct this problem, install a different printer driver by following these
	steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Settings, and click
	  Printers.
	
	3. Use the appropriate method for your type of printer.
	
	  Method 1: PostScript Printer
	
	  If you are currently printing to a PostScript printer (such as a LaserJet
	  IIISi Postscript), follow these steps:
	  a. Double-click the Add Printer icon to run the Add Printer Wizard.
	
	  b. Follow the instructions in the Wizard to install a local HP LaserJet III
	     printer driver, or some other non-PostScript printer driver.
	
	  Method 2: Non-PostScript Printer
	
	  If you are currently printing to a non-PostScript printer (such as a LaserJet,
	  dot-matrix, DeskJet, or InkJet), follow these steps:
	  a. Double-click the Add Printer icon to run the Add Printer Wizard.
	
	  b. Follow the instructions in the Wizard to install a local PostScript
	     printer such as the HP LaserJet IIISi PostScript printer.
	
	4. Right-click the printer icon and click Set As Default on the shortcut menu.
	
	5. Start Word normally (without using the /a switch) and try to reproduce the
	  problem.
	
	If the problem is corrected, you have identified the problem. The problem was a
	damaged printer driver. Follow the steps in the following section entitled
	"Remove and Reinstall the Printer" to correct the problem.
	
	If Word fails to start correctly, continue troubleshooting using the steps in the
	section of this article entitled "Is It the Video Driver?"
	
	Remove and Reinstall the Printer:
	
	NOTE: The following steps may require your Windows 95 disks or CD, or the printer
	driver files supplied by the manufacturer of the printer. To remove and
	reinstall the printer driver, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Settings, and click
	  Printers.
	
	3. Right-click the printer that was giving you the problem (the printer you were
	  using before you started troubleshooting the printer driver).
	
	4. On the shortcut menu, click Delete.
	
	5. Click Yes to confirm the deletion.
	
	  The following message will be displayed.
	
	  Some files were used only for this printer and are no longer needed. Would
	  you like to delete these files now?
	
	6. Click Yes.
	
	7. Double-click the Add Printer icon to run the Add Printer Wizard.
	
	8. Follow the instructions in the Wizard to install the correct printer driver
	  for the printer you print to, or follow the instructions that came with your
	  printer.
	
	9. Once the printer is installed, right-click its icon and click Set As Default
	  on the shortcut menu.
	
	If the problem is corrected, you have identified the problem. The problem was a
	damaged printer driver.
	
	If Word fails to start correctly, continue troubleshooting using the steps in the
	following section of this article.
	
	Is It the Video Driver?:
	
	Word frequently queries the video driver for information it needs when formatting
	and printing the document. A damaged video driver could cause an IPF. To correct
	this problem, install a different video driver by following these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. Right-click the desktop.
	
	3. On the shortcut menu, click Properties.
	
	4. Click the Settings tab.
	
	  Note the settings for the desktop area, color palette, and font size. You may
	  need to know this if you want to return the display settings to their
	  original state.
	
	5. Click Change Display Type.
	
	  Note the display adapter that is currently in use. You may need them if you
	  want to return the display settings to their original state.
	
	6. For the Adapter type, click Change.
	
	7. Click the Show All Devices button.
	
	8. At the top of the list, for Manufacturers, click Standard Display Types.
	
	9. For the Model, click Standard Display Adapter (VGA).
	
	10. Click the OK and Close buttons to close the dialog boxes.
	
	11. Click Yes, when Windows asks you to restart your computer. When the computer
	  is restarted, your display will be in 640 X 480 X 16 colors.
	
	12. Start Word normally (without using the /a switch) and try to reproduce the
	  problem.
	
	If the problem is corrected, you have identified the problem. The problem was a
	damaged or incompatible video driver. You need to contact the manufacturer of
	the video card for an updated video driver.
	
	For information about how to contact the manufacturer, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q65416 Hardware and Software Third-Party Vendor Contact List, A-K
	
	  Q60781 Hardware and Software Third-Party Vendor Contact List, L-P
	
	  Q60782 Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	If Word fails to start correctly, continue troubleshooting using the steps in the
	section of this article entitled "Troubleshooting IPFS That Occur While Working
	in the Document."
	
	TROUBLESHOOTING IPFS THAT OCCUR WHILE WORKING IN THE DOCUMENT
	-------------------------------------------------------------
	
	Another category of IPFs can occur while you are working in document. Events such
	as pressing the SPACEBAR while typing or pressing ENTER on the keyboard trigger
	the use of several components, such as the custom dictionary, AutoCorrect,
	AutoFormat, and the spelling and grammar checkers. This section of this article
	addresses these possibilities.
	
	Is the Custom Dictionary Damaged?:
	
	When you type a space or press the ENTER key on the keyboard, the background
	spelling checker will attempt to check the word. If it does not find the word
	you typed in the main dictionary, it will check the custom dictionary. When you
	run a spell check and click Add to add a word to the spelling dictionary, the
	word is actually added to the custom dictionary. If the custom dictionary gets
	damaged for some reason, it can cause an IPF when you start to check spelling.
	To correct this problem, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Find, and click
	  Files Or Folders.
	
	3. In the Named box, type "*.dic" (without the quotation marks).
	
	4. Set the Look In box to your local hard drive (or to an alternate user
	  location if you are running Word from a network server).
	
	5. Click the Find Now button to search for the file.
	
	  The default name for the custom dictionary is Custom.dic and the default
	  location is ..\Program Files\Microsoft Office\Office, although the file could
	  be called almost anything and it could be located anywhere.
	
	6. For each occurrence of a .dic file that appears in the find window,
	  right-click the file. Click Rename on the shortcut menu. Give the file a new
	  name, such as Custom.bak or Custom.xxx.
	
	7. Close the Find dialog box and restart Word normally (without using the /a
	  switch) and try to reproduce the problem.
	
	If the problem is corrected, you have identified the problem. The problem was a
	damaged custom dictionary file. At this point you have created a new custom
	dictionary file and it does not contain any of the words you have added in the
	past. If you would like to add the words from the old custom dictionary file,
	follow the steps in the "Adding Words Back to the Custom Dictionary" section of
	this article.
	
	If Word fails to work correctly, continue troubleshooting using the steps in the
	"Is It The AutoCorrect (ACL) File?" section of this article.
	
	Adding Words Back to the Custom Dictionary:
	
	To add words from an old custom dictionary (or any text file) to a current (or
	new) custom dictionary, follow these steps:
	
	1. Open the old dictionary file in Word. If you recently renamed the old custom
	  dictionary file using the steps outlined in this article, the file is most
	  likely called Custom.bak or Custom.xxx.
	
	2. If background spelling is turned on, you should see red wavy underlines under
	  each word. Right-click each word and click Add on the shortcut menu.
	
	If background spelling is not turned on, then run the spelling checker by
	pressing F7 on the keyboard. Once all of the words have been added, you can
	close the file and delete it.
	
	Is It The AutoCorrect (ACL) File?:
	
	When you type a space or press the ENTER key on the keyboard, the background
	AutoCorrect will attempt to correct the spelling or grammar of a word or add
	special symbols in place of some characters. The AutoCorrect list (ACL) stores a
	list of what words or characters to act upon, and what to substitute for them.
	If this file is damaged, you can experience an IPF when Word tries to access the
	ACL file. To correct this problem, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Find, and click
	  Files or Folders.
	
	3. In the Named box, type "*.acl" (without the quotation marks). In the Look In
	  box, type the path to the Windows folder (for example, type C:\Windows).
	  Then, click Find Now.
	
	  When the search is completed, a list of .acl files appears. These files are
	  stored in the Windows folder.
	
	  IMPORTANT: One of the .acl files is named Mso97.acl. Do not rename or delete
	  this file unless you are instructed to do so by Microsoft Technical Support
	  or unless you completely remove Microsoft Office 97 from the computer.
	
	4. Right-click one of the .acl files (for example, User.acl). Then, click Rename
	  on the shortcut menu.
	
	5. Press END on the keyboard. Then, type ".old" (without the quotation marks)
	  and press ENTER.
	
	  The file appears with ".old" appended to the end (for example, User.acl.old).
	
	6. Except for Mso97.acl, repeat steps 3 and 4 for all .acl files in the Windows
	  folder.
	
	7. Quit the find dialog and restart Word normally (without using the /a
	  switch)and try to reproduce the problem.
	
	  If the problem is corrected, you have identified the problem. The problem was
	  a damaged ACL file. For more information on damaged ACL files, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q160552 OFF97: Errors Caused by Corrupted ACL Files
	
	  If Word fails to work correctly, continue troubleshooting using the steps in
	  the section of this article entitled "Is It the Spelling or Grammar Checker?"
	
	Is It the Spelling or Grammar Checker?:
	
	When you type a space or press the ENTER key on the keyboard, the background
	spelling and grammar checker will check what you typed and flag it as misspelled
	word (with a red wavy underline) or as a grammar error (with a green wavy
	underline) if needed. If either the spelling checker or the grammar checker is
	damaged, it may cause an IPF when you type. To test to see if this is the
	problem, try reproducing the problem with the background spelling and grammar
	turned off. To do this, follow these steps:
	
	1. Open the document if possible.
	
	2. Immediately, before doing anything else, click Options on the Tools menu.
	
	3. Click the Spelling And grammar tab.
	
	4. Click to clear (remove the check mark from) the "Check spelling as you type"
	  and the "Check grammar as you type" check boxes.
	
	5. Click the OK button and try to reproduce the problem.
	
	If the problem is corrected, or if you could not run the above test, you may have
	identified the problem as being damaged proofing tools. Follow the steps in the
	section entitled "Reinstalling the Proofing Tools" to correct the problem.
	
	If Word fails to work correctly, continue troubleshooting using the steps in the
	section of this article entitled "Other Possible Solutions."
	
	Reinstalling the Proofing Tools:
	
	If the problem has been determined to be the proofing tools, removing and
	reinstalling them may correct the problem. The goal here is to run Setup once to
	remove the proofing tools, and then run it a second time to install the proofing
	tools. To do this, follow these steps:
	
	1. Quit all instances of Word, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Settings, and click
	  Control Panel.
	
	3. Double-click Add/Remove programs.
	
	4. Click the Office or stand-alone version of the program you have installed and
	  click Add/Remove. For example, this may be Microsoft Word 97, Microsoft
	  Office 97 Standard Edition, or Microsoft Office 97 Professional Edition.
	
	5. Once you start the Setup program, click Add/Remove.
	
	6. Clear the Spelling Checker check box.
	
	  In Microsoft Office 97 Professional Edition, this is located by going to the
	  Office Tools section and clicking Change Option.
	
	7. Clear (remove the check mark from) the Grammar, Hyphenation, and Thesaurus
	  check boxes.
	
	  In Microsoft Office 97 Professional Edition, locate the Microsoft Word
	  component and click Change Option. Then go to the Proofing Tools component
	  and click Change Option.
	
	8. Click Continue to finish the Setup program. The proofing tools will be
	  removed.
	
	9. Quit the Setup program when it has completed running.
	
	10. Run Setup again by following steps 1 through 9. This time, select (add a
	  check mark to) the options for the proofing tools. This will install them
	  from your Word or Office CD or disks.
	
	11. Restart Word normally (without using the /a switch) and try to reproduce the
	  problem.
	
	If this works, turn the background spelling and grammar checking on, if desired,
	by repeating steps 1 through 6 in the previous section.
	
	For more information about adding or removing components, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q120802 Office: How to Add/Remove a Single Office Program or Component
	
	If the problem is corrected, you may have identified the problem as being damaged
	proofing tools.
	
	If Word fails to work correctly, continue troubleshooting using the steps in the
	section of this article entitled "Other Possible Solutions."
	
	OTHER POSSIBLE CAUSES AND SOLUTIONS
	-----------------------------------
	
	Are the Fonts Damaged?:
	
	A damaged font can cause an IPF when working with Microsoft Word (or any other
	Windows application).
	
	If a document crashes while working in it, try to determine what fonts are in the
	document and apply these fonts to a new document based on Normal.dot. If the
	problem occurs in the new document, systematically reduce the number of fonts in
	the new document until you are left with the font causing the problem.
	
	NOTE: Tahoma is the font that is used in the dialog boxes and menus in Word and
	Office. If Word is crashing when you start it, one possible cause could be a
	damaged Tahoma font. Follow the instructions below for removing and reinstalling
	the Tahoma font.
	
	Once you have determined (or suspect) a damaged font, follow these steps to
	remove and reinstall the font.
	
	NOTE: This procedure will remove the font from your system and will require you
	to be able to reinstall the font from its original source.
	
	1. Quit all applications.
	
	2. On the Windows taskbar, click the Start button, point to Settings, and click
	  Control Panel.
	
	3. Double-click Fonts.
	
	4. Drag the font (or fonts) you believe may be damaged to your desktop (or to
	  some other location outside of the font folder).
	
	  The font is now "removed" from your computer. Any document formatted with that
	  font will actually have another font substituted.
	
	5. Quit the font folder and restart Word normally (without using the /a
	  switch)and try to reproduce the problem.
	
	If the problem is corrected, you may have identified the problem as being a
	damaged font. For information on reinstalling the font, please see the section
	of this article entitled "Reinstalling Fonts."
	
	If Word fails to work correctly, continue troubleshooting using the steps in the
	section of this article entitled "Starting Word as Cleanly as Possible."
	
	Reinstalling Fonts:
	
	Fonts can be reinstalled in one of two ways. Depending on the source of the font,
	one way may be better than another.
	
	Method 1: Adding the Font File:
	
	1. Quit all applications.
	
	2. On the Windows taskbar, click the Start button, point to Settings, and click
	  Control Panel.
	
	3. Double-click Fonts.
	
	4. On the File menu, click Install New Font.
	
	5. Locate the directory where the font file is located. This normally is a
	  floppy disk or CD.
	
	6. Select the font and click OK to install the font.
	
	Method 2: Software Installation:
	
	If a font came with a particular piece of software, such as Microsoft Word or
	Microsoft office, you can run a reinstallation of the software to install the
	font. Refer to your software documentation for information on how to run a
	reinstallation of the software.
	
	TIP: The Microsoft Knowledge Base can be very useful for location software that
	shipped with certain fonts. For more information about searching for information
	in the Microsoft Knowledge Base, please see the following article:
	
	  Q129725 Obtaining Knowledge Base Articles on the World Wide Web
	
	USING SAFE MODE TO TROUBLESHOOT
	-------------------------------
	
	By this point, the IPF is proving to be difficult to solve and a different
	approach to troubleshooting may be needed. The rest of this article discusses a
	troubleshooting method where you will be starting Windows in Safe Mode and then
	starting Word with the /a switch. If this does not work, the problem may be
	related to a bad installation of Word, Office, or Windows. If this method works,
	you will be presented with a few more ideas for solutions.
	
	Starting Windows in Safe Mode:
	
	Safe Mode is a way to start Windows 95 or 98 so that Windows is started in the
	simplest method possible. It bypasses many drivers and supporting files that
	could cause problems if they are damaged. To start Windows 95 in Safe Mode,
	follow these steps:
	
	1. Turn on the computer.
	
	2. When you see the message "Starting Windows 95", press F5 on the keyboard.
	
	Windows may take longer than normal to start and it may look strange. To start
	Windows 98 in Safe Mode, follow these steps:
	
	1. Restart your computer.
	
	2. Press and hold down the CTRL key after your computer completes the Power On
	  Self Test (POST).
	
	3. Choose Safe Mode from the Startup menu.
	
	For more information about safe mode, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q122051 How Windows 95 Performs a Safe-Mode Start
	
	Starting Word as Cleanly as Possible:
	
	In this procedure, you start Windows in Safe Mode AND start Word with the /a
	switch. This starts Word in the most basic environment possible. To do this,
	follow these steps:
	
	1. Start Windows in Safe Mode by following the steps in the "Starting Windows in
	  Safe Mode" section earlier in this article.
	
	2. Start Word with the /a switch by following the steps outlined in the section
	  above, titled "Starting Word with the Defaults."
	
	3. Try to reproduce the problem.
	
	If the problem does not occur, follow the steps below, in the section titled
	"Starting Word with Windows In Safe Mode."
	
	If the problem still occurs, follow the steps below, in the section titled
	"Removing And Reinstalling Word."
	
	Starting Word with Windows in Safe Mode:
	
	In this procedure, you take one step backward from the extreme restarting
	procedure mentioned above. Windows will be started in Safe Mode, and Word will
	be started normally. To do this, follow these steps:
	
	1. Start Windows in Safe Mode by following the steps in the section above,
	  titled "Starting Windows in Safe Mode."
	
	2. Start Word normally (without using the /a switch), and try to reproduce the
	  problem.
	
	If the problem occurs, then the most likely cause is a damaged Normal.dot file,
	damaged data key, or a damaged item in the startup folder. Follow the steps in
	the "Set Word Back to the Default Settings" section earlier in this article.
	
	If the problem does not occur, continue troubleshooting by following the steps in
	the next section of this article.
	
	REINSTALLING WORD OR OFFICE
	---------------------------
	
	By this stage, if the IPF is still occurring, it is likely that you may have
	damaged Word or Office files. This section guides you through a process of
	removing and reinstalling Word or Office to achieve the cleanest possible
	reinstallation.
	
	The easiest method to correct a Word or Office installation is to run a
	reinstallation. While this is very fast and frequently corrects the problem,
	there are situations where it will not correct the problem and a more complete
	removal and reinstallation may be necessary. To perform a quick reinstallation
	of Word or Office, follow these steps:
	
	1. Quit all applications, including WordMail.
	
	2. On the Windows taskbar, click the Start button, point to Settings, and click
	  Control Panel.
	
	3. Double-click Add/Remove programs.
	
	4. Click the Office or stand-alone version of the program you have installed and
	  click Add/Remove. For example, this may be Microsoft Word 97, Microsoft
	  Office 97 Standard Edition, or Microsoft Office 97 Professional Edition.
	
	5. Once you enter the Setup program, click Reinstall.
	
	The Setup program will check the installed files and replace or install any files
	from an earlier version that are the wrong size or that seem damaged. Once the
	Setup is complete, restart Word normally (without using the /a switch)and try to
	reproduce the problem. If the problem is corrected, you may have identified the
	problem as being a damaged file. If Word fails to work correctly, continue
	troubleshooting using the steps in the "Removing Word or Office" section of this
	article.
	
	Removing Word or Office
	-----------------------
	
	This procedure will guide you through the steps to remove as much of Word or
	Office as possible. After the removal, you will install Word or Office again.
	
	Back Up User Files:
	
	CAUTION: This procedure can result in data loss. Before performing the steps in
	the remainder of this article, you should back up any user files that may be
	important. This includes custom templates, any documents, and Normal.dot.
	
	Remove Word or Office:
	
	The second step to the removal process is to use the Setup program to remove as
	many files as possible. To use the Setup to remove Word or Office, follow these
	steps:
	
	1. Quit all applications, including WordMail.
	
	2. On the Windows taskbar, click the Start button and point to Settings and
	  click Control Panel.
	
	3. Double-click Add/Remove programs.
	
	4. Click the Office or stand-alone version of the program you have installed and
	  click Add/Remove. For example, this may be Microsoft Word 97, Microsoft
	  Office 97 Standard Edition, or Microsoft Office 97 Professional Edition.
	
	5. From Setup program, click Remove All, and then click Yes to confirm the
	  removal.
	
	6. You will be asked if you want to remove shared components. Click Remove All.
	
	7. Once Setup is completed, you will be prompted to restart Windows.
	
	Once Setup has finished and Windows is restarted, continue with the steps in the
	following section to remove any remnants of the programs.
	
	Run the Office Upgrade Wizard:
	
	Note: This procedure removes all versions of Office from your computer.
	
	The Office Upgrade Wizard may be able to remove some components that the Setup
	program did not remove. The Office Upgrade Wizard can be obtained from the
	following sources:
	
	  The Value Pack:
	
	If you purchased Word or Office on a CD, the Office Upgrade Wizard is located on
	the CD in the following location:
	
	  \ValuPack\Offclean\\ValuPack\Offclean\OffCln97.exe
	
	  The Internet:
	
	The Office Upgrade Wizard can be obtained from the Microsoft Web site in the
	"Office Upgrade Wizard File List" section, at the following location:
	
	  http://www.microsoft.com/office/ork/appa/appa.htm
	
	To use the Office Upgrade Wizard, follow these steps:
	
	1. Double-click the Offcln97.exe to start the wizard. The Welcome dialog box
	  appears.
	
	2. Click Next.
	
	3. For the type of cleanup, choose "Completely Remove all of my old Microsoft
	  Office Applications" and click Next.
	
	4. Click Yes to the Aggressive Cleaning dialog.
	
	5. Click Next to remove all files.
	
	6. Click Finish to complete the operation.
	
	7. Click OK to the prompt to permanently remove the files.
	
	The Office Upgrade Wizard has now removed additional Word or Office files.
	Continue with the next section to complete the removal process.
	
	Deleting Unneeded Files and Folders:
	
	The last step of the removal process is to manually delete any unneeded files.
	The following article in the Microsoft Knowledge Base provides information on
	file, folders, and registry entries to delete, in order to completely remove
	Microsoft Word or Office. Note that many of these files and registry entries may
	have been deleted by the Office Upgrade Wizard described in the previous section
	of this article.
	
	  Q158658 OFF97: How to Completely Remove Microsoft Office 97
	
	After you have deleted the necessary files, folders, and registry entries,
	continue with the following section to install Microsoft Word or Office.
	
	INSTALLING WORD OR OFFICE
	-------------------------
	
	At this point, virtually all traces of Word or Office have been removed from the
	computer. You can now run the Word or Office Setup from the original location to
	install the programs.
	
	Once Setup is complete, start Word normally (without using the /a switch)and try
	to reproduce the problem.
	
	If the problem is corrected, you may have identified the problem as being a
	damaged file.
	
	If Word fails to work correctly, continue troubleshooting using the steps in the
	section of this article entitled "Reinstalling Windows."
	
	REINSTALLING WINDOWS
	--------------------
	
	By this point, the most likely cause of the IPF may be a damaged Windows file.
	You may want to obtain Windows 95 technical support using one of the methods
	listed below in the "Windows 95 Support" section of this article. For more
	information about troubleshooting Windows 95, please see the following articles
	in the Microsoft Knowledge Base:
	
	  Q151284 Troubleshooting Windows 95 - TLC Items
	
	To use one of the built-in troubleshooters for Windows 95, follow these steps:
	
	1. On the Windows taskbar, click the Start button, and click Help.
	
	2. Click the Contents tab.
	
	3. Double-click the troubleshooting book.
	
	4. Double-click the topic you are interested in.
	
	WINDOWS 95 SUPPORT
	------------------
	
	You may obtain technical support for Windows 95 from the following sources:
	
	Telephone Support:
	
	Technical support is available for no charge from a Microsoft Technical Support
	Professional, by means of a toll line, for the first 90 days of using Windows
	95. The 90-day period begins the day of your first call. Call (425) 635-7000
	between 6:00 A.M. and 6:00 P.M. Pacific time, Monday through Friday, excluding
	national holidays. For support outside the United States, contact your local
	Microsoft subsidiary.
	
	After the initial 90-day free period has expired, support is available from a
	Microsoft Technical Support Professional. Call (800) 936-5700 ($35 per
	incident).
	
	For phone numbers and support options on all Microsoft products, please see the
	information available on the Microsoft Web site at:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	For support outside the United States, contact your local Microsoft subsidiary.
	
	Microsoft Solution Providers:
	
	Microsoft Solution Providers are independent organizations that have teamed up
	with Microsoft to use technology to solve business problems for companies of all
	sizes and industries.
	
	To locate a Microsoft Solution Provider in your area in the U.S. and Canada, call
	the Microsoft Sales Information Center at (800) 426-9400. If you are outside the
	United States, contact your local subsidiary. To locate your subsidiary, see the
	Microsoft World Wide Offices Web site at:
	
	  http://http://www.microsoft.com/worldwide/default.htm
	
	Internet:
	
	For more information about Windows 95 support options, please see the following
	support Web page on the Microsoft Web site:
	
	  http://support.microsoft.com/directory/
	
	The Microsoft Knowledge Base:
	
	The Knowledge Base is available from the following sources:
	
	  Internet Web site
	
	  http://www.microsoft.com/support
	
	  MSN (The Microsoft Network)
	
	  MSDN (Microsoft Developers Network) CD
	
	
	  Technet CD
	
	
	Additional query words: gpf tshoot
	
	======================================================================
	Keywords          : kbenv winword word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
