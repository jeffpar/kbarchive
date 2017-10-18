---
layout: page
title: "Q167698: HOWTO: Help95.exe Implements Windows 95 Style Help"
permalink: kb/167/Q167698/
---

## Q167698: HOWTO: Help95.exe Implements Windows 95 Style Help

	Article: Q167698
	Product(s): Microsoft C Compiler
	Version(s): 4.2,4.2b,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbCSHelp kbMFC kbVC420 kbVC500 kbVC600 kbhowto kbGrpDSMFCATL
	Last Modified: 29-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 provides support for context-sensitive help by means of the messages
	WM_HELP and WM_CONTEXTMENU. It also provides a style called WS_EX_CONTEXTHELP
	that has the effect of adding a question mark button to the windows caption bar
	of a dialog. The HELP95 sample shows how these messages can be used to show
	context Help for a window.
	
	The sample includes the file help95.hpj that should contain one of the following
	lines:
	
	     #include <c:\msdev\mfc\include\afxhelp.hm> // for Visual C++ 4.x
	
	  -or-
	
	     #include <c:\devstudio\VC\MFC\include\afxhelp.hm> // for Visual C++ 5.0
	
	  -or-
	
	     #include <c:\program files\microsoft visual studio\vc98\MFC
	                 \include\afxhelp.hm> // for Visual C++ 6.0
	
	  #include C:\Program Files\Microsoft Visual Studio .NET\Vc7\atlmfc\include\afxhelp.hm   // for VC.NET
	
	Make sure the line reflects the correct version of Visual C++ that is installed
	and that it contains the correct path to afxhelp.hm.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	  Help95.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. After it is posted, the file is housed on
	secure servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running HELP95.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	In 16-bit MFC, applications implemented context-sensitive Help by using the
	accelerator keys F1 and SHIFT+F1 that generated WM_COMMAND messages with IDs
	ID_HELP and ID_CONTEXTHELP, respectively. This, together with the MFC private
	messages WM_COMMANDHELP and WM_HELPHITEST, was used to bring up context Help for
	an application.
	
	Windows 95 makes this process easier by providing the WM_HELP message that gets
	sent each time the user presses the F1 key, giving the application a chance to
	bring up Help information on the control that has the keyboard focus or on the
	dialog box itself. This WM_HELP message is not limited to dialog boxes alone; it
	gets sent to any window that has keyboard focus or to the currently active
	window.
	
	Windows 95 also provides the style WS_EX_CONTEXTHELP that adds a question mark
	button to a dialog's caption bar. When a user clicks this button, the cursor
	changes to a question mark with a pointer. If the user then clicks a control on
	the dialog box, a WM_HELP message is sent to it. The control passes this message
	on to its parent, which should then handle this message and call WinHelp() with
	HELP_WM_HELP. This displays a pop-up window with the Help text for the control.
	
	There is also the WM_CONTEXTMENU message that gets sent whenever the user
	right-clicks a window. This message is typically used to display a pop-up menu
	using TrackPopupMenu(). It can also be used to display context Help by calling
	WinHelp() with the parameter HELP_CONTEXTMENU. This has the effect of displaying
	a pop-up menu with a "What's This?" entry. Selecting this option then displays a
	pop-up window with Help text for the window.
	
	HELP95 is an MFC MDI application with form views for MDI child windows. The
	application shows how to bring up context Help for form views, dialogs, common
	dialogs, and property sheets.
	
	Context Help for dialogs and form views is pretty straight-forward. It requires
	that the user handle the WM_HELP or WM_CONTEXTMENU message and call WinHelp().
	Make sure the Help ID is checked for each of the controls in the resource
	editor. In case of WM_HELP message, the lParam points to a HELPINFO structure
	that contains information about the menu item, control, dialog box, or window
	for which help is requested. For WM_CONTEXTMENU messages, there is no HELPINFO
	structure with all the information so the API calls GetDlgCtrlID() and
	GetWindowContextHelpId() are needed to give the required information.
	
	In case of property sheets, it is slightly more complicated. Adding Help IDs to
	controls on a Property page using the resource editor causes it to use the
	DIALOGEX resource instead of the DIALOG resource. But Windows does not support
	the creation of Property sheets with the DIALOGEX resource. To work around this,
	the Help IDs are added programmatically after the creation of the property sheet
	and property pages. Also, because there is no property sheet template, the
	WS_EX_CONTEXTHELP style has to be set programmatically. The handling of the
	WM_HELP and WM_CONTEXTMENU messages remains the same.
	
	NOTE: If you are using VS.NET, you may receive a warning about Enable3DControls
	being deprecated. You can safely ignore this warning.
	
	REFERENCES
	==========
	
	MFC Technical Note 28: "Context-Sensitive Help Support"
	
	For more information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q149343 HOWTO: Implement Context-Sensitive Help for Dialog Controls
	
	  Q138505 HOWTO: Add Context-Sensitive Help Button to Windows 95 Dialogs
	
	  Q140676 PRB: ClassWizard Uses WM_HELPINFO Instead of WM_HELP
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbCSHelp kbMFC kbVC420 kbVC500 kbVC600 kbhowto kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.2,4.2b,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
