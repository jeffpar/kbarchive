---
layout: page
title: "Q280510: BUG: Control Properties Depersist Incorrectly When Host in ATL"
permalink: /kb/280/Q280510/
---

## Q280510: BUG: Control Properties Depersist Incorrectly When Host in ATL

{% raw %}

	Article: Q280510
	Product(s): Microsoft C Compiler
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbATL
	Last Modified: 16-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0, on platform(s):
	   - Microsoft Windows 95 
	   - Microsoft Windows 98 
	   - Microsoft Windows Millennium Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create an ATL dialog, or an ATL Composite control, with other ActiveX
	Controls embedded in it, the control properties that you set at design time in
	the Dialog Editor load correctly on computers running Windows 2000 or Windows
	NT, but do not load correctly on computers running Windows 95, Windows 98, or
	Windows Millennium Edition (Windows Me).
	
	CAUSE
	=====
	
	In AtlAxWindowProc:
	
	  if (lpCreate && lpCreate->lpCreateParams)
	      nCreateSize = *((WORD*)lpCreate->lpCreateParams); 
	
	lpCreateParams is the address of a SHORT value that specifies the size, in bytes,
	of the window creation data. The value is immediately followed by the creation
	data. This value is valid only on computers running Windows 2000 or Windows NT
	(for more information, see the CREATESTRUCT documentation). Therefore, the
	ActiveX Control is initialized correctly on computers running Windows 2000 or
	Windows NT. However, on computers running Windows 95, Windows 98, or Windows Me,
	the data starts at lpCreateParams because the SHORT value is not valid, and the
	initialization does not work.
	
	RESOLUTION
	==========
	
	Download the Atlhostlic.h file (contained in ATLHostLic.exe). This is a modified
	version of the Atlhost.h ATL header file. This modified header permits ATL
	control hosting to work correctly on computers running Windows 95, Windows 98,
	or Windows Me. Copy this file to your project folder, and then change all of the
	#include statements that reference the original Atlhost.h file to reference the
	Atlhostlic.h file.
	
	NOTE: This solution works only for debug and minimum-dependency builds. All
	changes from the original Althost.h file are marked with the comments "BEGIN
	CHANGE" and "END CHANGE."
	
	This solution will not work when you create ActiveX Controls dynamically by using
	the Win32 CreateWindow function that has the control properties passed in as the
	last parameter.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q218442 HOWTO: Dynamically Add ActiveX Controls to ATL Composite Control
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  ATLHostLic.exe
	
	Release Date: 13-Apr-2000
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create an ATL executable (.exe) project, and then insert a Dialog by using
	  the ATL Object Wizard. Name the Dialog MyDlg.
	
	2. Insert an ActiveX control on the Dialog (for example, the Calendar Control).
	  Change some properties of the control. For example, for the Calendar Control,
	  on the Control tab (in the Show area), clear the check box for Month/Year
	  Title.
	
	3. Toward the end of the Global _tWinMain function, delete the following lines
	  of code:
	
	          MSG msg;
	          while (GetMessage(&msg, 0, 0, 0))
	              DispatchMessage(&msg);
	
	  Paste the following sample code instead of the deleted code:
	
	  		CMyDlg dlg;
	  		dlg.DoModal ();
	
	4. #include the MyDlg.h header file in the file that contains the Global
	  _tWinMain function.
	
	5. Create a "Release MinDependency" Build.
	
	6. Try the .exe file on a computer running Windows 2000 or Windows NT. Note that
	  the property changes that you made to the control appear in the control.
	
	7. Try the .exe file on a computer running Windows 95, Windows 98, or Windows
	  Me. Note that the property changes do not appear.
	
	NOTE: Make sure that the control that you created is registered locally on both
	of the test computers.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q228530 BUG Access Violation in Ole32.dll When Creating an ATL Composite
	  Control
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :3.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
