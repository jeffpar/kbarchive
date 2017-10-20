---
layout: page
title: "Q173237: FIX: Barcode Font Does Not Display or Print Correctly"
permalink: /kb/173/Q173237/
---

## Q173237: FIX: Barcode Font Does Not Display or Print Correctly

{% raw %}

	Article: Q173237
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0a; WINNT:97,97sp1,97sp2,97sp3
	Operating System(s): 
	Keyword(s): kbVS97sp2fix
	Last Modified: 18-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro v5.0a is not able to display or print the BarCode font correctly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been corrected in the version of Visual
	FoxPro v5.0a that ships with the Visual Studio Service Pack 3.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q170365 INFO: Visual Studio 97 Service Packs - What, Where, and Why
	
	MORE INFORMATION
	================
	
	If you have a BarCode font installed on your system and you set the fonts for
	objects to it, the objects are not displayed in the BarCode format at
	design-time or at run-time. This behavior occurs with Forms, Reports, or any
	other Visual FoxPro object that displays data. The same BarCode font displays
	correctly in Microsoft Word and Excel.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following steps are based on the assumption that a BarCode font is already
	installed on your system:
	
	1. Open a New Report or a Form using the Report or the Form Designer,
	  respectively.
	
	2. Add some objects that display data to the report (for example, Fields or
	  Labels) or the form (for example, TextBox, ListBox, or Grid).
	
	3. Select one of the objects. For the report, set the Font of the object to the
	  Barcode font from the Fonts dialog (Format-->Font). For a form, set the
	  FontName property of the object to the BarCode Font.
	
	4. In the Report/Form Designer, note that the object does not display its
	  contents with the BarCode format.
	
	5. Repeat step 4 for several objects and note that none of them are displayed
	  with the BarCode format.
	
	6. Preview/Print the Report or run the Form, and note that the objects that are
	  assigned the BarCode font do not display in the BarCode Format.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVS97sp2fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500a
	Version           : WINDOWS:5.0a; WINNT:97,97sp1,97sp2,97sp3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
