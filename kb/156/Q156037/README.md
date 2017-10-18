---
layout: page
title: "Q156037: HOWTO: Determine the Requirements for ActiveX Controls in VFP"
permalink: kb/156/Q156037/
---

## Q156037: HOWTO: Determine the Requirements for ActiveX Controls in VFP

	Article: Q156037
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbinterop kbvfp500 kbvfp600
	Last Modified: 14-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro requires that ActiveX Controls support a minimum set of interfaces
	as defined in the document "OLE Control and Container Guidelines," version 1.1.
	
	For more information on the OLE Control and Container Guidelines and ActiveX
	technology, see the following articles in the Microsoft Knowledge Base:
	
	  Q137555 OLE Controls and Control Containers Guidelines
	
	  Q154544 Description of ActiveX Technologies
	
	This information is also available on MSDN and at the OLE Developers Web Site.
	
	MORE INFORMATION
	================
	
	The interfaces required by Visual FoxPro are those defined in the OLE Control
	and Container Guidelines document, version 1.1. Visual FoxPro 3.0 supports
	controls defined as Simple Controls. Visual FoxPro version 5.0 supports the
	following categories of controls: Simple Controls, Simple Frame Controls, and
	Simple Data Bound Controls.
	
	Visual FoxPro does not support and may not function correctly with controls that
	do not meet these guidelines. This may include new ActiveX controls designed
	specifically for the Internet. These controls generally include a very minimum
	set of interfaces.
	
	There is no mechanism provided by OLE that allows Visual FoxPro to verify whether
	a control meets these Guidelines or to filter the list of controls.
	
	When version 5.0 of Visual FoxPro shipped, a new standard was being developed to
	allow ActiveX controls to register that they required one or more specific
	categories of features. This standard will allow ActiveX control containers to
	eliminate controls that require known, unsupported categories. These registry
	entries are not recognized by Visual FoxPro 5.0.
	
	Additional query words: SimpleFrame DataBound Standards
	
	======================================================================
	Keywords          : kbinterop kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
