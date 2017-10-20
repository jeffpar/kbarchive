---
layout: page
title: "Q163717: ODE97: ODE Slider Control Is Not Displayed as Expected in Previe"
permalink: /kb/163/Q163717/
---

## Q163717: ODE97: ODE Slider Control Is Not Displayed as Expected in Previe

{% raw %}

	Article: Q163717
	Product(s): Microsoft Access Distribution Kit
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbhw kbui kbHardware
	Last Modified: 01-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Office 97 Developer Edition 
	-------------------------------------------------------------------------------
	
	Moderate: Requires basic macro, coding, and interoperability skills.
	
	
	SYMPTOMS
	========
	
	When you insert a Microsoft ActiveX Slider control version 5.0 into a form in
	Microsoft Access 97 and then preview the form, the Slider control may not be
	displayed as expected.
	
	NOTE: The Microsoft ActiveX Slider control version 5.0 is included in the
	Microsoft Office 97 Developer Edition Tools package. It is not included in the
	Microsoft Office 97, Professional Edition or the Microsoft Access 97 stand-alone
	package.
	
	CAUSE
	=====
	
	How the Slider control is displayed in Print Preview will depend on the printer
	driver you are using. Some printer drivers cause certain ActiveX controls, such
	as the Slider control, to look different when you view them in Print preview.
	This will usually be more common in some laserjet printer drivers, dot matrix
	printer drivers, and Generic/text only drivers.
	
	RESOLUTION
	==========
	
	To make an ActiveX control image display more clearly in Print Preview, use a
	color printer driver or a postscript printer driver. Certain laserjet and
	deskjet printer drivers work well also.
	
	You may also need to change some of the properties for the printer driver you are
	using. For example, if you are using an HP Laserjet 4 Plus printer driver, you
	will need to change the graphics dithering in order to get a clearer display of
	the control in Print Preview. These options can be set on the Graphics tab in
	the Printer Properties dialog box in Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Access 97.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem
	--------------------------
	
	1. In Control Panel, add the HP Laserjet 4 Plus driver to the list of printers.
	  Set this as your default printer and do the following:
	
	  a. On the File menu, click Properties.
	
	  b. On the Graphics tab, select 600 dots per inch in the Resolution box and
	     click Coarse in the Dithering option box. Click Apply, and then click OK
	     to close the Printer Properties box.
	
	2. Create a new form in Microsoft Access 97.
	
	3. Insert the Microsoft Slider version 5.0 ActiveX control into the form. Resize
	  the control to make it larger.
	
	4. On the File menu, click Print Preview. Note that the Microsoft Slider ActiveX
	  control displays with black dots on a white background.
	
	REFERENCES
	==========
	
	For more information about ActiveX controls, search the Help Index for "ActiveX
	controls, adding to forms and reports," or ask the Microsoft Access 97 Office
	Assistant.
	
	Additional query words: 5 0
	
	======================================================================
	Keywords          : kbhw kbui kbHardware 
	Technology        : kbOfficeSearch kbAudDeveloper kbOffice97Search kbOffice97 kbOffice97DevSearch
	Version           : WINDOWS:97
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
