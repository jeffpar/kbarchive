---
layout: page
title: "Q152582: INFO: What is an FRX file?"
permalink: /kb/152/Q152582/
---

## Q152582: INFO: What is an FRX file?

{% raw %}

	Article: Q152582
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An .FRX file is a binary data file used to store binary information for the form
	(.FRM) file with the same file name.
	
	MORE INFORMATION
	================
	
	Some controls, such as the PictureBox and Image controls, have properties that
	use binary data as their values. Visual Basic stores the binary data in an .FRX
	file with the same file name as the Form file. The .FRX file is a proprietary
	format.
	
	
	If your project contains .FRX files, you should include these files with the
	corresponding .FRM files. A form containing binary information but lacking the
	associated .FRX files will not function correctly.
	
	REFERENCES
	==========
	
	For a good description of what the .FRX file is and how it works, please refer
	to the Binary Property Values section of the Appendix A: Form and Project File
	Formats chapter of the Programmer's Guide.
	
	Additional query words: kbVBp400 kbVBp500 kbVBp600 kbVBp kbdsd kbDSupport kbControl
	
	======================================================================
	Keywords          : kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbZNotKeyword3 kbVB16bitSearch
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
