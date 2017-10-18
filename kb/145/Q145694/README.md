---
layout: page
title: "Q145694: INFO: SaveSetting &amp; GetSetting Allow Nested Settings"
permalink: kb/145/Q145694/
---

## Q145694: INFO: SaveSetting &amp; GetSetting Allow Nested Settings

	Article: Q145694
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is possible to use the SaveSetting statement to create nested levels of keys
	and values in the Registry. This behavior is desirable in some cases.
	
	For example, when receiving the location of a SYSTEM.MDA file, the Access engine
	expects the SystemDB value to exist in a subkey of Engines\Jet, such as this:
	
	  HKEY_CURRENT_USER
	     \Software
	        \VB and VBA Program Settings
	           \MyApp
	              \Engines
	                 \Jet
	                    SystemDB = c:\access\system.mda
	
	Simply using the syntax for GetSetting supplied in the documentation and online
	help does not allow for this functionality.
	
	MORE INFORMATION
	================
	
	You can create nested levels in the Registry by using this syntax:
	
	  SaveSetting "TestApp", "Test2\Test3", "TestVal", "TestSetting"
	
	This will create a section of the Registry that looks like:
	
	  HKEY_CURRENT_USER
	     \Software
	        \VB and VBA Program Settings
	           \TestApp
	              \Test2
	                 \Test3
	                    TestVal = TestSetting
	
	This will only work with the 32-bit version of Visual Basic. If the same line of
	code is executed with Visual Basic 4.0 16-bit, the result will be a file named
	TESTAPP.INI, with the following section:
	
	  [Test2\Test3]
	  TestVal=TestSetting
	
	To retrieve values stored in the Registry like this, use the same syntax with the
	GetSetting function.
	
	Some restrictions are inherited when creating nested keys with SaveSetting.
	
	DeleteSetting and GetAllSettings do not work in the same fashion as they do with
	non-nested keys.
	
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbRegistry kbVBA
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	
