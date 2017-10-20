---
layout: page
title: "Q183049: FP98: Save Results Form Handler and Four-Digit Year Format"
permalink: /kb/183/Q183049/
---

## Q183049: FP98: Save Results Form Handler and Four-Digit Year Format

{% raw %}

	Article: Q183049
	Product(s): Word Front Page
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbYear2000
	Last Modified: 13-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 98 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Save Results Form Handler allows you to specify whether to save Time or Date
	information along with each submitted form record. If you save this Date
	information, the date will be formatted in M/D/YY format. However, you can
	instruct FrontPage to output dates in the M/D/YYYY format. This article
	describes two methods you can use to format your dates in the M/D/YYYY format.
	
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
	
	Method 1: Using Active Server Pages (requires IIS or MSPWS)
	-----------------------------------------------------------
	
	If you are using Microsoft Internet Information Server (IIS) or Microsoft
	Personal Web Server (with the ASP patch installed), you can use Active Server
	Pages (ASP) to save the server's date as a part of the Save Results Form
	Handler. To do this, follow these steps:
	
	1. In FrontPage Editor, open the page that contains the Save Results Form
	  Handler.
	
	2. Place the cursor above the form.
	
	3. On the Insert menu, click FrontPage Component.
	
	4. In the Select A Component list in the Insert FrontPage Component dialog box,
	  click Insert HTML, and then click OK.
	
	5. Type the following ASP script in the HTML Markup dialog box:
	
	  " <% FullDate = Month(date) & "/" & Day(date) & "/" &
	  Year(date)
	  ' FullDate is the combination of the exact Month, Day and Year.
	  ' It will be used to assign the value of the hidden field. %>" (without the
	  quotation marks)
	
	  and click OK.
	
	6. Create a hidden field by following these steps:
	
	  a. Right-click the form and then click Form Properties on the menu that
	     appears.
	
	  b. Click Advanced.
	
	  c. Click Add.
	
	  d. In the Name box, type "DateStamp" (without the quotation marks).
	
	  e. In the Value box, type "<%=FullDate%>" (without the quotation
	     marks).
	
	  f. Click OK three times.
	
	7. Save the page as <filename>.asp where <filename> is the name you
	  want to assign to your page.
	
	For additional information about Active Server Pages, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q174008 FP98: What are Active Server Pages?
	
	  Q174015 FP98: How to Create Active Server Pages in FrontPage 98
	
	Method 2: Using JavaScript (does not require IIS)
	-------------------------------------------------
	
	If you are not using Microsoft Internet Information Server or Microsoft Personal
	Web Server, you can use the following client-side JavaScript.
	
	NOTE: This script returns the date of the client browser, rather than the date of
	the server.
	
	1. In FrontPage Editor, open the page that contains the Save Results Form
	  Handler.
	
	2. Place the cursor above the form.
	
	3. On the Insert menu, point to Advanced, and then click Script.
	
	4. Click to select the JavaScript check box.
	
	5. In the Script dialog box, type the following code:
	
	        // Give the function a name so the onSubmit event for the submit
	        // button can call it.
	        function FullYear () {
	        // Create a variable called ddate that will contain the current
	        // date on the client system.
	        var ddate= new Date();
	        // Create a variable called year that will contain the current
	        // year on the client system. Note that the JavaScript getYear method
	        // will return values 0 through 99 for years 1900 through 1999, but
	        // it will return 2000 or higher for years above 2000.
	        var year=ddate.getFullYear()
	        // Analyze the current year, and if it is less than 100 (year 2000),
	        // then add 1900 to it.      
	        if (year > 100) {year = (year + 1900)}
	        // Specify that the return value of the function FullYear shall be a
	        // text string in the form of m/d/yyyy. The month portion is the
	        // result of the getMonth method that returns 0 for January and 11
	        // for December. Add one to that value for the common representation
	        //of a month. The date portion is the result of the getDate method,
	        // and the year portion is the result of the calculation within the
	        // if condition in the line above.
	        return ((ddate.getMonth() + 1)+ "/" + ddate.getDate()+ "/" + year);
	        }
	
	6. Click the HTML tab at the bottom of the FrontPage window.
	
	7. Add the onClick event to the Submit button code. To do this, follow these
	  steps:
	
	  a. Find the HTML code that looks like this:
	
	  <input type="submit" value="Submit" name="B1">
	
	  b. Add the following code after name="B1" but before the > sign:
	
	  onClick="DateStamp.value=FullYear()"
	
	     The HTML code should look similar to the following:
	
	  <input type="submit" value="Submit" name="B1"
	  onClick="DateStamp.value=FullYear()">
	
	  c. Add a hidden field named "DateStamp" to the form by typing the following
	     HTML code right after the tag in the previous step:
	
	  <input type="hidden" name="DateStamp">
	
	REFERENCES
	==========
	
	For more information about JavaScript, please see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/scripting/jscript
	
	For more information about writing HTML, please see the following Microsoft Web
	site:
	
	  http://www.microsoft.com/workshop/author/newhtml/default.htm
	
	Additional query words: y2k fpscript 98 asp
	
	======================================================================
	Keywords          : kbdta kbYear2000 
	Technology        : kbFrontPageSearch _IKkbZNotKeyword4 kbFrontPage98Search kbZNotKeyword3
	Version           : :
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
