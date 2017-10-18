---
layout: page
title: "Q155835: PRB: ActiveX Controls That Do Not Work Correctly in VFP"
permalink: kb/155/Q155835/
---

## Q155835: PRB: ActiveX Controls That Do Not Work Correctly in VFP

	Article: Q155835
	Product(s): Microsoft FoxPro
	Version(s): 5.00
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Visual FoxPro version 5.0 supports ActiveX controls (.ocx files) and
	includes a set of ActiveX controls that you can add to and distribute with your
	applications. There are many vendors creating ActiveX controls for developers to
	use in their applications, but not all ActiveX controls work in Visual FoxPro
	5.0.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	MORE INFORMATION
	================
	
	Some ActiveX controls are designed to work only in specific containers or
	products. An example of this is the Microsoft Marquee control that is designed
	to scroll text in an Internet Browser. This article lists ActiveX controls from
	other vendors that do not work correctly in Visual FoxPro 5.0. If an ActiveX
	control does not work in Visual FoxPro 5.0, you should contact the vendor to
	find out if the control was tested in Visual FoxPro or was designed to work only
	in a specific container or product. You should also check to see if there is an
	updated version that may work in Visual FoxPro 5.0.
	
	To view .ocx file version information, alternate mouse click on the .ocx file in
	the Windows Explorer and choose Properties from the pop-up menu. Because an OCX
	may contain more then one control, there may be cases where some controls work
	and some do not, even though they are both in the same .ocx file.
	
	Below is a list of non-Microsoft ActiveX controls that do not work correctly in
	Visual FoxPro 5.0.
	
	FILE              DESCRIPTION                VERSION      COMPANY NAME
	---------------------------------------------------------------------------
	
	Sscala32.ocx      Calendar Widgets OCX -     1.0.007      Sheridan Software
	                 Month/Year/DateCombo                    Systems
	
	Sscalb32.ocx      Calendar Widgets OCX -     1.0.007      Sheridan Software
	                 Day Control                             Systems
	
	Vw32.ocx          VisualWriter Custom        1.02.502     Visual Components
	                 Control
	
	The above .ocx files are manufactured by vendors independent of Microsoft; we
	make no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: kbdsd VFoxWin ActiveX ocx kbvfp600
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : 5.00
	
	=============================================================================
	
