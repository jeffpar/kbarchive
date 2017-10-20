---
layout: page
title: "Q151751: BUG:About Tasmanian Traders Dialog Disabled System Info Button"
permalink: /kb/151/Q151751/
---

## Q151751: BUG:About Tasmanian Traders Dialog Disabled System Info Button

{% raw %}

	Article: Q151751
	Product(s): Microsoft FoxPro
	Version(s): 3.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 15-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, Professional Edition, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The About Tasmanian Traders dialog invoked from the Help menu in the TasTrade
	sample application will zoom and reveal a disabled System Info... button. The
	About Tasmanian Traders dialog can be zoomed either by double- clicking the
	title bar or by using the zoom box in the upper right corner.
	
	In Visual FoxPro for Windows, the About Tasmanian Traders dialog is not resizable
	and cannot be minimized or maximized. In Visual FoxPro for Macintosh, this
	dialog can only be maximized or restored to its original size once it has been
	zoomed.
	
	CAUSE
	=====
	
	The Zoombox property in the Aboutbox class of the About.vcx file is set to TRUE
	(.T.). The System Info... button was not implemented but it was not removed from
	the Aboutbox class. In Visual FoxPro for Windows, this button is not seen
	because the About Tasmanian Traders dialog cannot be maximized.
	
	WORKAROUND
	==========
	
	Do not zoom the About Tasmanian Traders dialog. Or, go into the Aboutbox class,
	change the Zoombox property to FALSE (.F.), and rebuild TasTrade.app. If the
	Zoombox property is changed to FALSE, the About dialog will not be zoomable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article.
	
	MORE INFORMATION
	================
	
	TasTrade.app is a sample application included with Microsoft Visual FoxPro. It
	is located in the Samples:Mainsamp folder under the Microsoft Visual FoxPro
	folder. It is a good example of how to implement some of Visual FoxPro's Object
	Oriented programming features. The source code is included.
	
	Steps to Reproduce Problem
	--------------------------
	
	1. Issue the following command in the Visual FoxPro/Mac Command window:
	
	        DO HOME()+"Samples:Mainsamp:Tastrade.app"
	
	2. Choose the Continue button on the Tasmanian Traders Introductory Form.
	
	3. Login as Justin Brid and use the password "Justin" (without the quotation
	  marks) in the Hint text box.
	
	4. From the Tasmanian Traders menu, choose the About Tasmanian Traders... option
	  from the Help menu pad.
	
	5. Double-click the About Tasmanian Traders dialogs title bar or click the
	  Zoombox to enlarge the dialog. The disabled System Info... button should now
	  be visible.
	
	Additional query words: 3.00 VFoxMac
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300Mac
	Version           : :3.0
	
	=============================================================================
	

{% endraw %}
