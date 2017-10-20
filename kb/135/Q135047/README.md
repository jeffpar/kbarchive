---
layout: page
title: "Q135047: HOWTO: Use Resource Editor for 16-Color 32x32 Mouse Pointers"
permalink: /kb/135/Q135047/
---

## Q135047: HOWTO: Use Resource Editor for 16-Color 32x32 Mouse Pointers

{% raw %}

	Article: Q135047
	Product(s): Microsoft C Compiler
	Version(s): 2.00 2.10 2.20 4.00 4.10
	Operating System(s): 
	Keyword(s): _IK920 kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Resource Editor, included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article gives the steps necessary to use the Visual C++ Resource Editor to
	create 16-color, 32x32 mouse pointers (cursors) in Windows NT and Windows 95.
	
	If Visual C++ version 2.x does not contain a Cursor Devices key in the system
	registry, the cursor editor uses the monochrome device description that you can
	use to create two-color, 32x32 mouse pointers.
	
	To create colored mouse pointers (cursors), you need to have color display
	drivers. This article illustrates how you can add a display device entry to the
	system registry for Visual C++ in order to create 16 color, 32x32 pointers.
	
	MORE INFORMATION
	================
	
	You can have colored pointers only in Windows NT and Windows 95.
	
	When creating a new pointer image using the Visual C++ Resource Editor, you first
	need to designate the target display device such as Monochrome, CGA, or EGA/VGA.
	When the pointer resource is opened, the image most closely matching the current
	display device is opened by default. In Visual C++, you can only select the
	Monochrome device when there is no Cursor Devices key entry in the system
	registry. This is the default case.
	
	To create a colored pointer, you need to specify a color display device such as
	EGA/VGA as the target device in the Device list box of the Cursor Editor. If
	only the monochrome device is listed in the list box, you need to add other
	display devices to the list. You can do this by adding additional entries in the
	system Registry.
	
	Perform the following steps to add the EGA/VGA display device in the system
	Registry as an example.
	
	Windows NT
	----------
	
	1. Run \WindowsNT_diretory\System32\Regedt32.exe if you are running Visual C++
	  with Windows NT.
	
	2. If you have Visual C++ 4.0:
	  In the HKEY_CURRENT_USER, select Software\Microsoft\DEVELOPER.
	
	  If you have Visual C++ 2.0:
	  In the HKEY_CURRENT_USER, select Software\Microsoft\Visual 2.0.
	
	3. Add a key called "Cursor Devices" if you don't have one already. Leave the
	  Class: field empty.
	
	4. Add the value EGA/VGA (32x32) in the Value Name field.
	
	5. Select REG_SZ as the data type.
	
	6. When prompted with a String Editor dialog box, specify 16,32,32.
	
	7. Finally the entry for the Cursor Devices should look like this:
	
	  EGA/VGA:REG_SZ:16,32,32.
	
	8. Close the Registry Editor.
	
	9. Restart Visual C++.
	
	Windows 95
	----------
	
	1. Run \Windows95_directory\Regedit.exe (the Registry Editor) if you are running
	  Visual C++ with Windows 95.
	
	2. If you have Visual C++ 4.0:
	  In the HKEY_CURRENT_USER, select Software\Microsoft\DEVELOPER.
	
	  If you have Visual C++ 2.0:
	  In the HKEY_CURRENT_USER, select Software\Microsoft\Visual 2.0.
	
	3. Add a key called "Cursor Devices" if you don't have one already. On the Edit
	  menu, click New and then key. Then in the editor control, type Cursor
	  Devices.
	
	4. Add the value EGA/VGA (32x32). On the Edit menu, click String and then Value.
	  Then add the value.
	
	5. Specify the color and the dimension. On the Edit menu, click Modify when the
	  String Value has the focus. Type 16,32,32 in the String Editor dialog box.
	
	6. Close the Registry Editor.
	
	7. Restart Visual C++.
	
	Now, you can add the EGA/VGA device to the Device list box of the Cursor Editor.
	To do this:
	
	On the Resource menu, click New and then Cursor to open the Cursor Graphic
	editor. Then on the Resource menu, click New Device Image, and select EGA/VGA
	(32x32) as the target device from the New Device Image dialog box. This will add
	EGA/VGA (32x32) to the Device list box. Selecting EGA/VGA as the device allows
	you to create color pointers.
	
	By default, the Graphic Editor supports the creation of images for the following
	devices:
	
	Device       Colors   Width   Height
	EGA/VGA      16       32      32
	Monochrome   2        32      32
	CGA          2        32      16
	
	REFERENCES
	==========
	
	More information on cursor devices can be found in Books Online. Drill down to
	the "Describing Cursor Devices" topic by following this route:
	
	  User's Guide
	     Visual C++ User's Guide
	        Part 3 - Appendices
	           Appendix O - Initializing and configuring Visual C++
	              Describing Cursor Devices
	
	More information on creating new pointers can be found in Books Online. Drill
	down to the "Creating a New Icon or Cursor" topic by following this route:
	
	  User's Guide
	     Visual C++ User's Guide
	        Part 1 - Using Visual C++
	           Chapter 9 - Using the Graphic Editor
	              Creating a New Icon or Cursor
	
	Additional query words: kbinf 2.00 2.10 2.20 4.00 4.10 app studio
	
	======================================================================
	Keywords          : _IK920 kbVC kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch kbResourceEd
	Version           : 2.00 2.10 2.20 4.00 4.10
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
