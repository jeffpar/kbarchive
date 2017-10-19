---
layout: page
title: "Q277477: FP: Sample DHTML to Compare Two Passwords"
permalink: /kb/277/Q277477/
---

## Q277477: FP: Sample DHTML to Compare Two Passwords

	Article: Q277477
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
	
	In Microsoft FrontPage, when you use the HTML password text box to input data on
	a form, the text is not displayed to the browser. For example, in Microsoft
	Internet Explorer, asterisks appear in place of each character that you type.
	This can make it impossible to verify if the information entered is correct.
	
	In addition, in FrontPage, the built-in form validation does not allow you to
	compare two text boxes to allow you to enter the same password twice to confirm
	a match.
	
	You can use Dynamic HTML (DHTML) to compare the information typed in two password
	text boxes before you submit a form. This article provides sample DHTML code
	that checks the values in two password fields, displays a message box if the
	fields do not match, and prevents you from submitting the form results if they
	don't match.
	
	NOTE: This article includes custom DHTML that may not be available in all
	browsers. For more information about compatibility with other browsers, click
	Microsoft FrontPage Help on the Help menu, type "compatibility" (without the
	quotation marks) in the Office Assistant or the Answer Wizard, and then click
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
	
	1. In FrontPage, open a Web on a Web server.
	
	2. Open a new page.
	
	3. Switch to HTML view and remove all the existing HTML.
	
	4. Type the following HTML code:
	
	  <html>
	  <head>
	  <title>Password Test</title>
	  <script language="javascript">
	  <!--
	  function checkMe()
	  {
	    if (document.myForm.PWD1.value == document.myForm.PWD2.value)
	    {
	      document.myForm.PWD.value=document.myForm.PWD1.value;
	      document.myForm.submit();
	    }
	    else
	      alert("Passwords do not match!");
	  }
	  //-->
	  </script>
	  </head>
	
	  <body>
	
	  <p>Please enter your user name and password.</p>
	
	  <form method="POST" name="myForm">
	    <input type="hidden" name="PWD">
	    <table border="1">
	      <tr>
	        <td>Name</td>
	        <td><input type="text" name="UID" size="20"></td>
	      </tr>
	      <tr>
	        <td>Password</td>
	        <td><input type="password" name="PWD1" size="20"></td>
	      </tr>
	      <tr>
	        <td>Repeat Password</td>
	        <td><input type="password" name="PWD2" size="20"></td>
	      </tr>
	      <tr>
	        <td colspan="2" align="center">
	          <input type="button" onClick="checkMe()" value="Submit">
	          <input type="reset" value="Reset">
	        </td>
	      </tr>
	    </table>
	  </form>
	  </body>
	  </html>
	
	5. Switch back to Normal View.
	
	  You should see a form with three text boxes.
	
	6. Right-click the form and then click Form Properties on the menu that appears.
	
	7. In the Form Properties dialog box, click Send to, and then click Options.
	
	8. Click the File Results tab. In the File Name box, type "_private/results.htm"
	  (without the quotation marks).
	
	9. Click the Saved Fields tab. In the Form fields to save box, type "UID"
	  (without the quotation marks) and "PWD" (without the quotation marks). Click
	  OK.
	
	10. Click OK again to quit the Form Properties dialog box.
	
	11. Save the page to your Web and preview it in your Web browser.
	
	Additional query words: front page
	
	======================================================================
	Keywords          : kbdta 
	Technology        : kbFrontPageSearch kbFrontPage2002 kbFrontPage2000Search kbFrontPage2002Search kbZNotKeyword5
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
