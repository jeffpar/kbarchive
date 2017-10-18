---
layout: page
title: "Q159437: FP: Drop-Down Populated by IDC Query Shows Code Not Data"
permalink: kb/159/Q159437/
---

## Q159437: FP: Drop-Down Populated by IDC Query Shows Code Not Data

	Article: Q159437
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you insert a drop-down form field into the detail section of an .htx file,
	FrontPage does not include a way to populate the drop- down with data from the
	IDC query.
	
	CAUSE
	=====
	
	The HTML construction necessary to achieve this effect is character based rather
	than tag based. This particular implementation, although popular, is not defined
	in any of the working documents of the Internet Engineering Task Force. When
	FrontPage parses this type of construction, it is unable to fit it within a
	logical tree based on HTML standards.
	
	RESOLUTION
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
	
	To create a list box populated by an IDC query that returns the value of the
	selected option, use the HTML Markup command on the Insert menu in FrontPage
	Editor and insert code similar to the following
	
	     <SELECT name="your_list_box">
	        <%begindetail%>
	        <option><%The_field_you_want_from_your_recordset%></option>
	        <%enddetail%>
	     </SELECT>
	
	where "your_list_box" is the name of the drop-down, and
	"The_field_you_want_from_your_recordset" is a valid field in the recordset
	returned by the IDC query associated with this .htx file.
	
	MORE INFORMATION
	================
	
	For more information about publishing dynamic data on the Web, see Chapter 8 of
	the online documentation for IIS. Note that Chapter 8 of this documentation is
	available at the following Web site:
	
	  http://www.microsoft.com/iis/usingiis/resources/IIS2docs/08_iis.htm
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com
	
	To view the HTML 2.0 specification for the SELECT tag, see the following World
	Wide Web Consortium Web site at:
	
	  http://www.w3.org/pub/WWW/MarkUp/html-spec/html-spec_8.html#SEC8.1.3
	
	The HTML 3.2 proposal on the SELECT tag is available at:
	
	  http://www.w3.org/pub/WWW/TR/WD-html32#select
	
	The HTML 4.0 Working Draft Release can be found at:
	
	  ...http://www.w3.org/TR/WD-html40-970708/
	
	NOTE: Because the Microsoft Web site is constantly updated, the site address may
	change without notice. If this occurs, link to the Microsoft home page at the
	following address:
	
	  http://www.microsoft.com
	
	Additional query words: 97 front page
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbFrontPageSearch kbFrontPage97Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
