---
layout: page
title: "Q172690: PRB: LoadPicture() Causes &quot;File Access is Denied&quot; Error"
permalink: /kb/172/Q172690/
---

## Q172690: PRB: LoadPicture() Causes &quot;File Access is Denied&quot; Error

{% raw %}

	Article: Q172690
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual FoxPro 5.x, using the LoadPicture function to create an object
	reference for a read-only bitmap or icon generates the following error message:
	
	  File Access is Denied.
	
	RESOLUTION
	==========
	
	Remove the read-only attribute from the bitmap or icon file.
	
	-OR-
	
	Assign the read-only bitmap or icon to the control at design time.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Windows Explorer, go to VFP5.0a\Samples\Graphics\Bmps\Assorted and change
	  the Balloon.bmp file attribute to Read-only.
	
	  NOTE: The upper-level directory may be different, depending upon the directory
	  name in which Visual FoxPro 5.0a was installed.
	
	2. In Visual FoxPro, create a new form named "MyTest."
	
	3. Add an Microsoft Tabbed Dialog ActiveX control to the form and change the
	  Name property to "tabdc1."
	
	4. In the INIT event of the form, put in the following code:
	
	        Thisform.tabdc1.Object.Picture= ;
	        LoadPicture(Home()+"Samples\graphics\bmps\assorted\balloon.bmp")
	
	5. Save and Run the form.
	  The error "File Access is Denied" appears.
	
	Additional query words: foxwin loadpicture activex tabbed dialog control readonly
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
