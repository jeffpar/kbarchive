---
layout: page
title: "Q181854: FILE: VB5cli.exe Fixes VB 5.0 Control Installation Problem"
permalink: kb/181/Q181854/
---

## Q181854: FILE: VB5cli.exe Fixes VB 5.0 Control Installation Problem

	Article: Q181854
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbfile kbsetup kbtophit kbCtrl kbLicensing kbVBp500 kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VB5cli.exe installs the Vbcmpfix.exe utility, which fixes problems with the
	following three symptoms:
	NOTE: The former name of VB5Cli.Exe was VBC.EXE. The file name was changed.
	
	Symptom I
	---------
	
	When trying to site a control within your project, you receive the following
	error message:
	
	  License Information For This Component Not Found. You Do Not Have An
	  Appropriate License To Use This Functionality In The Design Environment.
	
	Symptom II
	----------
	
	When trying to compile your project, you receive the following error:
	
	  Compile Error : Permission Denied
	
	Symptom III
	-----------
	
	When trying to run your project, you receive the following error:
	
	  Runtime Error '429' : ActiveX Component Can't Create Object
	
	NOTE: If you are having this issue with Visual Basic version 6.0, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q194751 FILE: VB6Cli.exe Fixes License Problems with Visual Basic 6.0
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  VB5cli.exe
	  (http://download.microsoft.com/download/vb50pro/UtilA1/1/WIN98/EN-US/VB5cli.exe)
	
	Release Date: February 27, 1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The errors described in the "Summary" section of this article are the result of
	the Visual Basic 5.0 installation program failing to install the control
	properly. This problem arises during the installation of Visual Basic 5.0 when
	the installation program detects that a component is already on the system. In
	this case, the installation program will not install the component properly for
	use in the Visual Basic 5.0 design environment.
	
	Components can already be on the system due to the installation of other
	applications, including Visual Basic applications, which have already installed
	these same components.
	
	What Vbcmpfix Does
	------------------
	
	Vbcmpfix is designed to make sure that the controls and components included with
	Visual Basic 5.0 are installed properly. Vbcmpfix will detect and fix the
	install problems for the following editions of Visual Basic 5.0:
	
	- Visual Basic 5.0 Enterprise Edition
	
	- Visual Basic 5.0 Professional Edition
	
	- Visual Basic 5.0 Learning Edition
	
	- Visual Basic 5.0 Control Creation Edition
	
	Vbcmpfix does not require any Service Packs installed to use, however upgrading
	to the latest Service Pack is always recommended. The latest service pack is
	available at:
	
	  http://msdn.microsoft.com/vstudio/sp/
	
	List Of Components Vbcmpfix Will Fix
	------------------------------------
	
	Depending upon which edition of Visual Basic 5.0 you have installed, Vbcmpfix
	will fix your installation so that controls and components that come with VB5
	work in the VB5 design environment. Vbcmpfix.exe works ONLY with the components
	listed below, and will not affect any other third party controls you might be
	having problems with, or fix problems with any controls in the \Tools\Controls
	directory on the Visual Basic 5.0 CD.
	
	Component List                         Ent     Pro     Lrn     CCE
	
	Microsoft Data Bound List Control      X       X       X
	Auto Connection Manager (AddIn)        X       X
	Microsoft Tabbed Dialog Control        X       X       X
	Microsoft Winsock Control              X       X
	Microsoft Comm Control                 X       X
	Microsoft RemoteData Control           X
	Microsoft Common Dialog Control        X       X       X       X
	Microsoft Data Bound Grid Control      X       X       X
	Microsoft Windows Common Controls (1)  X       X       X       X
	Microsoft PictureClip Control          X       X
	Microsoft Flexgrid Control             X       X       X
	Microsoft Internet Transfer Control    X       X
	Microsoft Chart Control                X       X
	Microsoft MAPI Controls                X       X
	Microsoft Windows Common Controls (2)  X       X
	VB T-SQL Debugger (AddIn)              X
	Microsoft UserConnection
	      (ActiveX Designer)              X
	Microsoft Remote Data Object 2.0       X
	Microsoft Multimedia Control           X       X
	Microsoft Masked Edit Control          X       X
	Microsoft Rich TextBox Control         X       X
	Microsoft SysInfo Control              X       X
	Data Access Objects 3.50
	         Object Library               X       X
	
	How To Use
	----------
	
	Vbcmpfix is very simple to use. Run the self extracting Vbc.exe program, which
	will extract two files:
	
	  Vbcmpfix.exe
	  ReadMe.txt
	
	Double-click Vbcmpfix.exe from the Windows Explorer, or run it from the command
	line.
	
	When Vbcmpfix launches, it will automatically detect which version of Visual
	Basic you have installed on your system. If you do not have Visual Basic
	installed, it will not allow you continue.
	
	After it detects your version of Visual Basic, you can "Fix Install" or "Quit."
	Choosing "Fix Install" will update your system so that the controls and
	components that come with your edition of Visual Basic will work. The controls
	and components that are fixed is dependent upon the edition of Visual basic 5.0
	you have installed.
	
	After you have done this, close the utility and reboot your system. After
	rebooting, launch Visual Basic 5 and try using any controls with which you were
	having problems.
	
	Known Issues
	------------
	
	Users of Internet Explorer 4.x might notice that their desktop can produce odd
	behavior after running Vbcmpfix.exe. Bitmaps might become black and/or colors
	will be strange. Rebooting will solve this problem.
	
	If you still cannot use controls after running Vbcmpfix.exe, please contact
	Microsoft Visual Basic Technical Support. Re-run Vbcmpfix.exe and write down the
	build number of the utility (given in the about box), and have that handy in
	case they ask for it. Vbcmpfix will not work on systems that have certain
	security settings, and Microsoft Visual Basic Technical Support will assist you
	in resolving this problem.
	
	If you install Visual Basic on a network, sometimes security settings will carry
	over, and your system will not let Vbcmpfix.exe to run correctly.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q177799 PRB: "License Information for This Component Not Found" Error
	
	Additional query words: 429 vbc vbc.exe
	
	======================================================================
	Keywords          : kbfile kbsetup kbtophit kbCtrl kbLicensing kbVBp500 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500Search kbVBA500 kbVB500 kbZNotKeyword3
	Version           : WINDOWS:5.0
	Issue type        : kbprb
	
	=============================================================================
	
