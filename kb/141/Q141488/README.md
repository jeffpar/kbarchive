---
layout: page
title: "Q141488: INFO: Using Enumerated Properties in an OLE Control"
permalink: kb/141/Q141488/
---

## Q141488: INFO: Using Enumerated Properties in an OLE Control

	Article: Q141488
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbcode kbSample kbActiveX kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 14-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	This is the 32-bit version of this sample.
	
	SUMMARY
	=======
	
	The ENPROP32 sample illustrates using enumerated properties in an OLE control.
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  ~ Enprop32.exe
	  (http://support.microsoft.com/download/support/mslfiles/Enprop32.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	MORE INFORMATION
	================
	
	The ENPROP32 sample illustrates using enumerated properties in an OLE control.
	An enumerated property is one which has a specific set of possible values. For
	example, an OLE control might support a property named FillPattern which it uses
	to determine the type of brush to use when drawing the control. The control
	would want to limit the values the FillPattern property could be set to.
	Accepted values for a FillPattern property might be cross-hatched, vertical
	lines, horizontal lines, etc.
	
	An OLE control can limit the values a user has to choose from for a property by
	using a Drop List combo box on its property page. However, another mechanism is
	needed to enable a property browser provided by another application to be able
	to provide the same type of interface when editing the property.
	
	There are two ways to implement an enumerated property so that a property browser
	can gather enough information about the property to provide the right editing
	interface. One method involves declaring an enum type in the OLE control's .odl
	file and manually editing the property's declaration to make it be of that type.
	For example:
	
	    ...
	
	    typedef enum
	    {
	      [helpstring("Solid")]        Solid      = 0,
	      [helpstring("Dash")]         Dash       = 1,
	      [helpstring("Dot")]          Dot        = 2,
	      [helpstring("Dash-Dot")]     DashDot    = 3,
	      [helpstring("Dash-Dot-Dot")] DashDotDot = 4,
	    } enumLineStyle;
	
	    ...
	
	    properties:
	
	    // NOTE - ClassWizard will maintain property information here.
	    //    Use extreme caution when editing this section.
	    //{ {AFX_ODL_PROP(CEnumCtrl)
	      [id(1)] enumLineStyle LineStyle;
	    //} }AFX_ODL_PROP
	
	Another method involves overriding the COleControl methods
	OnGetPredefinedStrings, OnGetPredefinedValue, and OnGetDisplayString. The
	ENUMPROP sample illustrates using both methods. The OLE control implemented in
	the sample supports two custom properties, LineStyle and FillPattern. The
	LineStyle property is declared as an enum in the control's .odl file. Support
	for using the FillPattern property as an enumerated property is handled via
	overrides of the OnGetPredefinedStrings, OnGetPredefinedValue, and
	OnGetDisplayString methods.
	
	ENPROP32 is based on a ControlWizard generated OLE control. Files included with
	the sample, which are directly related to using enumerated properties, are:
	
	  ENUM.ODL -
	  Shows declaring the enum type for the LineStyle property.
	
	  ENUMCTL.CPP -
	  Illustrates overriding the COleControl members OnGetPredefinedStrings,
	  OnGetPredefinedValue, and OnGetDisplayString.
	
	REFERENCES
	==========
	
	The Per-Property Browsing section in Appendix D, OLE Controls Architecture, in
	the CDK Books Online.
	
	NOTE: The OLE Control Test Container provided with Visual C++ does not implement
	a Drop List combobox on its property browser page when editing an enumerated
	property. To see the full benefits of using an enumerated property, use an OLE
	control container application which provides a property browser with this
	capability, such as Visual Basic 4.0.
	
	Additional query words: Enumprop
	
	======================================================================
	Keywords          : kbcode kbSample kbActiveX kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1
	Issue type        : kbinfo
	
	=============================================================================
	
