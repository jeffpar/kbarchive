---
layout: page
title: "Q86407: PRB: Windows Write Does Not Load under Pen Windows"
permalink: /kb/086/Q86407/
---

## Q86407: PRB: Windows Write Does Not Load under Pen Windows

{% raw %}

	Article: Q86407
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On some machines equipped with Microsoft Windows for Pen Computing or the Pen
	Extensions to Microsoft Windows, an attempt to load Microsoft Windows Write
	fails with the following message:
	
	  Not enough memory for Write to complete this operation
	
	CAUSE
	=====
	
	Some of the video drivers provided with version 1.0a of Windows for Pen
	Computing do not have an IDC_PEN cursor resource.
	
	RESOLUTION
	==========
	
	New drivers have been released. Make sure that you have the updated drivers.
	
	MORE INFORMATION
	================
	
	If the IDC_PEN resource is missing from the video driver, when an application
	calls LoadCursor() to retrieve the IDC_PEN cursor, the call will fail. However,
	the IDC_PEN cursor is also located in the PENWIN.DLL dynamic-link library (DLL).
	If an application fails to load the IDC_PEN cursor from the video driver, it can
	use the following code to load the cursor from PENWIN.DLL:
	
	     hpencursor = LoadCursor(GetSystemMetrics(SM_PENWINDOWS), IDC_PEN);
	
	The bedit and hedit controls load the cursor from PENWIN.DLL if they can't load
	the cursor from the video driver. This explains why an application using these
	controls can use a pen cursor while another application running simultaneously
	fails to load the pen cursor.
	
	Please contact your original equipment manufacturer (OEM) to receive information
	about the availability of an updated video driver.
	
	Additional query words: 1.00a 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
