---
layout: page
title: "Q247005: HOWTO: Move Visual C++ IDE Customizations to Another Computer"
permalink: kb/247/Q247005/
---

## Q247005: HOWTO: Move Visual C++ IDE Customizations to Another Computer

	Article: Q247005
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbide kbRegistry kbVC500 kbVC600 kbDevStudio kbDSupport kbGrpDSTools
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	The Visual C++ Integrated Development Environment (IDE) settings are stored in
	the following registry key:
	
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\x.0
	
	Where x.0 denotes the version number of the VC++ installation.
	
	When you customize the Visual C++ IDE and quit from Visual C++, this key is
	updated. The next time Visual C++ is started this key will be queried and the
	changes will be reflected in the IDE. The "More Information" section discusses
	the specific keys that are used to store the Visual C++ IDE settings and the
	steps involved in moving those registry values to another computer.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To move Visual C++ customizations from one Visual C++ installation to another,
	you will have to export and import all or some of the registry keys mentioned in
	the "Visual C++ registry keys" section. This section doesn't cover all the
	Visual C++ keys. If you want your new Visual C++ install to be identical your
	current install then export and import the entire
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\x.0 registry key. See the "Export
	and Import registry keys" section on exporting and importing these keys.
	
	The only difference between the key names in Visual C++ versions 5.0 and 6.0 is
	the version number in the name. For Visual C++ 5.0, the keys you are looking for
	are all sub keys of:
	
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0
	
	and for Visual C++ 6.0:
	
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0
	
	Not all of these keys will be present on every system, some of the keys are
	created when you customize specific IDE settings. If you are upgrading from
	Visual C++ 5.0 to Visual C++ 6.0, the Visual C++ setup program asks you if you'd
	like to move your customizations to the new installation. The procedures
	outlined in this article assumes that you have made no customizations to the new
	installation of Visual C++. If customizations have been made to the new
	installation, it is possible that the customizations will be lost when importing
	from the customized computer.
	
	Visual C++ registry keys
	------------------------
	
	- Format
	
	  The Format key contains the settings for the custom colors and fonts used for
	  the various windows that Visual C++ supports. You can get to this setting in
	  Visual C++ by selecting the Tools menu, clicking Options, then selecting the
	  Format tab.
	
	  For Visual C++ 5.0 the key is:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\Format
	
	  For Visual C++ 6.0 the key is:
	
	  HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\Format
	
	- Layout
	
	  The Layout key contains information on the custom menus, toolbars, and command
	  buttons. It's the same as the preceding key except you replace Format with
	  Layout.
	
	  NOTE: The locations of these controls on the screen could be different,
	  depending on the screen resolution.
	
	- TextEditor
	
	  The Text Editor key has information on the tab settings for different file
	  types and some advanced settings. You can get to this setting in Visual C++
	  by selecting the Tools menu, clicking Options, then selecting the Tabs tab.
	
	- Tools
	
	  The Tools key contains information on the Tools menu item, including all the
	  default tools that come with Visual C++ and the tools you have added, along
	  with their absolute paths. You may have to update these paths correctly on
	  the new computer.
	
	- General
	
	  The General key mainly contains information on controlling the Window menu and
	  ToolTips.
	
	- Graphics Editor
	
	  The Graphics Editor key contains information on screen color.
	
	NOTE: Some keys store absolute path information. Make sure these paths are right
	for your new installation or Visual C++ won't behave as expected.
	
	Export and Import registry keys
	-------------------------------
	
	Use the following steps to export a registry key:
	
	1. Start the registry editor Regedit.exe.
	
	2. Navigate to the key that you want to export, for example select:
	
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\Format
	
	3. Select Export Registry File from the Registry menu.
	
	4. Specify a file name in the "Export Registry File" dialog box. The default
	  extension for the file is REG.
	
	Follow the steps below to import a registry key:
	
	1. Copy the exported registry file to the target computer.
	
	2. Start the registry editor Regedit.exe.
	
	3. Select Import Registry File from the Registry menu.
	
	4. Browse for the file copied in step 1 from the "Import Registry File" dialog
	  box. On clicking Open, the Registry Editor message box displays whether the
	  operation was successful or not.
	
	You can avoid the above steps by double clicking on the REG file in Windows
	Explorer. This works as long as the .reg extension is a registered shell
	extension.
	
	NOTE: Make sure that you have permissions to update the registry.
	
	
	REFERENCES
	==========
	
	For more information on Customizing Visual C++ see the following topic in the
	MSDN library:
	
	  Home Page: Customizing Visual C++
	
	For additional information about the Windows registry, click the article number
	below to view the article in the Microsoft Knowledge Base:
	
	  Q136393 How to Modify the Windows Registry
	
	Additional query words:
	
	======================================================================
	Keywords          : kbide kbRegistry kbVC500 kbVC600 kbDevStudio kbDSupport kbGrpDSTools 
	Technology        : kbVCsearch kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
