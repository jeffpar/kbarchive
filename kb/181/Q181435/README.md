---
layout: page
title: "Q181435: WD97: Programs Missing from Default Picture Editor List"
permalink: kb/181/Q181435/
---

## Q181435: WD97: Programs Missing from Default Picture Editor List

	Article: Q181435
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbgraphic
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some graphics programs may not appear in the Picture Editor list; therefore, you
	cannot select them as the default program for editing imported graphics in
	Microsoft Word for Windows. (To display the Picture Editor list, click Options
	on the Tools menu and click the Edit tab.)
	
	CAUSE
	=====
	
	Word for Windows lists a graphics application in the Picture Editor list only if
	the registration information has been written to the Windows registry.
	
	
	If a graphics program does not add both of the registration settings to Reg.dat,
	Word does not list the program in the Picture Editor list. These settings tell
	Word that the graphics program can edit metafiles as OLE objects.
	
	WORKAROUND
	==========
	
	Microsoft does not recommend that you manually edit your Reg.dat file to add
	these missing registration settings. (If you add the settings, the application
	appears in the Picture Editor list, but you may be unable to edit the drawing in
	the graphics application.) The graphics application must register this
	information when you install it.
	
	If you want to select an unlisted graphics application as your default picture
	editor in Word, first reinstall the software. If this workaround is
	unsuccessful, contact the manufacturer of the graphics application for
	instructions on how to successfully install and register their application in
	Windows 95 to work with Word 97.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	To change the default program for editing imported graphics, follow these
	steps:
	
	1. On the Tools menu, click Options, and then click the Edit tab.
	
	2. In the Picture editor box, click the program you want to use to modify
	  imported graphics, and then OK.
	
	Additional query words: default docerr office ole server container winword CorelDraw! Corel Draw 4.0 Micrografx Designer 3.1 word6 3.0 HiJaak Pro 2.0 Paintbrush Microsoft MSPhotoEd MS PhotoEd Photo Editor Powerpoint
	
	======================================================================
	Keywords          : kbgraphic 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
