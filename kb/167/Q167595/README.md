---
layout: page
title: "Q167595: FP: How to Create a Script for the Marquee Control"
permalink: kb/167/Q167595/
---

## Q167595: FP: How to Create a Script for the Marquee Control

	Article: Q167595
	Product(s): Word Front Page
	Version(s): windows:97
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbdta
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can use the Marquee control to add a dynamic look to your Web pages. This
	article describes a method to use a control that scrolls a separate page within
	the current page and creates two buttons that allow you to control the scrolling
	speed of the marquee.
	
	NOTE: You can combine ActiveX controls to add greater functionality to your Web
	pages than would be possible with a single control.
	
	MORE INFORMATION
	================
	
	WARNING: ANY USE OF THE CODE PROVIDED IN THIS ARTICLE IS AT YOUR OWN RISK.
	Microsoft provides this code "as is" without warranty of any kind, either
	express or implied, including but not limited to the implied warranties of
	merchantability and/or fitness for a particular purpose.
	
	Use the following steps to create a control that scrolls a separate page and uses
	two buttons to control the scrolling speed of the marquee:
	
	
	1. Open a Web page in FrontPage Editor.
	
	2. On the Insert menu, point to Other Components, and then click ActiveX
	  control.
	
	3. In the Pick A Control list box, click MarqueeCtl Object.
	
	4. In the Name box, enter a name for the MarqueeCtl Object. For example, type
	  "Marquee" (without the quotation marks).
	
	5. Click Properties.
	
	6. In the Object Parameters dialog box, click Add.
	
	7. In the Name box, enter "szURL" (without the quotation marks). Under Value, in
	  the Data box, enter the following Uniform Resource Locator (URL):
	
	  "http://www.microsoft.com" (without the quotation marks)
	
	8. Click OK two times.
	
	9. In the ActiveX Control Properties dialog box, click Extended.
	
	10. Click Add.
	
	11. In the Name box, enter "TYPE" (without the quotation marks). In the Value
	  box, enter "application/x-oleobject" (without the quotation marks). Click
	  OK.
	
	12. Click OK two more times.
	
	13. On the Insert menu, point to Form Field, and then click Push Button.
	
	14. Right-click the form field, and then click Form Field Properties.
	
	15. In the Name box, enter "BtnFast" (without the quotation marks). In the
	  Value/Label box, enter "Fast"(without the quotation marks). Click Normal.
	  Click OK.
	
	16. Repeat steps 13 and 14.
	
	17. In the Name box, enter "BtnSlow" (without the quotation marks). In the
	  Value/Label box, enter "Slow" (without the quotation marks). Click Normal.
	  Click OK.
	
	18. Right-click the form area, and click Script Wizard.
	
	19. In the Event pane, double-click BtnSlow, and then click onClick. In the
	  Action pane, double-click Marquee, and then double-click ScrollDelay.
	
	  The following code appears in the Script pane:
	
	         Sub BtnSlow_Onclick
	         Marquee1.ScrollDelay
	
	20. Place the insertion point immediately following the "Marquee1.ScrollDelay"
	  code and type "=200" (without the quotation marks), so that the code looks
	  like this:
	
	         Sub BtnSlow_Onclick
	         Marquee1.ScrollDelay=200
	
	21. In the Event pane, double-click BtnFast, and then click onClick. In the
	  Action pane, double-click Marquee, and then double-click ScrollDelay.
	
	  The following code appears in the Script pane:
	
	         Sub BtnFast_Onclick
	         Marquee1.ScrollDelay
	
	22. Place the insertion point immediately following the "Marquee1.ScrollDelay"
	  code and type "=0" (without the quotation marks), so that the code looks
	  like this:
	
	         Sub BtnSlow_Onclick
	         Marquee1.ScrollDelay=0
	
	23. Click OK.
	
	When you view the page in a Web browser, the Microsoft World Wide Web home page
	will scroll within the current Web page.
	
	Additional query words: fp97, marquee, fpscript
	
	======================================================================
	Keywords          : kbcode kbinterop kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97Search kbZNotKeyword3
	Version           : windows:97
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
