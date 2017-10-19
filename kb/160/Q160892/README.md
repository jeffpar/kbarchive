---
layout: page
title: "Q160892: ADT95: Including Briefcase Replication in a Custom Application"
permalink: /kb/160/Q160892/
---

## Q160892: ADT95: Including Briefcase Replication in a Custom Application

	Article: Q160892
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Access Developer's Toolkit, version 7.0 
	-------------------------------------------------------------------------------
	
	Advanced: Requires expert coding, interoperability, and multiuser skills.
	
	SUMMARY
	=======
	
	You may want to include Briefcase Replication functionality within your
	Microsoft Access 7.0 run-time application. This article describes how to use the
	Microsoft Access Developer's Toolkit for Windows 95 Setup Wizard to accomplish
	this.
	
	MORE INFORMATION
	================
	
	The following steps show how to specify the Briefcase Replication DLLs and the
	proper Windows Registry keys using the Setup Wizard. This will enable your
	application to include Briefcase Replication functionality on computers running
	under Microsoft Windows 95 or Microsoft Windows NT 4.x.
	
	To add the files needed for Briefcase Replication, do the following:
	
	1. Start the Microsoft Access 7.0 Developer's Toolkit Setup Wizard. Click Next
	  to go to the "Add the files...." dialog box.
	
	2. Click the Add button and browse for the file, Msjrci30.dll. It should be in
	  your Access folder.
	
	3. Double-click on the file to add it to the distribution set.
	
	4. In the Destination Folder list, select $(WinSysPath).
	
	5. Repeat steps 2 through 4 for the file, Msjtrclr.dll.
	
	6. Select other settings on this panel according to the needs of your
	  application.
	
	  In the "Add the Registry values" dialog box, add the following entries.
	
	  NOTE: An underscore (_) at the end of a line is used as a line-continuation
	  character. Remove the underscore from the end of the line when typing in the
	  particular Registry parameter. Also, braces "{}" and parentheses "()" are
	  used in the settings below.
	
	  To add the required entries, click the add button and then type the following
	  to specify the Properties of the six (6) required values:
	
	  Top-Level for Key: HKEY_CLASSES_ROOT
	  Path to Key: CLSID\{B54DCF20-5F9C-101B-AF4E-00AA003F0F07}\_
	  Roles\NotifyReplica
	  Value Name:
	  Base Value Data on File: <Not used for any of the 6 values>
	  Value Data Type: String
	  Value Data: {C20D7340-5525-101B-8F15-00AA003E4672}
	
	  Top-Level for Key: HKEY_CLASSES_ROOT
	  Path to Key: CLSID\{B54DCF20-5F9C-101B-AF4E-_
	  00AA003F0F07}\Roles\Reconciler
	  Value Name:
	  Value Data Type: String
	  Value Data: {C20D7340-5525-101B-8F15-00AA003E4672}
	
	  Top-Level for Key: HKEY_CLASSES_ROOT
	  Path to Key: CLSID\{C20D7340-5525-101B-8F15-00AA003E4672}\InprocServer32
	  Value Name:
	  Value Data Type: String
	  Value Data: $(WinSysPath)\MSJTRCLR.DLL
	
	  Top-Level for Key: HKEY_CLASSES_ROOT
	  Path to Key: CLSID\{C20D7340-5525-101B-8F15-00AA003E4672}\InprocServer32
	  Value Name: ResourceDll
	  Value Data Type: String
	  Value Data: $(WinSysPath)\msjrci30.dll
	
	  Top-Level for Key: HKEY_CLASSES_ROOT
	  Path to Key: CLSID\{C20D7340-5525-101B-8F15-00AA003E4672}\InprocServer32
	  Value Name: ThreadingModel
	  Value Data Type: String
	  Value Data: Apartment
	
	  Top-Level for Key: HKEY_CLASSES_ROOT
	  Path to Key: CLSID\{C20D7340-5525-101B-8F15-_
	  00AA003E4672}\SingleChangeHook
	  Value Name:
	  Value Data Type: String
	  Value Data: x <Note: This is a dummy value; any letter can be used.>
	
	In the "...Microsoft Access components...." dialog box, follow these steps:
	
	1. Select the Components you want to include in your application according to
	  the type of setup you want.
	
	2. Make sure the Replication Component check box is not selected.
	
	3. Add any other necessary information for your application, and click the
	  Finish button when you are finished.
	
	NOTE: Briefcase must be set up on any computer that uses the replication features
	in your custom application. Briefcase is installed only if you choose the
	Portable option during Windows setup, or if you choose the Custom option, and
	specify installing Briefcase.
	
	The following articles in the Microsoft Windows Knowledge Base provide further
	information on installing the Briefcase component of Microsoft Windows 95:
	
	  Q142574 How to Install and Use Briefcase
	
	  Q123876 Installed Components for Typical, Compact, or Portable Setup
	
	
	REFERENCES
	==========
	
	The Microsoft Jet Database Replication White Paper. This can be found in
	\Program Files\Common Files\Replication Manager\Msjtwtpr.doc if the Microsoft
	Access 7.0 ADT has been installed.
	
	For more information about Briefcase Replication, search for "Briefcase," and
	then "Briefcase Replication," using the Microsoft Access for Windows 95 Help
	Index.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbAudDeveloper kbAccessSearch kbZNotKeyword3 kbAccessDevTK700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
