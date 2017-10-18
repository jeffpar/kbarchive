---
layout: page
title: "Q238030: HOWTO: Create HTML Help for MFC Application on WinCE"
permalink: kb/238/Q238030/
---

## Q238030: HOWTO: Create HTML Help for MFC Application on WinCE

	Article: Q238030
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbCSHelp kbHTMLHelp kbOSWinCEsearch kbGrpDSMFCATL
	Last Modified: 04-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows CE, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In applications supporting Windows Help, the users can tap the Help menu or tap
	the Help button (?) on the command bar or press F1 on the keyboard to access the
	Help files. Note that F1 might not be supported on some Windows CE-based
	devices. Because screen space is crucial, Palm-size PCs do not enable the Help
	button on your applications. Instead, you can access Help files through the Help
	menu item. A Palm-size PC sends a WM_HELP message to the current application
	when the Help menu item is selected.
	
	In H/PC and H/PC Pro-based applications, the most common way to access the Help
	file is through the Help button (?) on the command bar. In the Windows CE
	operating system, the identifier is ID_HELP, the message handler is
	CWnd::OnHelp, and it sends WM_COMMAND and ID_HELP messages. Help for Windows CE,
	also known as PegHelp, lets users access your HTML Help files.
	
	MORE INFORMATION
	================
	
	1. Create a default Windows CE MFC AppWizard (.exe) called Sample. At step 2 of
	  4 select the Windows Help check box. This step enables the Help button (?) on
	  the command bar. The rest of the AppWizard steps can be the default ones.
	
	2. At this point if you build and run the sample application and click the Help
	  button (?) (that is the button next to the Close (X) button), it brings up a
	  message box titled Sample.htp containing just the word, Help. From the Help
	  menu item, if you choose Help Topics, it bring ups a the dialog box, Cannot
	  open help file, and the Help file viewer (PegHelp) is running in the
	  background.
	
	3. To create the Help files, create each topic as a text file with a .htp
	  extension. Create your contents page as a text file also, but save it with a
	  .htc extension. The difference between the two is that you can traverse back
	  from the topic to the contents page. The Soltr sample Help file demonstrates
	  the unique tags and structure of a Help for Windows CE file. Refer to the
	  "References" section of this article for additional information.
	
	4. Create a sample Help file. Add a new text file to the project workspace
	  called Sample.htc. This is the Contents Page of the Help. Add the following
	  code to it:
	
	  <HTML>
	  <HEAD>
	  <META HTTP-EQUIV="" Content="">
	  <title>Sample Help</title>
	  </HEAD>
	  <BODY>
	
	  <H5>Example Help File</H5>
	  <MENU>
	  <li><a href ="file:Topic1.htp">Sample Topic 1 Help</a>
	  <li><a href ="file:Topic2.htp">Sample Topic 2 Help</a>
	  </MENU>
	
	  </BODY>
	  </HTML>
	
	5. Now add two new Help files called Topic1.htp and Topic2.htp. Copy the code
	  below to each.
	  In file Topic1.htp copy and paste this code:
	
	  <HTML>
	  <HEAD>
	  <META HTTP-EQUIV=refer content="file:Sample.htc">
	  </HEAD>
	  <BODY>
	  This is Topic 1 of the example help file
	  </BODY>
	  </HTML>
	
	  In file Topic2.htp copy and paste this code:
	
	  <HTML>
	  <HEAD>
	  <META HTTP-EQUIV=refer content="file:Sample.htc">
	  </HEAD>
	  This is Topic 2 of the example help file
	  </BODY>
	  </HTML>
	
	6. Go to the Class View of the Workspace window and open the definition of
	  CMainFrame::OnHelpInfo method. Comment out the message box and add the
	  following code to it:
	
	  	
	  PROCESS_INFORMATION p;
	  CreateProcess(_T("peghelp.exe"), 
	     	      _T("Sample.htc"), 
	  	      NULL, 
	  	      NULL, 
	  	      FALSE, 
	  	      0, 
	  	      NULL, 
	  	      NULL, 
	  	      NULL, 
	  	      &p);
	  CloseHandle(p.hProcess);
	  CloseHandle(p.hThread);
	
	7. Add a message map entry to your CMainFrame class as shown below. (A
	  WM_COMMAND message with ID_HELP in wparam is sent when Help/Help Topics menu
	  item is selected.)
	
	      //} }AFX_MSG_MAP
	      // Global help commands
	      ON_COMMAND(ID_HELP, CMainFrame::OnHelpInfo)
	  END_MESSAGE_MAP()
	
	8. Save the 3 files (Sample.htc, topic1.htp, topic2.htp) to \Windows folder of
	  the CE device. If you are running this application on the emulator, use the
	  Empfile.exe utility to copy these files to the object store. Example: empfile
	  -c c:\Sample\Sample.htc wce:\windows\Sample.htc
	
	9. Rebuild and run the application. Click the Help button (?) and navigate
	  through the topics and back. Also try accessing the Help by choosing and then
	  select the Help Topics menu item.
	
	REFERENCES
	==========
	
	- For more information on Empfile utility, go to the emulation\windows folder
	  under Folder Windows CE Tools, and on command line, type empfile/?
	
	- SolitarieHelp is a P/PC Win32 Sample showing how to write Help file. Soltr
	  Sample Help File
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: context-help
	
	======================================================================
	Keywords          : kbCSHelp kbHTMLHelp kbOSWinCEsearch kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Hardware          : WinCE
	Issue type        : kbhowto
	
	=============================================================================
	
