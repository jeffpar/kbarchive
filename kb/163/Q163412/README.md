---
layout: page
title: "Q163412: FIX: Web Browser Position is Wrong on Pageframe Page"
permalink: /kb/163/Q163412/
---

## Q163412: FIX: Web Browser Position is Wrong on Pageframe Page

	Article: Q163412
	Product(s): Microsoft FoxPro
	Version(s): 5.0a 5.0
	Operating System(s): 
	Keyword(s): kbinterop kbvfp kbvfp500aBUG kbvfp500bugkbbuglist
	Last Modified: 23-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Visual FoxPro for Windows version 5.0 form contains a pageframe, and one
	of the pages (other than page 1) of the pageframe has an OLE container control
	that houses the Microsoft Web Browser control, that container control will
	appear on the page in the wrong location at runtime.
	
	It will be positioned to the upper left of where it was positioned at design
	time. Because it is still located on the pageframe, its dimensions will be
	shrunken so that it fits on the page.
	
	If the Web Browser is located on the first page of the pageframe, its loading
	will throw the error:
	
	  "OLE error code 0x80004005. Unspecified error."
	
	There is no known workaround for this error. The control will be drawn on page 1
	but will be larger than intended, obscuring the tabs for the remaining pages in
	the pageframe.
	
	RESOLUTION
	==========
	
	The following workaround applies only to placement of the Web Browser of pages
	other than page 1 of the pageframe control.
	
	The location of the OLEContainer control can be reset in the Activate event
	method of the page of the pageframe containing the control. An example of the
	code to do this follows:
	
	        This.Olecontrol1.Left = 0
	
	This workaround will fail if the active page from which you move contains any of
	the OCX (ActiveX) controls that install with Visual FoxPro. If you switch from a
	page with an ActiveX control to the page with the Web Browser, the error will
	cause the Web Browser to locate at the upper left of where it should be.
	
	To position the Web Browser correctly, you must first switch from a page with an
	ActiveX control to a page without one, and then to the page with the Web Browser
	control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft product listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new form.
	
	2. Add a pageframe to the form.
	
	3. Add a web browser (Microsoft Web Browser) control to page 2 of the pageframe.
	  Size it so it takes up most of the page.
	
	  The steps to add this are as follows:
	
	  a. Right-click on the pageframe, and select "Edit" on the context menu.
	
	  b. Click the tab for page 2.
	
	  c. Click the OLEContainer control tool on the toolbar.
	
	  d. Position the mouse at the upper left of page 2.
	
	  e. Drag the mouse to the lower-right corner of page 2.
	
	  f. From the Insert Object dialog box, click the "Insert Control" option
	     button, and then select "Microsoft Web Browser Control" from the list. If
	     you do not see that option, install Microsoft Internet Explorer 3.01 by
	     downloading it from the Internet. It will install the Web Browser in your
	     Windows\System (on Windows 95) or Windows\System32 (for Windows NT)
	     directory. The file name of the control is shdocvw.dll.
	
	4. Add the following code to the init event method of the OLEContainer control
	  (OLEContainer1):
	
	        This.navigate("http://www.microsoft.com")
	
	5. Run the form and click the tab for page 2.
	
	Additional query words: kbvfp600fix
	
	======================================================================
	Keywords          : kbinterop kbvfp kbvfp500aBUG kbvfp500bug kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : 5.0a 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
