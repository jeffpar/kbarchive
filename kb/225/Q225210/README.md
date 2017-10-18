---
layout: page
title: "Q225210: PRB: Outlook Form Code Not Added When Using HTML Form Converter"
permalink: kb/225/Q225210/
---

## Q225210: PRB: Outlook Form Code Not Added When Using HTML Form Converter

	Article: Q225210
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:1.2,1.21,5.5
	Operating System(s): 
	Keyword(s): kbCDO120 kbCDO121 kbMsg kbGrpDSMsg kbDSupport
	Last Modified: 22-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Collaboration Data Objects (CDO), versions 1.2, 1.21 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you convert a Microsoft Outlook form to a Hypertext Markup Language (HTML)
	form using the HTML Form Converter, any code that was linked to buttons on the
	original Microsoft Outlook form will not be placed onto the converted active
	server pages (ASP) page for the HTML form. The code that was in the previous
	Microsoft Outlook form will be placed in the file Script.txt located in the same
	directory as the newly created ASP files.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how to add code to a button that was created on
	the original Microsoft Outlook form:
	
	1. Create a Microsoft Outlook form that has one command button on the form with
	  the name of "cmdDisplay". Use the HTML forms converter to change the form to
	  a HTML form.
	
	2. Go to the respective directory that the form is created in, as follows:
	
	  Drive\(Exchange Server Directory)\WEBDATA\USA\FORMS\IPM\NOTE\(Form Name)
	
	  Here is an example of the path that would be used:
	
	  C:\Exchsrvr\WebData\USA\FORMS\IPM\NOTE\Equipment_20Request
	
	  Where the actual name of the Microsoft Outlook form is Equipment Request.
	
	3. Open the ASP file that displays the main form. Search for the name of the
	  button that is being modified. In the following example:
	  cmdDisplay_46_0_g is the converted name for the cmdDisplay button on the
	  original Microsoft Outlook form.
	
	  The prior listed item pertains to a control. The name of the control is in the
	  form named "a_b_c_d"
	
	  Where:
		a = control's Outlook name
		b, c, d = other info necessary to guarantee uniqueness
	
	  <!-- UniqueID=cmdDisplay_46_0_g Property= PropertyType= PropertyFormat= -->
	  <input type='button' name='cmdDisplay_46_0_g' value="Display"_
	      style='width:120;height:32;font-face:Tahoma;font-size:8;color:000000;
	  background:c0c0c0;text-decoration:;' OnClick="rtn=push_me()">
	
	  This is the same name that appears in the ToDo.txt.
	
	4. Create a new function called "push_me()" or whatever the name is in the
	  OnClick= statement for the HTML button. The function can be added at the
	  beginning of the current ASP that the generated HTML resides in.
	
	5. Cut and paste the respective code from the ToDo.txt file that corresponds to
	  this button. There are a few things that you need to be aware of when adding
	  this code:
	   - This is client-side script, so to keep cross-browser compatiblity, you
	     should use Javascript.
	
	   - The script is also running in an ASP, so you may not have the Microsoft
	     Outlook client installed, so you should rewrite any code that uses the
	     Microsoft Outlook Object Model to use CDO instead.
	
	  For example, the following code corresponds to the prior HTML button and
	  launches a msgbox upon execution (This code was placed at the begining of the
	  HTML section of the ASP):
	
	     <SCRIPT LANGUAGE="JavaScript">
	     var rtn=false
	     function push_me()
	     {
	  	var msg1="This is a sample message from the HTML form."
	  	alert(msg1)
	  	return true
	     }
	     </SCRIPT>
	
	6. Save the ASP file and launch the form using your browser. The button on the
	  form should display a message box.
	
	REFERENCES
	==========
	
	For additional information on the HTML forms converter query on the following
	keywords in MSDN or the Knowledge Base:
	
	  forms converter
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCDO120 kbCDO121 kbMsg kbGrpDSMsg kbDSupport 
	Technology        : kbOutlookSearch kbAudDeveloper kbCDOsearch kbExchangeSearch kbOWASearch kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbCDO120 kbCDO121
	Version           : WINDOWS:1.2,1.21,5.5
	Issue type        : kbprb
	
	=============================================================================
	
