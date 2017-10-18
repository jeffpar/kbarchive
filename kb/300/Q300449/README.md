---
layout: page
title: "Q300449: FP: Form Fields Aren't Reset When You Go Back to the Form"
permalink: kb/300/Q300449/
---

## Q300449: FP: Form Fields Aren't Reset When You Go Back to the Form

	Article: Q300449
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2002 
	- Microsoft FrontPage 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view an HTML page in a Web browser, all fields are set to their default
	values. When you submit the form, and then click the Back button to view the
	page again, the form fields still contain the data you entered.
	
	CAUSE
	=====
	
	This behavior can occur if the Web browser caches the information you entered
	into the form. Many Web browsers cache this information in case it needs to be
	reused.
	
	WORKAROUND
	==========
	
	Microsoft provides programming examples for illustration only, without warranty
	either expressed or implied, including, but not limited to, the implied
	warranties of merchantability and/or fitness for a particular purpose. This
	article assumes that you are familiar with the programming language being
	demonstrated and the tools used to create and debug procedures. Microsoft
	support professionals can help explain the functionality of a particular
	procedure, but they will not modify these examples to provide added
	functionality or construct procedures to meet your specific needs. If you have
	limited programming experience, you may want to contact a Microsoft Certified
	Partner or the Microsoft fee-based consulting line at (800) 936-5200. For more
	information about Microsoft Certified Partners, please visit the following
	Microsoft Web site:
	
	  http://www.microsoft.com/partner/referral/
	
	For more information about the support options that are available and about how
	to contact Microsoft, visit the following Microsoft Web site:
	
	  http://support.microsoft.com/default.aspx?scid=fh;EN-US;CNTACTMS
	
	NOTE: You may receive an error message if you copy and paste the examples
	directly from this article to FrontPage. The angle brackets ("<" and ">")
	may appear as escaped HTML code ("&lt;" and "&gt;"). To work around this
	behavior, paste the script in a blank Notepad document, and then copy it from
	Notepad before you paste it into FrontPage. To work around this functionality,
	you can clear the form fields by using Dynamic HTML (DHTML). To do this, follow
	these steps:
	
	1. In FrontPage, open a server-based Web.
	
	2. Create a new, blank page.
	
	3. Insert a form on the page with multiple text fields:
	
	   - In FrontPage 2000
	
	     a. On the Insert menu, point to Form, and then click One-Line Text Box.
	
	     b. On the Insert menu, point to Form, and then click Scrolling Text Box.
	
	   - In FrontPage 2002
	
	     a. On the Insert menu, point to Form, and then click Textbox.
	
	     b. On the Insert menu, point to Form, and then click Text Area.
	
	4. Right-click the form and then click Form Properties on the menu that appears.
	
	5. Type "MyForm" (without the quotation marks) for the form name and click OK.
	
	6. Switch to HTML view. Modify the <BODY> tag specifying the DHTML method
	  to reset the form, like this:
	
	  <BODY onLoad="document.MyForm.reset();">
	
	7. Switch to Normal view. Save the page to your Web site.
	
	When you submit the form in Microsoft Internet Explorer, and then click the Back
	button on the confirmation page, you will see a blank form.
	
	
	MORE INFORMATION
	================
	
	For more information about compatibility with other browsers, click Microsoft
	FrontPage Help on the Help menu, type "compatibility" (without the quotation
	marks) in the Office Assistant or the Answer Wizard, and then click Search to
	view the topic.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
