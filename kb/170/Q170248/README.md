---
layout: page
title: "Q170248: ODE97: Some Properties of ActiveX Controls Not Supported"
permalink: /kb/170/Q170248/
---

## Q170248: ODE97: Some Properties of ActiveX Controls Not Supported

{% raw %}

	Article: Q170248
	Product(s): Microsoft Access Distribution Kit
	Version(s): 97
	Operating System(s): 
	Keyword(s): kbinterop kbole kbprogramming
	Last Modified: 23-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Some methods and properties of the ActiveX controls included with the Microsoft
	Office 97 Developer Edition (ODE) may not be supported when you use them in a
	Microsoft Office program.
	
	MORE INFORMATION
	================
	
	Originally, several Microsoft Visual Basic ActiveX controls were included in the
	Microsoft Access Developer's Toolkit version 7.0. Because Office 97 now uses
	Visual Basic for Applications as a standard development language across all of
	the Office programs, these Visual Basic ActiveX controls are included in the
	ODE.
	
	Because these ActiveX controls were created for Visual Basic version 5.0, the
	Help files contain information that may be pertinent only when you use these
	controls in Visual Basic. Some of the methods and properties of the controls do
	not apply when you use them in Office programs. To determine which methods and
	properties apply in Office programs, refer to the online Help for the ActiveX
	control that you are using.
	
	Because these tools were originally brought over for use in Microsoft Access, the
	Help file lists only Microsoft Access, but the support is the same for all
	Office programs. If a particular property or method is not supported in
	Microsoft Access, it is not supported in any of the other Office programs
	either.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q162962 New Features in MS Office 97 Developer Edition Tools
	
	  Q160126 Supported ActiveX Controls for Microsoft Access 97
	
	  Q163410 Creating Run-Time Apps for MS Excel, Word, or PowerPoint
	
	Additional query words: custom ole vba 8.0
	
	======================================================================
	Keywords          : kbinterop kbole kbprogramming 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : :97
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
