---
layout: page
title: "Q143092: FP: How to Create a Registration Web"
permalink: kb/143/Q143092/
---

## Q143092: FP: How to Create a Registration Web

	Article: Q143092
	Product(s): Word Front Page
	Version(s): 1.0,1.1
	Operating System(s): 
	Keyword(s): kbusage kbdta
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FrontPage 97 for Windows 
	- Microsoft FrontPage for Windows, versions 1.0, 1.1 
	- Microsoft FrontPage for the Macintosh, version 1.0 
	-------------------------------------------------------------------------------
	
	For a Microsoft FrontPage 98 version of this article, see Q194156.
	
	SUMMARY
	=======
	
	This article describes how to create a registration Web page. A registration Web
	page requires user registration and authorization. It allows you to restrict or
	monitor access to your Web pages.
	
	MORE INFORMATION
	================
	
	To allow a registered user access to your Web, you can set up a registration
	form in the <Root Web> and create a protected Web. The <Root Web> is
	created automatically when you install the FrontPage Server Extensions on your
	server. The <Root Web> acts as a gatekeeper to the protected Web because
	it forces users to register before they access your Web. The protected Web
	allows only registered users to access it.
	
	You can set up a registration form on the <Root Web> only; you cannot set
	one up on another Web.
	
	NOTE: Windows NT security, Microsoft Internet Information Server (IIS) and
	Microsoft Personal Web Server do not allow registration through a Web browser.
	For more information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q155770 FP: Registration Form not Supported on IIS Web Server
	
	Creating the Registration Form
	------------------------------
	
	1. Start the FrontPage Personal Web Server.
	
	2. Start FrontPage Explorer.
	
	3. On the File menu, click Open Web.
	
	4. Select the Web server where you want to have the registration Web, and then
	  click List Webs.
	
	5. From the Webs box, select <Root Web>, and then click OK.
	
	6. Type your name and password and click OK. The FrontPage Explorer opens the
	  <Root Web>.
	
	7. Right-click the home page (or any other page that you want to use to restrict
	  access), and then click Open on the menu that appears.
	
	8. Position the insertion point where you want to place the first registration
	  form field. On the Insert menu, point to Form Field, and click One-Line Text
	  Box.
	
	9. In the Name box, type the name you want and click OK. NOTE: The name you type
	  in the Name box is required. You will use it when you define the properties
	  for the form. Note the case of your text.
	
	10. Position the insertion point within the dashed boundary of the form to
	  insert a form field for the password. On the Insert menu, point to Form
	  Field, and click One-Line Text Box.
	
	11. In the Name box, type the name you want. Clik Yes next to the Password Field
	  option and click OK. NOTE: The name you type in the Name box must be
	  different from the name you used in step 9. This box is required and you
	  will use it when you fill in the form properties.
	
	12. If you want to add a second field for password confirmation, repeat steps 10
	  and 11.
	
	13. With the insertion point inside the dashed boundary of the form, add two
	  push button fields. To add the push button fields, point to Form Field on
	  the Insert menu, and then click Push Button. One button will allow the
	  submitter to submit the form; the other button will allow the submitter to
	  reset or clear the fields after the form is submitted. Use these properties
	  for the first button: a. In the Name box, type the name you want. b. In the
	  Value/Label box, type the label you want. For example, type "Submit"
	  (without the quotation marks). c. Next to Button Type, select Submit, and
	  then click OK. Use these properties for the second button: a. In the Name
	  box, type the name you want. b. In the Value/Label box, type the label you
	  want. For example, type "Reset" (without the quotation marks). c. Next to
	  Button Type, select Reset, and then click OK.
	
	You must now define the properties of the form. The most important property is
	the form handler. A form handler is a program that processes the form on the
	server. The form handler is called by the server when the form is submitted.
	FrontPage has Form components (form handlers) for most common types of forms.
	
	To Configure the Registration Form
	----------------------------------
	
	1. Right-click inside the dashed boundary of the form and then click Properties
	  on the menu that appears.
	
	2. In the Text Box Properties dialog box, click Form. The Form Properties dialog
	  box appears.
	
	3. From the Form Handler list, select Registration bot, and then click Settings.
	
	4. Click the Registration tab. In the Web Name box, type the name of the
	  protected Web. You can specify either an existing Web or a new Web.
	
	5. In the User Name Fields box, type the name you specified in step 9 in the "To
	  create the registration form" section of this article. NOTE: The name you use
	  must exactly match the name you entered in the Text Box Properties dialog
	  box. This field is case sensitive.
	
	6. In the Password Field box, type the name you specified for the password field
	  in step 11 of the "To create a registration form" section of this article.
	  NOTE: The name you use must exactly match the name you entered in the Text
	  Box Properties dialog box. This field is case sensitive.
	
	7. In the Password Confirmation Field box, type the name you specified in Step
	  12 of the "To create a registration form" section of this article. NOTE: The
	  name you use must exactly match the name you entered in the Text Box
	  Properties dialog box in Step 12. This field is case sensitive.
	
	8. If you want to use a secure password--one that has six or more characters and
	  does not match the user name--select the Require Secure Password option.
	
	9. Click the Results tab. In the File For Results box, type the name of the file
	  that will contain the list of authorized users of the protected Web. Select a
	  file format and specify any additional information you want to have included
	  in the results file. Click OK to return to the Form Properties dialog box.
	
	10. Click OK two times.
	
	11. Add labels to identify the form fields and add any other pertinent
	  information to your form.
	
	12. Save and close the page. NOTE: It's a good idea to close the page at this
	  point; if you save the page during the next procedure, for example after
	  step 2 in the "To create a protected Web" section of this article, you may
	  accidentally save the Registration form to a Web other than the root Web. In
	  step 2 in the "To create a protected Web" section of this article, you open
	  another Web; that is, the root Web is no longer open. So, if the form is
	  open and you attempt to save it, the FrontPage Editor will prompt you to
	  save it to the current Web. If you do, the Registration component will not
	  function. It will only function if it is saved to the root Web.
	
	To Create a Protected Web
	-------------------------
	
	1. Switch to FrontPage Explorer.
	
	2. If you created a new Web in step 3, click New Web on the File menu. If you
	  specified an existing Web in step 3, click Open Web on the File menu, and
	  then skip to step 4.
	
	3. Select the template you want to use and click OK.
	
	4. Select the Web server, type the Web name you used in step 3 of the "To
	  configure the registration form using the WebBot Registration form handler"
	  section of this article, and then click OK. If you a have not already entered
	  your name and password, enter that information in the Name And Password
	  Required dialog box, and then click OK.
	
	5. On the Tools menu, click Permissions, and then click the Settings tab.
	
	6. Select the Use Unique Permissions for this Web option, and then click the
	  Apply button.
	
	7. Click the End Users tab. Click the "Yes, Registered Users Only" option, and
	  then click the Apply button. NOTE: If this option is already selected, you
	  must select it again.
	
	8. Click OK.
	
	Additional query words: 1.00a front page vermeer
	
	======================================================================
	Keywords          : kbusage kbdta 
	Technology        : kbHWMAC kbOSMAC kbFrontPageSearch kbZNotKeyword8 kbFrontPage97 kbZNotKeyword kbZNotKeyword2 kbFrontPage1xSearch kbFrontPage97Search kbFrontPageMac kbZNotKeyword3 kbFrontPage100 kbFrontPage110
	Version           : :1.0,1.1
	Hardware          : MAC x86
	Issue type        : kbhowto
	
	=============================================================================
	
