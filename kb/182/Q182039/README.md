---
layout: page
title: "Q182039: HOWTO: Use MouseKeys Instead of the Mouse in Visual FoxPro"
permalink: /kb/182/Q182039/
---

## Q182039: HOWTO: Use MouseKeys Instead of the Mouse in Visual FoxPro

	Article: Q182039
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Users or developers may request a method to substitute a keystroke for a mouse
	action. Windows 95 and Windows NT 4.0 both use the MouseKeys feature as part of
	the Accessibility option. This article explains how to modify the operating
	system to use a keystroke in place of a mouse action.
	
	MORE INFORMATION
	================
	
	Follow these steps to enable the keystrokes:
	
	1. Open Control Panel and click Accessibility Options.
	
	2. In the Accessiblity Properties dialog box click the Mouse tab.
	
	3. Select Use MouseKeys and then click Settings.
	
	4. In the Settings for MouseKeys dialog box select Use Shortcut. Select ON for
	  the "Use MouseKey when NumLock is:" option button.
	
	5. Select the "Show MouseKey status on Screen" check box.
	
	The MouseKeys option can be turned ON or OFF using the default short cut keys
	below:
	
	  <Left ALT+Left SHIFT+NUM LOCK>
	
	NOTE: The mouse cursor must be placed over an object, such as a command button,
	for these keystrokes to function. For example, if a command button has focus and
	the cursor is not over the command button, the keystrokes will not activate the
	button. In addition, you must use the numeric keypad keys for all mouse key
	functions. Using the Arrow keys, Insert, or Delete keys produces inconsistent
	results.
	
	Some of the MouseKey options addressed in this accessibility feature are listed
	below:
	
	  Begin Drag.................. Insert(INS)
	  Double Click................ +
	  Drop After Drag............. Delete (DEL)
	  Large Movement.............. CTRL+<Any key pad number key except 5>
	  Movement.................... Any key pad number except 5
	  Select Both  Mouse Buttons.. *
	  Select Left Mouse Button.... / 
	  Select Right Mouse Button... -
	  Single Click................ 5
	  Single Pixel Moves.......... Shift + key pad number key
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q139517 How to Use MouseKeys Feature in Windows 95
	
	
	  Microsoft Windows 95 Resource Kit; pages 1244-1246
	
	  Windows 95 Help; Topic: MouseKeys
	  Windows NT 4.0 Help; Topic: MouseKeys
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Mike Fernald, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
