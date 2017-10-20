---
layout: page
title: "Q136044: How to Make ImagEdit Create 16X16 Icons"
permalink: /kb/136/Q136044/
---

## Q136044: How to Make ImagEdit Create 16X16 Icons

{% raw %}

	Article: Q136044
	Product(s): Microsoft FoxPro
	Version(s): 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	For a Visual FoxPro Application to present a small icon in the Windows Explorer,
	it must have a 16X16 icon resource. ImagEdit, provided with Visual FoxPro,
	allows you to create this resource.
	
	MORE INFORMATION
	================
	
	To add this ability to ImagEdit, modify the ImagEdit.ini file in the Windows
	directory by adding the following two lines:
	
	     [ImagEdit.Icon]
	     Win95=16,16,16
	
	Then you can start ImagEdit, and load an icon. Click Edit...New image and select
	Win95 16X16 as the type of resource. Create your 16X16 image.
	
	Save the image under a new name. You can then use this resource in a FoxPro
	application. When Windows 95 needs the small icon in Explorer, or in the Start
	menu, your small icon will be used.
	
	Additional query words: VFoxWin Imageedit
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b
	Version           : 3.00b
	
	=============================================================================
	

{% endraw %}
