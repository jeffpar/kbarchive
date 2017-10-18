---
layout: page
title: "Q288181: FP2002: How to Create Home Page Hot Key with JavaScript"
permalink: kb/288/Q288181/
---

## Q288181: FP2002: How to Create Home Page Hot Key with JavaScript

	Article: Q288181
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
	
	SUMMARY
	=======
	
	This article illustrates how a key that is pressed when a user is viewing a Web
	page can be used to direct the browser to another location. The JavaScript
	example presented in this article associates the "H" key with a URL. When a user
	presses H, the browser navigates to that URL. You can use this procedure on a
	Web site as a "hot key" to return to the site home page.
	
	NOTE: This article uses custom JavaScript that may not be available in all
	browsers. For more information about this topic, click Microsoft FrontPage Help
	on the Help menu, type "compatibility" in the Answer Wizard, and then click
	Search to view the topic.
	
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
	
	Code Sample
	-----------
	
	1. Open a Web in FrontPage.
	
	2. Open the page where you want to insert the "hot key" feature.
	
	3. Switch to HTML view.
	
	4. Insert the following JavaScript code in the <HEAD></HEAD> section
	  of the HTML page. (Change the destination HTTP address to the URL that you
	  want to become the home page.)
	
	  <script language="JavaScript">
	  <!--
	  // define our "hotkeys", use "Character Map" for values.
	  var HotkeyLcase=104;
	  var HotkeyUcase=72;
	
	  // define our destination.
	  var destination="http://www.microsoft.com/";
	
	  // set up page to capture keypress events.
	  if (document.layers)
	    document.captureEvents(Event.KEYPRESS);
	
	  // the following function tests which key was pressed
	  // and redirects to our destination if the key is valid.
	  function backhome(e){
	    if (document.layers){
	      if ((e.which==HotkeyLcase) || (e.which==HotkeyUcase))
	        window.location=destination;
	      }
	    else if (document.all){
	      if ((event.keyCode==HotkeyLcase) || (event.keyCode==HotkeyUcase))
	        window.location=destination;
	    }
	  }
	
	  // point keypress events to our function
	  document.onkeypress=backhome;
	  //-->
	  </script>
	
	5. When you preview the Web page in your browser and press H on your keyboard,
	  your browser navigates to the page that you specified in the JavaScript.
	
	Additional query words: Javascript hotkey homepage inf
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbhowto
	
	=============================================================================
	
