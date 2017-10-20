---
layout: page
title: "Q178448: FP98: Can't Change Design-Time Controls Properties After Saving"
permalink: /kb/178/Q178448/
---

## Q178448: FP98: Can't Change Design-Time Controls Properties After Saving

{% raw %}

	Article: Q178448
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 13-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a design-time control in a Web page using FrontPage 98, the
	properties of the control cannot be changed after the design-time control is
	saved to the page.
	
	CAUSE
	=====
	
	FrontPage 98 allows you to alter the properties of a design-time control only
	before it is saved to the page.
	
	RESOLUTION
	==========
	
	To alter the properties of a design-time control after it is first saved, use
	one of the following methods.
	
	Method 1: Reinsert the Design-Time Control
	------------------------------------------
	
	Delete the currently saved design-time control and reinsert it. When you reinsert
	the control, specify the desired properties before you save the page.
	
	Method 2: Edit the HTML Code
	----------------------------
	
	Switch to HTML view and alter the design-time control properties within the HTML
	code directly.
	
	Method 3: Install the FrontPage 98B Patch
	-----------------------------------------
	
	The FrontPage 98B patch is available at the following location:
	
	  http://office.microsoft.com/downloads/9798/fp98bupd.aspx
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	
	MORE INFORMATION
	================
	
	For additional information about design-time controls, please browse to the
	following Microsoft Web site:
	
	  http://msdn.microsoft.com/workshop/components/dtctrl/doc/overview.asp
	
	Additional query words: dtc control front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
