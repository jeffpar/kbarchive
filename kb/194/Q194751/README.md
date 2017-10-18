---
layout: page
title: "Q194751: FILE: VB6Cli.exe Fixes License Problems with Visual Basic 6.0"
permalink: kb/194/Q194751/
---

## Q194751: FILE: VB6Cli.exe Fixes License Problems with Visual Basic 6.0

	Article: Q194751
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbtophit kbActiveX kbCtrl kbLicensing kbVBp600 kbGrpDSVB kbDSupport
	Last Modified: 28-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	VB6Cli.exe is a utility that fixes design-time licenses used by ActiveX controls
	installed with Microsoft Visual Basic 6.0.
	
	NOTE: If you encounter this issue with Visual Basic version 5.0, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q181854 FILE: VB5cli.exe Fixes Visual Basic 5.0 Control Installation Problem
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Vb6cli.exe
	  (http://download.microsoft.com/download/vb60ent/Sample30/1/W9XNT4/EN-US/VB6CLI.EXE)
	
	Release Date: Oct-26-1998
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	   FileName               Size
	  ---------------------------------------------------------
	  VBC6.EXE                 32k
	  ENTDAT.DLL               32k
	  LRNDAT.DLL               28k
	  PRODAT.DLL               28k
	  README.TXT               5k
	
	Contents of the README.TXT file included in VB6CLi.exe:
	
	What is VB6Cli.exe?
	-------------------
	
	VB6Cli.exe is a utility that is designed to fix design-time license problems with
	ActiveX Controls that ship with Microsoft Visual Basic 6.0. The utility does not
	fix third-party controls or controls that are not normally installed by
	Microsoft Visual Basic 6.0, nor does it enable the use of Remote Data Object
	(RDO) objects in Visual Basic 6.0 Professional Edition. If you try to use RDO in
	Visual Basic 6.0 Professional Edition, you may also encounter symptoms II and IV
	below. The only way to enable RDO is to install Visual Basic 6.0 Enterprise
	Edition.
	
	VB6Cli.exe will help correct problems with the following symptoms:
	
	Symptom I:
	
	When trying to site a control within a project, Microsoft Visual Basic raises the
	following error dialog:
	
	  License Information For This Component Not Found. You Do Not Have An
	  Appropriate License To Use This Functionality In The Design Environment.
	
	Symptom II:
	
	When trying to compile a project, Microsoft Visual Basic raises the following
	error dialog:
	
	  Compile Error : Permission Denied
	
	Symptom III:
	
	When using the Application Wizard, Microsoft Visual Basic raises an error dialog
	similar to:
	
	  60: Method ~ of Object ~ failed
	
	Symptom IV:
	
	When trying to run a project, Microsoft Visual Basic raises the following error
	dialog:
	
	  Runtime Error '429' : ActiveX Component Can't Create Object
	
	Which ActiveX controls does VB6Cli.exe work with?
	-------------------------------------------------
	
	The following is a list of ActiveX controls that VB6Cli.exe can fix:
	
	ActiveX Control                     FileName        Version      Edition
	-------------------------------------------------------------------------
	ADO Data Control 6.0                 MSADODC.OCX    6.00.8171    L,P,E
	Chart Control 6.0                   MSCHRT20.OCX    6.00.8177      P,E
	Comm Control 6.0                    MSCOMM32.OCX    6.00.8169      P,E
	Common Dialog Control 6.0           COMDLG32.OCX    6.00.8169    L,P,E
	Data Bound List Controls 6.0        DBLIST32.OCX    6.00.8169    L,P,E
	DataGrid Control 6.0                MSDATGRD.OCX    6.00.8169    L,P,E
	DataList Controls 6.0               MSDATLST.OCX    6.00.8169    L,P,E
	DataRepeater Control 6.0            MSDATREP.OCX    6.00.8169      P,E
	FlexGrid Control 6.0                MSFLXGRD.OCX    6.00.8169    L,P,E
	Hierarchical FlexGrid Control 6.0   MSHFLXGD.OCX    6.00.3005    L,P,E
	Internet Transfer Control 6.0         MSINET.OCX    6.00.8169      P,E
	MAPI Controls 6.0                   MSMAPI32.OCX    6.00.8169      P,E
	Masked Edit  Control 6.0            MSMASK32.OCX    6.00.8169      P,E
	Multimedia Control 6.0                 MCI32.OCX    6.00.8169      P,E
	PictureClip Control 6.0             PICCLP32.OCX    6.00.8169      P,E
	RemoteData Control 6.0               MSRDC20.OCX    6.00.8169        E
	Rich Textbox Control 6.0            RICHTX32.OCX    6.00.8169    L,P,E
	SysInfo Control 6.0                  SYSINFO.OCX    6.00.8169      P,E
	Tabbed Dialog Control 6.0           TABCTL32.OCX    6.00.8169    L,P,E
	Windows Common Controls-3 6.0       COMCT332.OCX    6.00.8169      P,E
	Windows Common Controls 5.0 (SP2)   COMCTL32.OCX    6.00.8022    L,P,E
	Windows Common Controls 6.0         MSCOMCTL.OCX    6.00.8177    L,P,E
	Windows Common Controls-2 5.0 (SP2) COMCT232.OCX    6.00.8022    L,P,E
	Windows Common Controls-2 6.0       MSCOMCT2.OCX    6.00.8177    L,P,E
	Winsock Control 6.0                 MSWINSCK.OCX    6.00.8169      P,E
	
	L = Learning Edition
	P = Professional Edition
	E = Enterprise Edition
	
	How do I use VB6Cli.exe?
	------------------------
	
	VB6Cli.exe requires that an edition of Microsoft Visual Basic 6.0 be installed on
	the system where the utility is going to be used.
	
	Before running the VB6Cli.exe utility, make sure there are no other applications
	running.
	
	Simply double-click on VB6Cli.exe through the Windows Explorer. The utility
	detects Microsoft Visual Basic 6.0, and installs the required design-time
	licenses for the edition detected.
	
	If successful, you will see a dialog box similar to the following:
	
	  "Enterprise Design Licenses Have Been Installed Successfully"
	
	VB6Cli.exe also offers a silent mode. Running the VB6Cli.exe from a command
	prompt with a "/q" will run the utility without any user interface. Result codes
	can be captured and used by other applications to test if the licenses were
	installed.
	
	Result Codes And Error Messages
	-------------------------------
	
	Exit Code 0   : Licenses for that Edition were installed
	Exit Code 1   : Microsoft Visual Basic 6.0 was not detected on this system
	Exit Code 2   : Could Not Load A Support Utility Library
	Exit Code 3,4 : At Least 1 Design License Was Not Properly Installed
	Exit Code 5   : Unable To Install Any Design Licenses
	Exit Code 6   : There Was An Unspecified Error With The VBC6 Utility
	
	Disclaimer
	----------
	
	The utility discussed in this article is provided "as is" and Microsoft does not
	guarantee that it can be used in all situations. Although Microsoft support
	engineers can help with the use of this product, it is not supported. Use this
	tool at your own risk.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q194784 INFO: Controls Shipped with Visual Basic 6.0
	
	  Q181854 FILE: VB5cli.exe Fixes Visual Basic 5.0 Control Installation Problem
	
	Additional query words: VB6CLI
	
	======================================================================
	Keywords          : kbfile kbtophit kbActiveX kbCtrl kbLicensing kbVBp600 kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
