---
layout: page
title: "Q182580: HOWTO: Set Up a Quick Menu for an ActiveDoc App"
permalink: /kb/182/Q182580/
---

## Q182580: HOWTO: Set Up a Quick Menu for an ActiveDoc App

	Article: Q182580
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes setting up a Quick Menu for use in an Active Document
	application, which is a new feature in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	Chapter 31 of the Microsoft Visual FoxPro "Programmer's Guide," version 6.0 is a
	good source for information on creating Active Document applications. The
	chapter contains an explanation of Menu Negotiation, terms used in Menu
	Negotiation, Help Menu Merging and enhancements to the DEFINE PAD command.
	
	The steps below guide the developer in creating a Quick Menu that can be used in
	an Active Document application. This menu will have a custom menu pad and
	Colors, in addition to the menu pads provided by FoxPro with a Quick Menu. It
	also illustrates Help Menu Merging with the Fruits menu pad.
	
	Steps to Create a Quick Menu
	----------------------------
	
	1. Create a new menu, not a shortcut. The code below can be typed in the Command
	  window to accomplish this task. In the New Menu dialog box select menu. Here
	  is the code:
	
	  CREATE MENU ADTest
	
	2. From the System menu, point to the Menu pad, and then click Quick Menu.
	
	3. Delete the View and Tools menu pads. This is not necessary, it just prevents
	  the menu from getting too long in this example. The Program menu will be left
	  in case Cancel, Resume or Suspend are needed.
	
	4. Insert a new Menu pad between Edit and Program.
	
	  NOTE: Select the Program prompt and point to the Insert button in the Menu
	  Designer.
	
	5. Name the new prompt \<Colors. The \< causes the C in Colors to be
	  underlined. The result should be a submenu, which should be created now.
	
	6. Create three submenu prompts for Colors and enter Red, Blue, and Green. The
	  Result of each should be a Command. For the command, type in the following:
	
	  
	
	  WAIT WINDOW "Red"
	  WAIT WINDOW "Blue"
	
	7. Go back to the main Menu bar. Add a new prompt on the end after the Help
	  prompt. Name it Fr\<uits. The Result should be a submenu. Create the
	  submenu just like the submenu for Colors. However, this time, use "Apples,"
	  "Bananas," and "Grapes" for the prompts. Make the Results WAIT WINDOW
	  commands with the fruit names just as Color example in step six. Go back to
	  the main Menu bar when finished.
	
	8. Now the menu negotiation needs to be created. For the File prompt, select the
	  Options button. In the top-right corner of the Prompt Options dialog box is a
	  Negotiate section. For the purposes of this dialog box, remember the
	  following:
	
	  Container = When the menu is run in Visual FoxPro.
	  Object = When the menu is run hosted in an Active Document Container, such as
	  Internet Explorer.
	
	  The File prompt should be set properly. Object is set to None because the File
	  menu is Internet Explorer's when the Active Document application is hosted.
	
	9. Check the other menu prompts:
	
	   - The Edit prompt should have defaulted to None for Container and to Left
	     for Object. Object is okay, however, you need to change Container to Left
	     so that the FoxPro Edit menu is available if the Active Document is run
	     when not hosted.
	
	   - The Colors menu is not from the Quick Menu. First, add ALT+C as the
	     shortcut keys. Make both the Container and Object Negotiate as Middle for
	     Colors.
	
	   - The Program prompt should have defaulted to Middle for Container and to
	     Left for Object.
	
	   - The Window prompt should have defaulted to Right for Container and to Left
	     for Object.
	
	   - The Help prompt will need to be changed. The prompt should be set to None
	     for Container and to Right for Object. Change the Container to Right (so
	     it shows up in FoxPro) and to None for Object. The Fruit menu will be
	     merged with the Active Document host's Help menu. There can only be one
	     menu set to Negotiate Right when the menu is hosted.
	
	   - For the Fruits prompt, set the shortcut keys to ALT+U. Next, change the
	     Negotiate options to Right for both the Container and Object.
	
	10. Preview the menu to see how it looks in Visual FoxPro.
	
	11. After previewing the menu, from the System menu, point to Menu and then
	  click Generate to create the .mpr file.
	
	12. Build the menu into an Active Document application, like the sample Active
	  Document application that can be created using the Microsoft Knowledge Base
	  article listed in the REFERENCES section below. Refer to step five in that
	  article for information on the program code to include the menu in the
	  application. Test the menu prompts when the Active Document application is
	  hosted in Internet Explorer.
	
	13. When the Active Document application with the menu is running hosted in
	  Internet Explorer, notice what menus are there and which Application they
	  come from. The following list should be what is observed:
	
	     File menu:     Internet Explorer
	     Edit menu:     Visual FoxPro
	     Program menu:  Visual FoxPro
	     Window menu:   Visual FoxPro
	     Colors:        From the sample menu
	     Go:            Internet Explorer
	     Favorites:     Internet Explorer
	     Help:          Internet Explorer
	
	14. Look at the bottom of the Help menu. There should be a prompt there with a
	  submenu. The text of the prompt should be ActiveDoc1 Help. This text can be
	  created by setting the Caption property of the ActiveDoc class that is the
	  main program in the project. If the sample Active Document application from
	  the Microsoft Knowledge Base article is being used, open the project, edit
	  the ADTest class and change the caption property (use Fruit as a test).
	  Rebuild the application and run it hosted. The menu prompt should now show
	  Fruit Help, assuming Fruit is the new caption.
	
	For more information on Active Documents and Menu Negotiation, follow the
	instructions below to get into the Active Documents section of the Visual FoxPro
	"Programmer's Guide."
	
	Steps to Active Documents Topic
	-------------------------------
	
	1. In the MSDN Library for Visual Studio 6.0, open the Visual FoxPro
	  Documentation book, and go to the What's New in Visual FoxPro page. The
	  Active Documents topic from the "Programmer's Guide" should be the second
	  item listed.
	
	2. Click Active Documents to go to the Active Documents section of Chapter 31,
	  "Interoperability and the Internet"
	
	REFERENCES
	==========
	
	For additional information on Active Documents, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q182579 HOWTO: Get Started With Active Documents
	
	Visual FoxPro Online Help, version 6.0; Search on "Active Documents"; Topic:
	Creating
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
