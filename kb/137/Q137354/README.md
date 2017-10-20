---
layout: page
title: "Q137354: Using Enumerated Properties in an OLE Control"
permalink: /kb/137/Q137354/
---

## Q137354: Using Enumerated Properties in an OLE Control

{% raw %}

	Article: Q137354
	Product(s): Microsoft C Compiler
	Version(s): 
	Operating System(s): 
	Keyword(s): kbfile kbole kbSample kbActiveX kbCOMt kbCtrl kbMFC kbVC100 kbGrpDSMFCATL
	Last Modified: 02-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft OLE Control Developer's Kit (CDK) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This is the Visual C++ 1.5x and 2.x version of this sample. There is an
	equivalent Visual C++ 4.x 32-bit sample available under the name ENPROP32.
	
	The Enumprop sample illustrates using enumerated properties in an OLE control.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Enprop.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	After downloading Enprop.exe, run it in an empty directory using the -d switch
	(as follows) to automatically create subdirectories to hold the many files it
	contains:
	
	  ENPROP.EXE -d
	
	The ENUMPROP sample illustrates how to use enumerated properties in an OLE
	control. An enumerated property is one that has a specific set of possible
	values. For example, an OLE control might support a property named FillPattern,
	which it uses to determine the type of brush to use when drawing the control and
	limit the values the FillPattern property could be set to. Accepted values for a
	FillPattern property might be cross-hatched, vertical lines, horizontal lines,
	and so on.
	
	An OLE control can limit a user's possible choices for a property by presenting a
	drop list combo box that lists the possibilities on its property page. However,
	another mechanism is needed to enable a property browser provided by another
	application to be able to provide the same type of interface when editing the
	property.
	
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
	    //{{AFX_ODL_PROP(CEnumCtrl)
	      [id(1)] enumLineStyle LineStyle;
	    //}}AFX_ODL_PROP
	
	    ...
	
	Another method involves overriding the COleControl methods
	OnGetPredefinedStrings, OnGetPredefinedValue, and OnGetDisplayString.
	
	The ENUMPROP sample illustrates using both methods. The OLE control implemented
	in the sample supports two custom properties, LineStyle and FillPattern. The
	LineStyle property is declared as an enum in the control's .odl file. Support
	for using the FillPattern property as an enumerated property is handled by using
	overrides of the OnGetPredefinedStrings, OnGetPredefinedValue, and
	OnGetDisplayString methods.
	
	ENUMPROP is based on a ControlWizard-generated OLE control. Files included with
	the sample, which are directly related to using enumerated properties, are:
	
	  Enum.odl - Shows declaring the enum type for the LineStyle property.
	
	  Enumctl.cpp - Illustrates overriding the COleControl members
	  OnGetPredefinedStrings, OnGetPredefinedValue, and
	  OnGetDisplayString.
	
	NOTE: When building the sample, the MKTYPLIB utility will generate the following
	warning when compiling the .odl file:
	
	  warning M0002: Warning near line 35 column 35: specified type is not
	  supported by IDispatch::Invoke
	
	MKTYPLIB is issuing the warning because the enumLineStyle type is not one of the
	predefined types supported by IDispatch::Invoke. You can ignore the warning
	because the actual value of the LineStyle property is a short, which is a type
	supported by IDispatch::Invoke.
	
	NOTE: The test container tool provided with the CDK does not implement a drop
	list combo box on its property browser page when editing an enumerated property.
	To see the full benefits of using an enumerated property, use an OLE control
	container application that provides a property browser with this capability.
	
	RFERENCES
	---------
	
	For more information, please see the Per-Property Browsing section in Appendix D,
	OLE Controls Architecture, in the CDK Books Online.
	
	Additional query words: enprop32 kbole kbfile
	
	======================================================================
	Keywords          : kbfile kbole kbSample kbActiveX kbCOMt kbCtrl kbMFC kbVC100 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :
	
	=============================================================================
	

{% endraw %}
