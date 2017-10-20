---
layout: page
title: "Q66926: INFO: Dialog Box Creation Fails If Text Starts w/ Character 255"
permalink: /kb/066/Q66926/
---

## Q66926: INFO: Dialog Box Creation Fails If Text Starts w/ Character 255

{% raw %}

	Article: Q66926
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbDlg kbSDKPlatform
	Last Modified: 10-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Text strings in a dialog box resource cannot start with the character
	represented by the value 255 (0xFF). In the ANSI character set, this character
	is the letter "y" with a diaeresis mark, which is used primarily in Nordic
	languages. If Windows encounters this situation, a call to DialogBox() or
	CreateDialog() will fail.
	
	The following are two possible solutions:
	
	- Create the control with some "dummy" text. Then, use the SetDlgItemText()
	  function during the processing of the WM_INITDIALOG message to manually set
	  the text of the control to its proper value. This is the preferred method.
	
	  -or-
	
	- Instead of starting the text with the 255 character, use a space, followed by
	  a backspace character and the 255 character. For example, the text in the
	  dialog box script can be " \0008x", where "x" is the 255 character. The
	  embedded backspace erases the space, leaving only the 255 character.
	
	MORE INFORMATION
	================
	
	Windows uses the number 255 to indicate that a resource is represented by
	ordinal value instead of by a string name. For example, when a dialog box is
	declared as follows:
	
	  AboutBox    DIALOG  ...
	
	the text "AboutBox" appears in the .RES file. However, using the following
	
	  1           DIALOG  ...
	
	places the bytes 0xFF 0x01 0x00 into the .RES file. The 0xFF is used to indicate
	that the next two bytes are the ordinal value for this resource.
	
	When creating a dialog box, the Windows Dialog Manager scans through each string
	in the dialog box template to find the null terminator. However, when a string
	that starts with 255 is encountered, it is interpreted as an ordinal value. In
	this situation, Windows incorrectly skips the next 2 bytes and treats the new
	position as the next piece of data in the dialog box template.
	
	Whenever this occurs, the remainder of the dialog box template is interpreted
	incorrectly, and Windows tries to create controls of unknown classes, with
	unknown styles, in unknown locations. This causes the dialog box creation to
	fail.
	
	
	Additional query words: 3.00 3.10 dialog box ANSI
	
	======================================================================
	Keywords          : kb16bitonly kbDlg kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
