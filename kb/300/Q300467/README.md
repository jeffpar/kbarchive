---
layout: page
title: "Q300467: FP: How to Clear a Search Form Text Box By Using DHTML"
permalink: /kb/300/Q300467/
---

## Q300467: FP: How to Clear a Search Form Text Box By Using DHTML

{% raw %}

	Article: Q300467
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 2000 
	- Microsoft FrontPage 2002 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In Microsoft FrontPage, the built-in search page includes a form with Submit and
	Reset buttons. It does not contain a Clear button to clear the form fields. This
	article explains how to use Dynamic HTML (DHTML) code to add a Clear button to
	the search results page.
	
	NOTE: The examples presented in this article use custom DHTML that may not be
	available in all browsers. For more information about compatibility with other
	browsers, click Microsoft FrontPage Help on the Help menu, type "compatibility"
	(without the quotation marks) in the Office Assistant or the Answer Wizard, and
	then click Search to view the topic.
	
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
	
	NOTE: You may receive an error message if you copy and paste the examples
	directly from this article to FrontPage. The angle brackets ("<" and ">")
	may appear as escaped HTML code ("&lt;" and "&gt;"). To work around this
	behavior, paste the script in a blank Notepad document, and then copy it from
	Notepad before you paste it into FrontPage.
	
	1. In FrontPage, open a server-based web.
	
	2. Create a new search page:
	
	  In FrontPage 2000:
	
	  a. On the File menu, point to New, and then click Page.
	
	  b. Click the General tab. Click the Search Page icon and then click OK.
	
	  In FrontPage 2002:
	
	  a. On the File menu, point to New, then click Page or Web.
	
	  b. On the New Page or Web task pane, click Page Templates.
	
	  c. Click the Search Page icon and then click OK.
	
	3. Switch to HTML view and add the following DHTML code in the
	  <HEAD></HEAD> section of the page:
	
	  <script language="vbscript" for="window" event="onLoad">
	     <!--
	     ' Loop through all HTML tags on the page.
	     For x = 0 to document.all.length -1
	       ' Is this an INPUT tag?
	       If document.all(x).tagName = "INPUT" Then
	         ' Is it the RESET button?
	         If (document.all(x).type = "reset") Then
	           ' Create a new button named CLEAR.
	           strButton = "<input type=button name=cmdClear value=Clear>"
	           ' Show the new RESET button after the SUBMIT button
	           document.all(x).insertAdjacentHTML "AfterEnd",strButton
	         End If
	       End If
	     Next
	     -->
	  </script>
	
	4. Add the following additional DHTML code in the <HEAD></HEAD>
	  section of the page. Use the appropriate code for your search configuration:
	
	  If you are using Index Server or Indexing Services and IIS:
	
	  <script language="vbscript" for="cmdClear" event="onClick">
	     <!--
	       ' Clear the search form when the CLEAR button is clicked.
	       document.all("UserRestriction").value = ""
	     -->
	  </script>
	
	  If you are using the built-in FrontPage WAIS searching:
	
	  <script language="vbscript" for="cmdClear" event="onClick">
	     <!--
	       ' Clear the search form when the CLEAR button is clicked.
	       document.all("search").value = ""
	     -->
	  </script>
	
	5. Switch back to Normal view and save the page to your web site.
	
	In Microsoft Internet Explorer, when you submit a search and click the Clear
	button on the search results page, the form fields will be cleared.
	
	REFERENCES
	==========
	
	For additional information about working with the FrontPage Search Page, click
	the article numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q300466 FP: Clicking Reset on Search Results Page Does Not Clear Form
	
	For additional information about HTML syntax, see the following World Wide Web
	Consortium (W3C) web site:
	
	  http://www.w3.org/MarkUp/
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
