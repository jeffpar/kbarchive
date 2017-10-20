---
layout: page
title: "Q99134: BUG: Application Errors From Long Text in the Dialog Editor"
permalink: /kb/099/Q99134/
---

## Q99134: BUG: Application Errors From Long Text in the Dialog Editor

{% raw %}

	Article: Q99134
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An attempt to use the Dialog Editor provided with version 3.1 of the Microsoft
	Windows Software Development Kit (SDK) fails and an application error occurs
	under either of the following circumstances:
	
	- Choose Order/Group from the Arrange menu when the dialog box contains two or
	  more controls, one control is a static text control, and the title of the
	  text control is 256 characters long (the limit). (Setting a 256 character
	  title may also generate a general protection [GP] fault.)
	
	- In test mode, enter more than 175 characters into a multiline edit control,
	  then press BACKSPACE. A GP fault also occurs.
	
	RESOLUTION
	==========
	
	Avoid using long names (more than 255 characters) for a static text control and
	use the test mode carefully when the dialog box contains a multiline edit
	control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Dialog Editor provided with the
	Microsoft Windows Software Development Kit, version 3.1. We are researching this
	problem and will post more information here in the Microsoft Knowledge Base as
	it becomes available.
	
	MORE INFORMATION
	================
	
	To re-create the first problem, perform the following seven steps:
	
	1. Run the Dialog Editor.
	
	2. Choose New from the File menu.
	
	3. Click the static text control button on the toolbar.
	
	4. Click in the dialog box to add a control to the dialog box.
	
	5. Click the static text control button on the toolbar.
	
	6. Click in the dialog box to add another control to the dialog box.
	
	7. Choose Order/Group from the Arrange menu.
	
	An application error occurs followed by a GP fault.
	
	To re-create the second problem, perform the following nine steps:
	
	1. Run the Dialog Editor.
	
	2. Choose New from the File menu.
	
	3. Click the edit control button on the toolbar.
	
	4. Click in the dialog box to add a control to the dialog box.
	
	5. Choose Styles from the Edit menu.
	
	6. Select the Multiline option and choose OK.
	
	7. Choose Test Mode from the Options menu.
	
	8. Type more than 175 characters into the edit control.
	
	9. Press BACKSPACE
	
	An application error occurs followed by a GP fault.
	
	Additional query words: S_C S_QCWIN buglist3.10 3.10 GP Fault Exception 0x0D gpf gp-
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
