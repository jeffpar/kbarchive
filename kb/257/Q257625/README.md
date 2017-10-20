---
layout: page
title: "Q257625: Err Msg: HTTP: 500-100, Internal Server Error - ASP Error..."
permalink: /kb/257/Q257625/
---

## Q257625: Err Msg: HTTP: 500-100, Internal Server Error - ASP Error...

{% raw %}

	Article: Q257625
	Product(s): Internet Information Server
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): kbOSWin2000 kbiis500prod2web kbhttp500100 kbProd2Web
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to browse an ASP Web page, the following error messages are
	displayed in the browser:
	
	  The page cannot be displayed
	  There is a problem with the page you are trying to reach and it cannot be
	  displayed.
	
	  HTTP 500.100 - Internal Server Error - ASP error
	  Internet Information Services
	
	In addition, information similar to the following is displayed under the
	"Technical Information (for support personnel)" section:
	
	  Error Type:
	  Microsoft VBScript runtime (0x800A01F4)
	  Variable is undefined: 'x'
	  /OptionExplicitError.asp, line 9
	
	  Page:
	  GET /OptionExplicitError.asp
	
	CAUSE
	=====
	
	When you use Visual Basic, Scripting Edition, the Option Explicit statement is
	specified in the script of the ASP file. Subsequently, the script attempts to
	use an undeclared variable.
	
	RESOLUTION
	==========
	
	Too resolve this issue, either remove the Option Explicit statement or declare
	the variable (using the DIM keyword).
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	To reproduce this behavior, run an ASP file that contains the following code (in
	a virtual directory that permits script execution):
	
	  <% Option Explicit %>
	  <HTML>
	  <HEAD>
	  <TITLE>500-100 Undeclared Variable</TITLE>
	  </HEAD>
	  <BODY>
	  <P>About to use an undeclared variable</P>
	  <% 
	    x = 5
	  %>
	  </B></P>
	  </BODY>
	  </HTML>
	
	To fix the example above, declare the X variable using the DIM statement, which
	is demonstrated as follows:
	
	  <% Option Explicit %>
	  <HTML>
	  <HEAD>
	  <TITLE>500-100 Undeclared Variable</TITLE>
	  </HEAD>
	  <BODY>
	  <P>About to use an undeclared variable</P>
	  <% 
	    DIM x
	    x = 5
	  %>
	  </B></P>
	  </BODY>
	  </HTML>
	
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
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Kevin
	Zollman, Microsoft Corporation.
	
	
	Additional query words: IIS 5 500100 500-100 500;100 undefined vbs vbscript debug active script pages akz
	
	======================================================================
	Keywords          : kbOSWin2000 kbiis500prod2web kbhttp500100 kbProd2Web 
	Technology        : kbiisSearch kbiis500
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
