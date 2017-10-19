---
layout: page
title: "Q171499: FIX: IDE Doesn't Show Topics of OCX Help Files Correctly"
permalink: /kb/171/Q171499/
---

## Q171499: FIX: IDE Doesn't Show Topics of OCX Help Files Correctly

	Article: Q171499
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbVBp kbVBp500fix kbVS97sp2fix kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbO
	Last Modified: 26-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating your own control or using a third-party control, you may see the
	following problems when invoking context-sensitive help on a Classes or Members
	item in the Object Browser from within the Visual Basic 5.0 IDE. These problems
	may occur when invoking context-sensitive help using the F1 key, the What's This
	button, or the right-mouse button on the object and selecting Help from the
	popup menu. You may also see these problems when pressing the F1 key after
	selecting a control that is placed on a form at design-time in the IDE.
	
	The problems you may see are as follows:
	
	1. If Help Author is switched on (set to 1), you will see the error message "The
	  Window name 'LangRef' was not defined in your project file." You will also
	  see the topic displayed in Visual Basic 5.0's Langref window instead of the
	  control's Help file window.
	
	2. Macros that make jumps based on keywords do not function. The macros that are
	  affected are ALink, KLink, and JumpKeyword. The error "No additional
	  information is available" is displayed when either the ALink or KLink macro
	  is invoked from a topic shown through context-sensitive help in the Object
	  Browser. Please note that the ALink and KLink macros are typically invoked in
	  Help files from "Related Topics" or "See Also" hotspots. When using
	  JumpKeyword, the Index tab is displayed but the desired keyword may not be
	  listed. If the keyword is listed in the Index tab, a jump to the desired
	  topic may not occur.
	
	3. Visual Basic's contents tree is displayed instead of the control's when the
	  Contents or Help Topics button is clicked on a topic invoked through
	  context-sensitive help in the Object Browser.
	
	These problems do not happen with intrinsic controls or other controls that were
	originally shipped with Visual Basic 5.0.
	
	RESOLUTION
	==========
	
	All the problems above have been fixed in Visual Studio 97 Service Pack 2 (SP2)
	except problem number 1. This error is only displayed when Help Authoring is
	switched on. To prevent the error message from appearing, switch off Help
	Authoring. Help Authoring can be switched by doing any one of the following:
	
	1. From HCW, select and uncheck the Help Author item in the File menu.
	
	2. In Windows 95, Windows 98, and Windows Me, add Help Author=0 to the [Windows
	  Help] Section of the Win.ini in the windows directory. You will not need to
	  reboot but you will need to close the Help file and reopen it.
	
	3. From Windows NT 3.51 or 4.0 in the
	  HKEY_CURRENT_USER\\Software\Microsoft\Windows Help, you will need to set
	  'Help Author' to '0'.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Studio 97 Service
	Pack 2.
	
	For more information on the Visual Studio 97 Service Pack 2, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q170365 : INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	For a list of the Visual Basic 5.0 bugs that were fixed in the Visual Studio 97
	Service Pack 2, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q171554 : INFO: Visual Basic 5.0 Fixes in Visual Studio 97 Service Pack 2
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Problem 1: If Help Author is switched on (set to 1), you will see the error
	message "The Window name 'LangRef' was not defined in your project file."
	
	1. Create an ActiveX control that has a couple of exposed properties and set the
	  name of your Help file on the Project Properties \ General tab.
	
	2. In Object Browser, select the control project. In the classes section, select
	  the control name.
	
	3. Right-click the exposed property. This brings up the popup menu.
	
	4. Select the Properties item and set the HelpcontextID.
	
	5. Repeat steps 3 and 4 on the other exposed property.
	
	6. In Object Browser, select the first exposed property and click F1. This
	  displays the Help topic in the correct Help window.
	
	7. In Object Browser, select the second exposed property and click F1. This
	  displays the correct topic but in Visual Basic 5.0's langref Help window.
	
	Problem 2: Keyword macros such as ALink or KLink macros do not work on a topic
	invoked through context-sensitive Help in the IDE.
	
	In Object Browser, select the exposed property and click F1. If the topic that is
	displayed has a hotspot labeled either "See Also" or "Related Topics," it is
	quite probable the ALink or KLink Help macros are being called. If this is the
	case, then clicking the button can produce the following error message: "No
	additional information is available."
	
	Problem 3: The wrong contents is displayed when the Contents or Help Topics
	button is clicked on a topic invoked through context-sensitive Help from Object
	Browser. Visual Basic 5.0's contents is displayed instead of control's contents.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbVBp kbVBp500fix kbVS97sp2fix kbOSWin95 kbOSWin98 kbGrpDSVB kbDSupport kbOSWinME 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : :5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
