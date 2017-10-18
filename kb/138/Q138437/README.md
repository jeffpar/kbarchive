---
layout: page
title: "Q138437: PRB: File Does Not Appear to Be a Valid OLE Control"
permalink: kb/138/Q138437/
---

## Q138437: PRB: File Does Not Appear to Be a Valid OLE Control

	Article: Q138437
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Accusoft's Image Format Library .OCX with Visual FoxPro and attempt
	to register added controls, you receive this error:
	
	  The file does not appear to be a valid OLE control
	
	After you clear the first error message, you may receive this additional error
	message:
	
	  Unable to register the OLE control.
	
	Using this .OCX control in Microsoft Visual C++ or Microsoft Access works fine.
	
	Accusoft's Image Control Library .OCX is manufactured by Accusoft, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	CAUSE
	=====
	
	Accusoft's Image Control Library .OCX is a 16-bit .OCX rather than a 32-bit OCX.
	Accusoft has also released a 32-bit version of this library. For more
	information about this control, you can contact Accusoft at (508) 898-2770.
	
	
	RESOLUTION
	==========
	
	There are three requirements for an .OCX to work correctly with Visual FoxPro:
	
	- The OCX control must be 32-bit.
	
	- A control which supports data binding will not be able to bind to a Visual
	  FoxPro field or table.
	
	- Visual FoxPro does not support the ISimpleFrameSite interface. Controls which
	  use this interface may have limited functionality within Visual FoxPro.
	
	STATUS
	======
	
	This behavior is by design.
	
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
