---
layout: page
title: "Q135565: PRB: HIDE WINDOW ALL Command Affects User-Defined Toolbars"
permalink: kb/135/Q135565/
---

## Q135565: PRB: HIDE WINDOW ALL Command Affects User-Defined Toolbars

	Article: Q135565
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The HIDE WINDOW ALL command hides user-defined toolbars as well as other
	windows. The SHOW WINDOW ALL command shows user-defined toolbars as well as
	other windows. System-defined toolbars are not affected by HIDE WINDOW ALL or
	SHOW WINDOW ALL.
	
	WORKAROUND
	==========
	
	Once the user's toolbars have been hidden with the HIDE WINDOWS ALL command, if
	they are to be visible, issue a command to SHOW WINDOW <window name> where
	window name is the name of one of the toolbars. Issue as many SHOW WINDOW
	commands as are necessary to restore the user-created toolbars.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Developers using the command HIDE WINDOW ALL and expecting their toolbars to
	stay visible may run into trouble. The toolbars are essentially the same as any
	user-defined window and are thus subject to being hidden. The System toolbars,
	on the other hand, are a special instance and as such remain visible unless a
	HIDE WINDOW command is used with the name of the window For a list of the
	correct names of the System toolbars, please see the Visual FoxPro Language
	Reference or the SHOW WINDOW topic in the Help manu.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Enter the following code into a Visual FoxPro program. Then run that program to
	create a toolbar on the desktop.
	
	  *** Program Tooltest.prg **************
	  PUBLIC oToolbar
	  oToolbar = CREATEOBJECT("UDToolbar")
	  oToolbar.show()
	
	  DEFINE CLASS UDToolbar AS Toolbar
	       Caption = "My Toolbar"
	       Height = 29
	       Left = 0
	       Top = 0
	       Width = 80
	
	       ADD OBJECT Cbsave AS Commandbutton WITH ;
	            Top = 4, ;
	            Left = 6, ;
	            Height = 23, ;
	            Width = 24, ;
	            Picture = "\vfp\wizards\wizbmps\wzsave.bmp", ;
	            Caption =  "", ;
	            Default = .F., ;
	            Name = "CbSave"
	
	       ADD OBJECT Cbdelete AS Commandbutton WITH ;
	            Top = 4, ;
	            Left = 29, ;
	            Height = 23, ;
	            Width = 24, ;
	            Picture = "\vfp\wizards\wizbmps\wzdelete.bmp", ;
	            Caption =  "", ;
	            Default = .F., ;
	            Name = "CbDelete"
	
	       ADD OBJECT Cbprint AS Commandbutton WITH ;
	            Top = 4, ;
	            Left = 52, ;
	            Height = 23, ;
	            Width = 24, ;
	            Picture = "\vfp\wizards\wizbmps\wzprint.bmp", ;
	            Caption =  "", ;
	            Default = .F., ;
	            Name = "CbPrint"
	
	  ENDDEFINE
	  *** End program Tooltest.prg********************
	
	Once the toolbar is visible, in the Command window enter this command:
	
	     HIDE WINDOW ALL
	
	followed by
	
	     SHOW WINDOW ALL
	
	Additional query words: 3.00 VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
