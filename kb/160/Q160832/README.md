---
layout: page
title: "Q160832: FP: &quot;Center&quot; Alignment Not Supported for ActiveX Objects"
permalink: kb/160/Q160832/
---

## Q160832: FP: &quot;Center&quot; Alignment Not Supported for ActiveX Objects

	Article: Q160832
	Product(s): Word Front Page
	Version(s): ; MACINTOSH:1.0
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In the Properties dialog box for an ActiveX object, the Alignment box does not
	include the Center option.
	
	RESOLUTION
	==========
	
	To work around this problem, select the Middle option.
	
	"Middle" has the same effect as "Center" when you view the page in a Web browser.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem was corrected in Microsoft FrontPage
	98 for Windows.
	
	MORE INFORMATION
	================
	
	The Align="Center" parameter of the <Object> tag does not center the
	object horizontally. It only centers surrounding text vertically alongside the
	object.
	
	If you want to center an object horizontally, use either of the following
	methods.
	
	Method 1
	--------
	
	Select the object and click Paragraph on the Format menu. In the Paragraph
	Alignment list, select Center, and then Click OK.
	
	Method 2
	--------
	
	Select the object and click the Center button on the Standard toolbar.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbZNotKeyword kbFrontPage97Search kbFrontPageMac kbZNotKeyword3
	Version           : :; MACINTOSH:1.0
	Hardware          : MAC x86
	Issue type        : kbprb
	
	=============================================================================
	
