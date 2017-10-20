---
layout: page
title: "Q146661: XCLN: Cannot Paste Bitmaps or Files into a RichEntry Field"
permalink: /kb/146/Q146661/
---

## Q146661: XCLN: Cannot Paste Bitmaps or Files into a RichEntry Field

{% raw %}

	Article: Q146661
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you add a RichEntry field into a Microsoft Exchange Electronic Form, and
	compile and install the form, you cannot paste anything other than richtext into
	the RichEntry field. Even though the Edit/Paste menu option is enabled on the
	form's menu, when the RichEntry field is selected on the form, you cannot paste
	a bitmap or a file into the field.
	
	RESOLUTION
	==========
	
	By default, OLE objects in this version of the RichEntry fields can only handle
	richtext, not Bitmaps or external files. If you want to be able to paste bitmaps
	or external files into the RichEntry field, you must perform the following steps
	when you add or edit properties of a RichEntry field:
	
	1. Insert a RichEntry field if it doesn't already exist.
	
	2. Select the RichEntry Field so that it has the focus on the form.
	
	3. Choose Field Properties from the View menu or hit F4.
	
	4. Choose the General tab on the property sheet.
	
	5. Change the reference name in the drop down box from the field name to
	  MAPI_Body_Custom.
	
	6. Save the project, recompile it, and then reinstall the form.
	
	Additional query words: Paste RichEntry Bitmap
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbZNotKeyword3 kbExchange400NT kbExchange500NT kbExchange400Win95 kbExchange500Win95
	Version           : WINDOWS:4.0,5.0
	
	=============================================================================
	

{% endraw %}
