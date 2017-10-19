---
layout: page
title: "Q168391: FP: How to Create a &quot;Back&quot; Button on a Web Page Using VBScript"
permalink: /kb/168/Q168391/
---

## Q168391: FP: How to Create a &quot;Back&quot; Button on a Web Page Using VBScript

	Article: Q168391
	Product(s): Word Front Page
	Version(s): 1.1
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows with Bonus Pack 
	- Microsoft FrontPage for Windows 1.1 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194157.
	
	SUMMARY
	=======
	
	This article provides sample HTML code that inserts a control button or a link
	on a Web page that returns you to the previous document when you click it.
	
	MORE INFORMATION
	================
	
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
	
	The following HTML code adds a control button to a Web page form:
	
	  <FORM method="POST" name="VBScript_Nav_Sample">
	       <INPUT TYPE="button" NAME="Go Back!"
	        VALUE="VBScript_Backup_Sample" LANGUAGE="VBScript"
	        OnClick="call window.history.back(1)">
	     </FORM>
	
	The following HTML code adds a hyperlink that retraces the Web browser's
	history:
	
	  <a href="JavaScript:history.back(1)">the past</a>
	
	For more information about writing HTML, please see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/workshop/author/newhtml/default.htm
	
	Additional query words: 1.10 97 JavaScript Link History Back kbusage kbhowto kbprg kbcode fphtml fpscript
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage1xSearch kbFrontPage97Search kbZNotKeyword3 kbFrontPage110
	Version           : :1.1
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
