---
layout: page
title: "Q164620: FP: How to Add a Script to the ActiveX Calendar Control"
permalink: kb/164/Q164620/
---

## Q164620: FP: How to Add a Script to the ActiveX Calendar Control

	Article: Q164620
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbusage kbdta
	Last Modified: 26-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194211.
	
	SUMMARY
	=======
	
	The ActiveX Calendar Control provides a way of displaying calendar-related
	events on a Web. ActiveX Controls may be combined to add greater functionality
	to your Web pages than would be possible with a single control.
	
	NOTE: Microsoft Office 97 installs the ActiveX Calendar Control. If you do not
	have Microsoft Office installed, the Calendar Control may not appear in the Pick
	A Control list.
	
	MORE INFORMATION
	================
	
	ActiveX Controls are a suite of products and technologies that support Web
	development and enable software components to interact with one another. ActiveX
	Controls are built on the Component Object Model.
	
	For more information about ActiveX Controls, please see the following Microsoft
	World Wide Web site:
	
	  http://www.microsoft.com/com/tech/ActiveX.asp
	
	For more information about Visual Basic Scripting, please see the following
	Microsoft World Wide Web site:
	
	  http://www.microsoft.com/scripting/vbscript
	
	The following example displays the date you selected in a message box.
	
	1. Open a Web page in FrontPage Editor.
	
	2. On the Insert menu, click Script.
	
	3. Click VBScript and click OK.
	
	4. On the Insert menu, point to Other Components, and then click ActiveX
	  Control.
	
	5. In the Pick A Control list, click Calendar Control.
	
	6. In the Name box, type the name you want to use for this control. For example,
	  type "Calendar1" (without the quotation marks). Click OK.
	
	7. Right-click the Calendar Control object, and then click Script Wizard.
	
	  The Script Wizard appears. It is divided into three panes: the Event pane
	  (left side), the Action pane (right side), and the Script pane (bottom).
	
	8. In the Script Wizard dialog box, click Code View.
	
	9. In the Event pane, double-click the Calendar1 icon. Select the Click event.
	
	10. In the Action pane, double-click the Window icon. Double-click the Alert
	  icon.
	
	  The following code appears in the Script pane:
	
	         Sub Calendar1_Click()
	         call window.alert(msg)
	
	11. In the Script pane, delete "msg" (without the quotation marks). With the
	  insertion point between the parentheses, double-click the Calendar1 icon in
	  the Action pane, and then double-click Value. The code should now look like
	  this:
	
	         Sub Calendar1_Click()
	         call window.alert(Calendar1.Value)
	
	12. Click OK.
	
	When you view the page in a Web browser that supports ActiveX controls and you
	click a date on the calendar, a message box appears.
	
	Additional query words: scripting controlling active x
	
	======================================================================
	Keywords          : kbcode kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97 kbZNotKeyword2 kbFrontPage97Search
	Version           : :
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
