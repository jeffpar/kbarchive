---
layout: page
title: "Q168059: WD97: Can't Use Word 97 as Server for Word 6.0/95 Link"
permalink: /kb/168/Q168059/
---

## Q168059: WD97: Can't Use Word 97 as Server for Word 6.0/95 Link

{% raw %}

	Article: Q168059
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 14-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	- Microsoft Word for Windows 95, versions 7.0, 7.0a 
	- Microsoft Word for Windows, versions 6.0, 6.0a, 6.0c 
	-------------------------------------------------------------------------------
	
	
	
	SYMPTOMS
	========
	
	If you create a link to a Microsoft Word 6.x or Microsoft Word 7.x document,
	paste it into an MFC (Microsoft Foundation Class) OClient container, and then
	double-click the link on a computer that only has Word 97 installed, you may
	receive the following message:
	
	  Cannot Start the Source Application For This Object
	
	
	RESOLUTION
	==========
	
	To correct this problem, install Microsoft Word 97 Service Release 1 (SR- 1).
	
	To work around this problem, open the container application and the document on
	the computer that only has Microsoft Word 97, and reinsert the link to the Word
	document.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Word 97 for Windows.
	This problem was corrected in Microsoft Word 97 SR-1.
	
	For additional information about SR-1, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q172475 OFF97: How to Obtain and Install MS Office 97 SR-1
	
	MORE INFORMATION
	================
	
	This problem occurs when pasting links to WordPad or any of the Microsoft Office
	applications, because WordPad and the Office applications are MFC OClient
	containers.
	
	The Microsoft Foundation Class Library, a C++ Windows interface, is built on top
	of the C-language Windows application programming interface (API) to ensure
	long-term compatibility with the thousands of applications already written for
	Windows. MFC is a truly object-oriented interface designed with the following
	goals:
	
	- Significantly reduced effort for programming an application for Windows
	
	- Execution speed comparable to that of the C-language API
	
	- Minimum code size overhead
	
	- Ability to call any Windows C functions directly
	
	- Easier conversion of existing C applications to C++
	
	- Ability to leverage from the existing base of C-language Windows programming
	  experience
	
	- True Windows API for C++ that effectively uses C++ language features
	
	The core of the Microsoft Foundation Class library encapsulates a large portion
	of the Windows API in C++ form. Library classes represent windows, dialog boxes,
	device contexts, common GDI objects, and other standard Windows items. These
	classes provide a convenient C++ member function interface to the structures in
	Windows that they encapsulate. The Microsoft Foundation Class Library also
	supplies a layer of additional application functionality built on the C++
	encapsulation of the Windows API. This layer is a working application framework
	for Windows that provides most of the common user interface expected of programs
	for Windows.
	
	The single characteristic that sets the Microsoft Foundation Class Library apart
	from other class libraries for Windows is the close mapping to the Windows API
	written in the C language. You can generally mix calls to the class library
	freely with direct calls to the Windows API. However, the classes are not a
	complete replacement for that API. Developers must still occasionally make
	direct calls to some Windows functions (::GetSystemMetrics, for example). A
	Windows function is wrapped by a class member function only when there is a
	clear advantage to doing so.
	
	REFERENCES
	==========
	
	For more information about building solutions with the Microsoft Foundation
	Class, please see Microsoft Visual C++ Web site at the following location:
	
	  http://www.microsoft.com/visualc
	
	Additional query words:
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbWord700Search kbZNotKeyword2 kbWord600 kbWord600a kbWord600c kbWord700 kbWord700a
	Version           : WINDOWS:6.0,6.0a,6.0c,7.0,7.0a,97
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
