---
layout: page
title: "Q265033: FP: Macromedia Flash Movie Doesn't Work As Expected"
permalink: /kb/265/Q265033/
---

## Q265033: FP: Macromedia Flash Movie Doesn't Work As Expected

	Article: Q265033
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
	
	When you attempt to insert a Macromedia Flash movie into a Microsoft FrontPage
	web, the movie may not function as expected.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. Save your Flash production as a movie file in the My Documents folder.
	
	  NOTE: You must save your Flash movie file with the .swf extension.
	
	2. Start FrontPage.
	
	3. On the File menu, click Open Web.
	
	4. In the Open Web dialog box, select the web that you want, and then click
	  Open.
	
	5. On the File menu, click Import.
	
	6. In the Import dialog box, click Add File.
	
	7. In the "Add File to Import List" dialog box, select the Flash movie file that
	  you saved in step 1, and then click Open.
	
	  Notice that this file appears in the Import dialog box.
	
	8. Click OK.
	
	  Notice that this file appears in the Folder list.
	
	9. Select the page of your FrontPage web into which you want to insert the Flash
	  movie, and then click where you want to insert the Flash movie.
	
	10. Do one of the following:
	
	   - In FrontPage 2002, click Web Component on the Insert menu. In the
	     Component type list, select Advanced Controls. in the Choose a control
	     list, select Plug-In. Click Finish.
	
	     -or-
	
	   - In FrontPage 2000, point to Advanced on the Insert menu, and then click
	     Plug-In.
	
	11. In the Plug-In Properties dialog box, click Browse.
	
	12. In the "Select Plug-In Data Source" dialog box, select the Flash movie that
	  you imported into the web, and then click OK.
	
	13. In the Plug-In Properties dialog box, in the Height box, type the height of
	  your Flash movie. In the Width box, type the width of your movie, and then
	  click OK.
	
	14. On the File menu, click Preview in Browser.
	
	Notice that your Flash movie plays on the page that you preview.
	
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
	
	If you want FrontPage to check for the Flash plug-in and, if is not present, to
	go to the Macromedia.com Web site and download it, insert the following code
	between the <BODY></BODY> tags:
	
	  <SCRIPT LANGUAGE="JavaScript">
	  <!--
	
	  function checkForShockwave()
	  {
	    navigator.plugins.refresh();
	    if ( navigator.plugins["Shockwave Flash"] )
	      parent.location.reload();
	    else
	      setTimeout( "checkForShockwave()", 1000 );
	  }
	
	  var ShockMode = 0;
	  var OldVersionOfPlugin = 0;
	
	  if (navigator.mimeTypes &&
	       navigator.mimeTypes["application/x-shockwave-flash"] &&
	       navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
	  {
	    if (navigator.plugins && navigator.plugins["Shockwave Flash"])
	      ShockMode = 1;
	    else
	      OldVersionOfPlugin = 1;
	  }
	
	  if (!ShockMode &&
	       navigator.appName &&
	       navigator.appName.indexOf("Netscape") != - 1 &&
	       navigator.appVersion.indexOf("4.") != - 1 &&
	       navigator.javaEnabled() &&
	       netscape.softupdate.Trigger.UpdateEnabled() &&
	       document.cookie.indexOf("StartedShockwaveInstall") == -1)
	  {
	     var jarPath = new String("");
	
	     if (navigator.platform.indexOf("Win32") >= 0 )
	        jarPath = "http://download.macromedia.com/pub/shockwave/jars/english/silentflash32.jar"
	     else if (navigator.platform.indexOf("Win16") >= 0 )
	        jarPath = "http://download.macromedia.com/pub/shockwave/jars/english/silentflash16.jar"
	     else if (navigator.platform.indexOf("MacPPC") >= 0 )
	        jarPath = "http://download.macromedia.com/pub/shockwave/jars/english/silentflashppc.jar"
	
	  if (jarPath.length)
	
	    {
	      netscape.softupdate.Trigger.StartSoftwareUpdate (jarPath, netscape.softupdate.Trigger.FORCE_MODE);
	      document.cookie='StartedShockwaveInstall;path=/;'
	      setTimeout("checkForShockwave()", 1000);
	    }
	  }
	
	  //-->
	  </SCRIPT>
	
	For more information about plug-ins, click Microsoft FrontPage Help on the Help
	menu, type "plug-in" (without the quotation marks) in the Office Assistant or
	the Answer Wizard, and then click Search to view the topics returned.
	
	For more information about inserting a video, click Microsoft FrontPage Help on
	the Help menu, type "insert a video" (without the quotation marks) in the Office
	Assistant or the Answer Wizard, and then click Search to view the topics
	returned.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: ocsso front page fp2002 fp2000
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
