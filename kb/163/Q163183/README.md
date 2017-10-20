---
layout: page
title: "Q163183: ODE97: Supporting Files for ActiveX Controls in ODE"
permalink: /kb/163/Q163183/
---

## Q163183: ODE97: Supporting Files for ActiveX Controls in ODE

{% raw %}

	Article: Q163183
	Product(s): Microsoft Access Distribution Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	SUMMARY
	=======
	
	When you distribute an ActiveX control with your run-time application, include
	the .ocx file for the ActiveX control and any .dll or other supporting files
	needed by the control.
	
	To make this easier, the Setup Wizard supports the use of dependency (.dep)
	files. The .dep file for an ActiveX control contains information specifying the
	files that are required to use the control. Each ActiveX control supplied with
	Microsoft Office 97 Developer Edition Tools (ODE) has a corresponding .dep
	file.
	
	This article lists the supporting files that appear in the .dep files for the
	ActiveX controls included in the ODE.
	
	MORE INFORMATION
	================
	
	The following file(s) are required for the ActiveX controls included with
	Microsoft Office 97 Developer Edition Tools (ODE).
	
	  
	
	  ActiveX            Required          Supporting       Dependent
	  Control            File Name         File Name(s)     File Name
	  ------------------------------------------------------------------
	
	  Calendar           Mscal.ocx         None             Mscal.dep
	
	  CommonDialog       Comdlg32.ocx      Comcat.dll       Comdlg32.dep
	
	  ImageList          Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  ListView           Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  ProgressBar        Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  Slider             Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  StatusBar          Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  TabStrip           Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  Toolbar            Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  TreeView           Comctl32.ocx      Comcat.dll       Comctl32.dep
	
	  InternetTransfer   Msinet.ocx        Comcat.dll       Comctl32.dep
	                                    Wint351.exe
	                                    AxDist.exe
	
	  RichTextBox        Richtx32.ocx      Comcat.dll       Richtx32.dep
	                                    RichEd32.dll
	
	  UpDown             Comct232.ocx      Comcat.dll       Comct232.dep
	
	  Winsock            Mswinsck.ocx      Comcat.dll       Mswinsck.dep
	                                    AxDist.exe
	
	NOTE: All .dll and .ocx files should be installed in the C:\Windows\System folder
	so that they can be shared with other applications. The Setup Wizard suggests
	this path automatically for ActiveX (.ocx) control files.
	
	REFERENCES
	==========
	
	For more information about ActiveX controls, search the Help Index for "ActiveX
	controls," and then "Adding ActiveX Controls to Your Custom Setup Program," or
	ask the Microsoft Access 97 Office Assistant.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : :
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
